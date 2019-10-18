<template>
   <!-- Masthead -->
  <header class="text-white text-center">
      <div  id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
              <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/img/haem-bg.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../assets/img/micro-bg.jpg" class="d-block w-100" alt="...">
            </div>
            
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
          </div>
        </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
.carousel-item{
    height: 500px;
}
</style>