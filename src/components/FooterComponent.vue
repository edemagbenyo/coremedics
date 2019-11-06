<template>
  <!-- Footer -->
  <footer class="core-footer">
    <div class="container-fluid top">
      <div class="row">
        <div class="col-lg-3">
          <h3>Coremedics</h3>
          <p>
            We are a laboratory located in Adenta, Accra; We provide the following services haematology, chemistry, microbiology among others.
          </p>
        </div>
        <div class="col-lg-3">
          <h3>Quicks links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        
        <div class="col-lg-3">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#">Haematology</a>
            </li>
            <li>
              <a href="#">Pathology</a>
            </li>
            <li>
              <a href="#">Microbiology</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 socials">
          <h3>Socials</h3>
          <ul>
            <li>
              <a href="#">
                <img src="" alt="Facebook">
              </a>
              <a href="#">
                <img src="" alt="Twitter">
              </a>
              <a href="#">
                <img src="" alt="LinkedIn">
              </a>
            </li>
          </ul> 
        </div>
      </div>
    </div>
    <div class="container-fluid bottom">
      <div class="row core-copy">
        <p>&copy; CoRemedics. All right reserved 2019</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name:'FooterComponent'
}
</script>

<style>
footer{
  background:#21252E;
}
.core-footer .top{
  padding: 4rem;
}
.core-footer .bottom{
  background:#1B1F26;
}
.core-footer h3{
  font-size: 1.3rem;
  text-align: left;
  color: white;
}
.core-footer p{
  color:white;
  text-align: left;
}
.core-footer ul{
  padding-left: 0;
}
.core-footer ul li{
  list-style-type: none;
  display: block;
  text-align: left;
  margin:10px 0;
}
.core-footer ul li a{
  color:white;
  font-size: 1.0rem;
}
.core-copy {
  padding:10px 30px;
}
.core-copy p{
  color: white;
}
</style>