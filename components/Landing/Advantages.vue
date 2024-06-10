<script setup lang="ts">
const items = [
  {
    label: "Неограниченый автопарк",
    text: "Можно добавить неограниченное кол-во машин и водителей",
    icon: resolveComponent("IconInfinity"),
  },
  {
    label: "Сокращение затрат до 50%",
    text: "Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке",
    icon: resolveComponent("IconMap"),
  },
  {
    label: "Безопасность",
    text: "Данные передаются в зашифрованном виде, они доступны только получателю",
    icon: resolveComponent("IconShieldCheck"),
  },
  {
    label: "Уведомление о погашении",
    text: "Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП",
    icon: resolveComponent("IconBellRing"),
  },
  {
    label: "Квитанция об оплате",
    text: "После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.",
    icon: resolveComponent("IconReceipt"),
  },
  {
    label: "Все история сохраняется по каждой машине",
    text: "Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам",
    icon: resolveComponent("IconTimeHistory"),
  },
];
</script>

<template>
  <section>
    <div class="max-w-[1160px] mx-auto space-y-7">
      <h1 class="text-[34px] font-bold text-center">
        Плюсы использования сервиса «Компас» для анализа штрафов
      </h1>

      <ul class="grid grid-cols-3 gap-8">
        <li
          v-for="item in items"
          :key="item.label"
          class="flex items-center gap-4 bg-gray-card-100 border border-gray-card-200 rounded-lg pl-4 pr-2 py-[25px]"
        >
          <span class="text-primary-dark text-[60px]">
            <component :is="item.icon" />
          </span>

          <div class="space-y-[10px]">
            <h2 class="text-primary-dark font-bold text-lg leading-[21.6px]">
              {{ item.label }}
            </h2>

            <p class="font-[15px] leading-[18px]">{{ item.text }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
