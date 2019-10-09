<template>
    <!-- Navigation -->
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#">CoRemedics</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Services
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Haematology</a>
              <a class="dropdown-item" href="#">Pathology</a>
              <a class="dropdown-item" href="#">Microbiology</a>
              <a class="dropdown-item" href="#">Chemistry</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        

        </ul>

        <button class="btn btn-outline-success my-2 my-sm-0">Book Appointment</button>
        <button class="btn btn-outline-info ml-1 my-2 my-sm-0">Lab Request</button>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
    name:'HeaderComponent'
}
</script>

<style>

</style>