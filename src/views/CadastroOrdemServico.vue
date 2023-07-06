<script setup>
    import NavBar from '@/components/nav/NavBarOrdem.vue'
    import ColLeft from '@/components/cadastroordemservico/ColLeft.vue'
    import ColRight from '@/components/cadastroordemservico/ColRight.vue'
</script>

<template>
    <NavBar />
    <div class="container-fluid">
        <div class="row d-flex align-items-center justify-content-center">
            <ColLeft />
            <div class="col-md-4 col-12 order-3">
                <label for="img" class="d-flex custom-file-upload align-items-center justify-content-center">
                    <i class="fas fa-cloud-upload-alt"></i> Escolher imagem
                </label>
                <input type="file" id="img" />
            </div>
            <ColRight />
        </div>
    </div>
</template>

<style scoped>

.container-fluid {
    justify-content: center;
    align-items: center;
    height: 100vh;
}

@media screen and (max-width: 767px) {
    .container-fluid {
    padding-top: 25%;
  }
}

.row {
    height: 100%;
}

.order-3 {
    display: flex;
    justify-content: center;
    align-items: center;
}

.custom-file-upload {
  display: inline-block;
  padding: 8px 12px;
  cursor: pointer;
  background-color: #f1f1f1;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 80%;
  height: 50vh;
}

@media screen and (max-width: 767px) {
    .custom-file-upload {
    height: 100px;
  }
}

.custom-file-upload i {
  margin-right: 8px;
}

input[type="file"] {
  display: none;
}


</style>