<template>
  <section id="stack" class="py-20 bg-bg-main relative">
    <!-- Ambient glow -->
    <div class="absolute bottom-10 left-1/3 w-80 h-80 bg-brand/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-brand/25">
        <div>
          <span class="text-xs font-mono font-medium text-accent-teal-light uppercase tracking-wider block mb-2">
            // Capacidades & Herramientas
          </span>
          <h2 class="text-3xl sm:text-4xl font-display font-bold text-content-main">
            Stack Tecnológico
          </h2>
        </div>
        <p class="text-sm text-content-muted max-w-md">
          Tecnologías, lenguajes y librerías con las que desarrollo soluciones de software escalables y eficientes.
        </p>
      </div>

      <!-- Wide Horizontal Category Cards Layout -->
      <div class="space-y-6">
        
        <div 
          v-for="cat in categories" 
          :key="cat.title"
          class="rounded-2xl bg-bg-surface border border-brand/35 p-5 sm:p-7 hover:border-accent-teal/50 transition-all duration-300 shadow-card"
        >
          <!-- Category Header Bar (Horizontal) -->
          <div class="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-brand/20">
            <div class="flex items-center gap-3">
              <span class="w-2.5 h-2.5 rounded-full bg-accent-teal shadow-glow-teal"></span>
              <h3 class="text-lg sm:text-xl font-display font-bold text-content-main tracking-tight">
                {{ cat.title }}
              </h3>
            </div>
            <span class="text-xs font-mono text-content-subtle bg-bg-main px-3 py-1 rounded-full border border-brand/30">
              {{ cat.skills.length }} tecnologías
            </span>
          </div>

          <!-- Horizontal Skills Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            <div 
              v-for="skill in cat.skills" 
              :key="skill.name"
              class="group/item flex items-center gap-3.5 p-3.5 rounded-xl transition-all duration-200"
              :class="[
                skill.badge === 'CORE' 
                  ? 'bg-bg-main/80 border border-accent-teal/65 ring-1 ring-accent-teal/35 shadow-[0_0_12px_rgba(40,124,120,0.12)] hover:border-accent-teal hover:ring-accent-teal/60' 
                  : 'bg-bg-main/50 hover:bg-bg-main border border-brand/25 hover:border-brand/50'
              ]"
            >
              <!-- Tech Official Logo (Centrado verticalmente) -->
              <div 
                class="p-2 rounded-lg bg-bg-surface border flex items-center justify-center transition-all shrink-0 self-center"
                :class="skill.badge === 'CORE' ? 'border-accent-teal/50 shadow-sm' : 'border-brand/40 group-hover/item:border-accent-teal/40'"
              >
                <TechIcon :name="skill.name" container-class="w-6 h-6" />
              </div>

              <!-- Tech Info -->
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-2 mb-1">
                  <h4 class="font-mono text-sm font-bold text-content-main group-hover/item:text-accent-teal-light transition-colors truncate">
                    {{ skill.name }}
                  </h4>
                  
                  <!-- Badge for CORE -->
                  <span 
                    v-if="skill.badge === 'CORE'"
                    class="text-[10px] font-mono font-bold text-accent-teal-light bg-accent-teal/20 border border-accent-teal/50 px-2 py-0.5 rounded tracking-wider shrink-0"
                  >
                    CORE
                  </span>

                  <!-- Badge for Intermedio / Others -->
                  <span 
                    v-else-if="skill.badge"
                    class="text-[10px] font-mono text-content-subtle bg-bg-surface border border-brand/40 px-2 py-0.5 rounded shrink-0"
                  >
                    {{ skill.badge }}
                  </span>
                </div>
                <p class="text-xs text-content-muted leading-relaxed line-clamp-2 group-hover/item:line-clamp-none transition-all">
                  {{ skill.description }}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { SKILL_CATEGORIES } from '../data/portfolioData'
import TechIcon from './TechIcon.vue'

const categories = SKILL_CATEGORIES
</script>
