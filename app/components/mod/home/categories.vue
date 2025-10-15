<template>
  <section id="categories" class="py-12 sm:py-16 md:py-20 bg-secondary/30">
    <div class="container mx-auto px-4">
      <hgroup class="text-center mb-8 sm:mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Jelajahi Kategori
        </h2>
        <p
          class="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4"
        >
          Temukan apa yang Anda butuhkan dari koleksi terorganisir kami
        </p>
      </hgroup>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        <CommonCategoryCard
          v-for="category in CATEGORIES"
          :key="category.title"
          v-bind="category"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const CATEGORIES = [
  {
    id: 1,
    title: "PLR Content",
    description: "Ready-to-use articles, ebooks, and written content",
    icon: "lucide:book-open",
    count: 450,
  },
  {
    id: 2,
    title: "Video Templates",
    description: "Professional video templates and affiliate videos",
    icon: "lucide:video",
    count: 280,
  },
  {
    id: 3,
    title: "Canva Templates",
    description: "Social media, presentations, and design templates",
    icon: "lucide:layout-dashboard",
    count: 620,
  },
  {
    id: 4,
    title: "Mini Courses",
    description: "Quick learning resources and training materials",
    icon: "lucide:book",
    count: 150,
  },
  {
    id: 5,
    title: "Marketing Assets",
    description: "Email templates, landing pages, and ad creatives",
    icon: "lucide:mail",
    count: 340,
  },
  {
    id: 6,
    title: "Business Tools",
    description: "Spreadsheets, calculators, and productivity tools",
    icon: "lucide:trending-up",
    count: 190,
  },
];
</script>
