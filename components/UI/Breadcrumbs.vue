<script setup lang="ts">
type Item = {
  label: string;
  to: string;
};

interface Props {
  items: Item[];
}

defineProps<Props>();
</script>

<template>
  <ul class="flex items-center flex-wrap">
    <li
      v-for="item in items"
      :key="item.to"
      class="flex items-center group/item"
    >
      <nuxt-link
        :to="item.to"
        class="hover:opacity-70 transition-opacity text-[13px]"
        active-class="text-gray-text"
      >
        {{ item.label }}
      </nuxt-link>

      <div
        class="bg-black w-[5px] h-[5px] shrink-0 rounded-full mx-[10px] group-last/item:hidden"
      ></div>
    </li>
  </ul>
</template>
