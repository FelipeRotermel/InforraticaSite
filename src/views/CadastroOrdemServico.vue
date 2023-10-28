<script>
import NavBar from '@/components/nav/NavBarAlt.vue'
import UsuariosApi from '@/api/usuarios.js'
import NotebooksApi from '@/api/notebooks.js'
import ComputadoresApi from '@/api/computadores.js'
import OrdemApi from '@/api/ordem.js'

const usuariosApi = new UsuariosApi();
const notebooksApi = new NotebooksApi();
const computadoresApi = new ComputadoresApi();
const ordemApi = new OrdemApi();

export default {
    components: {
        NavBar
    },
    data() {
    return {
      usuarios: [],
      usuario: {},
      notebooks: [],
      notebook: {},
      computadores: [],
      computador: {},
      ordemservicos: [],
      ordemservico: {},
      selectedDeviceType: 'computer',
    };
  },
  async created() {
    this.usuarios = await usuariosApi.buscarTodosOsUsuarios();
    this.notebooks = await notebooksApi.buscarTodosOsNotebooks();
    this.computadores = await computadoresApi.buscarTodosOsComputadores();
    this.ordemservicos = await ordemApi.buscarTodasAsOrdens();
    console.log(this.ordemservicos);
  },
  methods: {
    async salvar() {
      if (this.ordemservico.id) {
        await ordemApi.atualizarOrdem(this.ordemservico);
      } else {
        await ordemApi.adicionaOrdem(this.ordemservico);
      }
      this.ordemservicos = await ordemApi.buscarTodasAsOrdens();
    },
    async excluir(ordemservico) {
      await ordemApi.excluirOrdem(ordemservico.id);
      this.ordemservico = await ordemApi.buscarTodasAsOrdens();
    },
    editar(ordemservico) {
      Object.assign(this.ordemservico, ordemservico);
    },
  },
};  
</script>

<template>
    <NavBar />
    <div class="container-fluid">
        <div class="col-12">
            <div class="row d-flex justify-content-center">
                <div class="col-md-5 col-12">
                    <div class="mb-3">
                        <label class="form-label">Cliente:</label>
                        <div class="input-group">
                            <select class="input-group-text" v-model="ordemservico.usuario">
                                <option v-for="usuario in usuarios " :key="usuario.id" :value="usuario.id">{{ usuario.first_name}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                  <div class="md-3">
                    <label class="form-label">Computador / Notebook:</label>
                      <div class="row">
                      <select class="form-select" v-model="selectedDeviceType">
                        <option value="computer">Computador</option>
                        <option value="notebook">Notebook</option>
                      </select>
                        <select class="input-group-text" id="select" v-model="ordemservico.computador" v-if="selectedDeviceType === 'computer'">
                          <option v-for="computador in computadores" :key="computador.id" :value="computador.id">{{ computador.gabinete }}</option>
                        </select>
                        <select class="input-group-text" id="select" v-model="ordemservico.notebook" v-if="selectedDeviceType === 'notebook'">
                          <option v-for="notebook in notebooks" :key="notebook.id" :value="notebook.id">{{ notebook.modelo }}</option>
                        </select>
                      </div>
                  </div>
              </div>
            </div>
            <div class="row d-flex align-items-center justify-content-center">
                <div class="col-md-6">
                    <div class="input-group">
                        <span class="input-group">Descrição do problema: </span>
                        <input class="input-group-text" v-model="ordemservico.descricao">
                    </div>
                </div>
                <div class="col-md-2">
                  <div class="input-group">
                    <span class="input-group">Status: </span>
                    <select class="input-group-text" v-model="ordemservico.status">
                      <option>Em análise</option>
                      <option>Em aprovação</option>
                      <option>Aprovado</option>
                      <option>Aguardando peça</option>
                      <option>Em manutenção</option>
                      <option>Aguardando retirada</option>
                      <option>Finalizado</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="input-group">
                    <span class="input-group">Valor: </span>
                    <input class="input-group-text" v-model="ordemservico.valor">
                  </div>
                </div>
            </div>
            <div class="row justify-content-center">
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
                    <th scope="col">Cliente</th>
                    <th scope="col">PC / Notebook</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Status</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Data</th>
                    <th scope="col" id="action">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="ordemservico in ordemservicos" :key="ordemservico.id">
                    <td>{{ ordemservico.usuario?.first_name }}</td>
                    <td>
                      {{ ordemservico.computador?.gabinete }}
                      {{ ordemservico.notebook?.modelo }}
                    </td>
                    <td>{{ ordemservico.descricao }}</td>
                    <td>{{ ordemservico.status }}</td>
                    <td>R$ {{ ordemservico.valor }}</td>
                    <td>{{ ordemservico.data }}</td>
                    <td>
                      <button class="col-1 btn btn-danger" @click="excluir(ordemservico)">Del</button>
                      <div class="w-100" id="separate"></div>
                      <button class="col-1 btn btn-warning" @click="editar(ordemservico)">Edit</button>
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
  </div>
</template>

<style scoped>

.container-fluid {
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 10%;
}

.col-md-5 {
  height: 100px;
}

.input-group-text {
  width: 100%;
}

#input {
  width: 10%;
}

.form-select {
  width: 25%;
}

#select {
  width: 75%;
}

.btn-success {
  margin-top: 100px;
  margin-bottom: 100px;
}

button {
  width: 20%;
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
  .btn-success {
    margin-top: 50px;
    margin-bottom: 50px;  
  }
}

</style>