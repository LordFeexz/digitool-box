<template>
  <header
    id="app-header"
    class="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-2">
          <div
            class="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center"
          >
            <span class="text-primary-foreground font-bold text-sm">DT</span>
          </div>
          <span
            class="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent"
          >
            Digital Toolbox
          </span>
        </div>

        <nav class="hidden md:flex items-center gap-6">
          <NuxtLink
            v-for="navigation in MAIN_NAVIGATIONS"
            :key="navigation.href"
            :to="navigation.href"
            :class="
              cn(
                'transition-colors hover:text-primary flex items-center gap-1',
                $route.path === navigation.href
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground'
              )
            "
          >
            {{ navigation.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-2">
          <UiButton variant="ghost" size="icon" class="relative">
            <ShoppingCart class="w-5 h-5" />
            <span
              class="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full text-xs flex items-center justify-center text-accent-foreground"
            >
              0
            </span>
          </UiButton>
          <!-- todo -->
          <UiButton variant="ghost" size="icon">
            <User class="w-5 h-5" />
          </UiButton>
          <CommonToggleTheme class-name="hidden md:block" />
          <UiSheet>
            <UiSheetTrigger as-child class="md:hidden">
              <UiButton variant="ghost" size="icon" class="md:hidden">
                <Menu class="w-5 h-5" />
              </UiButton>
            </UiSheetTrigger>
            <UiSheetContent side="right" class="flex flex-col space-y-4 p-6">
              <div class="flex items-center space-x-2">
                <CommonToggleTheme />
              </div>
              <nav class="flex flex-col space-y-4 mt-8">
                <NuxtLink
                  v-for="navigation in MAIN_NAVIGATIONS"
                  :key="navigation.href"
                  :to="navigation.href"
                  :class="
                    cn(
                      'transition-colors hover:text-primary flex items-center gap-1',
                      $route.path === navigation.href
                        ? 'text-primary font-medium'
                        : 'text-muted-foreground'
                    )
                  "
                >
                  {{ navigation.label }}
                </NuxtLink>
              </nav>
            </UiSheetContent>
          </UiSheet>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import { ShoppingCart, User, Menu } from "lucide-vue-next";
import { MAIN_NAVIGATIONS } from "@/constants/navigation";
</script>
