<script setup lang="ts">
const appConfig = useAppConfig();

const nav = [
  {
    label: "Тарифы",
    to: "/tariffs",
  },
  {
    label: "Контакты",
    to: "/contacts",
  },
];
</script>

<template>
  <header class="bg-header-gradient text-white h-[60px] flex items-center">
    <div class="container py-3 flex items-center justify-between">
      <div class="flex items-center gap-8">
        <Logo />

        <nav>
          <ul class="flex items-center text-lg gap-7">
            <li v-for="item in nav" :key="item.to">
              <nuxt-link
                :to="item.to"
                class="transition-opacity hover:opacity-70"
                >{{ item.label }}</nuxt-link
              >
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex items-center gap-[17px]">
        <a
          :href="`tel:${appConfig.contacts.phoneNumber}`"
          class="text-lg transition-opacity hover:opacity-70"
        >
          {{ appConfig.contacts.phoneNumber }}
        </a>

        <UIButton variant="naked" class="!text-lg">Вход</UIButton>

        <UIButton>Регистрация</UIButton>
      </div>
    </div>
  </header>
</template>
