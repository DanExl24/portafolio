<template>
  <section id="contacto" class="py-20 bg-bg-main relative overflow-hidden">
    <!-- Ambient background glow -->
    <div class="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Minimalist Contact Card -->
      <div class="rounded-3xl bg-bg-surface border border-brand/50 p-8 sm:p-12 shadow-2xl text-center space-y-8">
        
        <!-- Header -->
        <div class="space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-main text-accent-teal-light font-mono text-xs font-semibold border border-brand/40">
            // HABLEMOS
          </div>
          <h2 class="text-3xl sm:text-4xl font-display font-extrabold text-content-main tracking-tight">
            ¿Tienes un proyecto o vacante en mente?
          </h2>
          <p class="text-base text-content-muted max-w-xl mx-auto">
            Disponible para colaborar en desarrollo de software, construcción de APIs, optimización de sistemas y automatizaciones.
          </p>
        </div>

        <!-- Interactive Contact Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          
          <!-- Email with One-Click Copy -->
          <div class="sm:col-span-1 rounded-xl bg-bg-main border border-brand/40 p-5 flex flex-col items-center justify-between text-center group hover:border-accent-teal/60 transition-all">
            <div class="w-10 h-10 rounded-lg bg-bg-surface flex items-center justify-center text-accent-teal-light mb-3 border border-brand/30">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="space-y-1 mb-4">
              <span class="text-xs font-mono text-content-subtle block">Correo Electrónico</span>
              <span class="text-xs font-mono text-content-main truncate max-w-[180px] block" title="danexl24@gmail.com">
                alejopmotta@gmail.com
              </span>
            </div>
            <button 
              @click="copyEmail"
              type="button"
              class="w-full py-2 px-3 rounded-lg text-xs font-mono font-medium bg-brand/30 hover:bg-brand/60 text-content-main border border-brand/50 hover:border-accent-teal transition-all flex items-center justify-center gap-1.5"
            >
              <svg v-if="!copied" class="w-3.5 h-3.5 text-accent-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <svg v-else class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{{ copied ? '¡Copiado!' : 'Copiar correo' }}</span>
            </button>
          </div>

          <!-- GitHub Profile -->
          <div class="sm:col-span-1 rounded-xl bg-bg-main border border-brand/40 p-5 flex flex-col items-center justify-between text-center group hover:border-accent-teal/60 transition-all">
            <div class="w-10 h-10 rounded-lg bg-bg-surface flex items-center justify-center text-content-main mb-3 border border-brand/30">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </div>
            <div class="space-y-1 mb-4">
              <span class="text-xs font-mono text-content-subtle block">Repositorios & Código</span>
              <span class="text-xs font-mono text-content-main block">github.com/DanExl24</span>
            </div>
            <a 
              href="https://github.com/DanExl24" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-full py-2 px-3 rounded-lg text-xs font-mono font-medium bg-brand/30 hover:bg-brand/60 text-content-main border border-brand/50 hover:border-accent-teal transition-all flex items-center justify-center gap-1.5"
            >
              <span>Ver Perfil</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <!-- Download CV -->
          <div class="sm:col-span-1 rounded-xl bg-bg-main border border-brand/40 p-5 flex flex-col items-center justify-between text-center group hover:border-accent-teal/60 transition-all">
            <div class="w-10 h-10 rounded-lg bg-bg-surface flex items-center justify-center text-accent-warm-hover mb-3 border border-brand/30">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div class="space-y-1 mb-4">
              <span class="text-xs font-mono text-content-subtle block">Currículum Vitae</span>
              <span class="text-xs font-mono text-content-main block">PDF Actualizado</span>
            </div>
            <a 
              href="/cv/Hoja_de_vida_jorge_alejandro.pdf"
              download="Hoja_de_vida_jorge_alejandro.pdf"
              target="_blank"
              class="w-full py-2 px-3 rounded-lg text-xs font-mono font-semibold bg-accent-warm hover:bg-accent-warm-hover text-content-main shadow-btn-warm transition-all flex items-center justify-center gap-1.5"
            >
              <span>Descargar CV</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const copied = ref(false)
const emailAddress = 'alejopmotta@gmail.com'

const copyEmail = async () => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(emailAddress)
    } else {
      // Fallback para contextos sin permisos del clipboard API
      const textArea = document.createElement('textarea')
      textArea.value = emailAddress
      textArea.style.position = 'fixed'
      textArea.style.opacity = '0'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
    }
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 3000)
  } catch (err) {
    console.error('Error al copiar correo:', err)
    // Fallback de estado visual
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 3000)
  }
}
</script>
