<script>
import ComputadoresApi from '@/api/computadores.js'
import NavBar from '@/components/nav/NavBarOrdem.vue'
const computadoresApi = new ComputadoresApi();
export default {
  components: {
    NavBar
  },
  data() {
    return {
      computadores: [],
      computador: {},
      selectedFilter: 'placa_mae',
      filters: {
        computador: {
          placa_mae: '',
          processador: '',
          memoria_ram: '',
          placa_de_video: '',
          ssd: '',
          hd: '',
          cooler: '',
          fonte: '',
          gabinete: '',
          imagem: ''
        }
      },
      filterOptions: ['placa_mae', 'processador', 'memoria_ram', 'placa_de_video', 'ssd', 'hd', 'cooler', 'fonte', 'gabinete']
    };
  },
  computed: {
    filteredComputadores() {
      if (this.selectedFilter !== '') {
        return this.computadores.filter(computador =>
          computador[this.selectedFilter].includes(this.filters.computador[this.selectedFilter])
        );
      } else {
        return this.computadores;
      }
    }
  },
  async created() {
    this.computadores = await computadoresApi.buscarTodosOsComputadores();
  },
  methods: {
    async salvar() {
      if (this.computador.id) {
        await computadoresApi.atualizarComputador(this.computador);
      } else {
        await computadoresApi.adicionarComputador(this.computador);
      }
      this.computadores = await computadoresApi.buscarTodosOsComputadores();
      this.computador = {};
    },
    async excluir(computador) {
      await computadoresApi.excluirComputador(computador.id);
      this.computadores = await computadoresApi.buscarTodosOsComputadores();
    },
    editar(computador) {
      Object.assign(this.computador, computador);
    },
  },
};
</script>
<template>
  <NavBar />
  <div class="container-fluid">
    <div class="row d-flex align-items-center justify-content-center">
      <div class="col-md-5 col-12">
        <div class="mb-3">
          <label for="basic-url" class="form-label">Placa-mãe:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-motherboard"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="computador.placa_mae"
              placeholder="Marca - modelo"
            >
          </div>
        </div>
        <div class="mb-3">
          <label for="basic-url" class="form-label">Processador:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-cpu"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="computador.processador"      
              placeholder="Marca - modelo"
            >
          </div>
        </div>
        <div class="mb-3">
          <label for="basic-url" class="form-label">Memória RAM:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-memory"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="computador.memoria_ram"
              placeholder="Marca - modelo"
            >
          </div>
        </div>
        <div class="mb-3">
          <label for="basic-url" class="form-label">SSD:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-device-hdd"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="computador.ssd"
              placeholder="Marca - modelo"
            >
          </div>
        </div>
        <div class="mb-3">
          <label for="basic-url" class="form-label">HD:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-device-hdd"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="computador.hd"
              placeholder="Marca - modelo"
            >
          </div>
        </div>
      </div>
      <div class="col-md-5 col-12">
        <div class="mb-3">
          <label for="basic-url" class="form-label">Cooler:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-fan"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="computador.cooler"
              placeholder="Marca - modelo"
            >
          </div>
        </div>
        <div class="mb-3">
          <label for="basic-url" class="form-label">Placa de Vídeo:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-cpu"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="computador.placa_de_video"
              placeholder="Marca - modelo"
            >
          </div>
        </div>
        <div class="mb-3">
          <label for="basic-url" class="form-label">Fonte:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-outlet"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="computador.fonte"
              placeholder="Marca - modelo"
            >
          </div>
        </div>
        <div class="mb-3">
          <label for="basic-url" class="form-label">Gabinete:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-pc"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="computador.gabinete"
              placeholder="Marca - modelo"
            >
          </div>
        </div>
        <div class="mb-3">
          <label for="basic-url" class="form-label">Imagem:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-card-image"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="computador.imagem" 
              placeholder="URL"
            >
          </div>
        </div>
      </div>
      <button class="btn btn-success" @click="salvar">Salvar</button>
    </div>
    <div class="col-12" id="computadores">
      <div class="row g-0">
        <div class="col-md-12">
          <div class="card-body">
            <div class="input-group mb-3">
              <select class="input-group-text" v-model="selectedFilter">
                <option value="placa_mae">Placa-Mãe</option>
                <option value="processador">Processador</option>
                <option value="memoria_ram">Memória</option>
                <option value="placa_de_video">Placa de Vídeo</option>
                <option value="ssd">SSD</option>
                <option value="hd">HD</option>
                <option value="cooler">Cooler</option>
                <option value="fonte">Fonte</option>
                <option value="gabinete">Gabinete</option>
              </select>
              <input v-if="selectedFilter" type="text" class="form-control" :placeholder="'Pesquisar ' + selectedFilter" v-model="filters.computador[selectedFilter]">
            </div>
            <div class="table-responsive">
              <table class="table" id="myTable">
                <thead>
                  <tr>
                    <th scope="col">Placa-Mãe</th>
                    <th scope="col">Processador</th>
                    <th scope="col">Memória</th>
                    <th scope="col">Placa de Vídeo</th>
                    <th scope="col">SSD</th>
                    <th scope="col">HD</th>
                    <th scope="col">Cooler</th>
                    <th scope="col">Fonte</th>
                    <th scope="col">Gabinete</th>
                    <th scope="col">Imagem</th>
                    <th scope="col" id="action">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="computador in filteredComputadores" :key="computador.id">
                    <td>{{ computador.placa_mae }}</td>
                    <td>{{ computador.processador }}</td>
                    <td>{{ computador.memoria_ram }}</td>
                    <td>{{ computador.placa_de_video }}</td>
                    <td>{{ computador.ssd }}</td>
                    <td>{{ computador.hd }}</td>
                    <td>{{ computador.cooler }}</td>
                    <td>{{ computador.fonte }}</td>
                    <td>{{ computador.gabinete }}</td>
                    <td><img :src="computador.imagem" alt=""></td>
                    <td>
                      <button class="col-1 btn btn-danger" @click="excluir(computador)">Del</button>
                      <div class="w-100" id="separate"></div>
                      <button class="col-1 btn btn-warning" @click="editar(computador)">Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container-fluid {
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 5%;
}
@media screen and (max-width: 767px) {
  .container-fluid {
    padding-top: 25%;
  }
}
.row {
  height: 100%;
}
.custom-file-upload {
  display: inline-block;
  padding: 8px 12px;
  cursor: pointer;
  background-color: #f1f1f1;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 80%;
  height: 50vh;
}
@media screen and (max-width: 767px) {
  .custom-file-upload {
    height: 100px;
  }
}
.custom-file-upload i {
  margin-right: 8px;
}
input[type="file"] {
  display: none;
}
button {
  width: 20%;
}
#computadores {
  margin-top: 5vh;
}
@media screen and (max-width: 767px) {
  #computadores {
    margin-top: 50vh;
  }
}
table {
  border-collapse: collapse;
  border-spacing: 0;
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
  text-align: center;
  border: 1px solid #ddd;
}
img {
  width: 100px;
}
#action {
  width: 5%;
}
.col-1 {
  width: 100%;
}
#separate {
  height: 20px;
}
</style>