private fun setupAccessibility() {

    // 1. CONFIGURACIÓN PARA EL CAMPO DE INGRESOS
    viewBinding.inputlayoutincome.accessibilityDelegate = object : android.view.View.AccessibilityDelegate() {
        override fun onInitializeAccessibilityNodeInfo(
            host: android.view.View,
            info: android.view.accessibility.AccessibilityNodeInfo
        ) {
            super.onInitializeAccessibilityNodeInfo(host, info)
            
            // Forzamos el texto exacto e ignoramos el hint original para que no se mezclen
            info.contentDescription = "Ingresos netos mensuales"
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
                info.hintText = null
            }
        }
    }

    // 2. CONFIGURACIÓN PARA EL CAMPO DE GASTOS
    viewBinding.inputlayoutexpenses.accessibilityDelegate = object : android.view.View.AccessibilityDelegate() {
        override fun onInitializeAccessibilityNodeInfo(
            host: android.view.View,
            info: android.view.accessibility.AccessibilityNodeInfo
        ) {
            super.onInitializeAccessibilityNodeInfo(host, info)
            
            // Forzamos el texto exacto de gastos e ignoramos el hint original
            info.contentDescription = "Gastos netos mensuales"
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
                info.hintText = null
            }
        }
    }
}