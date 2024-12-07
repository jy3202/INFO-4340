<script setup>
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  title: String,
  author: String,
  file: String,
  newsletter: String,
  img: String,
  excerpt: String,
  link: String,
  program: String
});

const cardClass = `card-${props.program}`;
const route = useRoute()

const navigateToLink = () => {
  window.location.href = props.link;
};
</script>


<template>
  <b-card :class="cardClass" @click="navigateToLink">
    <b-card-text>
      <p class="program">{{ program }}</p>
      <b-card-img :src="file" alt=""></b-card-img>
      <b-img center :src="img" alt="" class="image-width"></b-img>
      <p class="excerpt">{{ excerpt }}</p>
      <h2>{{ title }}</h2>
      <p>{{ author }}</p>
    </b-card-text>
  </b-card>
</template>


<style scoped>
h2{
  font-size: 1.5em;
  font-weight: 600;
  color: #000000;
}

p{
  color: #111111;
  margin: 0;
  margin-bottom: 0.5em;
  padding: 0;
}

.width {
  min-width: 10rem;
}

.oblique {
  font-style: oblique;
}

.image-width {
  max-width: 10rem;
}

.align-center {
  text-align: center;
}

.card-program {
  background-color: #ebaa46;
  border: 0;
  border-radius: 5px;
}

.card-program:hover {
  background-color: #e39521;
}

.card-program p, .card-program h2 {
  color: #ffffff;
}

.card-program button {
  background-color: #ffffff;
}

.card-art, .card-essay, .card-poem {
  background-color: #f0f0f0;
  border: 0;
  border-radius: 5px;
}

.card-art .excerpt, .card-essay .excerpt, .card-poem .excerpt {
  font-weight: lighter;
  margin-bottom: 25px;
}

.card-art h2, .card-essay h2, .card-poem h2{
  color: #000000;
  margin-bottom: 0;
}

.card-art p, .card-essay p, .card-poem p{
  margin-top: 0px;
}

.card-art:hover, .card-essay:hover, .card-poem:hover {
  background-color: #dfdfdf;
}

.card-art .program, .card-essay .program, .card-poem .program{
  background-color: #dfdfdf;
  padding: 3px;
  color: #868686;
  width: auto;
  border-radius: 3px;
  display: inline-block;
  font-size: 0.75em;
  font-weight: bold;
  margin-bottom: 25px;
}

.card-program .program{
  background-color: #e39521;
  padding: 3px;
  color:  #ffffff;
  width: auto;
  border-radius: 3px;
  display: inline-block;
  font-size: 0.75em;
  font-weight: bold;
  margin-bottom: 25px;
}
</style>
