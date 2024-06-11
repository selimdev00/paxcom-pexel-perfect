<script setup lang="ts">
const documentStore = useDocumentStore();

const { documents } = storeToRefs(documentStore);
</script>

<template>
  <div class="max-w-[1160px] mx-auto space-y-5 pb-20">
    <h1 class="text-[34px] font-bold text-center" data-aos="fade-up">
      Документы
    </h1>

    <div class="sm:mx-5 py-1 relative" data-aos="fade-up">
      <Swiper
        centered-slides-bounds
        center-insufficient-slides
        :modules="[SwiperPagination, SwiperNavigation]"
        :navigation="{
          nextEl: '.next',
          prevEl: '.prev',
        }"
        :pagination="{
          el: '.pagination',
          clickable: true,
          bulletClass: 'pagination__bullet',
          bulletActiveClass: 'pagination__bullet--active',
          clickableClass: 'pagination__bullet--clickable',
        }"
        :breakpoints="{
          990: {
            slidesPerView: 3,
          },
          650: {
            slidesPerView: 2,
          },
        }"
      >
        <SwiperSlide
          v-for="item in documents"
          :key="item.title"
          class="p-4 flex justify-center items-center"
        >
          <div
            class="shadow-card h-[450px] xl:w-[340px] max-w-[340px] w-full flex flex-col justify-between rounded-xl px-6 pt-5 pb-8 mx-auto"
          >
            <div class="space-y-4">
              <h2
                class="font-bold text-primary-dark text-[31px] leading-[37.2px]"
              >
                {{ item.title }}
              </h2>

              <p class="text-lg leading-[21.6px]">
                {{ item.text }}
              </p>
            </div>

            <UIButton class="w-full text-lg" :to="`/documents/${item.id}`"
              >Перейти</UIButton
            >
          </div>
        </SwiperSlide>

        <div class="pagination -mt-[6px] flex justify-center"></div>
      </Swiper>

      <button
        class="prev cursor-pointer absolute bottom-52 -left-4 z-10 hover:opacity-70 transition"
      >
        <IconSliderArrowLeft />
      </button>

      <button
        class="next cursor-pointer absolute bottom-52 -right-4 z-10 hover:opacity-70 transition"
      >
        <span>
          <IconSliderArrowRight />
        </span>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.pagination {
  @apply flex items-center gap-1;

  &__bullet {
    @apply w-[7px] h-[7px] rounded-full bg-gray-bullet hover:opacity-70 cursor-pointer transition;

    &--active {
      @apply w-[10px] h-[10px] bg-primary;
    }
  }
}
</style>
