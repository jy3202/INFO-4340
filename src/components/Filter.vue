<script setup>
import FilterItem from './FilterItem.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const filters = [
  { label: 'Art', value: 'Art', imageUrl: '/images/art.png'},
  { label: 'Essay', value: 'Essay', imageUrl: '/images/essays.png'},
  { label: 'Poem', value: 'Poem', imageUrl: '/images/poems.png'},
  { label: 'Program', value: 'Program', imageUrl: '/images/programs.png'}
];

const clearAll = () => {
  router.push({ query: {} });
};
</script>

<template>
  <b-container fluid class="p-0">
    <b-row>
      <b-col>
        <p><strong>Select Filters:</strong></p>
      </b-col>
      <b-col class="text-end">
        <a @click="clearAll" class="text-secondary" style="cursor: pointer; text-decoration: underline;">Clear All</a>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="(filter, index) in filters" :key="index" :lg="3" :md="4" :sm="6" class="mb-2">
        <FilterItem :label="filter.label" :filter="filter.value.toLowerCase()" :image-url="filter.imageUrl" :alt-image-url="filter.altImageUrl" />
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
 .label {
 font-weight: lighter;
 }
</style>
