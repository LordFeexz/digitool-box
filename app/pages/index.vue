<template>
  <div id="home" class="space-y-2 min-h-screen">
    <ModHomeHero />
    <ModHomeFeaturedProduct />
    <ModHomeCategories />
  </div>
</template>

<script lang="ts" setup>
import type { WithContext, Store } from "schema-dts";
definePageMeta({
  layout: "default",
  prerender: true,
  pageTransition: { name: "fade", mode: "out-in" },
});

useHead({
  title: "Kumpulan Produk Digital untuk Kreator & Pebisnis Online",
  meta: [
    {
      name: "description",
      content:
        "Temukan kumpulan produk digital lengkap untuk kreator dan pebisnis online. Dapatkan video PLR, template Canva, dan alat pemasaran siap pakai untuk mempercepat bisnismu.",
    },
    {
      name: "keywords",
      content:
        "produk digital, PLR, affiliate marketing, template canva, bisnis online, alat digital, konten kreator, sumber daya digital",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Digital Toolbox Hub" },
    {
      property: "og:description",
      content:
        "Platform playful berisi kumpulan alat digital untuk kreator, afiliator, dan pebisnis online.",
    },
    { property: "og:image", content: `${process.env.DOMAIN}/og/home.png` },
    { property: "og:url", content: process.env.DOMAIN },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Digitool Box" },
    {
      name: "twitter:description",
      content:
        "Kumpulan alat digital all-in-one untuk kreator dan afiliator. Unduh video PLR, kursus, dan template siap pakai.",
    },
    { name: "twitter:image", content: `${process.env.DOMAIN}/og/home.png` },
  ],
  link: [{ rel: "canonical", href: process.env.DOMAIN }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "Store",
          name: "Digital Toolbox Hub",
          url: process.env.DOMAIN,
          description:
            "Platform toko digital untuk kreator, afiliator, dan pebisnis online. Temukan video PLR, template, dan alat pemasaran untuk mengembangkan bisnismu.",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": process.env.DOMAIN,
          },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "IDR",
            lowPrice: "100",
            highPrice: "1000000",
          },
        } as WithContext<Store>,
        null,
        2
      ),
    },
  ],
});
</script>
