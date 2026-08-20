<template>
  <div class="inline-flex items-center justify-center shrink-0" :class="containerClass">
    <!-- Vue (Salto suave en hover) -->
    <svg 
      v-if="name.toLowerCase().includes('vue')" 
      class="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover/item:animate-jump-smooth hover:animate-jump-smooth cursor-pointer" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path fill="#41B883" d="M12 1.5L2 6.5l10 16 10-16z"/>
      <path fill="#35495E" d="M12 6.5L5.5 6.5 12 16.5 18.5 6.5z"/>
    </svg>

    <!-- TypeScript (Salto suave en hover) -->
    <svg 
      v-else-if="name.toLowerCase().includes('typescript')" 
      class="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover/item:animate-jump-smooth hover:animate-jump-smooth cursor-pointer" 
      viewBox="0 0 24 24" 
      fill="none"
    >
      <rect width="24" height="24" rx="4" fill="#3178C6"/>
      <path d="M11.5 8H6.5v2.2h1.8v8h2.4v-8h1.8V8zm3.2 5.5c.7.4 1.4.7 2.1.7.7 0 1.1-.3 1.1-.7 0-.5-.4-.7-1.3-1.1-1.4-.5-2.3-1.3-2.3-2.5 0-1.5 1.2-2.6 3.1-2.6 1.1 0 2 .3 2.7.7l-.7 1.8c-.6-.4-1.3-.6-1.9-.6-.7 0-1.1.3-1.1.7 0 .4.4.6 1.3 1 1.5.6 2.3 1.3 2.3 2.6 0 1.6-1.3 2.7-3.3 2.7-1.3 0-2.3-.4-3.1-.9l.7-1.8z" fill="#FFF"/>
    </svg>

    <!-- JavaScript -->
    <svg v-else-if="name.toLowerCase().includes('javascript')" class="w-full h-full" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
      <path d="M7 8.5v7.2c0 1.4.8 2.3 2.2 2.3.6 0 1.2-.1 1.6-.4l-.4-1.5c-.3.2-.6.3-.9.3-.6 0-.8-.4-.8-1V8.5H7zm6.7 5.7c.6.4 1.3.6 2 .6.6 0 1-.2 1-.6 0-.4-.4-.6-1.2-.9-1.4-.5-2.2-1.2-2.2-2.4 0-1.4 1.1-2.4 2.8-2.4 1 0 1.8.3 2.4.7l-.6 1.6c-.5-.3-1.1-.5-1.7-.5-.6 0-.9.2-.9.5 0 .4.4.6 1.3.9 1.5.5 2.2 1.2 2.2 2.4 0 1.5-1.2 2.5-3 2.5-1.2 0-2.1-.3-2.8-.8l.7-1.6z" fill="#000"/>
    </svg>

    <!-- Tailwind CSS -->
    <svg v-else-if="name.toLowerCase().includes('tailwind')" class="w-full h-full" viewBox="0 0 24 24" fill="none">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8"/>
    </svg>

    <!-- Quasar -->
    <svg v-else-if="name.toLowerCase().includes('quasar')" class="w-full h-full" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#00B4FF"/>
      <path d="M7 7l5 5-5 5M12 7l5 5-5 5" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <!-- HTML / CSS -->
    <svg v-else-if="name.toLowerCase().includes('html') || name.toLowerCase().includes('css')" class="w-full h-full" viewBox="0 0 24 24" fill="none">
      <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#E34F26"/>
      <path d="M12 4.5v15.5l5.2-1.6 1.2-13.9H12z" fill="#EF652A"/>
      <path d="M8 7.5h8l-.3 3H8.3l.2 3h7.2l-.4 4.5-3.3 1-3.3-1-.2-2H7l.4 3.5 4.6 1.4 4.6-1.4.7-8H7.7L8 7.5z" fill="#FFF"/>
    </svg>

    <!-- Node.js -->
    <svg v-else-if="name.toLowerCase().includes('node')" class="w-full h-full" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" fill="#5FA04E"/>
      <path d="M12 6.5l5 3v5l-5 3-5-3v-5l5-3z" fill="#333333"/>
    </svg>

    <!-- Python -->
    <svg v-else-if="name.toLowerCase().includes('python')" class="w-full h-full" viewBox="0 0 24 24" fill="none">
      <path d="M11.9 2c-3.1 0-5 1.4-5 3.3v2.2h5.2v.7H4.5C2.5 8.2 1 9.9 1 12.3c0 2.5 1.5 4.1 3.5 4.1h1.5v-2.3c0-1.8 1.5-3.3 3.3-3.3h5.2c1.6 0 2.9-1.3 2.9-2.9V5.3c0-1.9-1.9-3.3-5.5-3.3zm-2 1.7c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="#3776AB"/>
      <path d="M12.1 22c3.1 0 5-1.4 5-3.3v-2.2h-5.2v-.7h7.6c2 0 3.5-1.7 3.5-4.1 0-2.5-1.5-4.1-3.5-4.1H18v2.3c0 1.8-1.5 3.3-3.3 3.3H9.5c-1.6 0-2.9 1.3-2.9 2.9v2.6c0 1.9 1.9 3.3 5.5 3.3zm2-1.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#FFD43B"/>
    </svg>

    <!-- FastAPI -->
    <svg v-else-if="name.toLowerCase().includes('fastapi')" class="w-full h-full" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#059669"/>
      <path d="M12.5 5L7 13h5l-1 6 6.5-8.5H12l.5-5.5z" fill="#FFF"/>
    </svg>

    <!-- PostgreSQL -->
    <svg v-else-if="name.toLowerCase().includes('postgres')" class="w-full h-full" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-.8 0-1.5-.7-1.5-1.5V11h-2v4c0 1.7 1.3 3 3 3h2v-1.5h-2.5zm4-4.5h-3V7.5h3c1.4 0 2.5 1.1 2.5 2.5s-1.1 2-2.5 2z" fill="#4169E1"/>
    </svg>

    <!-- Prisma / Kysely -->
    <svg v-else-if="name.toLowerCase().includes('prisma') || name.toLowerCase().includes('kysely')" class="w-full h-full" viewBox="0 0 24 24" fill="none">
      <path d="M18.8 17.5l-6-15c-.2-.5-.9-.6-1.2-.2l-8 12c-.3.4 0 1 .5 1.1l14.2 2.6c.4.1.7-.2.5-.5z" fill="#2D3748"/>
      <path d="M12.4 3.2l5.5 13.7-11.4-2.1 5.9-11.6z" fill="#5A67D8"/>
    </svg>

    <!-- Socket.IO -->
    <svg v-else-if="name.toLowerCase().includes('socket')" class="w-full h-full" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#010101"/>
      <path d="M7 12a5 5 0 018.5-3.5L14 10a3 3 0 00-5 2h-2zm10 0a5 5 0 01-8.5 3.5L10 14a3 3 0 005-2h2z" fill="#FFF"/>
    </svg>

    <!-- Zod -->
    <svg v-else-if="name.toLowerCase().includes('zod')" class="w-full h-full" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#3068B7"/>
      <path d="M7 8h10l-6.5 8H17v2H7l6.5-8H7V8z" fill="#FFF"/>
    </svg>

    <!-- Playwright -->
    <svg v-else-if="name.toLowerCase().includes('playwright')" class="w-full h-full" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="12" r="6" fill="#45BA4B"/>
      <circle cx="15" cy="12" r="6" fill="#D32F2F" fill-opacity="0.85"/>
      <path d="M12 8v8" stroke="#FFF" stroke-width="2"/>
    </svg>

    <!-- Postman / Bruno -->
    <svg v-else-if="name.toLowerCase().includes('postman') || name.toLowerCase().includes('bruno')" class="w-full h-full" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#FF6C37"/>
      <path d="M8 12l3 3 5-6" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <!-- Docker -->
    <svg v-else-if="name.toLowerCase().includes('docker')" class="w-full h-full" viewBox="0 0 24 24" fill="none">
      <path d="M22.5 11.5c-.3-.2-1.3-.3-2.1.2-.2-.7-.7-1.3-1.4-1.7l-.6-.3-.3.6c-.4.8-.4 1.7-.1 2.5-.6.4-1.6.4-2.2.1l-.4-.2-.2.4c-.6 1.4-2 2.2-3.6 2.2H4.8C4.3 15.3 4 15 4 14.5v-1c0-.5.4-.9.9-.9h.6c.5 0 .9-.4.9-.9v-.6c0-.5-.4-.9-.9-.9h-.6c-.5 0-.9-.4-.9-.9v-.6c0-.5.4-.9.9-.9h.6c.5 0 .9-.4.9-.9V6.3c0-.5-.4-.9-.9-.9H4c-.5 0-.9.4-.9.9v.6c0 .5-.4.9-.9.9h-.4C1.3 7.8 1 8.2 1 8.7v1.8c0 4.2 3.1 7.7 7.2 8.3 4.5.7 8.9-.7 11.8-3.9 1.5-.2 2.8-.9 3.4-2.1.3-.6.2-1.1-.9-1.3z" fill="#2496ED"/>
    </svg>

    <!-- Git & GitHub -->
    <svg v-else-if="name.toLowerCase().includes('git')" class="w-full h-full" viewBox="0 0 24 24" fill="none">
      <path d="M21.6 10.7L13.3 2.4a1.8 1.8 0 00-2.6 0L8.3 4.8l3.3 3.3a2.1 2.1 0 012.7 2.7l3.2 3.2a2.1 2.1 0 011.8 3.5 2.1 2.1 0 01-3 0 2.1 2.1 0 01-.4-2.3l-3-3v4.4a2.1 2.1 0 11-1.8 0V9.4a2.1 2.1 0 01-1.1-2.7L7 4.1 2.4 8.7a1.8 1.8 0 000 2.6l8.3 8.3c.7.7 1.9.7 2.6 0l8.3-8.3a1.8 1.8 0 000-2.6z" fill="#F05032"/>
    </svg>

    <!-- Notion -->
    <svg v-else-if="name.toLowerCase().includes('notion')" class="w-full h-full" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#000000"/>
      <path d="M6 6.5l3.5-.5 7.5.5v11.5l-4 .5-7-.5V6.5zm3.5 2.5v7l4-.3V8.7l-4 .3z" fill="#FFF"/>
    </svg>

    <!-- Google Drive API -->
    <svg v-else-if="name.toLowerCase().includes('drive')" class="w-full h-full" viewBox="0 0 24 24" fill="none">
      <path d="M8.2 3.5L2 14.5l3.5 6L11.7 9.5 8.2 3.5z" fill="#FFBA00"/>
      <path d="M15.8 3.5H8.2l3.5 6h7.6l-3.5-6z" fill="#0066DA"/>
      <path d="M12.3 14.5H22l-3.5 6H8.8l3.5-6z" fill="#00AC47"/>
    </svg>

    <!-- OpenPyXL / Excel -->
    <svg v-else-if="name.toLowerCase().includes('openpyxl') || name.toLowerCase().includes('excel')" class="w-full h-full" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#1D6F42"/>
      <path d="M7 7l4 5-4 5h2.5l2.5-3.5 2.5 3.5H17l-4-5 4-5h-2.5L12 10.5 9.5 7H7z" fill="#FFF"/>
    </svg>

    <!-- C++ -->
    <svg v-else-if="name.toLowerCase().includes('c++')" class="w-full h-full" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7.8v8.4L12 22l10-5.8V7.8L12 2zm-1.8 13.5c-2 0-3.5-1.5-3.5-3.5s1.5-3.5 3.5-3.5c1.2 0 2.2.6 2.8 1.5l-1.3.8c-.4-.5-1-.8-1.5-.8-1.1 0-2 .9-2 2s.9 2 2 2c.6 0 1.1-.3 1.5-.8l1.3.8c-.6.9-1.6 1.5-2.8 1.5zm5.3-2.5h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1zm3 0h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1z" fill="#00599C"/>
    </svg>

    <!-- Default Generic Code/Dev Icon -->
    <svg v-else class="w-full h-full text-accent-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
    containerClass?: string
  }>(),
  {
    containerClass: 'w-6 h-6'
  }
)
</script>
