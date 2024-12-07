<script setup>
import { defineProps, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
  label: String,
  filter: String,
  imageUrl: String,
  altImageUrl: String
});

const route = useRoute();
const router = useRouter();
const isToggled = ref(false);

function parseFilters(queryFilters) {
  if (!queryFilters) {
    return new Set();
  }
  const filtersArray = Array.isArray(queryFilters) ? queryFilters : [queryFilters];
  return new Set(filtersArray.map(filter => filter.toLowerCase()));
}

watch(
  () => route.query.filters,
  (newValue) => {
    const currentFilters = parseFilters(newValue);
    isToggled.value = currentFilters.has(props.filter.toLowerCase());
  },
  { immediate: true }
);

function toggleFilter(event) {
  isToggled.value = !isToggled.value;
  event.preventDefault();

  const currentFilters = parseFilters(route.query.filters);
  const filterName = props.filter.toLowerCase();

  if (currentFilters.has(filterName)) {
    currentFilters.delete(filterName);
  } else {
    currentFilters.add(filterName);
  }

  const updatedFilters = Array.from(currentFilters);
  router.push({ query: { filters: updatedFilters.length > 0 ? updatedFilters : undefined } });
}
</script>


<template>
  <div class="filter-toggle" :class="{'active': isToggled}" @click="toggleFilter" @keydown.space.prevent="$event.target.click()">
    <input type="checkbox" :id="'filter-' + filter" :checked="isToggled" @change="toggleFilter" @click.stop class="checkbox" />
    <label :for="'filter-' + filter">
      <div class="label">{{ label }}</div>
    </label>
  </div>
</template>


<style scoped>
.filter-toggle {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #f0f0f0;
  transition: background-color 0.3s;
  width: 100%;
  position: relative;
  color: black;
}

.filter-toggle.active {
  background-color: #dfdfdf;
}

.checkbox {
  position: absolute;
  left: 10px;
  z-index: 1;
}

.filter-image {
  width: 39px;
  height: 42px;
}

.label {
  text-align: start;
  margin-left: 10px;
}
</style>
