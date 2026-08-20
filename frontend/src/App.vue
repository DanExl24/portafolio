<template>
  <div class="min-h-screen bg-bg-main text-content-main flex flex-col selection:bg-accent-teal selection:text-white">
    <!-- Top Navigation -->
    <Navbar />

    <!-- Main Content -->
    <main class="flex-grow">
      <HeroSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import TechStackSection from './components/TechStackSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
</script>
