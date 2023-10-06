<script>
import UsuariosApi from '@/api/usuarios'
import NavBar from '@/components/nav/NavBarAlt.vue'

const usuariosApi = new UsuariosApi();

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
      usuarios: [],
      usuario: {},
      cpfErrorMessage: '',
    };
  },
  async created() {
    this.usuarios = await usuariosApi.buscarTodosOsUsuarios();
  },
  methods: {
    async salvar() {
    //   if (!validarCPF(this.cliente.cpf)) {
    //   this.cpfErrorMessage = 'CPF inválido';
    //   return;
    // }
      if (this.usuario.id) {
        await usuariosApi.atualizarUsuario(this.usuario);
      } else {
        await usuariosApi.adicionarUsuario(this.usuario);
      }
      this.usuarios = await usuariosApi.buscarTodosOsUsuarios();
      this.usuarios = {};
    },
    async excluir(usuario) {
      await usuariosApi.excluirUsuario(usuario.id);
      this.usuarios = await usuariosApi.buscarTodosOsUsuarios();
    },
    editar(usuario) {
      Object.assign(this.usuario, usuario);
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
              v-model="usuario.first_name"
              placeholder="Seu nome"
            >
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Sobrenome:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-person"></i></span>
            <input type="text" class="form-control"
              @keyup.enter="salvar" 
              v-model="usuario.last_name"
              placeholder="Seu sobrenome"
            >
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Email:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-envelope"></i></span>
            <input type="text" class="form-control"
              @keyup.enter="salvar" 
              v-model="usuario.email"
              placeholder="seuemail@gmail.com"
            >
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Telefone:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-telephone"></i></span>
            <input type="text" class="form-control"
              @keyup.enter="salvar" 
              v-model="usuario.telefone"
              placeholder="9999999999"
            >
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">CPF:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-person-vcard"></i></span>
            <input type="text" class="form-control"
              @keyup.enter="salvar" 
              v-model="usuario.cpf"
              placeholder="99999999999"
            >
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Senha:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-lock"></i></span>
            <input type="text" class="form-control"
              @keyup.enter="salvar" 
              v-model="usuario.password"
              placeholder="Sua senha"
            >
          </div>
        </div>
      </div>
      <div class="col-md-3 col-12"></div>
      <button class="btn btn-success" @click="salvar">Salvar</button>
    </div>
    <div class="col-12" id="clientes">
      <div class="row g-0">
        <div class="col-md-12">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Sobrenome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">CPF</th>
                    <th scope="col" id="action">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="usuario in usuarios" :key="usuario.id">
                    <td>{{ usuario.first_name }}</td>
                    <td>{{ usuario.last_name }}</td>
                    <td>{{ usuario.email }}</td>
                    <td>{{ usuario.telefone }}</td>
                    <td>{{ usuario.cpf }}</td>
                    <td>
                      <button @click="excluir(usuario)" class="col-1 btn btn-danger">Del</button>
                      <div class="w-100" id="separate"></div>
                      <button @click="editar(usuario)" class="col-1 btn btn-warning">Edit</button>
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

.btn-success {
  margin-top: -5%;
}

@media screen and (max-width: 767px) {
  .container-fluid {
    padding-top: 25%;
  }
  table {
    width: 800px;
  }
  #clientes {
    padding: 3%;
  }
}
</style>