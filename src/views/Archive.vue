<script setup>
import CardView from '@/components/CardView.vue';
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import fixtures from '../fixtures.json';
import ArchiveFilter from '../components/ArchiveFilter.vue'

const route = useRoute();
const filteredRecords = ref([]);
const updateRecords = () => {
  const archiveFilters = route.query.archiveFilters;
  if (!archiveFilters || archiveFilters === 'All') {
    filteredRecords.value = Object.entries(fixtures).map(([key, value]) => ({ key, ...value })).filter(item => {return parseInt(item.newsletter.split(' ')[1]) !== 2024;
    });
  } else {
    filteredRecords.value = Object.entries(fixtures).map(([key, item]) => ({ key, ...item })).filter(item => { return archiveFilters.some(filter => item.newsletter.includes(filter));})
    .filter(item => {
      return parseInt(item.newsletter.split(' ')[1]) !== 2024 || item.program === "program";
    });
  }
};

onMounted(updateRecords);

watch(() => route.query.archiveFilters, updateRecords);
</script>

<template>
<b-container>
    <b-row class="mt-4">
      <b-col cols="12">
        <ArchiveFilter />
      </b-col>
    </b-row>
    <b-row>
      <b-card-group columns class="mt-4">
        <CardView v-for="record in filteredRecords" :key="record.key" class="width" variant="outline-dark" :title = "record.title" :author="record.author" :file="`${baseDir}images/${record.file}`" :img="`${baseDir}images/${record.img}`" :newsletter="record.newsletter" :excerpt="record.excerpt" :link="`detail/${record.key}`" :program="record.program" />
      </b-card-group>
    </b-row>
  </b-container>
</template>
