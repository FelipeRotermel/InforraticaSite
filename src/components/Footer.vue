<script></script>

<template>
    <div class="container-fluid">
        <footer class="text-center text-lg-center text-white">
            <section class="d-flex justify-content-center p-4">
                <div>
                  <a href="" class="text-white">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="" class="text-white">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="" class="text-white">
                    <i class="bi bi-youtube"></i>
                  </a>
                  <a href="" class="text-white">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
            </section>
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
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
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
    background-image: url(@/assets/imgfooter.png);
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding-top: 20px;
    padding: 0;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
}

.p-3 {
  background-color: rgba(0, 0, 0, 0.9);
}

a {
  text-decoration: none;
}

i {
  font-size: 30px;
  margin: 10px;
}
</style>