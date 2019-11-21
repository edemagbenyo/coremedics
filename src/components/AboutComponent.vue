<template>
    <div>
        <div class="page-intro">

        <h2>About Us</h2>
        </div>
        <div class="container">
            <div class="row ab-intro">
                <div class="col-lg-3">
                    <div class="ab-us medical">
                        <i class="fa fa-book-medical fa-4x"></i>
                        <h2>Medical Information</h2>
                        <p></p>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="ab-us medical">
                        <i class="fa fa-notes-medical fa-4x"></i>
                        <h2>Doctor Appointment</h2>
                        <p></p>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="ab-us medical">
                        <i class="fa fa-file-medical fa-4x"></i>
                        <h2>Request schedule</h2>
                        <p></p>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="ab-us medical">
                        <i class="fa fa-building fa-4x"></i>
                        <h2>Corporate Services</h2>
                        <p>
                        </p>
                    </div>
                </div>
            </div>
            <div class="row doc-intro">
                <div class="col-lg-8">
                    <h2>Dr. Amponsah</h2>
                    <h3>We offer a full range of professional laboratory services to children, adolescents, adults, couples, families and corporate institution.</h3>
                        <p>
                            We are a team of dedicated health professional. We deliver services to the best of our ability. Our emphasis is on the patient and we strive to provide quick results.
                            Visit our laboratory located at adenta close to the mosque.
                        </p>
                    <ul>
                        <li>
                            <img src="../assets/img/blood.svg" alt="blood"> Haematology
                        </li>
                        <li>
                          <img src="" alt=""> <img src="../assets/img/skin.svg" alt="skin"> Pathology
                        </li>
                        <li>
                           <img src="" alt=""> <img src="../assets/img/microscope.svg" alt="skin">Microbiology
                        </li>
                    </ul>

                </div>
                <div class="col-lg-4 doc">
                    <img src="../assets/img/doctor.png" alt="">
                    <h2>
                        Your health is our priority.
                    </h2>
                </div>
            </div>
            <div class="row"></div>
        </div>
        <contact-form></contact-form>
        <clients-form></clients-form>
    </div>

</template>
<script>
import Bread from './BreadComponent';
import ClientsComponent from './ClientsComponent';
import ContactFormComponent from './ContactFormComponent';

export default {
    components:{
        Bread,
        ClientsComponent,
        ContactForm:ContactFormComponent

    }
}
</script>
<style lang="scss">
.page-intro{
    margin-top:90px;
    width: 100%;
    height: 200px;
    background: 
    url('../assets/img/haem-bg.jpg')
    center/100%
    no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#FFFFFF;
    transition: color .5s ease-out;
}
.page-intro:hover{
    color:#AAA;
}
.ab-intro{
    margin:50px 0;
}
.ab-us{
    border: 1px solid #bbbbbb;
    background: rgb(248, 248, 248);
    border-radius: 5px;
    padding:20px 5px;
    transition: all .2s ease-in;
}
.ab-us:hover{
    border-bottom: 5px solid #050844;
    margin-top: -10px;
    box-shadow: 0 3px 10px 3px #CCC;
}
.ab-us h2{
    font-size: 1.8em;
    margin: 5px;
}
.doc-intro{
    margin: 100px 0;
    text-align: left;
}
.doc-intro h3{
    font-size: 1.4em;
}
.doc-intro p{
    font-size: 1.2em;
}
.doc-intro ul li{
    list-style: none;
    padding: 0;
    margin:25px 0;
    font-size: 1.3em;
}
.doc-intro ul li img{
    width: 100px;
}
.doc-intro .doc{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    // align-items: stretch;
}
.doc-intro .doc img{
    width:100%;
    // margin:auto;
}
.doc h2{
    padding: 30px;
    background: #050844;
    color:#FFFFFF;
    margin: 0;
    text-align: justify;
}
</style>