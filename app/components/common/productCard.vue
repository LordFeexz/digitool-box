<template>
  <UiCard
    as="article"
    class="group overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card border-border"
  >
    <div class="aspect-video bg-gradient-hero relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-primary opacity-60" />
      <div class="absolute top-4 left-4">
        <UiBadge variant="secondary" class="backdrop-blur-sm bg-background/80">
          {{ props.category }}
        </UiBadge>
      </div>
    </div>

    <UiCardContent class="p-4">
      <h3
        class="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors"
      >
        {{ props.title }}
      </h3>
    </UiCardContent>

    <UiCardFooter class="p-4 pt-0 flex items-center justify-between">
      <div class="text-2xl font-bold text-primary">
        {{ formatToIDR(props.price) }}
      </div>
      <UiButton size="sm" as-child>
        <NuxtLink :to="`/product/${props.id}`"> Lihat Produk </NuxtLink>
      </UiButton>
    </UiCardFooter>
  </UiCard>
</template>

<script lang="ts" setup>
interface Props {
  category: string;
  title: string;
  price: number;
  id: string;
}
const props = defineProps<Props>();
</script>
