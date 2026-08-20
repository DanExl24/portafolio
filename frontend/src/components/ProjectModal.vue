<template>
  <Teleport to="body">
    <div 
      v-if="isOpen && project" 
      class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
      @keydown.esc="closeModal"
    >
      <!-- Backdrop with blur -->
      <div 
        class="fixed inset-0 bg-bg-main/85 backdrop-blur-sm transition-opacity"
        @click="closeModal"
      ></div>

      <!-- Modal Card Box: Flex Column with restricted viewport height -->
      <div 
        class="relative w-full max-w-3xl max-h-[90vh] md:max-h-[85vh] flex flex-col rounded-2xl bg-bg-surface border border-brand/60 shadow-2xl p-5 sm:p-7 text-left z-10 overflow-hidden animate-scaleIn"
      >
        <!-- Modal Header (Fixed at top) -->
        <div class="flex-shrink-0 flex items-start justify-between gap-4 pb-4 border-b border-brand/40">
          <div class="flex items-center gap-3.5">
            <ProjectIcon :project-id="project.id" container-class="w-12 h-12" />
            <div>
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-bg-main text-accent-teal-light font-mono text-xs font-semibold mb-1 border border-brand/40">
                PROYECTO SELECCIONADO
              </div>
              <h2 class="text-2xl sm:text-3xl font-display font-bold text-content-main">
                {{ project.title }}
              </h2>
            </div>
          </div>

          <button 
            @click="closeModal"
            class="p-2 rounded-lg text-content-muted hover:text-content-main hover:bg-bg-main border border-transparent hover:border-brand/40 transition-colors"
            aria-label="Cerrar modal"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Modal Body Scrollable (Takes remaining height and scrolls internally) -->
        <div class="flex-1 min-h-0 overflow-y-auto my-4 pr-1.5 space-y-6">
          
          <!-- Full Description -->
          <div>
            <h4 class="text-xs font-mono uppercase tracking-wider text-content-subtle mb-2">
              Descripción General
            </h4>
            <p class="text-sm sm:text-base text-content-muted leading-relaxed">
              {{ project.fullDescription }}
            </p>
          </div>

          <!-- Architecture Breakdown (Frontend, Backend, DB, etc.) -->
          <div>
            <h4 class="text-xs font-mono uppercase tracking-wider text-content-subtle mb-3">
              Arquitectura & Stack Técnico Detallado
            </h4>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              
              <!-- Frontend -->
              <div v-if="project.architecture.frontend" class="p-4 rounded-xl bg-bg-main/90 border border-brand/30">
                <div class="flex items-center gap-2 text-accent-teal-light font-mono text-xs font-bold mb-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>FRONTEND</span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  <span 
                    v-for="item in project.architecture.frontend" 
                    :key="item"
                    class="text-xs font-mono px-2 py-0.5 rounded bg-bg-surface text-content-main border border-brand/30"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>

              <!-- Backend -->
              <div v-if="project.architecture.backend" class="p-4 rounded-xl bg-bg-main/90 border border-brand/30">
                <div class="flex items-center gap-2 text-accent-teal-light font-mono text-xs font-bold mb-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                  </svg>
                  <span>BACKEND</span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  <span 
                    v-for="item in project.architecture.backend" 
                    :key="item"
                    class="text-xs font-mono px-2 py-0.5 rounded bg-bg-surface text-content-main border border-brand/30"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>

              <!-- Base de Datos -->
              <div v-if="project.architecture.database" class="p-4 rounded-xl bg-bg-main/90 border border-brand/30">
                <div class="flex items-center gap-2 text-accent-teal-light font-mono text-xs font-bold mb-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7z" />
                  </svg>
                  <span>BASE DE DATOS</span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  <span 
                    v-for="item in project.architecture.database" 
                    :key="item"
                    class="text-xs font-mono px-2 py-0.5 rounded bg-bg-surface text-content-main border border-brand/30"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>

              <!-- Testing & QA -->
              <div v-if="project.architecture.testing" class="p-4 rounded-xl bg-bg-main/90 border border-brand/30">
                <div class="flex items-center gap-2 text-accent-teal-light font-mono text-xs font-bold mb-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>TESTING / QA</span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  <span 
                    v-for="item in project.architecture.testing" 
                    :key="item"
                    class="text-xs font-mono px-2 py-0.5 rounded bg-bg-surface text-content-main border border-brand/30"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>

              <!-- Procesamiento de Datos (OpenPyXL / Excel) -->
              <div v-if="project.architecture.dataProcessing" class="p-4 rounded-xl bg-bg-main/90 border border-brand/30 md:col-span-2">
                <div class="flex items-center gap-2 text-accent-teal-light font-mono text-xs font-bold mb-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span>PROCESAMIENTO DE DATOS</span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  <span 
                    v-for="item in project.architecture.dataProcessing" 
                    :key="item"
                    class="text-xs font-mono px-2 py-0.5 rounded bg-bg-surface text-content-main border border-brand/30"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>

              <!-- Integraciones -->
              <div v-if="project.architecture.integrations" class="p-4 rounded-xl bg-bg-main/90 border border-brand/30 md:col-span-2">
                <div class="flex items-center gap-2 text-accent-teal-light font-mono text-xs font-bold mb-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                  </svg>
                  <span>INTEGRACIONES & DEPLOY</span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  <span 
                    v-for="item in project.architecture.integrations" 
                    :key="item"
                    class="text-xs font-mono px-2 py-0.5 rounded bg-bg-surface text-content-main border border-brand/30"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>

            </div>
          </div>

          <!-- Key Highlights -->
          <div>
            <h4 class="text-xs font-mono uppercase tracking-wider text-content-subtle mb-3">
              Aspectos Destacados de Implementación
            </h4>
            <ul class="space-y-2">
              <li 
                v-for="(hl, idx) in project.highlights" 
                :key="idx"
                class="flex items-start gap-2.5 text-sm text-content-muted"
              >
                <span class="text-accent-teal-light font-mono font-bold">✓</span>
                <span>{{ hl }}</span>
              </li>
            </ul>
          </div>

        </div>

        <!-- Modal Footer Actions (Fixed at bottom) -->
        <div class="flex-shrink-0 pt-4 border-t border-brand/30 flex flex-wrap items-center justify-between gap-3">
          <div class="flex flex-wrap items-center gap-3">
            <!-- Live Web Link Button if available -->
            <a 
              v-if="project.liveUrl" 
              :href="project.liveUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-accent-teal hover:bg-accent-teal-light text-white shadow-sm transition-all"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Visitar Proyecto en Vivo</span>
            </a>

            <!-- GitHub Code Button -->
            <a 
              :href="project.githubUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-accent-warm hover:bg-accent-warm-hover text-content-main shadow-btn-warm transition-all"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>Ver Código en GitHub</span>
            </a>
          </div>

          <button 
            @click="closeModal"
            class="px-4 py-2 rounded-lg text-sm font-medium bg-bg-main hover:bg-bg-subtle text-content-muted hover:text-content-main border border-brand/40 transition-colors"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import type { ProjectDetail } from '../types/portfolio'
import ProjectIcon from './ProjectIcon.vue'

const props = defineProps<{
  isOpen: boolean
  project: ProjectDetail | null
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const closeModal = () => {
  emit('close')
}

// Bloquear scroll de la página de fondo cuando el modal esté activo
watch(() => props.isOpen, (newVal) => {
  if (typeof document !== 'undefined') {
    if (newVal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})
</script>

<style scoped>
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.96) translateY(8px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.animate-scaleIn {
  animation: scaleIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>

