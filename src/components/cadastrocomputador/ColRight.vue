<script></script>

<template>
    <div class="col-md-5 col-12">
            <div class="mb-3">
                <label for="basic-url" class="form-label">Cooler:</label>
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3"><i class="bi bi-fan"></i></span>
                    <input type="text" class="form-control"
                        @keyup.enter="salvar"
                        v-model="computador.cooler"
                        placeholder="Marca - modelo"
                    >
                </div>
            </div>
            <div class="mb-3">
                <label for="basic-url" class="form-label">Placa de Vídeo:</label>
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3"><i class="bi bi-cpu"></i></span>
                    <input type="text" class="form-control"
                        @keyup.enter="salvar"
                        v-model="computador.placa_de_video"
                        placeholder="Marca - modelo"
                    >
                </div>
            </div>
            <div class="mb-3">
                <label for="basic-url" class="form-label">Fonte:</label>
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3"><i class="bi bi-outlet"></i></span>
                    <input type="text" class="form-control"
                        @keyup.enter="salvar"
                        v-model="computador.fonte"
                        placeholder="Marca - modelo"
                    >
                </div>
            </div>
            <div class="mb-3">
                <label for="basic-url" class="form-label">Gabinete:</label>
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3"><i class="bi bi-pc"></i></span>
                    <input type="text" class="form-control"
                        @keyup.enter="salvar"
                        v-model="computador.gabinete"
                        placeholder="Marca - modelo"
                    >
                </div>
            </div>
            <div class="mb-3">
                <label for="basic-url" class="form-label">Imagem:</label>
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3"><i class="bi bi-card-image"></i></span>
                    <input type="text" class="form-control" 
                        @keyup.enter="salvar"
                        v-model="computador.imagem"
                        placeholder="URL"
                    >
                </div>
            </div>
        </div>
</template>

<style scoped></style>