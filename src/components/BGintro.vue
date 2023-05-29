<script></script>

<template>
    <div class="container-fluid">
        <div class="carousel slide w-100">
            <div class="carousel-inner">
            </div>
            <div class="carousel-caption d-flex align-items-center justify-content-center text-center">
                <div class="text">
                    <h1><strong>Manutenção e reparo de computadores e notebooks</strong></h1>
                    <h5>Assistência técnica especializada em notebooks e computadores</h5>
                    <button type="button" class="btn btn-outline-light fs-4" v-scroll-to="'#aboutInforratica'">
                        Introdução
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.container-fluid {
    background-color: rgb(232, 232, 232);
    padding: 0;
    margin: 0;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

.carousel {
    background-image: url("@/assets/img/bgintro.png");
    min-height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
}

.carousel-caption {
    margin-bottom: 15vh;
}

.text {
    margin-bottom: 7%;
}

h1, h5 {
    margin-bottom: 30px;
}

</style>