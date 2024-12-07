<script>
import VuePdfApp from "vue3-pdf-app";
import "vue3-pdf-app/dist/icons/main.css";

export default {
  components: {
    VuePdfApp
  }
};
</script>

<template>
  <main>
    <h1>How to Submit to Prisoner's Express</h1>

    <p>Through the newsletter we seek to provide hope where there is often only despair. Our mission is to celebrate and highlight the common humanity we all share and invite the prisoners to join us in a journey of discovery and skill building. It is a needed link to a world outside of daily prison life that encourages skill and character building.</p>

    <p></p>

    <h3>1. Read through the Prisoner's Express Newsletter and Archive. Look through current and past programs to be inspired</h3>
    <h3>2. Prepare your own work that will be featured in the next newsletter </h3>
    <h3>3. Complete the registration sheet</h3>
    <vue-pdf-app style="height: 100vh;" :pdf="`${baseDir}files/program_pdf/submitpdf.pdf`"></vue-pdf-app>
    <h3>4. Mail to the following address.</h3>

    <div id="address">
      <p> CTA/Durland Alternatives Library</p>
      <p>PO Box 6556</p>
      <p>Ithaca, New York 14851</p>
      <p>www.prisonerexpress.org</p>
    </div>

    <div id="printable">
    </div>
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

main{
    margin: 4%;
    padding: 2%;
}

#printable{
  align-items: left;
}

h1, h2, h3{
    padding-bottom: 3%;
}

#address{
  line-height: 25%;
}
</style>
