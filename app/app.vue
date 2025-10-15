<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <Toaster />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { Toaster } from "@/components/ui/sonner";
import "vue-sonner/style.css";
</script>
