/* eslint-disable */
<template>
  <nav class="text-slate-800 text-center text-lg font-semibold">
    <router-link active-class="active" to="/">Home</router-link> |
    <router-link active-class="active" to="/dropdown">Dropdown</router-link> |
    <router-link active-class="active" to="/dialog">Dialog</router-link> |
    <router-link active-class="active" to="/radio">RadioGroup</router-link> |
    <router-link active-class="active" to="/tabs">Tabs</router-link> |
    <router-link active-class="active" to="/about">About</router-link>
  </nav>
  <div class="container max-w-7xl mx-auto">
    <div class="flex justify-center text-slate-800 text-center items-center">
      <router-view />
    </div>
  </div>
</template>

<style>
.active {
  @apply text-sky-500 underline font-bold text-xl;
}
</style>
