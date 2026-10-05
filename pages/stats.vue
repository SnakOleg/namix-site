<template>
  <div class="graphics-container">
    <h2 style="color: white">Результаты за 10 дней</h2>
    <div class="graphic">
      <img src="/graph.png" alt="Graphic">
    </div>
  </div>
</template>

<style scoped>
.graphics-container {
  text-align: center;
  font-family: Gilroy-SemiBold;
  font-size: 40px;
  margin-top: 50px;
}

.graphic {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
}

@media screen and (max-width: 480px) {

  .graphics-container {
    font-size: 30px;
  }

}
</style>