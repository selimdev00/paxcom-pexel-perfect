<script lang="ts" setup>
interface Props {
  label?: string;
  id: string;
}

defineProps<Props>();
</script>

<template>
  <div>
    <label :for="id" class="text-[12px]">{{ label }}</label>

    <slot :id="id" />
  </div>
</template>
