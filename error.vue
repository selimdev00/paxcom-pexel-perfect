<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div
      class="shadow bg-gray-card-100 border-gray-card-200 border space-y-4 p-4 text-center rounded-lg"
    >
      <div class="space-y-1">
        <h1 class="font-bold text-2xl">Похоже что-то пошло не так</h1>
        <p>{{ error.statusCode }} | {{ error.statusMessage }}</p>
      </div>

      <UIButton @click="handleError" class="w-full">Вернутся домой</UIButton>
    </div>
  </div>
</template>
