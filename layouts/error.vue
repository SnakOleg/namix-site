<template>
  <div class="error-container">
    <div class="error-content">
      <h1 class="error-title">404</h1>
      <p class="error-description">Упс! Что-то пошло не так...</p>
      <img class="error-image" :src="catImageUrl" alt="">
      <p class="error-message">{{ errorMessage }}</p>
      <router-link to="/" class="error-button">Вернуться на главную</router-link>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  setup() {
    const props = defineProps({
      error: Object
    })
  },
  name: 'ErrorPage',
  data() {
    return {
      catImageUrl: '',
    };
  },
  mounted() {
    this.getRandomCatImage();
  },
  methods: {
    getRandomCatImage() {
      fetch('https://api.thecatapi.com/v1/images/search?mime_types=jpg,png&size=small')
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data) && data.length > 0) {
            this.catImageUrl = data[0].url;
          }
        })
        .catch(error => {
          console.error('Failed to fetch cat image:', error);
        });
    },
  },
  computed: {
    errorMessage() {
      const errorMessages = [
        'Страница не найдена.',
        'Извините, произошла ошибка.',
        'Запрошенная страница недоступна.',
      ];
      return errorMessages[Math.floor(Math.random() * errorMessages.length)];
    },
  },
})
</script>

<style scoped>
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #101010;
  padding: 2rem;
}

.error-content {
  text-align: center;
}

.error-title {
  font-size: 5rem;
  font-weight: bold;
  color: #ff5555;
  margin-bottom: 2rem;
}

.error-description {
  font-size: 2rem;
  color: #505050;
}

.error-image {
  max-width: 400px;
  margin-bottom: 2rem;
  border-radius: 5%;
}

.error-message {
  font-size: 1.5rem;
  color: #505050;
  margin-bottom: 3rem;
}

.error-button {
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  background-color: rgba(51, 92, 255, 0.8);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
}

.error-button:hover {
  background-color: rgba(64, 93, 210, 0.8);
}

</style>
