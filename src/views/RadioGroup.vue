<template>
  <div class="w-full">
    <h2 class="font-bold text-2xl underline mt-10">Radio Group:</h2>
    <RadioGroup v-model="plan" class="space-y-2 mx-auto max-w-md mt-5">
      <RadioGroupLabel class="text-xl font-bold underline"
        >Plan:</RadioGroupLabel
      >
      <RadioGroupOption
        v-slot="{ checked }"
        value="startup"
        class="bg-slate-200 rounded-lg shadow-xl"
      >
        <div
          class="flex items-center justify-between rounded-lg text-left p-4"
          :class="checked ? 'bg-sky-400 text-slate-900' : ''"
        >
          <div>
            <div class="text-lg font-bold">Startup</div>
            <div class="font-semibold">12GB/6 CPUs &middot; 160GB SSD disk</div>
          </div>
          <div>
            <CheckCircleIcon v-show="checked" class="h-10 w-10 opacity-60" />
          </div>
        </div>
      </RadioGroupOption>
      <RadioGroupOption
        v-slot="{ checked }"
        value="business"
        class="bg-slate-200 rounded-lg shadow-xl"
      >
        <div
          class="flex items-center justify-between rounded-lg text-left p-4"
          :class="checked ? 'bg-sky-400 text-slate-900' : ''"
        >
          <div>
            <div class="text-lg font-bold">Business</div>
            <div class="font-semibold">16GB/8 CPUs &middot; 512GB SSD disk</div>
          </div>
          <div>
            <CheckCircleIcon v-show="checked" class="h-10 w-10 opacity-60" />
          </div>
        </div>
      </RadioGroupOption>
      <RadioGroupOption
        v-slot="{ checked }"
        value="enterprise"
        class="bg-slate-200 rounded-lg shadow-xl"
      >
        <div
          class="flex items-center justify-between rounded-lg text-left p-4"
          :class="checked ? 'bg-sky-400 text-slate-900' : ''"
        >
          <div>
            <div class="text-lg font-bold">Enterprise</div>
            <div class="font-semibold">
              32GB/12 CPUs &middot; 1024GB SSD disk
            </div>
          </div>
          <div>
            <CheckCircleIcon v-show="checked" class="h-10 w-10 opacity-60" />
          </div>
        </div>
      </RadioGroupOption>
    </RadioGroup>

    <h1 class="text-left text-xl font-bold underline mt-5">Code:</h1>
    <highlightjs class="text-left mt-1" :code="code" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CheckCircleIcon } from '@heroicons/vue/outline'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

const plan = ref('startup')

let code = `
<RadioGroup v-model="plan" class="space-y-2 mx-auto max-w-md mt-5">
    <RadioGroupLabel class="text-xl font-bold underline"
    >Plan:</RadioGroupLabel
    >
    <RadioGroupOption
    v-slot="{ checked }"
    value="startup"
    class="bg-slate-200 rounded-lg shadow-xl"
    >
    <div
        class="flex items-center justify-between rounded-lg text-left p-4"
        :class="checked ? 'bg-sky-400 text-slate-900' : ''"
    >
        <div>
        <div class="text-lg font-bold">Startup</div>
        <div class="font-semibold">12GB/6 CPUs &middot; 160GB SSD disk</div>
        </div>
        <div>
        <CheckCircleIcon v-show="checked" class="h-10 w-10 opacity-60" />
        </div>
    </div>
    </RadioGroupOption>
    <RadioGroupOption
    v-slot="{ checked }"
    value="business"
    class="bg-slate-200 rounded-lg shadow-xl"
    >
    <div
        class="flex items-center justify-between rounded-lg text-left p-4"
        :class="checked ? 'bg-sky-400 text-slate-900' : ''"
    >
        <div>
        <div class="text-lg font-bold">Business</div>
        <div class="font-semibold">16GB/8 CPUs &middot; 512GB SSD disk</div>
        </div>
        <div>
        <CheckCircleIcon v-show="checked" class="h-10 w-10 opacity-60" />
        </div>
    </div>
    </RadioGroupOption>
    <RadioGroupOption
    v-slot="{ checked }"
    value="enterprise"
    class="bg-slate-200 rounded-lg shadow-xl"
    >
    <div
        class="flex items-center justify-between rounded-lg text-left p-4"
        :class="checked ? 'bg-sky-400 text-slate-900' : ''"
    >
        <div>
        <div class="text-lg font-bold">Enterprise</div>
        <div class="font-semibold">
            32GB/12 CPUs &middot; 1024GB SSD disk
        </div>
        </div>
        <div>
        <CheckCircleIcon v-show="checked" class="h-10 w-10 opacity-60" />
        </div>
    </div>
    </RadioGroupOption>
</RadioGroup>
`.trim()
</script>

<style>
@import '/node_modules/highlight.js/styles/github-dark.css';
</style>