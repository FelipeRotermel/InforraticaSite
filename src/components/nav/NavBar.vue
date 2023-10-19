<script>
localStorage.setItem('token', 'seu_token_de_autenticacao');

// Recuperar um valor do localStorage
const token = localStorage.getItem('token');

// Remover um valor do localStorage
localStorage.removeItem('token');
export default {
  computed: {
    isLoggedIn() {
      return localStorage.getItem('token') !== null;
    },
    userRole() {
        const role = localStorage.getItem('userRole');
        console.log('UserRole:', role); // Isso irá imprimir o valor no console
        return role;
    },
  },
};
</script>

<template>
    <nav class="navbar navbar-expand-lg fixed-top" id="navbar">
        <div class="container-fluid">
            <a class="navbar-brand text-light" href="#" aria-current="page">
                <router-link to="/" v-scroll-to="'#navbar'"><img src="@/assets/img/logo.png" class="logo">Inforratica</router-link>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <img src="@/assets/img/bars-solid.png" class="bars" alt="">
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                <ul class="navbar-nav mb-3 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" v-scroll-to="'#navbar'">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-scroll-to="'#aboutInforratica'">Sobre a Inforratica</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-scroll-to="'#marcas'">Marcas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-scroll-to="'#FAQ'">Perguntas</a>
                    </li>
                    <li class="nav-item dropdown" v-if="userRole === 'admin'">
                        <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Cadastros
                        </a>
                        <ul class="dropdown-menu">
                            <li class="nav-item">
                                <router-link class="nav-link drop" to="/cadastro-ordem-servico">Cadastro O.S.</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link drop" to="/cadastro-computador">Cadastro PC</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link drop" to="/cadastro-notebook">Cadastro Note</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link drop" to="/cadastro-usuario">Cadastro Cliente</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                <ul class="navbar-nav mb-3 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link"><router-link to="/ordem-servico">Ordem de Serviço</router-link></a>
                    </li>
                    <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                        <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
                        <hr class="d-lg-none my-2 text-white-50">
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/login">{{ isLoggedIn ? 'Logado' : 'Login' }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>

.navbar {
    background-image: linear-gradient(#000000,#000000b0,transparent);
    transition: background-color 0.1s linear;
    transition: 0.4s;
    padding: 0;
}

.navbar.solid {
    background-color: #212731;
    transition: background-color 0.7s ease 0s;
    transition: 0.4s;
    padding: 0;
}

.logo {
    height: 70px;
    width: 70px;
    transition: 0.4s;
}

.logo.solid {
    height: 30px;
    width: 30px;
    transition: 0.4s;
}

a {
    color: white;
    margin-top: 5px;
    transition: 0.25s;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
}

a:hover {
    color: rgb(174, 174, 174);
}

.bars{
    width: 35px;
    height: 35px;
}

.dropdown-menu {
    background-color: #212731;
}

@media screen and (max-width: 767px) {
    .drop {
        margin-left: 20px;
    }
    .dropdown-menu {
        background-color: transparent;
    }
}

</style>