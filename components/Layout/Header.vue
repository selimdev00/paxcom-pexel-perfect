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

const menu = ref(false);

watch(menu, (value: boolean) => {
  if (value) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});

const mobileNav = [
  {
    label: "Тарифы",
    to: "/tariffs",
  },
  {
    label: "Контакты",
    to: "/contacts",
  },
  {
    label: "Вход",
    to: "/auth/login",
  },
  {
    label: "Регистрация",
    to: "/auth/register",
  },
];
</script>

<template>
  <header
    class="bg-header-gradient text-white h-[60px] flex items-center sticky top-0 z-30"
  >
    <div class="container py-3 flex items-center justify-between">
      <div class="flex items-center gap-8">
        <Logo />

        <nav class="lg:block hidden">
          <ul class="flex items-center text-lg gap-7">
            <li v-for="item in nav" :key="item.to">
              <nuxt-link
                active-class="opacity-70"
                :to="item.to"
                class="transition-opacity hover:opacity-70"
                >{{ item.label }}</nuxt-link
              >
            </li>
          </ul>
        </nav>
      </div>

      <div class="lg:hidden flex items-center">
        <button @click="menu = true" class="text-2xl">
          <IconMenu />
        </button>

        <transition name="fade">
          <div
            v-if="menu"
            class="bg-black/80 fixed top-0 left-0 w-full h-full z-20 flex justify-end text-black"
            @click="menu = false"
          >
            <div
              @click.stop
              class="bg-white w-[250px] h-full p-4 flex flex-col justify-between text-right"
            >
              <div class="space-y-8">
                <div class="flex justify-end">
                  <button @click="menu = false">
                    <IconClose />
                  </button>
                </div>

                <nav class="text-xl">
                  <ul class="space-y-2">
                    <li v-for="item in mobileNav" :key="item.to">
                      <nuxt-link :to="item.to" @click="menu = false">{{
                        item.label
                      }}</nuxt-link>
                    </li>
                  </ul>
                </nav>
              </div>

              <a
                :href="`tel:${appConfig.contacts.phoneNumber}`"
                class="text-lg transition-opacity hover:opacity-70 block"
              >
                {{ appConfig.contacts.phoneNumber }}
              </a>
            </div>
          </div>
        </transition>
      </div>

      <div class="md:flex hidden items-center gap-[17px]">
        <a
          :href="`tel:${appConfig.contacts.phoneNumber}`"
          class="text-lg transition-opacity hover:opacity-70"
        >
          {{ appConfig.contacts.phoneNumber }}
        </a>

        <UIButton variant="naked" class="!text-lg" to="/auth/login"
          >Вход</UIButton
        >

        <UIButton to="/auth/register">Регистрация</UIButton>
      </div>
    </div>
  </header>
</template>
