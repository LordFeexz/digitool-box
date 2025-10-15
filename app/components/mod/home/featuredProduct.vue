<template>
  <section id="products" class="py-12 sm:py-16 md:py-20 bg-background">
    <div class="container mx-auto px-4">
      <hgroup class="text-center mb-8 sm:mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Produk Terpopuler
        </h2>
        <p
          class="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4"
        >
          Produk digital pilihan untuk membantu Anda mengembangkan bisnis lebih
          cepat
        </p>
      </hgroup>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8"
      >
        <CommonProductCard
          v-for="product in PRODUCTS"
          :key="product.title"
          v-bind="product"
        />
      </div>

      <div class="text-center">
        <UiButton size="lg" variant="outline" class="w-full sm:w-auto" as-child>
          <NuxtLink to="/product"> Lihat Semua Produk </NuxtLink>
        </UiButton>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const PRODUCTS = [
  {
    id: "1",
    title: "Complete Social Media Templates Bundle",
    category: "Canva Templates",
    price: 4900,
    image: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Affiliate Marketing Video Course",
    category: "Courses",
    price: 9900,
    image: "/placeholder.svg",
  },
  {
    id: "3",
    title: "PLR Content Package - 50 Articles",
    category: "PLR Content",
    price: 2900,
    image: "/placeholder.svg",
  },
  {
    id: "4",
    title: "Instagram Reel Templates Pack",
    category: "Video Templates",
    price: 3900,
    image: "/placeholder.svg",
  },
  {
    id: "5",
    title: "Email Marketing Swipe Files",
    category: "Marketing",
    price: 5900,
    image: "/placeholder.svg",
  },
  {
    id: "6",
    title: "Business Presentation Templates",
    category: "Templates",
    price: 4400,
    image: "/placeholder.svg",
  },
];
</script>
