<script lang="ts" setup>
interface Props {
  variant?: "primary" | "naked";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
});

const classList = computed(() => {
  return [
    "py-2 px-4 rounded-lg text-[15px]",
    {
      "bg-primary text-white": props.variant === "primary",
    },
  ];
});
</script>

<template>
  <button :class="classList">
    <slot />
  </button>
</template>
