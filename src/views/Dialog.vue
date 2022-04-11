<template>
  <div class="w-full">
    <h2 class="font-bold text-2xl underline mt-10">Dialog: (Modal)</h2>
    <button
      class="
        flex
        items-center
        bg-sky-400
        py-1
        px-4
        text-lg
        font-semibold
        rounded-xl
        mt-5
      "
      @click="openModal"
    >
      Open Modal
    </button>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal">
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="min-h-screen px-4 text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <DialogOverlay
                class="
                  fixed
                  inset-0
                  bg-slate-800 bg-opacity-75
                  transition-opacity
                "
              />
            </TransitionChild>

            <span class="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>

            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <div
                class="
                  inline-block
                  w-full
                  max-w-md
                  p-6
                  my-8
                  overflow-hidden
                  text-left
                  align-middle
                  transition-all
                  transform
                  bg-white
                  shadow-xl
                  rounded-2xl
                "
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-slate-900"
                >
                  Payment successful
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-slate-800">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div>

                <div class="mt-4">
                  <button
                    type="button"
                    class="
                      inline-flex
                      justify-center
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-slate-800
                      bg-sky-500
                      border border-transparent
                      rounded-md
                      hover:bg-sky-700
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-offset-2
                      focus-visible:ring-sky-400
                    "
                    @click="closeModal"
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <h1 class="text-left text-xl font-bold underline mt-5">Code:</h1>
    <highlightjs class="text-left mt-1" :code="code" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}

let code = `
<button
    class="
    flex
    items-center
    bg-sky-400
    py-1
    px-4
    text-lg
    font-semibold
    rounded-xl
    mt-5
    "
    @click="openModal"
>
    Open Modal
</button>
<TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
    <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
        <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
        >
            <DialogOverlay
                class="
                    fixed
                    inset-0
                    bg-slate-800 bg-opacity-75
                    transition-opacity
                " />
        </TransitionChild>

        <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
        </span>

        <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
        >
            <div
            class="
                inline-block
                w-full
                max-w-md
                p-6
                my-8
                overflow-hidden
                text-left
                align-middle
                transition-all
                transform
                bg-white
                shadow-xl
                rounded-2xl
            "
            >
            <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-slate-900"
            >
                Payment successful
            </DialogTitle>
            <div class="mt-2">
                <p class="text-sm text-slate-800">
                Your payment has been successfully submitted. We’ve sent you
                an email with all of the details of your order.
                </p>
            </div>

            <div class="mt-4">
                <button
                type="button"
                class="
                    inline-flex
                    justify-center
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-slate-800
                    bg-sky-500
                    border border-transparent
                    rounded-md
                    hover:bg-sky-700
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-offset-2
                    focus-visible:ring-sky-400
                "
                @click="closeModal"
                >
                Got it, thanks!
                </button>
            </div>
            </div>
        </TransitionChild>
        </div>
    </div>
    </Dialog>
</TransitionRoot>
`.trim()
</script>

<style>
@import '/node_modules/highlight.js/styles/github-dark.css';
</style>