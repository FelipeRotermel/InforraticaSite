<script>
import ComputadoresApi from '@/api/computadores.js'
import ImageService from '@/api/images.js'
import NavBar from '@/components/nav/NavBarAlt.vue'
import { reactive, ref } from 'vue'
const computadoresApi = new ComputadoresApi();
export default {
  components: {
    NavBar
  },
  data() {
    return {
      computadores: [],
      computador: {},
      coverUrl: '',
      file: null,
      currentComputador: reactive({
        placa_de_video: "",
        placa_mae: "",
        processador: "",
        memoria_ram: "",
        ssd: "",
        hd: "",
        cooler: "",
        fonte: "",
        gabinete: "",
      }),
    };
  },

  async created() {
    this.computadores = await computadoresApi.buscarTodosOsComputadores();
  },
  methods: {
    onFileChange(e) {
      this.file = e.target.files[0]
      this.coverUrl = URL.createObjectURL(this.file)
    },
    async salvar() {
      const image = await ImageService.uploadImage(this.file)
      this.currentComputador.capa_attachment_key = image.attachment_key;
      await computadoresApi.adicionarComputador(this.currentComputador);
      Object.assign(this.currentComputador, {
        placa_de_video: "",
        placa_mae: "",
        processador: "",
        memoria_ram: "",
        ssd: "",
        hd: "",
        cooler: "",
        fonte: "",
        gabinete: "",
        capa_attachment_key: "",
      })
      this.computadores = await computadoresApi.buscarTodosOsComputadores();
      this.computador = {};
      this.coverUrl = '';
    },
    async excluir(computador) {
      await computadoresApi.excluirComputador(computador.id);
      this.computadores = await computadoresApi.buscarTodosOsComputadores();
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
          <label class="form-label">Placa-mãe:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-motherboard"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="currentComputador.placa_mae"
              placeholder="Marca - modelo"
            >
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Processador:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-cpu"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="currentComputador.processador"      
              placeholder="Marca - modelo"
            >
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Memória RAM:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-memory"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="currentComputador.memoria_ram"
              placeholder="Marca - modelo"
            >
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">SSD:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-device-hdd"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="currentComputador.ssd"
              placeholder="Marca - modelo"
            >
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">HD:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-device-hdd"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="currentComputador.hd"
              placeholder="Marca - modelo"
            >
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="mb-3">
          <label class="form-label">Cooler:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-fan"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="currentComputador.cooler"
              placeholder="Marca - modelo"
            >
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Placa de Vídeo:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-cpu"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="currentComputador.placa_de_video"
              placeholder="Marca - modelo"
            >
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Fonte:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-outlet"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="currentComputador.fonte"
              placeholder="Marca - modelo"
            >
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Gabinete:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-pc"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="currentComputador.gabinete"
              placeholder="Marca - modelo"
            >
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Imagem:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-card-image"></i></span>
            <input class="form-control" type="file" @change="onFileChange" style="display: block;" />
          </div>
        </div>
      </div>
      <button class="btn btn-success" @click="salvar">Salvar</button>
    </div>
    <div class="col-12" id="computadores">
      <div class="row g-0">
        <div class="col-md-12">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
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
                    <th scope="col" id="action">Imagem</th>
                    <th scope="col" id="action">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="computador in computadores" :key="computador.id">
                    <td>{{ computador.placa_mae }}</td>
                    <td>{{ computador.processador }}</td>
                    <td>{{ computador.memoria_ram }}</td>
                    <td>{{ computador.placa_de_video }}</td>
                    <td>{{ computador.ssd }}</td>
                    <td>{{ computador.hd }}</td>
                    <td>{{ computador.cooler }}</td>
                    <td>{{ computador.fonte }}</td>
                    <td>{{ computador.gabinete }}</td>
                    <td id="action"><img :src="computador.capa ? computador.capa.url : ''" alt=""></td>
                    <td>
                      <button class="col-1 btn btn-danger" @click="excluir(computador)">Del</button>
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

.row {
  height: 100%;
}

input[type="file"] {
  display: none;
}

button {
  width: 20%;
}

.btn-success {
  margin-top: 50px;
  margin-bottom: 100px;
}

#computadores {
  margin-top: 5vh;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #ddd;
}

th {
  background-color: #212731;
  color: white;
}

td {
  text-align: center;
  border: 1px solid #ddd;
}

.image {
  width: 5%;
}

img {
  object-fit: contain;
  width: 150px;
}

#action {
  width: 5%;
}

.col-1 {
  width: 100%;
  margin-top: 50%;
}

@media screen and (max-width: 767px) {
  .container-fluid {
    padding-top: 25%;
  }
  table {
    width: 800px;
  }
  #computadores {
    margin-top: 35vh;
  }
  button {
    width: 50%;
  }
}
</style>