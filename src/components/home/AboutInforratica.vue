<script></script>

<template>
    <div class="container-fluid overflow-x-hidden" id="aboutInforratica">
        <div class="container container_item">
            <div class="row">
                <div class="col-12 text-center">
                    <h3 class="main-title display-6 fw-bold">Sobre a Inforratica:</h3>
                    <hr class="opacity-100">
                </div>
                <div class="col-md-7">
                    <img src="@/assets/img/InfoPcLeft.jpg" alt="">
                    <img src="@/assets/img/InfoPcCenter.jpg" alt="">
                    <img src="@/assets/img/InfoPcRight.jpg" alt="">
                </div>
                <div class="col-md-5">
                    <h3 class="about-title">A mais confiável</h3>
                    <p class="fs-5 text">
                        Inforratica é uma loja especializada em reparo de computadores e notebooks. Começamos nossa operação em 2023, com o objetivo de fornecer os melhores produtos e serviços de informática para nossos clientes.
                        Oferecemos serviços de manutenção e suporte técnico para garantir que nossos clientes possam desfrutar de uma experiência tranquila e sem problemas com seus equipamentos.
                    </p>
                    <ul>
                        <li><i class="bi bi-check-circle-fill"></i> Entre em contato</li>
                        <li><i class="bi bi-check-circle-fill"></i> Coletamos o equipamento</li>
                        <li><i class="bi bi-check-circle-fill"></i> Receba seu orçamento</li>
                        <li><i class="bi bi-check-circle-fill"></i> Tenha sua máquina reparada</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.container-fluid {
    position: relative;
    padding-bottom: 50px;
}

.col-12 {
    margin-top: 50px;
    margin-bottom: 50px;
}

img {
    min-height: 450px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 31%;
    object-fit: cover;
    margin-left: 1.5px;
    margin-right: 1.5px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    transition: all 0.3s ease 0s;
}

img:hover {
    transform: scale(1.05);
}

ul {
    list-style:none
}

li {
    margin-left: -10px;
}

hr {
    border-top: 2px solid rgb(53, 53, 53);
    width: 35%;
    position: absolute;
    left: 33%;
}

@media screen and (max-width: 767px) {
    img {
        width: 31%;
    }
    .about-title {
        text-align: center;
        margin-top: 50px;
    }
}

</style>