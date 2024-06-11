<script setup lang="ts">
import { useForm } from "vee-validate";
import { object, string } from "yup";

const validationSchema = object().shape({
  carNumber: string().required("Необходимо заполнить"),
  region: string().required("Необходимо заполнить"),
  insurance: string().required("Необходимо заполнить"),
});

const { handleSubmit, resetForm } = useForm({ validationSchema });

const onSubmit = handleSubmit((values) => {
  useNuxtApp().$toast.info("Данные отправлены");
  resetForm();
});
</script>

<template>
  <section class="grid xl:grid-cols-2 justify-items-center overflow-hidden">
    <form @submit.prevent="onSubmit" class="md:mt-20 mt-10 space-y-4">
      <h1
        class="font-bold md:text-[41px] text-3xl md:leading-[49.2px]"
        data-aos="fade-up"
      >
        Проверьте штрафы и зарегестрируйтесь в 1 клик
      </h1>

      <div class="space-y-3" data-aos="fade-up" data-aos-delay="100">
        <div class="flex lg:flex-nowrap flex-wrap gap-x-8 gap-3">
          <UIFormField
            v-slot="{ id }"
            name="carNumber"
            label="Номер автомобиля"
            class="xl:w-[320px] xl:shrink-0"
          >
            <UIFormInputText :id="id" />
          </UIFormField>

          <UIFormField v-slot="{ id }" name="region" label="Регион">
            <UIFormInputText :id="id" />
          </UIFormField>
        </div>

        <UIFormField
          name="insurance"
          label="Свидетельство о регистрации ТС"
          v-slot="{ id }"
        >
          <UIFormInputText :id="id" />
        </UIFormField>
      </div>

      <div
        class="flex items-center gap-x-[19px] gap-y-4 flex-wrap"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <UIButton class="h-[45px] !px-[18px] !text-lg" type="submit">
          Проверить штрафы
          <IconArrowRight />
        </UIButton>

        <VideoPopup
          video-url="https://www.youtube.com/embed/dQw4w9WgXcQ?si=boLAlEtKYspTEhP_&autoplay=1"
        >
          <template #trigger>
            <UIButton
              @click.prevent
              class="h-[45px] !px-5 !text-lg !gap-2"
              variant="secondary"
            >
              <span class="text-[30px]">
                <IconYoutube />
              </span>

              <span class="text-black">О сервисе</span>

              <span class="text-[15px]">(1 мин. 20 сек)</span>
            </UIButton>
          </template>
        </VideoPopup>
      </div>

      <p
        class="text-gray-text text-[13px] leading-[15.6px]"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
        персональных данных и принимаете оферту
      </p>
    </form>

    <nuxt-img
      data-aos="fade-left"
      data-aos-delay="400"
      src="/images/compas-landing-image.png"
      densities="x1 x2"
      class="w-full p-6 mt-14"
    />
  </section>
</template>
