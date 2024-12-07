<script setup>
import { RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
</script>

<template>
  <b-container fluid class="app-container">
    <b-row no-gutters class="flex-nowrap">
      <b-col cols="auto" class="navigation-col border-end sticky-top">
        <Navigation />
      </b-col>
      <b-col class="content-col">
        <b-container fluid>
          <RouterView />
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.app-container {
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}

.navigation-col {
  width: 150px;
  flex: 0 0 150px;
  height: 100vh;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  background-color: #ebaa46;
}

.content-col {
  flex-grow: 1;
  overflow-y: auto;
  min-width: 0;
}
</style>
