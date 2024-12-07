<script setup>
import MenuItem from './MenuItem.vue';
import { ref } from 'vue';

const menuItems = ref([
  { icon: '/images/home.png', label: 'Home', url: ''},
  { icon: '/images/submit.png', label: 'Submit', url: 'submit'},
  { icon: '/images/archive.png', label: 'Archive', url: 'archive'},
  { icon: '/images/about.png', label: 'About', url: 'about'}
]);
</script>


<template>
  <b-container class="mt-4 mx-0 px-0">
    <MenuItem v-for="(item, index) in menuItems" :key="index" :icon="item.icon" :label="item.label" :url="item.url"/>
  </b-container>
</template>


<style scoped>
</style>
