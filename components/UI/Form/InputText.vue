<script lang="ts" setup>
import { MaskInput } from "maska";

defineOptions({
  inheritAttrs: false,
});

interface Props {
  mask?: string;
}

const props = defineProps<Props>();

const classList = computed(() => {
  return {
    input: [
      "w-full border rounded h-[40px] transition outline-none focus:ring focus:ring-primary px-3",
    ],
  };
});

const value = inject("value");

let maskInputInstance;

const input = ref();

onMounted(() => {
  console.log(props.mask);
  if (props.mask) {
    maskInputInstance = new MaskInput(input.value as HTMLInputElement, {
      mask: props.mask,
    });
  }
});

onUnmounted(() => {
  if (props.mask) {
    maskInputInstance.destroy();
  }
});
</script>

<template>
  <input ref="input" v-bind="$attrs" :class="classList.input" v-model="value" />
</template>
