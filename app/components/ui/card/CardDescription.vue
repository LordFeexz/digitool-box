<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    as?: "div" | "p";
  }>(),
  {
    class: "",
    as: "div",
  }
);
</script>

<template>
  <component
    :is="props.as"
    data-slot="card-description"
    :class="cn('text-muted-foreground text-sm', props.class)"
  >
    <slot />
  </component>
</template>
