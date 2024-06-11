<template>
  <div class="py-4">
    <div class="container">
      <UIBreadcrumbs
        :items="[
          {
            label: 'Главная страница',
            to: '/',
          },
          {
            label: 'Документы',
            to: '/documents',
          },
        ]"
      />
    </div>

    <LandingDocuments />
  </div>
</template>
