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
      <img ref="image" src="@/assets/dio.webp" alt="Imagem" />
      <audio ref="audioPlayer">
        <source src="@/assets/ZaWarudo.mp3" type="audio/mpeg" />
      </audio>
    </button>
  </div>
</template>

<style scoped>
.container {
    left: 47%;
    position: absolute;
    transform: translateX(-50%);
    width: 100px;
    height: 200px;
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
    animation: changeColor 4.1s infinite;
}

@keyframes changeColor {
  0% {
    outline-color: #26beff;
    background-color: #26beff;
  }
  50% {
    outline-color: #9eff4f;
    background-color: #9eff4f;
  }
  100% {
    outline-color: #fff538;
    background-color: #fff538;
  }
}
</style>
