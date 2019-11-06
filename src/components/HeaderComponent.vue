<template>
  <!-- Navigation -->
  <div class="container">
    <nav class="navbar navbar-expand-lg fixed-top core-nav">
      <a class="navbar-brand" href="#">CoRemedics</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="core-toggler">Menu</span>
      </button>

      <div class="collapse navbar-collapse core-menu" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
            >Haematology</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pathology</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Microbiology</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
        <div class="core-app-btns">
          <a class="btn btn-outline-success my-2 my-sm-0" href="#">Book Appointment</a>
        <a class="btn btn-outline-info ml-1 my-2 my-sm-0" href="#">Lab Request</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent"
};
</script>

<style>
.core-nav > button{
  border: 3px solid #FFF;
  border-radius: 0;
}
span.core-toggler{
  padding: 5px 20px;
  color:white;
}
.core-app-btns a.btn{
    border-radius: 0;
    border: 3px solid transparent;
    background: #FFFFFF;
    color: #383838;
    padding: 10px;
    font-weight: bold;
  }
  .core-app-btns a.btn:hover{
    color: #FFF;
    background: #050844;
    border: 3px solid #FFF;
  }
@media screen and (min-width: 992px) {
  .core-nav {
    padding: 20px 25px;
    background: #050844;
  }
  .core-nav .core-menu{
    display: flex;
    justify-content: space-between;
  }
  .navbar-nav .nav-item{
    margin: 0 10px;
  }
  .navbar-nav .nav-item a{
    font-weight: bold;
    font-size: 1.2rem;
  }
  .nav-link{
    color:white;
  }
  .core-app-btns a.btn{
    border-radius: 0;
    border: 3px solid transparent;
    background: #FFFFFF;
    color: #383838;
    padding: 10px;
    font-weight: bold;
  }
}

@media screen and (max-width: 1210px) {
  .navbar-nav .nav-item a{
    font-weight: bold;
    font-size: .8rem;
  }
  .core-app-btns a.btn{
   font-size: .7rem;
  }
}

@media screen and (max-width: 991px){
  .navbar-nav{
    background: #050844;
  }
  .navbar-nav .nav-item a{
    color: white;
    font-weight: bold;
    font-size: 1rem;
  }
  .core-app-btns{
    background: #050844;
    padding-bottom: 5px;
  }
  .core-app-btns a.btn{
   font-size: 1rem;
  }
  .core-nav {
    padding: 10px 15px;
    background: #050844;
  }
}
</style>