<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
const colorMode = useColorMode();
const THEMES = ["light", "dark", "system"];
const changeTheme = (theme: string) => {
  if (THEMES.includes(theme)) colorMode.preference = theme;
};
const { className = "" } = defineProps<{
  className?: string;
}>();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <UiButton
        variant="ghost"
        :class="
          cn(
            'cursor-pointer hover:scale-99 hover:opacity-80 transition-all duration-300 flex items-center gap-1',
            className
          )
        "
        size="icon"
        v-bind="$attrs"
      >
        <Icon
          :name="colorMode.value === 'dark' ? 'lucide:sun' : 'lucide:moon'"
          class="h-[1.2rem] w-[1.2rem] transition-all flex items-center justify-center"
        />
        <span class="sr-only">Toggle theme</span>
      </UiButton>
    </DropdownMenuTrigger>
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          v-for="theme in THEMES"
          :key="theme"
          class="capitalize"
          @click="changeTheme(theme)"
        >
          {{ theme }}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </Transition>
  </DropdownMenu>
</template>
