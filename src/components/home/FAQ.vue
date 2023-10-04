<script></script>

<template>
    <div class="container-fluid overflow-x-hidden" id="FAQ">
        <div class="col-12 text-center">
            <h3 class="main-title display-6 fw-bold">Perguntas:</h3>
            <hr class="opacity-100">
        </div>
        <div class="row justify-content-evenly">
            <div class="card mb-6">
                <div class="row g-0">
                    <div class="col-md-3">
                        <i class="bi bi-truck"></i>
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title">Como faço para enviar minha máquina?</h5>
                            <p class="card-text">Você pode trazer pessoalmente até nossa loja. Além disso, também oferecemos um serviço de coleta, onde podemos agendar a retirada do seu dispositivo em sua residência ou escritório.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-6">
                <div class="row g-0">
                    <div class="col-md-3">
                        <i class="bi bi-journal-text"></i>
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title">Quanto tempo leva para o orçamento?</h5>
                            <p class="card-text">Normalmente, entre 24 a 48 horas úteis para realizar uma análise completa do problema e fornecer um orçamento preciso. No entanto, em casos mais complexos, esse prazo pode se estender um pouco mais.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-evenly">
            <div class="card mb-6">
                <div class="row g-0">
                    <div class="col-md-3">
                        <i class="bi bi-tools"></i>
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title">Quais tipos de problemas vocês reparam?</h5>
                            <p class="card-text">Falhas no S.0, reparo de hardware, substituição de componentes, remoção de vírus e malware, entre outros. Se você estiver enfrentando algum problema, entre em contato para que possamos ajudá-lo.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-6">
                <div class="row g-0">
                    <div class="col-md-3">
                        <i class="bi bi-calendar-check"></i>
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title">Vocês oferecem garantia?</h5>
                            <p class="card-text">Sim, garantimos a qualidade dos nossos serviços de reparo. Todos os reparos feitos em computadores e notebooks incluem uma garantia de 3 meses, que cobre qualquer problema relacionado ao reparo realizado.</p>
                        </div>
                    </div>
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

.mb-6 {
    max-width: 45%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.col-md-3 {
    margin-top: 30px;
    margin-bottom: 50px;
    text-align: center;
}	

hr {
    border-top: 2px solid rgb(53, 53, 53);
    width: 35%;
    position: absolute;
    left: 33%;
}

.row {
    margin-top: 20px;
}

i {
    font-size: 65px;
}

@media screen and (max-width: 767px) {
    .mb-6 {
        max-width: 90%;
        margin-top: 20px;
    }
}

</style>