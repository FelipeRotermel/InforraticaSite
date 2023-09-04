<script>
export default {
  mounted() {
    const button = this.$refs.invisibleButton;
    const audioPlayer = this.$refs.audioPlayer;

    button.addEventListener('transitionend', () => {
      button.classList.remove('expanding');
    });
  },
  methods: {
    handleButtonClick() {
      const button = this.$refs.invisibleButton;
      const image = this.$refs.image;
      const audioPlayer = this.$refs.audioPlayer;

      button.classList.add('clicked', 'expanding');
      image.style.display = 'block';
      audioPlayer.play();

      setTimeout(() => {
        button.classList.add('is-expanded');
      }, 1600);

      audioPlayer.addEventListener('ended', () => {
        setTimeout(() => {
          button.classList.remove('is-expanded');
        }, 0);
        button.classList.remove('clicked');
        image.style.display = 'none';
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <button ref="invisibleButton" @click="handleButtonClick">
      <img ref="image" src="@/assets/img/dio.webp" alt="Imagem" />
      <audio ref="audioPlayer">
        <source src="@/assets/ZaWarudo.mp3" type="audio/mpeg" />
      </audio>
    </button>
  </div>
</template>

<style scoped>
.container {
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 100px;
    height: 200px;
    overflow-x: visible;
}

button {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: 0;
    overflow: hidden;
    transition: background-color 0.3s ease;
}

button img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: none;
}

button.clicked {
    outline: none;
}

button.expanding {
    transition: outline 1s linear;
}

button.is-expanded {
    z-index: 999;
    outline: 2000px solid;
    border-radius: 50%;
    animation: explosion 4.1s infinite;
}

@keyframes explosion {
  0% {
    outline-color: #26beff8e;
    background-color: #26beff;
    box-shadow: 0 0 20px #26beff8e,
                        0 0 40px #26beff8e, 
                        0 0 60px #26beff8e, 
                        0 0 80px #26beff8e, 
                        0 0 120px #26beff8e,
                        0 0 220px #26beff8e,
                        0 0 320px #26beff8e;
  }
  50% {
    outline-color: #9eff4f8c;
    background-color: #9eff4f;
    transform: translate3d(0, 0, 0) scale(1.3);
    box-shadow: 0 0 0 30px #9eff4f8c, 
                        0 0 0 60px #9eff4f8c,
                        0 0 0 100px #9eff4f8c,
                        0 0 0 120px #9eff4fbe, 
                        0 0 0 200px #9eff4f8c,
                        0 0 0 400px #9eff4fab, 
                        0 0 0 450px #9eff4fbb;
  }
  100% {
    outline-color: #fff5389d;
    background-color: #fff538;
    box-shadow: 0 0 20px #fff5389d,
                        0 0 40px #fff5389d, 
                        0 0 60px #fff5389d, 
                        0 0 80px #fff5389d, 
                        0 0 120px #fff5389d,
                        0 0 220px #fff5389d,
                        0 0 320px #fff5389d;
  }
}
</style>
