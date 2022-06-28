<template>
  <div class="main">
    <div class="top">
      <div>
        <img
          class="icon-leftarrow"
          src="../../assets/images/leftarrow_icon.png"
          alt=""
        />
      </div>
      <div>Mirro</div>
      <div></div>
    </div>

    <div class="middle">
      <div>
        <div class="middle-text_header">Strong connection ability</div>
        <div class="middle-text_footer">Cloud projection</div>
      </div>
      <img
        class="icon-peoples"
        src="../../assets/images/peoples_icon.png"
        alt=""
      />
    </div>
    <div class="bottom">
      <div class="bottom-header flex-colum">
        <div class="bottom-header_box ptb-10">
          <div class="ptb-10 text-align">Remainng time</div>
          <div class="flex ptb-10">
            <div class="bottom-header_mitem">6</div>
            <div class="bottom-header_mitem">6</div>
            <div class="bottom-header_mitem">9</div>
            <div class="align-center bottom-header_text">hour</div>
            <div class="bottom-header_mitem">3</div>
            <div class="bottom-header_mitem">8</div>
            <div class="align-center bottom-header_text">minute</div>
          </div>
        </div>
      </div>
      <div class="bottom-main">
        <div class="pb-45">
          <div class="flex-between">
            <div>200 minutes in total</div>
            <div class="bottom-main_text">46min</div>
          </div>
          <div class="bottom-main_box">
            <div class="bottom-main_strip"></div>
          </div>
        </div>
        <div class="pb-45">
          <div class="flex-between">
            <div>365 minutes in total</div>
            <div class="bottom-main_text">136min</div>
          </div>
          <div class="bottom-main_box">
            <div class="bottom-main_strip"></div>
          </div>
        </div>
        <div class="pb-45">
          <div class="flex-between">
            <div>200 minutes in total</div>
            <div class="bottom-main_text">58min</div>
          </div>
          <div class="bottom-main_box">
            <div class="bottom-main_strip"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  border-radius: 20px;
  background: -webkit-linear-gradient(#d3d7fb, #ebeff7); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#d3d7fb, #ebeff7); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#d3d7fb, #ebeff7); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    #d3d7fb,
    #ebeff7
  ); /* 标准的语法（必须放在最后） */
  display: grid;
  grid-auto-rows: 2fr 6fr 8fr;
  height: 100vh;
}

.top {
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
}
.top img {
  width: 3rem;
  height: 2.5rem;
}

.bottom {
  background: white;
  border-radius: 4rem 4rem 0rem 0rem;
  position: relative;
  bottom: 0;
}

.bottom-header {
  background: #e5e2ff;
  width: 80%;
  margin: 2rem auto;
  border-radius: 3rem 3rem 0rem 0rem;
  font-size: 1.6rem;
  font-weight: 600;
}
.bottom-header_mitem {
  padding: 6px;
  background-color: #7469fd;
  margin: 0 2px;
  color: #fff;
}
.bottom-header_text {
  font-weight: 500;
  margin: 0 2px;
}
.bottom-main {
  font-size: 1.4rem;
  margin-top: 2rem;
  padding: 7px 37.525px;
}
.bottom-main_text {
  color: #7165ff;
}
.bottom-main_box {
  background-color: #f2f3ff;
  width: 100%;
}
.bottom-main_strip {
  padding: 3px 0;
  background-color: #6d64fd;
  width: 70%;
}
.middle {
  background-color: #7266fa;
  margin: 15px auto;
  border-radius: 30px;
  padding: 30px 30px 0 30px;
}
.icon-peoples {
  position: relative;
  top: 30px;
}
.middle-text_header {
  color: #fff;
  font-size: 1.6rem;
}
.middle-text_footer {
  color: #c5bcfa;
  font-size: 1.4rem;
  padding: 6px 0;
}
</style>

