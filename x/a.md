import android.content.Context
import android.text.SpannableStringBuilder
import android.text.Spanned
import android.text.style.URLSpan
import android.view.accessibility.AccessibilityNodeInfo
import androidx.core.text.HtmlCompat

// 1. Creamos el atajo para el Contexto
fun Context.getAccessibleHtml(resId: Int, ttsText: String, vararg formatArgs: Any): CharSequence {
    // Saca la string del XML con los argumentos (NIF, nombre, etc.)
    val rawText = this.getString(resId, *formatArgs)
    val htmlSpanned = HtmlCompat.fromHtml(rawText, HtmlCompat.FROM_HTML_MODE_LEGACY)
    val spannable = SpannableStringBuilder(htmlSpanned)
    
    // Busca el enlace <a> y le inyecta el texto para TalkBack de forma automática
    val urlSpans = spannable.getSpans(0, spannable.length, URLSpan::class.java)
    for (span in urlSpans) {
        val start = spannable.getSpanStart(span)
        val end = spannable.getSpanEnd(span)
        
        val nuevoSpan = object : URLSpan(span.url) {
            override fun onInitializeAccessibilityNodeInfo(info: AccessibilityNodeInfo) {
                super.onInitializeAccessibilityNodeInfo(info)
                info.text = ttsText // Aquí se mete el texto por huevos
            }
        }
        spannable.removeSpan(span)
        spannable.setSpan(nuevoSpan, start, end, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE)
    }
    return spannable
}