<template>
  <div class="container">
    <div class="grid grid-cols-2 items-center justify-items-center">
      <div class="mt-20 space-y-4">
        <h1 class="font-bold text-[41px] leading-[49.2px]">
          Проверьте штрафы и зарегестрируйтесь в 1 клик
        </h1>

        <div class="space-y-3">
          <div class="flex gap-8">
            <UIFormField
              id="carNumber"
              label="Номер автомобиля"
              v-slot="{ id }"
              class="w-[320px] flex-none"
            >
              <UIFormInputText :id="id" />
            </UIFormField>

            <UIFormField
              id="region"
              label="Регион"
              v-slot="{ id }"
              class="flex-none"
            >
              <UIFormInputText :id="id" />
            </UIFormField>
          </div>

          <UIFormField
            id="insurance"
            label="Свидетельство о регистрации ТС"
            v-slot="{ id }"
          >
            <UIFormInputText :id="id" />
          </UIFormField>
        </div>

        <div class="flex items-center gap-[19px]">
          <UIButton class="h-[45px] !px-[18px] !text-lg">
            Проверить штрафы
            <IconArrowRight />
          </UIButton>

          <UIButton class="h-[45px] !px-5 !text-lg !gap-2" variant="secondary">
            <span class="text-[30px]">
              <IconYoutube />
            </span>

            <span class="text-black">О сервисе</span>

            <span class="text-[15px]">(1 мин. 20 сек)</span>
          </UIButton>
        </div>

        <p class="text-gray-text text-[13px] leading-[15.6px]">
          Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
          персональных данных и принимаете оферту
        </p>
      </div>

      <nuxt-img
        src="/images/compas-landing-image.png"
        densities="x1 x2"
        class="w-full p-6 mt-12"
      />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
