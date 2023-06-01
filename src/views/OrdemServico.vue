<script></script>

<template>
  <section class="text-center">
    <div
      class="p-5 bg-image"
      style="
        background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
        height: 150px;
      "
    > 
    </div>
    <div class="card mx-5 mx-md-5 shadow-5-strong"></div>
    <nav class="navbar navbar-expand-lg fixed-top" id="navbar">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="#" aria-current="page">
          <router-link to="/"
            ><img
              src="@/assets/logo.png"
              class="logo"
            />Inforratica</router-link
          >
        </a>
        <p class="navbar-brand text-light" href="#" aria-current="page">Ordem de Serviço</p>
      </div>
    </nav>
    <div
      class="card p-5 mb-3"
      style="width: 85%; margin: 50px;"
      id="body"
    >
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://m.media-amazon.com/images/I/519CpLs066L._AC_UF894,1000_QL80_.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card do pc</h5>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Peça</th>
                  <th scope="col">Peça</th>
                  <th scope="col">Peça</th>
                  <th scope="col">Peça</th>
                  <th scope="col">Peça</th>
                  <th scope="col">Peça</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>PEÇA ALEATORIA</th>
                  <th>PEÇA ALEATORIA</th>
                  <th>PEÇA ALEATORIA</th>
                  <th>PEÇA ALEATORIA</th>
                  <th>PEÇA ALEATORIA</th>
                  <th>PEÇA ALEATORIA</th>
                </tr>
              </tbody>
            </table>
            <p class="card-text">
              <small class="text-muted"
                >informaçoes minimas e exclusivas do pc</small
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.triangle {
  border-right: 98.8vw solid transparent;
  border-top: 120px solid white;
}
.input {
  margin: 10px;
  justify-content: center;
}
.navbar {
  background-image: linear-gradient(#000000, transparent);
  transition: background-color 0.1s linear;
  transition: 0.4s;
  padding: 0;
}
.navbar.solid {
  background-color: #212731;
  transition: background-color 0.7s ease 0s;
  transition: 0.4s;
  padding: 0;
}

.logo {
  height: 70px;
  width: 70px;
  transition: 0.4s;
}

.logo.solid {
  height: 30px;
  width: 30px;
  transition: 0.4s;
}

a {
  color: black;
  margin-top: 5px;
  transition: 0.25s;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

a:hover {
  color: rgb(174, 174, 174);
}
.bars {
  width: 35px;
  height: 35px;
}
</style>
