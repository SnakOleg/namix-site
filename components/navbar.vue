<template>
  <div class="navbar">
    <div class="navbar-content">
      <div class="logo-price">
        <div class="logo-container" @click="toggleMenu">
          <NuxtImg src="/logo_lined.svg" alt="Logo"/>
        </div>
      </div>
      <div class="nav-links" :class="{ active: isMenuOpen }">
        <a href="/">Главная</a>
        <a href="#">Партнеры</a>
        <a href="#">Магазин</a>
        <a href="#">Услуги</a>
        <a href="/stats">Статистика</a>
      </div>
      <div class="price-avatar-container">
        <div class="avatar-container" @click="toggleAvatarMenu">
          <img class="avatar" src="/test.gif" alt="Logo">
          <div class="burger-menu" :class="{ active: isAvatarMenuOpen }" @click="toggleAvatarMenu">
            <div v-if="isAvatarMenuOpen" class="nav-links-avatar" :class="{ active: toggleAvatarMenu }">
              <div class="balance">Баланс: 0 ₽</div>
              <div class="divider"></div>
              <a href="/">Пополнить</a>
              <a href="#">Выйти</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const isAvatarMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleAvatarMenu = () => {
  isAvatarMenuOpen.value = !isAvatarMenuOpen.value;
};

</script>

<style scoped>
.avatar-container:hover .avatar {
  border-color: #2ecc71;
  transition: border-color 0.3s ease;
}

.burger-menu.active + .nav-links {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  background-color: #000000;
  border: 2px solid #8527EC;
  padding: 10px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.burger-menu.active {
  display: block;
}

.balance {
  color: white;
  font-family: Gilroy-SemiBold;
  font-size: 16px;
  margin-bottom: 5px;
}

.avatar-menu button {
  padding: 5px 10px;
  background-color: #8527EC;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.avatar-menu button:hover {
  background-color: #6c1d99;
}

.navbar {
  text-align: center;
  padding: 10px;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1170px;
  margin: auto;
}

.logo-container {
  padding: 5px;
}

.nav-links, .nav-links-avatar {
  z-index: 99;
  display: flex;
  gap: 80px;
  align-items: center;
}

.nav-links a, .nav-links-avatar a {
  text-decoration: none;
  font-family: Gilroy-Light;
  font-size: 15px;
  color: #FFF;
  position: relative;
}

.nav-links a:last-child, .nav-links-avatar a:last-child {
  margin-right: 0;
}

.nav-links a::after, .nav-links-avatar a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 2px;
  background-color: #8527EC;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.nav-links a:hover::after, .nav-links-avatar a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.nav-links-avatar {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 38px;
  right: 14px;
  width: 129px;
  background-color: #000000;
  border: 2px solid #8527EC;
  padding: 10px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-links-avatar a {
  text-decoration: none;
  font-family: Gilroy-Light;
  font-size: 15px;
  color: #FFF;
  position: relative;
}

.nav-links-avatar.active {
  display: flex;
  gap: 15px;
  border-radius: 15px;
  opacity: 1;
  padding: 20px;
}

.avatar {
  border: 3px solid #8527EC;
  padding: 5px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.avatar-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
}

.avatar img {
  width: 100%;
  height: auto;
}

.burger-menu {
  display: none;
  cursor: pointer;
}

.burger-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
  position: relative;
}

.divider {
  width: 100%;
  height: 2px;
  border-radius: 30px;
  background: #8527EC;
}

@media (max-width: 768px) {
  .logo-container {
    cursor: pointer;
  }

  .burger-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 999;
    position: relative;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 83px;
    left: 21px;
    width: 100%;
    background-color: #000000;
    border: 2px solid #8527EC;
    padding: 10px;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .nav-links a {
    text-decoration: none;
    font-family: Gilroy-Light;
    font-size: 15px;
    color: #FFF;
    position: relative;
  }

  .nav-links.active {
    display: flex;
    width: 20%;
    gap: 28px;
    border-radius: 15px;
    opacity: 1;
    padding: 20px;
  }

  .avatar-container:hover .burger-menu {
    display: block;
  }
}
</style>
