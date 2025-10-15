<template>
  <section
    id="hero"
    class="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden"
  >
    <figure class="absolute inset-0 bg-gradient-hero">
      <img
        src="~/assets/images/hero-banner.jpg"
        alt="Digital tools and resources"
        class="w-full h-full object-cover opacity-40"
        fetchpriority="high"
        loading="eager"
        decoding="async"
      />
    </figure>

    <div
      class="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"
    />

    <div class="relative z-10 container mx-auto px-4 py-8 text-center">
      <div class="flex justify-center mb-4 sm:mb-6">
        <div
          class="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
        >
          <Icon
            name="lucide:sparkles"
            class="w-3 h-3 sm:w-4 sm:h-4 text-primary"
          />
          <span class="text-xs sm:text-sm font-medium text-foreground"
            >Toolkit Lengkap untuk Kebutuhan Digital</span
          >
        </div>
      </div>

      <h1
        class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent"
      >
        Digital Toolbox Hub
      </h1>

      <p
        class="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4"
      >
        Temukan produk digital premium, template, dan sumber daya untuk
        mengembangkan bisnis kamu. Dari konten PLR hingga template Canva. Semua
        yang Kamu butuhkan ada di satu tempat.
      </p>

      <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
        <UiButton
          size="lg"
          variant="gradient"
          class="w-full sm:w-auto"
          as-child
        >
          <NuxtLink to="/product"> Lihat Produk </NuxtLink>
        </UiButton>
        <UiButton size="lg" variant="outline" class="w-full sm:w-auto" as-child>
          <NuxtLink to="/community"> Gabung Komunitas </NuxtLink>
        </UiButton>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
useHead({
  link: [
    {
      rel: "preload",
      as: "image",
      href: "/_nuxt/assets/images/hero-banner.jpg",
      fetchpriority: "high",
    },
  ],
});
</script>
