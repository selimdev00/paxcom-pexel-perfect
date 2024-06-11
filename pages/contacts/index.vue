<template>
  <div class="container py-4 space-y-4">
    <UIBreadcrumbs
      :items="[
        {
          label: 'Главная страница',
          to: '/',
        },
        {
          label: 'Контакты',
          to: '/contacts',
        },
      ]"
    />

    <h1 class="font-bold text-[41px]">Контакты</h1>
  </div>
</template>
