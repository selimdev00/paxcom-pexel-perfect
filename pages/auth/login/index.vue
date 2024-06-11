<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div
      class="shadow bg-gray-card-100 border-gray-card-200 border space-y-4 p-4 rounded-lg"
    >
      <div class="space-y-1">
        <h1 class="font-bold text-2xl text-center">Войти</h1>

        <UIFormField
          name="phoneNumber"
          label="Номер телефона"
          v-slot="{ id }"
          class="flex-none"
        >
          <UIFormInputText mask="+7 (###) ###-##-##" :id="id" />
        </UIFormField>

        <UIFormField
          name="password"
          label="Пароль"
          v-slot="{ id }"
          class="flex-none"
        >
          <UIFormInputText type="password" :id="id" />
        </UIFormField>
      </div>

      <UIButton class="w-full">Войти</UIButton>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
