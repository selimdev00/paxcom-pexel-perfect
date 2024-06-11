<script lang="ts" setup>
import { useField } from "vee-validate";

interface Props {
  label?: string;
  name: string;
}

const props = defineProps<Props>();

const { errorMessage, value, handleBlur, handleChange } = useField(
  props.name ?? "name",
  undefined,
  {
    controlled: !!props.name,
    syncVModel: true,
  },
);

provide("value", value);
</script>

<template>
  <div class="relative w-full">
    <label :for="name" class="text-[12px]">{{ label }}</label>

    <slot :id="name" :value="value" />

    <span v-if="errorMessage" class="text-red-400 text-xs">
      {{ errorMessage }}
    </span>
  </div>
</template>
