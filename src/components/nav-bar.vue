<template>
  <header>
    <div class="bg-header">
      <!--
    Mobile menu

  
  -->
      <transition name="modal" mode="out-in">
        <div
          class="relative z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
          v-show="open"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25"></div>

          <div class="fixed inset-0 flex z-40 w-full">
            <div
              class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col"
            >
              <!-- logo -->
              <div class="py-10 px-4 flex justify-end">
                <button
                  @click="open = false"
                  type="button"
                  class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray"
                >
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div class="p-16">
                <img src="../assets/zid-logo.png" width="100" />
                <!-- Links -->
                <div class="mt-2">
                  <div
                    id="tabs-1-panel-1"
                    class="pt-6 pb-8 px-0 space-y-10"
                    aria-labelledby="tabs-1-tab-1"
                    role="tabpanel"
                    tabindex="0"
                  >
                    <div>
                      <ul
                        role="list"
                        class="mt-0 flex flex-col space-y-0 text-sm"
                      >
                        <li
                          class="flow-root p-4 transition all duration-300 ease-in-out hover:text-primary cursor-pointer"
                        >
                          <a href="#"> {{ $t("home") }} </a>
                        </li>

                        <li
                          class="flow-root p-4 transition all duration-300 ease-in-out hover:text-primary cursor-pointer"
                        >
                          <a href="#" class="-m-2 p-2 block text-gray-500">
                            {{ $t("About Zid") }}
                          </a>
                        </li>

                        <li
                          class="flow-root p-4 transition all duration-300 ease-in-out hover:text-primary cursor-pointer"
                        >
                          <a href="#" class="-m-2 p-2 block text-gray-500">
                            {{ $t("Pricing") }}
                          </a>
                        </li>

                        <li
                          class="flow-root p-4 transition all duration-300 ease-in-out hover:text-primary cursor-pointer"
                        >
                          <a href="#" class="-m-2 p-2 block text-gray-500">
                            {{ $t("Blog") }}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <button
                  class="mr-10 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 shadow-sm text-sm font-bold text-accent border-none shadow-none hover:text-primary hover:scale-90 transform-gpu transition all duration-300"
                >
                  ع
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- wide screen -->
    <nav
      class="flex items-center justify-between mx-auto py-5 lg:px-8 lg:px-2 md:space-x-10"
    >
      <button
        type="button"
        class="bg-white rounded-md text-primary hover:text-accent lg:hidden transition all duration-300 ease-in-out"
        @click="open = !open"
      >
        <svg
          width="24"
          height="24"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 5H11"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 12H16"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3 19H21"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
      <div class="lg:w-1/5">
        <img src="../assets/zid-logo.png" width="100" />
      </div>
      <!-- Links -->
      <div
        class="flex flex-grow font-bold text-sm text-accent hidden lg:ml-8 lg:block"
      >
        <router-link
          class="p-4 transition all duration-300 ease-in-out hover:text-primary"
          to="/"
          active-class="text-primary"
          >{{ $t("home") }}</router-link
        >
        <router-link
          class="p-4 transition all duration-300 ease-in-out hover:text-primary"
          to="/"
          >{{ $t("About Zid") }}</router-link
        >
        <router-link
          class="p-4 transition all duration-300 ease-in-out hover:text-primary"
          to="/"
          >{{ $t("Pricing") }}</router-link
        >
      </div>
      <div class="font-bold text-sm hidden lg:block">
        <router-link
          class="p-4 transition all duration-300 ease-in-out text-accent hover:text-primary"
          to="/"
          >{{ $t("Blog") }}</router-link
        >
      </div>
      <div class="hidden lg:block">
        <button
          class="mr-10 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 shadow-sm text-sm font-bold text-accent border-none shadow-none hover:text-primary hover:scale-90 transform-gpu transition all duration-300"
        >
          ع
        </button>
      </div>
      <!-- Action Box -->
      <div class="md:flex items-center justify-end">
        <router-link to="/login">
          <button
            class="ml-2 whitespace-nowrap inline-flex items-center justify-center lg:px-8 py-4 border-primary lg:border rounded-xl shadow-sm text-base font-bold text-primary bg-white hover:text-accent transform lg:hover:-translate-y-1 transition all duration-300 ease-in-out"
          >
            {{ $t("Login") }}
          </button>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      open: true,
    };
  },
};
</script>

<style scoped>
.modal-enter-active {
  animation: animatedModal 0.5s ease-in-out forwards;
}
.modal-leave-active {
  animation: animatedModal 0.5s ease-in-out reverse forwards;
}
@keyframes animatedModal {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
