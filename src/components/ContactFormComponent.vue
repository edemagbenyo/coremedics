<template>
  <div>
    <div class="container-fluid contact">
      <div class="row">
        <div class="col-lg-6">
          <div class="info">
            <h2>Do you have any <span class="hl">questions?</span></h2>
            <p>
              Coremedics is just one call away. Phone us today to ask any
              information you will like to know. We are eager to hear from you.
            </p>

            <ul>
              <li class="phone">
                <span>
                    <i class="fas fa-phone"></i>
                    PHONE</span>
                +233 244 444 444
              </li>
              <li class="email">
                <span>
                    <i class="fas fa-envelope"></i>
                    EMAIL</span>
                info@coremedicsgh.com
              </li>
              <li class="address">
                <span>
                    <i class="fas fa-location-arrow"></i>
                    ADDRESS</span>
                Adjacent to Adenta Pharmacy
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <form action="">
            <fieldset>
              <legend>Contact Us</legend>
              <div class="form-row">
                <div class="col-6">
                  <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="col-6">
                  <input type="text" class="form-control" placeholder="Email" />
                </div>
              </div>
              <div class="form-row">
                <div class="col-6">
                  <input type="text" class="form-control" placeholder="Phone" />
                </div>
                <div class="col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-12">
                  <textarea
                    class="form-control"
                    placeholder="Enter your message here..."
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
              <div class="form-row">
                <div class="col-4">
                  <button class="btn btn-primary">Send Message</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.contact {
  background-color: #ed2d36;
  padding: 50px 30px;
  .info {
    padding: 30px 10px;
    h2 {
      font-size: 3em;
      color: #ffffff;
      padding: 20px 0;
    }
    p {
      font-size: 1.3em;
      color: #ffffff;
      padding: 20px 0;
    }
    span.hl {
      color: #050844;
    }
  }
  .info ul {
    list-style: none;
    padding: 0;
    li {
      text-align: left;
      font-size: 1em;
      color: #ffffff;
      span {
        font-size: 1.5em;
        display: block;
      }
    }
  }
  fieldset {
    border-radius: 20px;
    padding: 50px;
    margin: 30px;
    background: #ffffff;
    legend {
      background: #ed2d36;
      border-radius: 20px;
      color: #ffffff;
      font-size: 45px;
      font-weight: bold;
    }
  }
}
.form-row {
  margin: 20px 0;
}
</style>
