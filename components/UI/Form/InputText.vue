<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
});

const model = defineModel();

const classList = computed(() => {
  return {
    input: [
      "w-full border rounded h-[40px] transition outline-none focus:ring focus:ring-primary px-3",
    ],
  };
});
</script>

<template>
  <input v-bind="$attrs" v-model="model" :class="classList.input" />
</template>
