<template>
  <div>
    <header-component></header-component>
    <about-component>

    </about-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import AboutComponent from '../components/AboutComponent';
export default {
components:{
    HeaderComponent,
    AboutComponent,
    FooterComponent,
  }
}
</script>

<style>

</style>