private fun setupAccessibility() {
    val textoAccesibilidad = getString(R.string.accessibility_acc_monthly_nets)

    // Configuración para el campo de Ingresos
    viewBinding.edittextIncome.accessibilityDelegate = object : android.view.View.AccessibilityDelegate() {
        override fun onInitializeAccessibilityNodeInfo(
            host: android.view.View,
            info: android.view.accessibility.AccessibilityNodeInfo
        ) {
            super.onInitializeAccessibilityNodeInfo(host, info)
            
            // Controlamos el nivel de API para evitar el error de compilación
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
                // Dispositivos modernos (Android 8.0+)
                info.hintText = textoAccesibilidad
            } else {
                // Dispositivos antiguos (Android 7.0 y 7.1)
                info.contentDescription = "Ingresos $textoAccesibilidad"
            }
        }
    }

    // Configuración para el campo de Gastos
    viewBinding.edittextExpenses.accessibilityDelegate = object : android.view.View.AccessibilityDelegate() {
        override fun onInitializeAccessibilityNodeInfo(
            host: android.view.View,
            info: android.view.accessibility.AccessibilityNodeInfo
        ) {
            super.onInitializeAccessibilityNodeInfo(host, info)
            
            // Controlamos el nivel de API para evitar el error de compilación
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
                // Dispositivos modernos (Android 8.0+)
                info.hintText = textoAccesibilidad
            } else {
                // Dispositivos antiguos (Android 7.0 y 7.1)
                info.contentDescription = "Gastos $textoAccesibilidad"
            }
        }
    }
}