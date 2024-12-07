<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import VuePdfApp from "vue3-pdf-app";
import "vue3-pdf-app/dist/icons/main.css";
import fixtures from '../fixtures.json';

const route = useRoute();
const file = fixtures[route.params.key].file;
const fileExtension = computed(() => {
  const parts = file.split('.').pop();
  return parts;
});
</script>

<template>
  <b-container class="mx-auto">
    <b-row>
      <b-col>
        <b-button @click="$router.back()" class="mt-5" variant="outline-secondary">Back</b-button>
      </b-col>
    </b-row>
    <b-card class="mx-auto max-width mt-4">
      <b-card-text>
        <h1 class="mt-2">{{ fixtures[route.params.key].title }}</h1>
        <p class=" text-muted oblique">{{ fixtures[route.params.key].author }}</p>
        <p>{{ fixtures[route.params.key].content }}</p>
      </b-card-text>
      <p v-if="fileExtension === 'pdf'" class="w-100">
        <vue-pdf-app style="height: 100vh;" :pdf="`${baseDir}files/${fixtures[route.params.key].file}`" ></vue-pdf-app>
      </p>
      <b-card-img v-else-if="fileExtension === 'png'" :src="`${baseDir}images/${fixtures[route.params.key].file}`" alt=""></b-card-img>
      <div v-else></div>
    </b-card>
  </b-container>
</template>

<style scoped>
.max-width {
  min-width: 60rem;
}
</style>
