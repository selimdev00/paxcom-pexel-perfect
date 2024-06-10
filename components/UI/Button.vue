<script lang="ts" setup>
interface Props {
  variant?: "primary" | "naked" | "secondary";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
});

const classList = computed(() => {
  return [
    "py-2 px-4 rounded-lg text-[15px] flex items-center gap-1",
    {
      "bg-primary text-white": props.variant === "primary",
      "bg-white text-primary-dark border border-primary":
        props.variant === "secondary",
    },
  ];
});
</script>

<template>
  <button :class="classList">
    <slot />
  </button>
</template>
