<template>
  <section class="bg-slate-950 py-20 text-white">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="mb-5 inline-flex h-20 w-20 items-center justify-center rounded-3xl border border-amber-300/20 bg-white/95 shadow-[0_12px_24px_rgba(245,200,109,0.2)]">
        <img src="/images/rudhra_con_logo.png" alt="Rudra Construction logo" class="h-14 w-14 object-contain" />
      </div>
      <p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Projects</p>
      <h1 class="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Recent work across residential and commercial building.</h1>
    </div>
  </section>

  <section class="bg-slate-100 py-20">
    <div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:px-8">
      <article class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)] lg:grid lg:grid-cols-2">
        <div class="h-72 bg-[url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center lg:h-full"></div>
        <div class="p-7 lg:p-10">
          <span class="mb-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-amber-700">Residential</span>
          <h3 class="mb-3 text-2xl font-black text-slate-900">Greenfield Villas</h3>
          <p class="text-slate-600">Custom villa development with premium finishes, landscaped surroundings, and efficient layouts.</p>
        </div>
      </article>

      <article class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)] lg:grid lg:grid-cols-2">
        <div class="order-2 h-72 bg-[url('https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center lg:order-2 lg:h-full"></div>
        <div class="order-1 p-7 lg:order-1 lg:p-10">
          <span class="mb-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-amber-700">Commercial</span>
          <h3 class="mb-3 text-2xl font-black text-slate-900">Business Plaza</h3>
          <p class="text-slate-600">Multi-use commercial structure designed to accommodate modern operations and visitor experience.</p>
        </div>
      </article>

      <article class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)] lg:grid lg:grid-cols-2">
        <div class="h-72 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center lg:h-full"></div>
        <div class="p-7 lg:p-10">
          <span class="mb-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-amber-700">Renovation</span>
          <h3 class="mb-3 text-2xl font-black text-slate-900">Heritage Revival</h3>
          <p class="text-slate-600">Adaptive reuse project balancing preservation with contemporary functionality and durability.</p>
        </div>
      </article>
    </div>
  </section>
</template>
