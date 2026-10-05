<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="line"></div>
        <div class="footer-content">
          <div class="copyright">© 2024&nbsp;<span style="color: #8527EC; font-family: Gilroy-Bold;">Namix</span></div>
          <div class="footer-col">
            <ul>
              <li>
                <div class="icon-text-container" @click="openTerms">
                  <img src="/arcticons_pulsesms.svg" alt="Icon"/>
                  <a class="white--text">Пользовательское соглашение</a>
                </div>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <ul>
              <li>
                <div class="icon-text-container" @click="openSPolicy">
                  <img src="/arcticons_pulsesms.svg" alt="Icon"/>
                  <a class="white--text">Политика конфиденциальности</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.container {
  max-width: 1170px;
  margin: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #FFF;
  text-align: center;
  font-family: Gilroy-SemiBold;
  font-size: 23px;
}

ul {
  list-style: none;
}

.footer {
  margin-top: 100px;
}

.footer-content {
  width: 91%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-col {
  width: 30%;
}

.footer-col h4 {
  font-size: 18px;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;
}

.footer-col h4::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  background-color: #4D74FF;
  height: 2px;
  box-sizing: border-box;
  width: 50px;
}

.footer-col ul li:not(:last-child) {
  margin-bottom: 10px;
}

.footer-col ul li a {
  font-size: 16px;
  text-transform: capitalize;
  text-decoration: none;
  font-weight: 300;
  color: #bbbbbb;
  display: inline-block;
  transition: all 0.3s ease;
  cursor: pointer;
}

.footer-col ul li a:hover {
  color: #ffffff;
}

.line {
  width: 100%;
  height: 2px;
  border-radius: 30px;
  background: #8527EC;
  margin-bottom: 10px;
}

.copyright {
  display: flex;
  align-items: center;
}

.icon-text-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s ease;
}

.icon-text-container:hover {
  color: #ffffff;
}

.icon-text-container img {
  margin-right: 10px;
}

.icon-text-container:hover img {
  filter: brightness(1.5);
}

@media (max-width: 767px) {
  .footer-col {
    width: 100%;
    margin-bottom: 30px;
  }
}
</style>
