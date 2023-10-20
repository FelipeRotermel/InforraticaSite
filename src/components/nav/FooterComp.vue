<script></script>

<template>
  <div class="container-fluid">
    <div class="triangle"></div>
    <footer class="text-center text-lg-center text-white">
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">Inforratica</h6>
              <hr class="mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                Loja fundada em 2023 especializada em reparos de computadores e notebooks.
              </p>
            </div>
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">Entre em contato</h6>
              <hr class="mb-4 mt-0 d-inline-block mx-auto" />
              <p href="" class="text-white">
                <i class="bi bi-instagram"> Instagram</i>
              </p>
              <p href="" class="text-white">
                <i class="bi bi-whatsapp"> Whatsapp</i>
              </p>
              <p href="" class="text-white">
                <i class="bi bi-youtube"> Youtube</i>
              </p>
            </div>
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">Localização</h6>
              <hr class="mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <a class="text-white">Santa Catarina</a>
              </p>
              <p>
                <a class="text-white">Joinville</a>
              </p>
              <p>
                <a class="text-white">Espinheiros</a>
              </p>
              <p>
                <a class="text-white">R. Pref. Baltazar Buschle, 3870</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="text-center p-3" >
        © 2023 Copyright:
        <a class="text-white">Inforratica</a>
      </div>
    </footer>
  </div>
</template>

<style scoped>

.container-fluid {
  background-image: url("@/assets/img/imgfooter.png");
  padding: 0;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
}

.triangle {
  border-right: 98.8vw solid transparent;
  border-top: 120px solid white;
}

.p-3 {
  background-color: rgba(0, 0, 0, 0.9);
}

hr {
  background-color: white;
  width: 70px;
  height: 2px;
}

a {
  text-decoration: none;
}

i {
  font-size: 22px;
  cursor: pointer;
}

</style>

