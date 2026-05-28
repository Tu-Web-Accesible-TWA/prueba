private fun setupAccessibility() {
    val textoAccesibilidad = getString(R.string.accessibility_acc_monthly_nets)

    // Configuración para el campo de Ingresos
    viewBinding.edittextIncome.accessibilityDelegate = object : android.view.View.AccessibilityDelegate() {
        override fun onInitializeAccessibilityNodeInfo(
            host: android.view.View,
            info: android.view.accessibility.AccessibilityNodeInfo
        ) {
            super.onInitializeAccessibilityNodeInfo(host, info)
            // Esto fuerza a TalkBack a leer la frase completa
            info.hintText = textoAccesibilidad
        }
    }

    // Configuración para el campo de Gastos
    viewBinding.edittextExpenses.accessibilityDelegate = object : android.view.View.AccessibilityDelegate() {
        override fun onInitializeAccessibilityNodeInfo(
            host: android.view.View,
            info: android.view.accessibility.AccessibilityNodeInfo
        ) {
            super.onInitializeAccessibilityNodeInfo(host, info)
            // Esto fuerza a TalkBack a leer la frase completa
            info.hintText = textoAccesibilidad
        }
    }
}