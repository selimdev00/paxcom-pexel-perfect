<script lang="ts" setup>
interface Props {
  variant?: "primary" | "naked" | "secondary";
  to?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  to: undefined,
});

const classList = computed(() => {
  return [
    "py-2 px-4 rounded-lg text-[15px] flex items-center gap-1 justify-center transition-opacity hover:opacity-70",
    {
      "bg-primary text-white": props.variant === "primary",
      "bg-white text-primary-dark border border-primary":
        props.variant === "secondary",
    },
  ];
});

const buttonComponent = computed(() => {
  if (props.to) return resolveComponent("NuxtLink");
  else return "button";
});
</script>

<template>
  <component :is="buttonComponent" :class="classList" :to="to">
    <slot />
  </component>
</template>
