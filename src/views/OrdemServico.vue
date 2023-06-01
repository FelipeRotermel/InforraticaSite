<script setup>
import NavBarSec from '@/components/NavBarSec.vue'

</script>

<template>
  <header> <NavBarSec /> </header>
  <section class="text-center">
    <div
      class="card p-5 mb-3"
      style="width: 75%; margin: 50px;"
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
.input {
  margin: 10px;
  justify-content: center;
}
.text-center {
  justify-content: center;
  align-items: center;
  margin-top: 5%;
}
.triangle {
  border-right: 98.8vw solid transparent;
  border-top: 120px solid white;
}
.input {
  margin: 10px;
  justify-content: center;
}
</style>
