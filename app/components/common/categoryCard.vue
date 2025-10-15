<template>
  <UiCard
    as="article"
    class="group p-6 hover:shadow-glow hover:border-primary/50 transition-all duration-300 cursor-pointer bg-card border-border"
  >
    <UiCardContent class="flex items-start gap-4">
      <div
        class="p-3 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform"
      >
        <Icon :name="icon" class="w-6 h-6 text-primary-foreground" />
      </div>
      <div class="flex-1">
        <h3
          class="font-semibold text-lg mb-1 group-hover:text-primary transition-colors"
        >
          {{ title }}
        </h3>
        <p class="text-sm text-muted-foreground mb-2">{{ description }}</p>
        <p class="text-xs text-muted-foreground">{{ count }} produk</p>
      </div>
    </UiCardContent>
  </UiCard>
</template>

<script lang="ts" setup>
const { title, description, count, icon } = defineProps<{
  title: string;
  description: string;
  count: number;
  icon: string;
}>();
</script>
