<script></script>

<template>
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="@/assets/img/Pc.png" class="img-fluid rounded-start">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title fs-2">PC Gamer MSI</h5>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Placa-Mãe</th>
                    <th scope="col">Processador</th>
                    <th scope="col">Memória</th>
                    <th scope="col">Placa de Vídeo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MSI H310M Pro-VDH Plus</td>
                    <td>Intel Core i3 - 9100F</td>
                    <td>(x2) HyperX Fury 8GB 2666MHZ DDR4</td>
                    <td>Zotac RTX 2060 6GB</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th scope="col">Armazenamento</th>
                    <th scope="col">Cooler</th>
                    <th scope="col">Fonte</th>
                    <th scope="col">Gabinete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Husky Gaming 128GB</td>
                    <td>Intel Core Stock Cooler 1151</td>
                    <td>Corsair CV 450W 80 Plus Bronze</td>
                    <td>Aigo DarkFlash Melody</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row">
              <p class="card-text col-8">"Computador não está ligando, apenas acende o led da placa-mãe"</p>
              <p class="card-text text-end col-4">Aguardando peça do fornecedor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>

table {
  border-collapse: collapse;
  border-spacing: 0;
  height: 40vh;
  border: 1px solid #ddd;
}

@media screen and (max-width: 767px) {
  table {
    width: 800px;
  }
}

th {
  background-color: #b6b6b6;
  color: white;
}

td {
  width: 300px;
}

.text-end {
  color: red;
}

</style>