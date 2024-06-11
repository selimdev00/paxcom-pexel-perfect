<script setup lang="ts">
interface Props {
  videoUrl: string;
}

defineProps<Props>();

const show = ref(false);
</script>

<template>
  <div>
    <div @click="show = true">
      <slot name="trigger" />
    </div>

    <transition name="fade">
      <div
        v-if="show"
        class="fixed w-full h-full top-0 left-0 bg-black/80 flex items-center justify-center"
        @click.prevent="show = false"
      >
        <div class="flex flex-col items-end gap-2">
          <button
            class="text-white text-xl hover:opacity-70 transition-opacity"
            @click.prevent="show = false"
          >
            <IconClose />
          </button>

          <iframe
            width="960"
            height="532"
            :src="videoUrl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
