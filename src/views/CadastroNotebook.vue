<script>
import NotebooksApi from '@/api/notebooks.js'
import ImageService from '@/api/images.js'
import NavBar from '@/components/nav/NavBarAlt.vue'
import { reactive, ref } from 'vue'
const notebooksApi = new NotebooksApi();
export default {
  components: {
    NavBar
  },
  data() {
    return {
      notebooks: [],
      notebook: {},
      coverUrl: '',
      file: null,
      currentNotebook: reactive({
        marca: "",
        modelo: "",
      }),
    };
  },

  async created() {
    this.notebooks = await notebooksApi.buscarTodosOsNotebooks();
  },
  methods: {
    onFileChange(e) {
      this.file = e.target.files[0]
      this.coverUrl = URL.createObjectURL(this.file)
    },
    async salvar() {
      const image = await ImageService.uploadImage(this.file)
      this.currentNotebook.capa_attachment_key = image.attachment_key;
      await notebooksApi.adicionarNotebook(this.currentNotebook);
      Object.assign(this.currentNotebook, {
        marca: "",
        modelo: "",
        capa_attachment_key: "",
      })
      this.notebooks = await notebooksApi.buscarTodosOsNotebooks();
      this.notebook = {};
      this.coverUrl = '';
    },
    async excluir(notebook) {
      await notebooksApi.excluirNotebook(notebook.id);
      this.notebooks = await notebooksApi.buscarTodosOsNotebooks();
    },
    editar(notebook) {
      Object.assign(this.notebook, notebook);
    },
  },
};
</script>
<template>
  <NavBar />
  <div class="container-fluid">
    <div class="row d-flex align-items-center justify-content-center">
      <div class="col-md-3 col-12"></div>
      <div class="col-md-6 col-12">
        <div class="mb-3">
          <label class="form-label">Marca:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-motherboard"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="currentNotebook.marca"
              placeholder="Marca"
            >
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Modelo:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-cpu"></i></span>
            <input type="text" class="form-control" 
              @keyup.enter="salvar" 
              v-model="currentNotebook.modelo"      
              placeholder="Modelo"
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
      <div class="col-md-3 col-12"></div>
      <button class="btn btn-success" @click="salvar">Salvar</button>
    </div>
    <div class="col-12" id="notebooks">
      <div class="row g-0">
        <div class="col-md-12">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Marca</th>
                    <th scope="col">Modelo</th>
                    <th scope="col" id="action">Imagem</th>
                    <th scope="col" id="action">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="notebook in notebooks" :key="notebook.id">
                    <td>{{ notebook.marca }}</td>
                    <td>{{ notebook.modelo}}</td>
                    <td><img :src="notebook.capa ? notebook.capa.url : ''" alt=""></td>
                    <td>
                      <button class="col-1 btn btn-danger" @click="excluir(notebook)">Del</button>
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
  padding-top: 10%;
}

.row {
  height: 100%;
}

input[type="file"] {
  display: none;
}

button {
  width: 20%;
  height: 7%;
}

#notebooks {
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
  width: 150px;
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
  .col-md-3 {
    display: none;
  }
  table {
    width: 800px;
  }
  .row {
    height: 50%;
  }
  button {
    width: 50%;
    height: 10%;
  }
}
</style>