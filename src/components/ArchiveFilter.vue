<script setup>
import ArchiveFilterItem from './ArchiveFilterItem.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const archiveFilters = [
  { label: '2022', value: '2022'},
  { label: '2023', value: '2023'}
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
      <b-col v-for="(archiveFilter, index) in archiveFilters" :key="index" class="mb-2">
        <ArchiveFilterItem :label="archiveFilter.label" :archiveFilter="archiveFilter.value.toLowerCase()" />
      </b-col>
    </b-row>
  </b-container>
</template>
