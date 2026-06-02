package com.cetelem.homebanking.ui.onboarding.mapper // Asegúrate de que coincida con tu package real

import android.content.Context
import androidx.core.text.HtmlCompat
// Importa tus clases de negocio y UI aquí (OnboardingData, OnboardingUI, etc.)

object OnboardingStepMapper {

    fun mapFrom(context: Context, item: OnboardingData, step: OnboardingStep): OnboardingUI? {
        // ... (Aquí va el resto de tu lógica interna de mapFrom que ya tenías)
        return null // O lo que devuelva tu else -> null original
    }

    private fun messagesForStepGreetingAccounts(
        context: Context, 
        item: OnboardingData, 
        step: OnboardingStep
    ): OnboardingUI {
        return OnboardingUI(
            title = getTitle(item),
            description = getTitleDescription(item, step = step),
            list = listOf(
                // 1. Saludo inicial usando el recurso R.string.onboarding_greetings
                StandardOnboardingMessage(
                    message = HtmlCompat.fromHtml(
                        context.getString(R.string.onboarding_greetings, (item as OnboardingClient).clientData.fullName()), 
                        HtmlCompat.FROM_HTML_MODE_LEGACY
                    )
                ),
                // 2. Mensaje de advertencia con el enlace de Cuentas
                ContinueOnboardingMessage(
                    message = HtmlCompat.fromHtml(
                        context.getString(R.string.onboarding_before_starting, item.clientData.nif),
                        HtmlCompat.FROM_HTML_MODE_LEGACY
                    ),
                    button = "Confirmar"
                ),
                CetelemMessageUI()
            )
        )
    }

    private fun messagesForStepGreetingDeposit(
        context: Context, 
        item: OnboardingData, 
        step: OnboardingStep
    ): OnboardingUI {
        return OnboardingUI(
            title = getTitle(item),
            description = getTitleDescription(item, step = step),
            list = listOf(
                // 1. Primer mensaje del depósito con el nombre del cliente
                StandardOnboardingMessage(
                    message = HtmlCompat.fromHtml(
                        context.getString(R.string.onboarding_deposit_step_1_msg_1, (item as OnboardingClient).clientData.fullName()),
                        HtmlCompat.FROM_HTML_MODE_LEGACY
                    )
                ),
                // 2. Mensaje de advertencia con el enlace de Depósitos
                ContinueOnboardingMessage(
                    message = HtmlCompat.fromHtml(
                        context.getString(R.string.onboarding_before_starting_deposit, item.clientData.nif),
                        HtmlCompat.FROM_HTML_MODE_LEGACY
                    ),
                    button = context.getString(R.string.onboarding_continue)
                ),
                CetelemMessageUI()
            )
        )
    }
}