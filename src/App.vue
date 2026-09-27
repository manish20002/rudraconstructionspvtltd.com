<script setup lang="ts">
import { ref } from 'vue'

const navOpen = ref(false)
const isDark = ref(false)

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
]

const closeMenu = () => {
  navOpen.value = false
}

const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <div
    :class="['min-h-screen transition-colors duration-300', isDark ? 'dark-theme bg-slate-950 text-slate-50' : 'bg-[#f8f5f0] text-slate-900']"
  >
    <header :class="['sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300', isDark ? 'border-slate-800 bg-slate-950/85 shadow-[0_10px_30px_rgba(15,23,42,0.25)]' : 'border-stone-200 bg-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.04)]']">
      <div class="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <router-link to="/" :class="['flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.12em]', isDark ? 'text-slate-50' : 'text-slate-900']" @click="closeMenu">
          <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-transparent p-0 shadow-none sm:h-24 sm:w-24 lg:h-28 lg:w-28">
            <img class="h-full w-full object-contain drop-shadow-[0_3px_8px_rgba(0,0,0,0.08)]" src="/images/rudhra_con_logo_removebg.png" alt="Rudra Construction logo" />
          </div>
          <span :class="['hidden text-lg sm:inline', isDark ? 'text-slate-50' : 'text-slate-900']">RUDRA CONSTRUCTIONS</span>
        </router-link>

        <div class="flex items-center gap-3">
          <button
            type="button"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            :class="['inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300', isDark ? 'border-slate-700 bg-slate-900 text-amber-300 hover:bg-slate-800' : 'border-stone-200 bg-white text-slate-900 shadow-sm hover:bg-stone-50']"
            @click="toggleTheme"
          >
            <span class="text-lg">{{ isDark ? '☀️' : '🌙' }}</span>
          </button>

          <button :class="['inline-flex h-11 w-11 items-center justify-center rounded-xl border shadow-sm md:hidden transition-colors duration-300', isDark ? 'border-slate-700 bg-slate-900 text-slate-50' : 'border-stone-200 bg-white text-slate-900']" type="button" aria-label="Toggle navigation" @click="navOpen = !navOpen">
            <span :class="['block h-0.5 w-5 rounded-full', isDark ? 'bg-slate-200' : 'bg-slate-800']"></span>
            <span :class="['my-1.5 block h-0.5 w-5 rounded-full', isDark ? 'bg-slate-200' : 'bg-slate-800']"></span>
            <span :class="['block h-0.5 w-5 rounded-full', isDark ? 'bg-slate-200' : 'bg-slate-800']"></span>
          </button>
        </div>

        <nav class="hidden items-center gap-7 md:flex">
          <router-link
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :class="['relative text-sm font-semibold transition', isDark ? 'text-slate-300 hover:text-[#f6c66d]' : 'text-slate-700 hover:text-[#b9772d]']"
            @click="closeMenu"
          >
            {{ item.label }}
          </router-link>
        </nav>
      </div>

      <div v-if="navOpen" :class="['mx-4 mb-3 rounded-2xl border p-4 shadow-sm md:hidden', isDark ? 'border-slate-700 bg-slate-900' : 'border-stone-200 bg-white']">
        <nav class="flex flex-col gap-3">
          <router-link
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :class="['rounded-lg px-3 py-2 text-sm font-semibold', isDark ? 'text-slate-200 hover:bg-slate-800 hover:text-amber-300' : 'text-slate-700 hover:bg-[#f6efe5] hover:text-[#b9772d]']"
            @click="closeMenu"
          >
            {{ item.label }}
          </router-link>
        </nav>
      </div>
    </header>

    <main class="flex-1">
      <router-view />
    </main>

    <footer :class="['border-t transition-colors duration-300', isDark ? 'border-slate-800 bg-slate-950 text-slate-200' : 'border-stone-200 bg-[#1f2937] text-slate-200']">
      <div class="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid gap-10 md:grid-cols-[1.3fr_0.9fr_0.9fr]">
          <div>
            <router-link to="/" class="flex items-center gap-3 text-slate-50" @click="closeMenu">
              <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 p-2">
                <img class="h-full w-full object-contain" src="/images/rudhra_con_logo_removebg.png" alt="Rudra Construction logo" />
              </div>
              <div>
                <p class="text-lg font-black uppercase tracking-[0.12em]">RUDRA</p>
                <p class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Constructions</p>
              </div>
            </router-link>

            <p :class="['mt-5 max-w-md text-sm leading-6', isDark ? 'text-slate-300' : 'text-slate-300']">
              Delivering trusted civil construction, residential, commercial, and infrastructure solutions with lasting quality and commitment.
            </p>
          </div>

          <div>
            <h3 class="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-amber-300">Quick links</h3>
            <nav class="flex flex-col gap-3 text-sm text-slate-300">
              <router-link v-for="item in navItems" :key="item.to" :to="item.to" class="transition hover:text-white" @click="closeMenu">
                {{ item.label }}
              </router-link>
            </nav>
          </div>

          <div>
            <h3 class="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-amber-300">Contact</h3>
            <div class="space-y-2 text-sm text-slate-300">
              <p>Magunta Layout, Nellore</p>
              <p>Andhra Pradesh, India</p>
              <a href="mailto:kumar96768@gmail.com" class="block transition hover:text-white">kumar96768@gmail.com</a>
            </div>
          </div>
        </div>

        <div :class="['mt-10 flex flex-col gap-3 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between', isDark ? 'border-white/10 text-slate-300' : 'border-white/10 text-slate-300']">
          <p>© 2026 RUDRA CONSTRUCTIONS. Built for lasting spaces.</p>
          <router-link to="/contact" class="font-semibold text-amber-300 transition hover:text-amber-200">
            Book a consultation
          </router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
