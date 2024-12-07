<script setup>
import CardView from '@/components/CardView.vue';
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Filter from '../components/Filter.vue';
import fixtures from '../fixtures.json';

const route = useRoute();
const filteredRecords = ref([]);
const updateRecords = () => {
  const filters = route.query.filters;
  if (!filters || filters === 'All') {
    filteredRecords.value = Object.entries(fixtures).map(([key, value]) => ({ key, ...value })).filter(item => {return parseInt(item.newsletter.split(' ')[1]) === 2024 || item.program === "program";
    });;
  } else {
    filteredRecords.value = Object.entries(fixtures).filter(
      ([key, item]) => filters.includes(item.program)
    ).map(([key, item]) => ({ key, ...item })).filter(item => {return parseInt(item.newsletter.split(' ')[1]) === 2024 || item.program === "program";
    });;
  }
};

onMounted(updateRecords);

watch(() => route.query.filters, updateRecords);
</script>

<template>
  <main>
    <b-container>
      <b-row class="mt-4">
        <b-col cols="12">
          <Filter />
        </b-col>
      </b-row>
      <b-row>
        <b-card-group columns class="mt-4">
          <CardView v-for="record in filteredRecords" :key="record.key" :title="record.title" :author="record.author" :file="`${baseDir}images/${record.file}`" :img="`${baseDir}images/${record.img}`" :newsletter="record.newsletter" :excerpt="record.excerpt" :link="`detail/${record.key}`" :program="record.program" />
        </b-card-group>
      </b-row>
    </b-container>
  </main>
</template>
