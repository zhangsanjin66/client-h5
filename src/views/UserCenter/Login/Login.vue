<template>
  <div class="login-bgc">
    <div class="login flex">
      <div class="back"></div>
      <div class="back"></div>
      <div class="back"></div>
      <div class="back"></div>
      <div class="back"></div>
      <div class="back"></div>
    </div>
    <div class="main">
      <div>
        <img
          class="icon-menu"
          src="../../../assets/images/menu_icon.png"
          alt=""
        />
      </div>
      <div>
        <div class="align-center">
          <div class="text">
            <div class="mirroring">Mirroring Cast screen</div>
            <div class="sharing">Real-time screen sharing</div>
          </div>
          <div class="icon-clock">
            <img src="../../../assets/images/clock_icon.png" alt="" />
          </div>
        </div>
        <div class="icon-tv">
          <img src="../../../assets/images/tv_icon.png" alt="" />
        </div>
      </div>
      <div class="footer">
        <div class="flex-between">
          <div class="fs-14">
            <div class="mirroring">Please choose</div>
            <div class="sharing">Choose a screencast scene</div>
          </div>
          <div>
            <img
              class="icon-news"
              src="../../../assets/images/news_icon.png"
              alt=""
            />
          </div>
        </div>
        <div class="screen align-center">
          <div class="icon-book flex-center">
            <img src="../../../assets/images/book_icon.png" alt="" />
          </div>
          <div class="tv">
            <div class="fs-16">Screen mirroring</div>
            <div class="mobile">mobile screen sharing to TV</div>
          </div>
        </div>
        <div class="screen align-center">
          <div class="icon-camera flex-center">
            <img src="../../../assets/images/camera_icon.png" alt="" />
          </div>
          <div class="tv">
            <div class="fs-16">Online video</div>
            <div class="mobile">Cast online videos to TV</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  padding: 24px;
}
.login {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -1;
  overflow: hidden;
  border-radius: 30px;
}
.back {
  width: 6.25rem;
  height: 100%;
}
.login :nth-child(odd) {
  background-color: #7266fa;
}
.login :nth-child(even) {
  background-color: #7c71fe;
}
.icon-menu {
  width: 2.5rem;
  height: 2rem;
  padding: 10px 0;
}
.text {
  padding: 12px;
}
.mirroring {
  font-size: 1.8rem;
  color: #fff;
  padding: 12px 0;
}
.sharing {
  font-size: 1.2rem;
  color: #e0ddfc;
}
.icon-clock {
  padding: 0 30px;
}
.icon-tv {
  padding: 34px 26px 0 26px;
}
.icon-tv img {
  width: 28rem;
  height: 23rem;
}
.icon-news {
  width: 2.4rem;
  height: 2.4rem;
}
.footer {
  padding-top: 28px;
}
.icon-book {
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  background-color: #8c84fd;
}
.screen {
  background-color: #fff;
  border-radius: 30px;
  padding: 26px 20px;
  margin: 20px 0;
}
.tv {
  padding: 0 15px;
}
.mobile {
  font-size: 1.2rem;
  color: #b6bbc9;
}
.icon-camera {
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  background-color: #ff7437;
}
</style>