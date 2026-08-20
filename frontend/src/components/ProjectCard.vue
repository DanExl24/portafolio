<template>
  <div 
    class="group relative flex flex-col justify-between rounded-2xl bg-bg-surface border border-brand/40 p-6 sm:p-7 shadow-card hover:border-accent-teal/60 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
  >
    <!-- Top Meta & Title -->
    <div>
      <div class="flex items-center justify-between gap-4 mb-3">
        <ProjectIcon :project-id="project.id" container-class="w-11 h-11" />
        
        <!-- Actions: Live Demo + GitHub -->
        <div class="flex items-center gap-2">
          <!-- Live Web Link -->
          <a 
            v-if="project.liveUrl"
            :href="project.liveUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-2 rounded-lg bg-accent-teal/20 hover:bg-accent-teal/40 border border-accent-teal/50 text-accent-teal-light hover:text-white transition-all duration-200"
            :title="`Visitar ${project.title} en vivo`"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <!-- GitHub Action -->
          <a 
            :href="project.githubUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-2 rounded-lg bg-bg-main/60 hover:bg-bg-main border border-brand/40 hover:border-accent-teal text-content-muted hover:text-content-main transition-colors"
            :title="`Ver código de ${project.title} en GitHub`"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>

      <h3 class="text-xl sm:text-2xl font-display font-bold text-content-main mb-2 group-hover:text-accent-teal-light transition-colors">
        {{ project.title }}
      </h3>

      <p class="text-sm text-content-muted leading-relaxed mb-5">
        {{ project.shortDescription }}
      </p>

      <!-- Upcoming Version Alert if available -->
      <div 
        v-if="project.upcomingNotice" 
        class="mb-4 p-3 rounded-lg bg-bg-main/80 border border-brand/40 text-xs font-mono text-content-muted flex items-start gap-2"
      >
        <span class="text-accent-teal-light font-bold">↳</span>
        <span><strong class="text-content-main">Próximas versiones:</strong> {{ project.upcomingNotice }}</span>
      </div>
    </div>

    <!-- Bottom Tech Tags & Action Button -->
    <div class="mt-2 space-y-4">
      <div class="flex flex-wrap gap-1.5">
        <span 
          v-for="tag in project.tags" 
          :key="tag"
          class="px-2.5 py-1 rounded text-[11px] font-mono font-medium bg-bg-main text-content-muted border border-brand/30"
        >
          {{ tag }}
        </span>
      </div>

      <div class="pt-3 border-t border-brand/20 flex items-center justify-between">
        <button 
          @click="$emit('openDetail', project)"
          type="button"
          class="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold bg-brand/30 hover:bg-brand/60 text-content-main border border-brand/60 hover:border-accent-teal transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
        >
          <span>Ver Arquitectura & Detalles</span>
          <svg class="w-4 h-4 text-accent-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectDetail } from '../types/portfolio'
import ProjectIcon from './ProjectIcon.vue'

defineProps<{
  project: ProjectDetail
}>()

defineEmits<{
  (e: 'openDetail', project: ProjectDetail): void
}>()
</script>
