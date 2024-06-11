<script setup lang="ts">
import { object, string, ref as yupRef } from "yup";
import { useForm } from "vee-validate";

const validationSchema = object().shape({
  phoneNumber: string()
    .required("Необходимо заполнить")
    .min(18, "Номер телефона не валиден"),
  password: string()
    .required("Необходимо заполнить")
    .min(8, "Минимальная длина пароля: 8"),
  confirmPassword: string()
    .required("Необходимо заполнить")
    .oneOf([yupRef("password")], "Пароли не совпадают"),
});

const { handleSubmit, resetForm } = useForm({ validationSchema });

const onSubmit = handleSubmit((values) => {
  useNuxtApp().$toast.info("Данные отправлены");
  resetForm();
  return navigateTo("/");
});
</script>

<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <form
      @submit.prevent="onSubmit"
      class="shadow bg-gray-card-100 border-gray-card-200 border space-y-4 p-4 rounded-lg min-w-[400px]"
    >
      <div class="space-y-1">
        <h1 class="font-bold text-2xl text-center">Войти</h1>

        <UIFormField name="phoneNumber" label="Номер телефона" v-slot="{ id }">
          <UIFormInputText
            placeholder="Введите номер телефона"
            mask="+7 (###) ###-##-##"
            :id="id"
          />
        </UIFormField>

        <UIFormField name="password" label="Пароль" v-slot="{ id }">
          <UIFormInputText
            placeholder="Введите пароль"
            type="password"
            :id="id"
          />
        </UIFormField>

        <UIFormField
          name="confirmPassword"
          label="Подтвердите пароль"
          v-slot="{ id }"
        >
          <UIFormInputText
            placeholder="Подтвердите пароль"
            type="password"
            :id="id"
          />
        </UIFormField>
      </div>

      <UIButton class="w-full">Войти</UIButton>
    </form>
  </div>
</template>
