<template>
  <div class="flex flex-col min-h-screen">
    <BaseNavigation />
    <main id="main-content" data-test-id="main-content" class="flex-1">
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>
