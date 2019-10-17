<template>
 <!-- Image Showcases -->
  <section class="showcase">
    <div class="container-fluid p-0">
      <div class="row no-gutters">

        <div class="col-lg-6 order-lg-2 text-white showcase-img service1"></div>
        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Microbiology</h2>
          <p class="lead mb-0">Our microbiology laboratory provides a full range of diagnostic services for the detection and monitoring of bacterial and fungal infections.
              Involvement in hospital infection control such as academic rounds, infection control training and antibiotic stewardship are a big part of our services.</p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 text-white showcase-img service2"></div>
        <div class="col-lg-6 my-auto showcase-text">
          <h2>Haematology</h2>
          <p class="lead mb-0"> Our haematology laboratory provides consistent quality results in all aspects of routine and specialised haematology, flow cytometry and bone marrow assessment.</p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 order-lg-2 text-white showcase-img service3"></div>
        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Chemistry</h2>
          <p class="lead mb-0"> Our haematology laboratory provides consistent quality results in all aspects of routine and specialised haematology, flow cytometry and bone marrow assessment.</p>

        </div>
      </div>
    </div>
  </section>


</template>

<script>
export default {

}
</script>

<style>
.service1{
  height: 400px;
  background-image: url("../assets/img/micro-serv.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}
.service2{
  height: 400px;
  background-image: url("../assets/img/haem-serv.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}
.service3{
  height: 400px;
  background-color: #F3EEF4;
  background-image: url("../assets/img/chemistry-serv.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
}
</style>