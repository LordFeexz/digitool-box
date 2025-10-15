<template>
  <footer id="app-footer" class="border-t border-border bg-card/50">
    <div class="container mx-auto px-4 py-8 sm:py-12 w-full">
      <div class="mb-12">
        <div class="flex items-center gap-2 mb-4">
          <div
            class="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center"
          >
            <span class="text-primary-foreground font-bold text-sm">DT</span>
          </div>
          <span class="font-bold text-base sm:text-lg">Digital Toolbox</span>
        </div>
        <p class="text-sm text-muted-foreground">
          Pusatnya produk digital untuk kebutuhan bisnis Anda.
        </p>
      </div>

      <div
        class="grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8 w-full mx-auto"
      >
        <div id="product">
          <h3 class="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
            Products
          </h3>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li
              v-for="navigation in PRODUCT_NAVIGATIONS"
              :key="navigation.href"
            >
              <NuxtLink
                :to="navigation.href"
                class="hover:text-primary transition-colors"
              >
                {{ navigation.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div id="company">
          <h3 class="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
            Company
          </h3>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li
              v-for="navigation in COMPANY_NAVIGATIONS"
              :key="navigation.href"
            >
              <NuxtLink
                :to="navigation.href"
                class="hover:text-primary transition-colors"
              >
                {{ navigation.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div id="support">
          <h3 class="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
            Support
          </h3>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li
              v-for="navigation in SUPPORT_NAVIGATIONS"
              :key="navigation.href"
            >
              <NuxtLink
                :to="navigation.href"
                class="hover:text-primary transition-colors"
              >
                {{ navigation.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <p
          class="text-xs sm:text-sm text-muted-foreground text-center sm:text-left"
        >
          © 2025 Digitool Hub. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import {
  PRODUCT_NAVIGATIONS,
  COMPANY_NAVIGATIONS,
  SUPPORT_NAVIGATIONS,
} from "@/constants/navigation";
</script>
