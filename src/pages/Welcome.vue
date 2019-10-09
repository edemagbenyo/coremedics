<template>
  <div>
    <header-component></header-component>
    <welcome-component></welcome-component>
    <service-component></service-component>
    <clients-component></clients-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import WelcomeComponent from '../components/WelcomeComponent';
import ServiceComponent from '../components/ServiceComponent';
import ClientsComponent from '../components/ClientsComponent';
export default {
  name: "Welcome",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components:{
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ServiceComponent,
    ClientsComponent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
