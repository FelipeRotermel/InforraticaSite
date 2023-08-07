<script>
import NavBar from '@/components/nav/NavBarOrdem.vue'

export default {
    components: {
        NavBar
    },
}
</script>

<template>
    <NavBar />
    <div class="container-fluid">
        <div class="col-12">
            <div class="row d-flex align-items-center justify-content-center">
                <div class="col-md-5 col-12">
                    <div class="mb-3">
                        <label class="form-label">Cliente:</label>
                        <div class="input-group">
                            <select class="input-group-text">
                                <option value="1">Cliente 1</option>
                                <option value="2">Cliente 2</option>
                                <option value="3">Cliente 3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-12">
                    <div class="md-3">
                        <label class="form-label">Computador:</label>
                        <div class="input-group">
                            <select class="input-group-text">
                                <option value="1">Computador 1</option>
                                <option value="2">Computador 2</option>
                                <option value="3">Computador 3</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row d-flex align-items-center justify-content-center">
                <div class="col-md-10">
                    <div class="input-group">
                        <span class="input-group-text">Descrição do problema: </span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
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
            <div class="input-group mb-3">
              <select class="input-group-text" v-model="selectedFilter">
                <option value="cliente">Cliente</option>
                <option value="computador">Computador</option>
              </select>
              <input v-if="selectedFilter" type="text" class="form-control" :placeholder="'Pesquisar ' + selectedFilter" v-model="filters.computador[selectedFilter]">
            </div>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Cliente</th>
                    <th scope="col">Computador</th>
                    <th scope="col" id="action">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="computador in filteredComputadores" :key="computador.id">
                    <td>{{ computador.cliente }}</td>
                    <td>{{ computador.computador }}</td>
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
    </div>
</template>

<style scoped>

.container-fluid {
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 5%;
}

.col-md-5 {
    height: 100px;
}

.input-group-text {
    width: 100%;
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