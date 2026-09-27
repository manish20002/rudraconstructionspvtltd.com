<template>
  <section class="relative overflow-hidden bg-slate-950 text-white">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,200,109,0.18),transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(251,146,60,0.12),transparent_18%)]"></div>
    <div class="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
      <div class="flex flex-col justify-center">
        <div class="mb-5 inline-flex w-fit items-center gap-3 rounded-full border border-amber-300/20 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 p-1.5 shadow-[0_8px_20px_rgba(245,200,109,0.18)]">
            <img src="/images/rudhra_con_logo.png" alt="Rudra Construction logo" class="h-full w-full object-contain" />
          </div>
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">RUDRA CONSTRUCTIONS</span>
        </div>

        <p class="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-amber-300">Building strong foundations for every future</p>
        <h1 class="max-w-xl text-4xl font-black leading-[1.08] sm:text-5xl lg:text-6xl">Crafting spaces that stand the test of time.</h1>
        <p class="mt-5 max-w-xl text-base text-slate-300 sm:text-lg">
          From civil works to premium residential and commercial developments, we deliver quality-driven
          construction solutions with precision, safety, and trust.
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <router-link to="/projects" class="rounded-full bg-gradient-to-r from-amber-300 to-orange-400 px-6 py-3 text-sm font-extrabold text-slate-900 shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5">Explore Projects</router-link>
          <router-link to="/contact" class="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5">Book a Consultation</router-link>
        </div>

        <div class="mt-10 grid gap-4 sm:grid-cols-3">
          <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
            <strong class="block text-2xl font-black text-amber-300">18+</strong>
            <span class="text-sm text-slate-300">Years of experience</span>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
            <strong class="block text-2xl font-black text-amber-300">120+</strong>
            <span class="text-sm text-slate-300">Projects completed</span>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
            <strong class="block text-2xl font-black text-amber-300">₹38Cr+</strong>
            <span class="text-sm text-slate-300">Turnover achieved</span>
          </div>
        </div>
      </div>

      <div class="relative flex items-center justify-center">
        <div class="relative h-[460px] w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-800 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
          <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-slate-800/10"></div>
          <div class="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-slate-950/75 p-4 backdrop-blur-sm">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Trusted partner</p>
            <p class="mt-2 text-xl font-bold text-white">End-to-end construction execution</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-10 text-center md:text-left">
        <p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">What we do</p>
        <h2 class="text-3xl font-black text-slate-900 sm:text-4xl">Construction services built around quality and trust</h2>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <article class="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-xl text-amber-700">🏠</div>
          <h3 class="mb-3 text-xl font-bold text-slate-900">Residential Projects</h3>
          <p class="text-slate-600">Thoughtful homes built for comfort, utility, and long-term value.</p>
        </article>

        <article class="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-xl text-amber-700">🏢</div>
          <h3 class="mb-3 text-xl font-bold text-slate-900">Commercial Spaces</h3>
          <p class="text-slate-600">High-performance commercial builds tailored for growth and efficiency.</p>
        </article>

        <article class="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-xl text-amber-700">🛠️</div>
          <h3 class="mb-3 text-xl font-bold text-slate-900">Civil &amp; Contract Works</h3>
          <p class="text-slate-600">Reliable execution for structural, infrastructure, and contract-driven projects.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="bg-slate-100 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-10 text-center md:text-left">
        <p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Our approach</p>
        <h2 class="text-3xl font-black text-slate-900 sm:text-4xl">A disciplined process from concept to completion</h2>
      </div>

      <div class="grid gap-6 lg:grid-cols-4">
        <article class="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          <p class="mb-3 text-sm font-black uppercase tracking-[0.2em] text-amber-600">01</p>
          <h3 class="mb-3 text-xl font-bold text-slate-900">Planning</h3>
          <p class="text-slate-600">We assess design intent, scope, and feasibility with structured project planning.</p>
        </article>

        <article class="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          <p class="mb-3 text-sm font-black uppercase tracking-[0.2em] text-amber-600">02</p>
          <h3 class="mb-3 text-xl font-bold text-slate-900">Execution</h3>
          <p class="text-slate-600">Our skilled team coordinates materials, scheduling, and site activity with precision.</p>
        </article>

        <article class="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          <p class="mb-3 text-sm font-black uppercase tracking-[0.2em] text-amber-600">03</p>
          <h3 class="mb-3 text-xl font-bold text-slate-900">Quality Control</h3>
          <p class="text-slate-600">We manage workmanship, safety standards, and material checks throughout delivery.</p>
        </article>

        <article class="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          <p class="mb-3 text-sm font-black uppercase tracking-[0.2em] text-amber-600">04</p>
          <h3 class="mb-3 text-xl font-bold text-slate-900">Handover</h3>
          <p class="text-slate-600">Final checks, transparency, and smooth client handover complete every project.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-10 text-center md:text-left">
        <p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Featured work</p>
        <h2 class="text-3xl font-black text-slate-900 sm:text-4xl">Projects that reflect our commitment to quality</h2>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <article class="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]">
          <div class="h-60 bg-[url('https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center"></div>
          <div class="p-6">
            <span class="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700">Residential</span>
            <h3 class="mb-2 text-xl font-bold text-slate-900">Urban Residence</h3>
            <p class="text-slate-600">Luxury housing community designed with practical efficiency and premium detailing.</p>
          </div>
        </article>

        <article class="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]">
          <div class="h-60 bg-[url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center"></div>
          <div class="p-6">
            <span class="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700">Commercial</span>
            <h3 class="mb-2 text-xl font-bold text-slate-900">Corporate Tower</h3>
            <p class="text-slate-600">Multi-level office development focused on efficiency, comfort, and long-term performance.</p>
          </div>
        </article>

        <article class="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]">
          <div class="h-60 bg-[url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center"></div>
          <div class="p-6">
            <span class="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700">Renovation</span>
            <h3 class="mb-2 text-xl font-bold text-slate-900">Heritage Revival</h3>
            <p class="text-slate-600">Creative restoration that preserves character while improving structural value.</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
