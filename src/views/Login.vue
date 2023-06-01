<script></script>

<template>
  <div class="background-image"></div>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center align-items-center" id="main">
      <div class="col-xl-10">
        <div class="card">
          <div class="row g-0" id="content">
            <div class="col-lg-6">
              <div class="card-body p-md-3 mx-md-4">
                <div class="text-center">
                  <img src="@/assets/img/logo.png" id="logo">
                  <h4 class="mt-1 mb-5 pb-1">INFORRATICA</h4>
                </div>
                <form>
                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control" />
                    <label class="form-label" for="form2Example11">Nome ou Email</label>
                  </div>
                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example22" class="form-control" />
                    <label class="form-label" for="form2Example22">Senha</label>
                  </div>
                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg mb-3" type="button">Login</button>
                  </div>
                  <a><router-link to="/">Home</router-link></a>
                </form>
              </div>
            </div>
            <div class="col-lg-6" id="div2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container-fluid {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/img/bgintro.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: brightness(0.5);
}

#logo {
  width: 185px;
  height: 185px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  border-radius: 50%;
}

#div2 {
  background-image: url(https://voltcave.com/wp-content/uploads/2020/05/Yolenzo-Portal-featured-image.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  outline: 1px solid black;
}

button {
  width: 100%;
}

</style>
