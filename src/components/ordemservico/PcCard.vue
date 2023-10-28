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
      try {
        this.ordemservicos = await ordemApi.buscarTodasAsOrdens();
        console.log("Data fetched:", this.ordemservicos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  };
</script>

<template>
  <div v-for="ordemservico in ordemservicos" :key="ordemservico.id" class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <!-- Verifica o tipo de ordem de serviço e exibe a imagem correspondente -->
        <img v-if="ordemservico.computador && ordemservico.computador.capa" :src="ordemservico.computador.capa.file" class="img-fluid rounded-start">
        <img v-else-if="ordemservico.notebook && ordemservico.notebook.capa" :src="ordemservico.notebook.capa.file" class="img-fluid rounded-start">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h3 class="card-title fs-1">
            <!-- Verifica o tipo de ordem de serviço e exibe o modelo correspondente -->
            {{ ordemservico.computador ? ordemservico.computador.gabinete : '' }}
            {{ ordemservico.notebook ? ordemservico.notebook.marca + ' ' + ordemservico.notebook.modelo : '' }}
          </h3>
          <div class="table-responsive">
            <!-- Verifica o tipo de ordem de serviço e exibe a tabela correspondente -->
            <table v-if="ordemservico.computador" class="table">
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
                  <!-- Exibe as informações do computador -->
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
                  <th scope="col">Fonte</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <!-- Exibe as informações do computador -->
                  <td>{{ ordemservico.computador.ssd }}</td>
                  <td>{{ ordemservico.computador.hd }}</td>
                  <td>{{ ordemservico.computador.cooler }}</td>
                  <td>{{ ordemservico.computador.fonte }}</td>
                </tr>
              </tbody>
            </table>
            <table v-else-if="ordemservico.notebook" class="table">
              <thead>
                <tr>
                  <th scope="col">Marca</th>
                  <th scope="col">Modelo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ ordemservico.notebook.marca }}</td>
                  <td>{{ ordemservico.notebook.modelo }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="row">
            <p class="card-text col-8">"{{ ordemservico.descricao }}" - "{{ ordemservico.data }}"</p>
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
  border: 1px solid #ddd;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

th {
  background-color: #b6b6b6;
  height: 10vh;
  color: white;
}

td {
  height: 10vh;
  width: 300px;
}

.img-fluid {
  width: 100%;
  height: 100%;
  object-fit: fill;
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