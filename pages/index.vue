<template>
  <div>
    <div class="banner-container">
      <img src="/banner.png" alt="Banner">
    </div>
    <div class="button-container">
      <div class="button-group">
        <div class="button-links" @click="TikTok">
          <img src="/tiktok.svg" alt="Discord">
          TikTok
        </div>
        <div class="button-links" @click="VK">
          <img src="/vk.svg" alt="VK">
          VKontakte
        </div>
        <div class="button-links" @click="Telegram">
          <img src="/telegram.svg" alt="Discord">
          Telegram
        </div>
        <div class="button-links" @click="Discord">
          <img src="/discord.svg" alt="Discord">
          Discord
        </div>
        <div class="button-links" @click="Youtube">
          <img src="/youtube.svg" alt="Youtube">
          Youtube
        </div>
        <div class="button-links" @click="Twitch">
          <img src="/twitch.svg" alt="Twitch">
          Twitch
        </div>
      </div>
    </div>
    <div class="statistics-container">
      <div class="blocks-container">
        <div class="block">
          <div class="block-name">Участников</div>
          <div class="block-description">-</div>
        </div>
        <div class="block">
          <div class="block-name">Онлайн</div>
          <div class="block-description">-</div>
        </div>
        <div class="block">
          <div class="block-name">В войсах</div>
          <div class="block-description">-</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'indexPage',
  methods: {
    Telegram() {
      window.open('/', '_blank');
    },
    Discord() {
      window.open('/', '_blank');
    },
    TikTok() {
      window.open('/', '_blank');
    },
    Youtube() {
      window.open('/', '_blank');
    },
    Twitch() {
      window.open('/', '_blank');
    },
    VK() {
      window.open('/', '_blank');
    }
  }
}
</script>

<style scoped>

.banner-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-container img,
.graphic img {
  max-width: 100%;
  height: auto;
}

.statistics-container {
  text-align: center;
  font-family: Gilroy-SemiBold;
  font-size: 40px;
  margin-top: -13vh;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 180px;
}

.button-links {
  color: white;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, filter 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Gilroy;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 180px;
  cursor: pointer;
}

.button-links:hover {
  transform: scale(0.9);
  filter: brightness(0.8);
}

.button-links img {
  width: 95px;
  height: auto;
  margin-bottom: 9px;
}

.button-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.button-group button:not(:last-child) {
  margin-right: 100px;
  margin-bottom: 110px;
}

.blocks-container {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
}

.block {
  display: flex;
  align-items: center;
  width: 347px;
  height: 191px;
  border-radius: 30px;
  border: 7px solid #8527EC;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}

.block-name {
  color: white;
  text-align: center;
  font-family: Gilroy-SemiBold;
  font-size: 33px;
}

.block-description {
  color: #8527EC;
  text-align: center;
  font-family: Gilroy-Bold;
  font-size: 74px;
}

@media screen and (max-width: 768px) {
  .blocks-container {
    flex-direction: column;
    gap: 20px;
  }

  .block {
    width: 100%;
  }

  .block-description {
    font-size: 40px;
  }

  .button-group {
    align-items: center;
  }

  .button-links {
    width: 80%;
    margin-bottom: calc(5vh + 15px);
  }

  .button-group button:not(:last-child) {
    margin-bottom: calc(5vh + 15px);
  }
}

@media screen and (max-width: 480px) {
  .banner-container {
    margin-bottom: 100px;
  }

  .statistics-container {
    font-size: 30px;
    margin-top: -100px;
  }

  .blocks-container {
    gap: 10px;
  }

  .block-description {
    font-size: 24px;
  }
}

</style>