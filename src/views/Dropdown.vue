<template>
  <div class="w-full">
    <h2 class="font-bold text-2xl underline mt-10">Menu: (dropdown)</h2>
    <Menu>
      <MenuButton
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
        ><span>Options</span><ChevronDownIcon class="h-5 w-5 ml-2"
      /></MenuButton>
      <MenuItems
        class="
          flex flex-col
          absolute
          shadow-lg
          text-left
          bg-slate-300
          text-lg
          font-medium
          rounded-lg
          w-56
          p-1
        "
      >
        <MenuItem>
          <a
            class="flex flex-row items-center rounded-lg hover:bg-sky-500 p-2"
            :class="{ 'bg-sky-700': active }"
            href="#"
            ><PencilIcon class="h-5 w-5 mr-2" /><span>Edit</span>
          </a>
        </MenuItem>
        <MenuItem>
          <a
            class="flex flex-row items-center rounded-lg hover:bg-sky-500 p-2"
            :class="{ 'bg-sky-700': active }"
            href="#"
            ><DocumentDuplicateIcon class="h-5 w-5 mr-2" /><span
              >Duplicate</span
            >
          </a>
        </MenuItem>
        <MenuItem>
          <a
            class="flex flex-row items-center rounded-lg hover:bg-sky-500 p-2"
            :class="{ 'bg-sky-700': active }"
            href="#"
            ><ArchiveIcon class="h-5 w-5 mr-2" /><span>Archive</span>
          </a>
        </MenuItem>
        <MenuItem>
          <a
            class="flex flex-row items-center rounded-lg hover:bg-sky-500 p-2"
            :class="{ 'bg-sky-700': active }"
            href="#"
            ><HandIcon class="h-5 w-5 mr-2" /><span>Move</span>
          </a>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <a
            class="flex flex-row items-center rounded-lg hover:bg-sky-500 p-2"
            :class="{ 'bg-sky-700': active }"
            href="/dropdown"
            ><XCircleIcon class="h-5 w-5 mr-2" /><span>Delete</span>
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
    <h1 class="text-left text-xl font-bold underline mt-5">Code:</h1>
    <highlightjs class="text-left mt-1" :code="code" />
  </div>
</template>

<script setup>
import {
  ChevronDownIcon,
  PencilIcon,
  ArchiveIcon,
  DocumentDuplicateIcon,
  HandIcon,
  XCircleIcon,
} from '@heroicons/vue/outline'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

let code = `
<Menu>
  <MenuButton
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
  >
    <span>Options</span>
    <ChevronDownIcon class="h-5 w-5 ml-2" />
  </MenuButton>
  <MenuItems
    class="
      flex flex-col
      absolute
      shadow-lg
      text-left
      bg-slate-300
      text-lg
      font-medium
      rounded-lg
      w-56
      p-1
    "
  >
    <MenuItem>
      <a
        class="flex flex-row items-center rounded-lg hover:bg-sky-500 p-2"
        :class="{ 'bg-sky-700': active }"
        href="#"
      >
        <PencilIcon class="h-5 w-5 mr-2" />
        <span>Edit</span>
      </a>
    </MenuItem>
    <MenuItem>
      <a
        class="flex flex-row items-center rounded-lg hover:bg-sky-500 p-2"
        :class="{ 'bg-sky-700': active }"
        href="#"
      >
        <DocumentDuplicateIcon class="h-5 w-5 mr-2" />
        <span>Duplicate</span>
      </a>
    </MenuItem>
    <MenuItem>
      <a
        class="flex flex-row items-center rounded-lg hover:bg-sky-500 p-2"
        :class="{ 'bg-sky-700': active }"
        href="#"
      >
        <ArchiveIcon class="h-5 w-5 mr-2" />
        <span>Archive</span>
      </a>
    </MenuItem>
    <MenuItem>
      <a
        class="flex flex-row items-center rounded-lg hover:bg-sky-500 p-2"
        :class="{ 'bg-sky-700': active }"
        href="#"
      >
        <HandIcon class="h-5 w-5 mr-2" />
        <span>Move</span>
      </a>
    </MenuItem>
    <MenuItem>
      <a
        class="flex flex-row items-center rounded-lg hover:bg-sky-500 p-2"
        :class="{ 'bg-sky-700': active }"
        href="/dropdown"
      >
        <XCircleIcon class="h-5 w-5 mr-2" />
        <span>Delete</span>
      </a>
    </MenuItem>
  </MenuItems>
</Menu>
`.trim()
</script>

<style>
@import '/node_modules/highlight.js/styles/github-dark.css';
</style>