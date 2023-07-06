<script></script>

<template>
    <div id="marcas" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <h1 class="fs-1 text-center">Trabalhamos com:</h1>
            <div class="carousel-item active">
                <div class="cards-wrapper">
                    <div class="card">
                        <img src="https://logodownload.org/wp-content/uploads/2014/09/acer-logo-1.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card">
                        <img src="https://logosmarcas.net/wp-content/uploads/2020/04/Sony-Logo.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card">
                        <img src="https://logodownload.org/wp-content/uploads/2014/09/asus-logo-0.png" class="card-img-top" alt="...">
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="cards-wrapper">
                    <div class="card">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Toshiba_logo.svg/2560px-Toshiba_logo.svg.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card">
                        <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/09/Figura-Logo-HP-PNG.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card">
                        <img src="https://logodownload.org/wp-content/uploads/2014/09/lenovo-logo-0.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card">
                        <img src="https://static.vecteezy.com/system/resources/previews/019/909/451/original/dell-transparent-dell-free-free-png.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card">
                        <img src="https://logodownload.org/wp-content/uploads/2013/12/apple-logo-0.png" class="card-img-top" alt="...">
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#marcas" data-bs-slide="prev">
            <i class="bi bi-arrow-left-circle"></i>
        </button>
        <button class="carousel-control-next btn-outline-secondary" type="button" data-bs-target="#marcas" data-bs-slide="next">
            <i class="bi bi-arrow-right-circle"></i>
        </button>
    </div>
</template>

<style scoped>

.carousel {
    box-shadow: inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px rgba(255,255,255,0.9);
}
.cards-wrapper {
  display: flex;
  justify-content: center;
}

.card {
    justify-content: center;
    align-items: center;
    padding-right: 2%;
    padding-left: 2%;
}
.card img {
  max-width: 100px;
  max-height: 100px;
}

.card {
  margin: 0 0.5em;
  border: none;
  border-radius: 0;
  background-color: transparent;
}
.carousel-inner {
  padding: 1em;
}

i {
    font-size: 2rem;
    color: black;
}
</style>