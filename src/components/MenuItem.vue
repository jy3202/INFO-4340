<script setup>
import { defineProps, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
 icon: String,
 label: String,
 url: String
});
const isActive = ref(false);
const route = useRoute();

isActive.value = route.path === `${props.url}`;

const toggleActive = () => {
 if (isActive.value) {
   return;
 }
 const prevActiveButton = document.querySelector('.menu-item.active');
 if (prevActiveButton) {
   prevActiveButton.classList.remove('active');
 }
 isActive.value = true;
};

watchEffect(() => {
 isActive.value = route.path === `/${props.url}`;
});
</script>


<template>
  <b-button :to="`/${url}`" class="w-100 m-0 py-5" :style="{ backgroundColor: isActive ? '#e39521' : '#ebaa46', border: 'none', color: '#ffffff', borderRadius: '0'}" @click="toggleActive">
    <b-row class="justify-content-center">
      <b-col cols="auto" class="pl-3">{{ label }}</b-col>
    </b-row>
  </b-button>
</template>


<style scoped>
</style>
