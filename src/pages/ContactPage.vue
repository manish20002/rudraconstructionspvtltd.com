<template>
  <section class="bg-slate-950 py-20 text-white">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="mb-5 inline-flex h-20 w-20 items-center justify-center rounded-3xl border border-amber-300/20 bg-white/95 shadow-[0_12px_24px_rgba(245,200,109,0.2)]">
        <img src="/images/rudhra_con_logo.png" alt="Rudra Construction logo" class="h-14 w-14 object-contain" />
      </div>
      <p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Contact us</p>
      <h1 class="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Let’s talk about your next project.</h1>
    </div>
  </section>

  <section class="py-20">
    <div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
        <h2 class="mb-4 text-3xl font-black text-slate-900">Get in touch</h2>
        <p class="mb-6 text-slate-600">Tell us about your requirements and we’ll help you map the right construction plan.</p>

        <ul class="space-y-3 text-slate-700">
          <li><strong class="text-slate-900">Email:</strong> kumar96768@gmail.com</li>
          <li><strong class="text-slate-900">GSTIN:</strong> 37AAXFR9043H1ZG</li>
          <li><strong class="text-slate-900">Address:</strong> Flat No. 104, Pavani Towers, 23/104 RK Hospital Road, Magunta Layout, Near Amul, Nellore – 524003, Andhra Pradesh</li>
        </ul>
      </div>

      <form class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
        <div class="mb-5">
          <label class="mb-2 block text-sm font-bold text-slate-700">Name</label>
          <input type="text" placeholder="Your name" class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100" />
        </div>

        <div class="mb-5">
          <label class="mb-2 block text-sm font-bold text-slate-700">Email</label>
          <input type="email" placeholder="you@example.com" class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100" />
        </div>

        <div class="mb-5">
          <label class="mb-2 block text-sm font-bold text-slate-700">Project Type</label>
          <input type="text" placeholder="Residential / Commercial / Renovation" class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100" />
        </div>

        <div class="mb-6">
          <label class="mb-2 block text-sm font-bold text-slate-700">Message</label>
          <textarea rows="5" placeholder="Tell us about your project" class="w-full rounded-2rem border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"></textarea>
        </div>

        <button type="submit" class="rounded-full bg-gradient-to-r from-amber-300 to-orange-400 px-6 py-3 text-sm font-extrabold text-slate-900 shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5">Send Request</button>
      </form>
    </div>
  </section>
</template>
