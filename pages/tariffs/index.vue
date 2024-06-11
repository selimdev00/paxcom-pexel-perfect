<template>
  <div class="container py-4 space-y-4">
    <UIBreadcrumbs
      :items="[
        {
          label: 'Главная страница',
          to: '/',
        },
        {
          label: 'Тарифы',
          to: '/tariffs',
        },
      ]"
    />

    <h1 class="font-bold text-[41px]">Тарифы</h1>
  </div>
</template>
