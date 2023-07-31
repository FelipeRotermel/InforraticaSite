<script>
import ClientesApi from '@/api/clientes'
import NavBar from '@/components/nav/NavBarOrdem.vue'

const clientesApi = new ClientesApi();

// export function validarCPF(cpf) {
//   cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
//   if (cpf.length !== 11) {
//     return false;
//   }

//   // Verifica se todos os dígitos são iguais (caso comum de CPFs inválidos)
//   if (/^(\d)\1+$/.test(cpf)) {
//     return false;
//   }

//   // Calcula o primeiro dígito verificador
//   let sum = 0;
//   for (let i = 0; i < 9; i++) {
//     sum += parseInt(cpf.charAt(i)) * (10 - i);
//   }
//   let remainder = sum % 11;
//   let digit1 = remainder < 2 ? 0 : 11 - remainder;

//   // Calcula o segundo dígito verificador
//   sum = 0;
//   for (let i = 0; i < 10; i++) {
//     sum += parseInt(cpf.charAt(i)) * (11 - i);
//   }
//   remainder = sum % 11;
//   let digit2 = remainder < 2 ? 0 : 11 - remainder;

//   // Verifica se os dígitos verificadores estão corretos
//   if (parseInt(cpf.charAt(9)) !== digit1 || parseInt(cpf.charAt(10)) !== digit2) {
//     return false;
//   }

//   return true;
// }

export default {
  components: {
    NavBar,
  },
  
  data() {
    return {
      clientes: [],
      cliente: {
        cpf:''
      },
      cpfErrorMessage: '',
    };
  },
  async created() {
    this.clientes = await clientesApi.buscarTodosOsClientes();
  },
  methods: {
    async salvar() {
    //   if (!validarCPF(this.cliente.cpf)) {
    //   this.cpfErrorMessage = 'CPF inválido';
    //   return;
    // }
      if (this.cliente.id) {
        await clientesApi.atualizarCliente(this.cliente);
      } else {
        await clientesApi.adicionarCliente(this.cliente);
      }
      this.clientes = await clientesApi.buscarTodosOsClientes();
      this.cliente = {};
    },
    async excluir(cliente) {
      await clientesApi.excluirCliente(cliente.id);
      this.clientes = await clientesApi.buscarTodosOsClientes();
    },
    editar(cliente) {
      Object.assign(this.cliente, cliente);
    },
    limparErroCPF() {
      this.cpfErrorMessage = '';
    } 
  },
};
</script>
<template>
<NavBar />
<div class="container-fluid">
    <div class="row d-flex align-items-center justify-content-center" id="main">
      <div class="col-md-3 col-12"></div>
      <div class="col-md-6 col-12">
              <div class="mb-3">
                <label class="form-label">Nome:</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon3"><i class="bi bi-person"></i></span>
                  <input type="text" class="form-control"
                    @keyup.enter="salvar" 
                    v-model="cliente.nome"
                    placeholder="Nome - Sobrenome"
                  >
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">CPF:</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon3"><i class="bi bi-person-vcard"></i></span>
                  <input type="text" class="form-control"
                    @keyup.enter="salvar" 
                    v-model="cliente.cpf"
                    placeholder="99999999999"
                  >
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Email:</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon3"><i class="bi bi-envelope"></i></span>
                  <input type="text" class="form-control"
                    @keyup.enter="salvar" 
                    v-model="cliente.email"
                    placeholder="nome@gmail.com"
                  >
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Telefone:</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon3"><i class="bi bi-telephone"></i></span>
                  <input type="text" class="form-control"
                    @keyup.enter="salvar" 
                    v-model="cliente.telefone"
                    placeholder="(99) 99999-9999"
                  >
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Endereço:</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon3"><i class="bi bi-geo-alt"></i></span>
                  <input type="text" class="form-control"
                    @keyup.enter="salvar" 
                    v-model="cliente.endereco"
                    placeholder="Núm.Casa, Rua, Bairro, Cidade"
                  >
                </div>
              </div>
          </div>
          <div class="col-md-3 col-12"></div>
          <button class="btn btn-success" @click="salvar">Salvar</button>
        </div>
    </div>
    <div class="col-12">
      <div class="row g-0">
        <div class="col-md-12">
          <div class="card-body">
            <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Cliente</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">CPF</th>
                            <th scope="col" id="action">Ações</th>
                        </tr>
                        </thead>
                <tbody>
                  <tr v-for="cliente in clientes" :key="cliente.id">
                    <td>{{ cliente.nome }}</td>
                    <td>{{ cliente.email }}</td>
                    <td>{{ cliente.telefone }}</td>
                    <td>{{ cliente.endereco }}</td>
                    <td>{{ cliente.cpf }}</td>
                    <td>
                      <button @click="excluir(cliente)" class="col-1 btn btn-danger">Del</button>
                      <div class="w-100" id="separate"></div>
                      <button @click="editar(cliente)" class="col-1 btn btn-warning">Edit</button>
                    </td>
                  </tr>
                </tbody>
                    </table>

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

button {
  width: 20%;
}

#action {
  width: 5%;
}

#separate {
  height: 20px;
}

.is-invalid {
  border-color: red;
  color: red;
}

.col-1 {
  width: 100%;
}

@media screen and (max-width: 767px) {
  .container-fluid {
    padding-top: 25%;
  }
  table {
    width: 800px;
  }
}

</style>