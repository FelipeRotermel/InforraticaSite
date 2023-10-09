<script>
  import OrdemApi from '@/api/ordem.js'

  const ordemApi = new OrdemApi();

  export default {
    data() {
      return {
        ordemservicos: [],
      };
    },
    async created() {
      this.ordemservicos = await ordemApi.buscarTodasAsOrdens();
      console.log(this.ordemservicos);
    },
  };

</script>

<template>
    <div v-for="ordemservico in ordemservicos" :key="ordemservico.id" class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="ordemservico.computador.capa ? ordemservico.computador.capa.url : ''" class="img-fluid rounded-start">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title fs-2">{{ ordemservico.computador.gabinete }}</h5>
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
                    <td>{{ ordemservico.computador.placa_mae }}</td>
                    <td>{{ ordemservico.computador.processador }}</td>
                    <td>{{ ordemservico.computador.memoria_ram }}</td>
                    <td>{{ ordemservico.computador.placa_de_video }}</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th scope="col">SSD</th>
                    <th scope="col">HD</th>
                    <th scope="col">Cooler</th>
                    <th scope="col">Gabinete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ ordemservico.computador.ssd }}</td>
                    <td>{{ ordemservico.computador.hd }}</td>
                    <td>{{ ordemservico.computador.cooler }}</td>
                    <td>{{ ordemservico.computador.fonte }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row">
              <p class="card-text col-8">"{{ ordemservico.descricao }}"</p>
              <p class="card-text text-end col-4">"{{ ordemservico.status }}"</p>
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

@media screen and (max-width: 767px) {
  table {
    width: 800px;
  }
}

</style>