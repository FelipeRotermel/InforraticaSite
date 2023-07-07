<script></script>

<template>
    <div class="col-md-5 col-12">
            <div class="mb-3">
                <label for="basic-url" class="form-label">Placa-mãe:</label>
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3"><i class="bi bi-motherboard"></i></span>
                    <input type="text" class="form-control" 
                        @keyup.enter="salvar" 
                        v-model="computador.placa_mae" 
                        placeholder="Marca - modelo"
                    >
                </div>
            </div>
            <div class="mb-3">
                <label for="basic-url" class="form-label">Processador:</label>
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3"><i class="bi bi-cpu"></i></span>
                    <input type="text" class="form-control" 
                        @keyup.enter="salvar"
                        v-model="computador.processador"
                        placeholder="Marca - modelo"
                    >
                </div>
            </div>
            <div class="mb-3">
                <label for="basic-url" class="form-label">Memória RAM:</label>
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3"><i class="bi bi-memory"></i></span>
                    <input type="text" class="form-control" 
                        @keyup.enter="salvar"
                        v-model="computador.memoria_ram"
                        placeholder="Marca - modelo"
                    >
                </div>
            </div>
            <div class="mb-3">
                <label for="basic-url" class="form-label">SSD:</label>
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3"><i class="bi bi-device-hdd"></i></span>
                    <input type="text" class="form-control"
                        @keyup.enter="salvar"
                        v-model="computador.ssd"
                        placeholder="Marca - modelo"
                    >
                </div>
            </div>
            <div class="mb-3">
                <label for="basic-url" class="form-label">HD:</label>
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3"><i class="bi bi-device-hdd"></i></span>
                    <input type="text" class="form-control"
                        @keyup.enter="salvar"
                        v-model="computador.hd"
                        placeholder="Marca - modelo"
                    >
                </div>
            </div>
        </div>
</template>

<style scoped></style>