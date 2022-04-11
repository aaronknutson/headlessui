<template>
  <div class="w-full">
    <h2 class="font-bold text-2xl underline mt-10">Tabs:</h2>
    <TabGroup>
      <TabList
        class="
          bg bg-slate-800
          text-slate-100
          rounded-lg
          flex
          justify-between
          bg-opacity-20
          p-1
          mt-4
        "
      >
        <Tab v-slot="{ selected }" as="template">
          <button
            class="bg-slate-800 py-4 px-32 rounded-lg text-lg font-bold"
            :class="{ 'bg-sky-500 text-slate-900': selected }"
          >
            Tab 1
          </button>
        </Tab>
        <Tab v-slot="{ selected }" as="template">
          <button
            class="bg-slate-800 py-4 px-32 rounded-lg text-lg font-bold"
            :class="{ 'bg-sky-500 text-slate-900': selected }"
          >
            Tab 2
          </button>
        </Tab>
        <Tab v-slot="{ selected }" as="template">
          <button
            class="bg-slate-800 py-4 px-32 rounded-lg text-lg font-bold"
            :class="{ 'bg-sky-500 text-slate-900': selected }"
          >
            Tab 3
          </button>
        </Tab>
        <Tab v-slot="{ selected }" as="template">
          <button
            class="bg-slate-800 py-4 px-32 rounded-lg text-lg font-bold"
            :class="{ 'bg-sky-500 text-slate-900': selected }"
          >
            Tab 4
          </button>
        </Tab>
      </TabList>
      <TabPanels class="bg-slate-100 rounded-lg p-4 mt-1">
        <TabPanel>Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
        <TabPanel>Content 4</TabPanel>
      </TabPanels>
    </TabGroup>
    <h1 class="text-left text-xl font-bold underline mt-5">Code:</h1>
    <highlightjs class="text-left mt-1" :code="code" />
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
let code = `
<TabGroup>
    <TabList
    class="
        bg bg-slate-800
        text-slate-100
        rounded-lg
        flex
        justify-between
        bg-opacity-20
        p-1
        mt-4
    "
    >
    <Tab v-slot="{ selected }" as="template">
        <button
        class="bg-slate-800 py-4 px-32 rounded-lg text-lg font-bold"
        :class="{ 'bg-sky-500 text-slate-900': selected }"
        >
        Tab 1
        </button>
    </Tab>
    <Tab v-slot="{ selected }" as="template">
        <button
        class="bg-slate-800 py-4 px-32 rounded-lg text-lg font-bold"
        :class="{ 'bg-sky-500 text-slate-900': selected }"
        >
        Tab 2
        </button>
    </Tab>
    <Tab v-slot="{ selected }" as="template">
        <button
        class="bg-slate-800 py-4 px-32 rounded-lg text-lg font-bold"
        :class="{ 'bg-sky-500 text-slate-900': selected }"
        >
        Tab 3
        </button>
    </Tab>
    <Tab v-slot="{ selected }" as="template">
        <button
        class="bg-slate-800 py-4 px-32 rounded-lg text-lg font-bold"
        :class="{ 'bg-sky-500 text-slate-900': selected }"
        >
        Tab 4
        </button>
    </Tab>
    </TabList>
    <TabPanels class="bg-slate-100 rounded-lg p-4 mt-1">
    <TabPanel>Content 1</TabPanel>
    <TabPanel>Content 2</TabPanel>
    <TabPanel>Content 3</TabPanel>
    <TabPanel>Content 4</TabPanel>
    </TabPanels>
</TabGroup>
`.trim()
</script>

<style>
@import '/node_modules/highlight.js/styles/github-dark.css';
</style>