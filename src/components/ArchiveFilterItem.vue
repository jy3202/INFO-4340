<script setup>
import { defineProps, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
  label: String,
  archiveFilter: String
});

const route = useRoute();
const router = useRouter();
const isToggled = ref(false);

function parseArchiveFilters(queryArchiveFilters) {
  if (!queryArchiveFilters) {
    return new Set();
  }
  const archiveFiltersArray = Array.isArray(queryArchiveFilters) ? queryArchiveFilters : [queryArchiveFilters];
  return new Set(archiveFiltersArray.map(archiveFilter => archiveFilter.toLowerCase()));
}

watch(
  () => route.query.archiveFilters,
  (newValue) => {
    const currentArchiveFilters = parseArchiveFilters(newValue);
    isToggled.value = currentArchiveFilters.has(props.archiveFilter.toLowerCase());
  },
  { immediate: true }
);

function toggleArchiveFilter(event) {
  isToggled.value = !isToggled.value;
  event.preventDefault();

  const currentArchiveFilters = parseArchiveFilters(route.query.archiveFilters);
  const filterName = props.archiveFilter.toLowerCase();

  if (currentArchiveFilters.has(filterName)) {
    currentArchiveFilters.delete(filterName);
  } else {
    currentArchiveFilters.add(filterName);
  }

  const updatedFilters = Array.from(currentArchiveFilters);
  router.push({ query: { archiveFilters: updatedFilters.length > 0 ? updatedFilters : undefined } });
}
</script>

<template>
  <div class="filter-toggle" :class="{'active': isToggled}" @click="toggleArchiveFilter" @keydown.space.prevent="$event.target.click()">
    <input type="checkbox" :id="'filter-' + archiveFilter" :checked="isToggled" @change="toggleArchiveFilter" @click.stop class="checkbox" />
    <label :for="'filter-' + archiveFilter" class="content-wrapper">
      <div class="label">{{ label }}</div>
    </label>
  </div>
</template>

<style scoped>
.filter-toggle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #f0f0f0;
  transition: background-color 0.3s;
  width: 100%;
  position: relative;
  color: black;
  border: 2px solid white;
}

.filter-toggle.active {
  border-width: 2px;
  border: 2px solid #ea9f39;
}

.checkbox {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.filter-image {
  width: 39px;
  height: 42px;
}

.label {
  text-align: center;
}

.filter-toggle {
  border: none;
}
</style>
