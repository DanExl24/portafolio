<template>
  <section id="hero" class="relative pt-12 pb-20 md:py-24 overflow-hidden bg-grid-pattern">
    <!-- Ambient subtle background lighting glow -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
    <div class="absolute top-1/3 right-10 w-72 h-72 bg-accent-teal/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Left Column: 5-Second Pitch -->
        <div class="lg:col-span-7 space-y-6 text-left">
          
          <!-- Status Pill -->
          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-bg-surface border border-accent-teal/30 shadow-sm">
            <span class="w-2.5 h-2.5 rounded-full bg-accent-teal animate-pulse"></span>
            <span class="text-xs font-mono font-medium text-content-main tracking-wide uppercase">
              Disponible para nuevos proyectos
            </span>
          </div>

          <!-- Main Title & Identity -->
          <div class="space-y-3">
            <p class="text-sm sm:text-base font-mono text-accent-teal-light font-medium tracking-wide">
              DESARROLLADOR DE SOFTWARE
            </p>
            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-content-main tracking-tight leading-[1.1]">
              Construyo aplicaciones web, APIs y soluciones de automatización.
            </h1>
          </div>

          <!-- Description -->
          <p class="text-base sm:text-lg text-content-muted leading-relaxed max-w-2xl">
            Enfoque riguroso en calidad de código, arquitectura escalable y resolución efectiva de problemas técnicos para optimizar procesos reales.
          </p>

          <!-- Core Stack Pills (Instant Overview) -->
          <div class="pt-2">
            <p class="text-xs font-mono text-content-subtle uppercase tracking-wider mb-3">
              Stack Principal & Ecosistema
            </p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in heroData.coreStack" 
                :key="tech"
                class="px-3 py-1 rounded-md text-xs font-mono font-medium bg-bg-surface text-content-main border border-brand/40 hover:border-accent-teal/60 hover:text-accent-teal-light transition-colors shadow-sm"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Actions & CTAs -->
          <div class="pt-4 flex flex-wrap items-center gap-4">
            <a 
              href="#proyectos"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm sm:text-base font-semibold bg-accent-warm hover:bg-accent-warm-hover text-content-main shadow-btn-warm transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Ver Proyectos</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>

            <a 
              href="#contacto"
              class="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm sm:text-base font-medium bg-bg-surface hover:bg-bg-subtle text-content-main border border-brand/60 hover:border-accent-teal/50 transition-all duration-200"
            >
              <span>Contacto</span>
            </a>

            <a 
              href="/cv/Hoja_de_vida_jorge_alejandro.pdf"
              download="Hoja_de_vida_jorge_alejandro.pdf"
              target="_blank"
              class="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-content-muted hover:text-content-main hover:bg-bg-surface/50 border border-transparent hover:border-brand/40 transition-colors"
            >
              <svg class="w-4 h-4 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Descargar CV</span>
            </a>
          </div>
        </div>

        <!-- Right Column: Visual Developer Banner / Tech Frame -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end">
          <div class="relative w-full max-w-md">
            
            <!-- Bento Box Frame for Avatar / Visual Identity -->
            <div class="relative rounded-2xl bg-bg-surface border border-brand/40 p-6 shadow-card overflow-hidden group hover:border-accent-teal/50 transition-all duration-300">
              
              <!-- Code Card Header / IDE controls -->
              <div class="flex items-center justify-between pb-4 mb-4 border-b border-brand/30">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span class="text-xs font-mono text-content-muted">developer.config.ts</span>
              </div>

              <!-- Visual Representation / Profile Card Container -->
              <div class="relative rounded-xl overflow-hidden bg-bg-main/90 border border-brand/30 p-6 flex flex-col items-center text-center space-y-4">
                
                <!-- Avatar with glowing badge -->
                <div class="relative">
                  <div class="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-brand via-bg-surface to-accent-teal/40 p-1 shadow-lg">
                    <div class="w-full h-full rounded-xl bg-bg-surface flex items-center justify-center overflow-hidden">
                      <!-- SVG Tech Avatar Icon -->
                      <svg class="w-16 h-16 text-content-main" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                  </div>
                  <!-- Online verification badge -->
                  <div class="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-bg-surface border border-accent-teal text-[11px] font-mono text-accent-teal-light flex items-center gap-1.5 shadow-md">
                    <span class="w-2 h-2 rounded-full bg-accent-teal"></span>
                    <span>Full-Stack</span>
                  </div>
                </div>

                <!-- Bio highlights -->
                <div class="space-y-1">
                  <h3 class="font-display font-bold text-lg text-content-main">Jorge Peña</h3>
                  <p class="text-xs text-content-muted">Desarrollo Web & Automatizaciones</p>
                </div>

                <!-- Quick Metrics Grid -->
                <div class="w-full grid grid-cols-2 gap-2 pt-2 text-left">
                  <div class="p-3 rounded-lg bg-bg-surface/80 border border-brand/20">
                    <span class="text-[10px] font-mono text-content-subtle block uppercase">Enfoque</span>
                    <span class="text-xs font-semibold text-content-main">Calidad & Arquitectura</span>
                  </div>
                  <div class="p-3 rounded-lg bg-bg-surface/80 border border-brand/20">
                    <span class="text-[10px] font-mono text-content-subtle block uppercase">Especialidad</span>
                    <span class="text-xs font-semibold text-content-main">Vue · Node · Typescript</span>
                  </div>
                </div>

              </div>

              <!-- Terminal Output Footer -->
              <div class="mt-4 pt-3 border-t border-brand/25 font-mono text-xs text-content-muted flex items-center justify-between">
                <span class="text-accent-teal-light">&gt; status: 200 OK</span>
                <span class="text-content-subtle">build: passed</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { HERO_DATA } from '../data/portfolioData'

const heroData = HERO_DATA
</script>
