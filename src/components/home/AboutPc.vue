<script></script>

<template>
    <div class="container-fluid overflow-x-hidden" id="aboutInforratica">
        <div class="triangleLeft"></div>
        <div class="container container_item">
            <div class="row">
                <div class="col-md-6" id="divLeft">
                    <img class="img-fluid" src="@/assets/img/Pc.png">
                </div>
                <div class="col-md-6 row">
                    <div>
                        <h3 class="fs-1">Computadores Gamers</h3>
                        <p class="fs-5 text">
                            Também somos expecialistas em computadores gamers de alta performace. Sua máquina irá voltar novinha em folha e pronta para rodar os jogos mais pesados do mercado.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="triangleRight"></div>
    </div>
</template>

<style scoped>

.container-fluid {
    margin: 0;
    padding: 0;
    position: relative;
    background-color: #dadada;
}

.col-md-6 {
    display: flex;
    align-items: center;
    margin: 0;
}

#divLeft {
    background-image: url("@/assets/img/PaintLeft.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

img {
    width: 100%;
    height: 100%;
}

.triangleLeft {
    border-Left: 100vw solid transparent;
    border-top: 120px solid white;
}

.triangleRight {
    border-right: 98.8vw solid transparent;
    border-bottom: 120px solid white;
}

</style>