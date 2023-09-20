<script>
import ComputadoresApi from '@/api/computadores.js'
import imageService from '@/api/images.js'
import NavBar from '@/components/nav/NavBarOrdem.vue'
import { reactive } from 'vue'
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
      this.file = e.target.files[0];
      if (this.file) {
        this.coverUrl = URL.createObjectURL(this.file);
      }
    },
    async save() {
      const image = await imageService.uploadImage(this.file);
      this.currentComputador.cover_attachment_key = image.attachment_key;
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
        cover_attachment_key: ''
      });
    },
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
          <label class="form-label">Placa-mãe:</label>
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
          <label class="form-label">Processador:</label>
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
          <label class="form-label">Memória RAM:</label>
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
          <label class="form-label">SSD:</label>
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
          <label class="form-label">HD:</label>
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
      <div class="col-md-5">
        <div class="mb-3">
          <label class="form-label">Cooler:</label>
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
          <label class="form-label">Placa de Vídeo:</label>
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
          <label class="form-label">Fonte:</label>
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
          <label class="form-label">Gabinete:</label>
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
          <label class="form-label">Imagem:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-card-image"></i></span>
            <input type="file" @change="onFileChange" style="display: block;" />
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
                    <th scope="col">Imagem</th>
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
                    <td><img :src="computador.cover ? computador.cover.url : ''" alt=""></td>
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

.row {
  height: 100%;
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
}
</style>