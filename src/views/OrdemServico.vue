<script setup>
  import NavBar from '@/components/nav/NavBarAlt.vue'
  import PcCard from '@/components/ordemservico/PcCard.vue'
</script>

<template>
  <NavBar />
  <div class="background-image"></div>
  <div class="container-fluid">
    <PcCard />
  </div>
</template>

<style scoped>

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/img/bgintro.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.container-fluid {
  justify-content: center;
  align-items: center;
  margin-top: 6%;
}

</style>
