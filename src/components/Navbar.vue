<template>
  <header class="sticky top-0 z-40 w-full backdrop-blur-md bg-bg-main/85 border-b border-brand/25 transition-all duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Logo / Identity -->
      <a href="#hero" class="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal rounded-lg p-1">
        <div class="w-9 h-9 rounded-lg bg-bg-surface border border-accent-teal/40 flex items-center justify-center text-content-main font-mono font-bold text-sm shadow-sm group-hover:border-accent-teal group-hover:shadow-glow-teal transition-all">
          &lt;/&gt;
        </div>
        <div class="flex flex-col">
          <span class="font-display font-bold text-content-main text-base sm:text-lg tracking-tight group-hover:text-accent-teal-light transition-colors">
            Jorge Peña
          </span>
          <span class="text-[11px] font-mono text-content-muted leading-none">
            Software Dev
          </span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-1 lg:gap-2">
        <a 
          v-for="item in navItems" 
          :key="item.href" 
          :href="item.href"
          class="px-3.5 py-1.5 rounded-md text-sm font-medium text-content-muted hover:text-content-main hover:bg-bg-surface/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {{ item.name }}
        </a>
      </nav>

      <!-- CTA Button & Mobile Toggle -->
      <div class="flex items-center gap-3">
        <a 
          href="#contacto"
          class="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-lg text-sm font-medium bg-accent-warm hover:bg-accent-warm-hover text-content-main shadow-btn-warm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-warm-hover"
        >
          Contactar
        </a>

        <!-- Mobile Hamburger Button -->
        <button 
          @click="isOpen = !isOpen"
          type="button"
          class="md:hidden p-2 rounded-lg text-content-muted hover:text-content-main hover:bg-bg-surface border border-brand/30 focus:outline-none"
          aria-label="Abrir menú"
        >
          <svg v-if="!isOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <div v-show="isOpen" class="md:hidden border-b border-brand/30 bg-bg-surface px-4 pt-2 pb-5 space-y-2 shadow-xl animate-fadeIn">
      <a 
        v-for="item in navItems" 
        :key="item.href" 
        :href="item.href"
        @click="isOpen = false"
        class="block px-3 py-2 rounded-md text-base font-medium text-content-muted hover:text-content-main hover:bg-bg-subtle transition-colors"
      >
        {{ item.name }}
      </a>
      <a 
        href="#contacto"
        @click="isOpen = false"
        class="block w-full text-center px-4 py-2 mt-2 rounded-md text-sm font-medium bg-accent-warm hover:bg-accent-warm-hover text-content-main transition-colors"
      >
        Contactar
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const navItems = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Stack Tecnológico', href: '#stack' },
  { name: 'Contacto', href: '#contacto' }
]
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.2s ease-out forwards;
}
</style>
