<script>
import ClientesApi from '@/api/clientes'
import NavBar from '@/components/nav/NavBarOrdem.vue'

const clientesApi = new ClientesApi();

export function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
  if (cpf.length !== 11) {
    return false;
  }

  // Verifica se todos os dígitos são iguais (caso comum de CPFs inválidos)
  if (/^(\d)\1+$/.test(cpf)) {
    return false;
  }

  // Calcula o primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let remainder = sum % 11;
  let digit1 = remainder < 2 ? 0 : 11 - remainder;

  // Calcula o segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder = sum % 11;
  let digit2 = remainder < 2 ? 0 : 11 - remainder;

  // Verifica se os dígitos verificadores estão corretos
  if (parseInt(cpf.charAt(9)) !== digit1 || parseInt(cpf.charAt(10)) !== digit2) {
    return false;
  }

  return true;
}

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
      if (!validarCPF(this.cliente.cpf)) {
      this.cpfErrorMessage = 'CPF inválido';
      return;
    }
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
    <div class="row d-flex justify-content-center align-items-center" id="main">
      <div class="col-xl-6">
        <div class="card">
          <div class="row g-0" id="content">
            <div class="col-lg-12">
              <div class="card-body p-md-3 mx-md-4">
                <form>
                  <div class="form-outline mb-4">
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon1"><img src="https://cdn-icons-png.flaticon.com/512/552/552721.png" alt="" style="height: 20px; width: 20px;"></span>
                        <input class="form-control" v-model="cliente.nome" type="text" placeholder="Nome">
                    </div>
                  </div>
                  <div class="form-outline mb-4">
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon1"><img src="https://cdn-icons-png.flaticon.com/128/542/542689.png" alt="" style="height: 20px; width: 20px;"></span>
                        <input class="form-control" v-model="cliente.email" type="text" placeholder="Email">
                    </div>
                  </div>
                  <div class="form-outline mb-4">
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon1"><img src="https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Phone-Call-Telephone-512.png" alt="" style="height: 20px; width: 20px;"></span>
                        <input class="form-control" v-model="cliente.telefone" type="number" placeholder="Telefone/Celular">
                    </div>
                  </div>    
                  <div class="form-outline mb-4">
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon1"><img src="https://img.freepik.com/free-icon/placeholder_318-903608.jpg" alt="" style="height: 20px; width: 20px;"></span>
                        <input class="form-control" v-model="cliente.endereco" type="text" placeholder="Endereço">
                    </div>
                  </div>
                  <div class="form-outline mb-4">
                    <div class="input-group">
                    <span class="input-group-text" id="basic-addon1"><img src="https://cdn.icon-icons.com/icons2/1238/PNG/512/identitycard_83864.png" alt="" style="height: 20px; width: 20px;"></span>
                    <input class="form-control" :class="{ 'is-invalid': cpfErrorMessage }" v-model="cliente.cpf" type="text" :placeholder="cpfErrorMessage ? cpfErrorMessage : 'CPF'" @focus="limparErroCPF">
                  </div>
                  <span v-if="cpfErrorMessage" class="text-danger">{{ cpfErrorMessage }}</span>
                  </div>
                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg mb-3" type="button" @click="salvar" value="">Cadastrar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                            <th scope="col">Email</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Açoes</th>
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
                      <button @click="excluir(cliente)" id="bt" class="btn btn-danger">Excluir</button>
                      <button @click="editar(cliente)" id="bt" class="btn btn-warning">Editar</button>
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
#basic-addon1 {
    border: none;
}
#bt {
  margin: 5px;
}
.is-invalid {
  border-color: red;
  color: red;
}
</style>