<template>
  <div class="home">
    <div class="main">
      <div class="header">
        <div class="align-center">
          <img
            class="icon-leftarrow"
            src="../../assets/images/leftarrow_icon.png"
            alt=""
          />
          <div class="title">Local screencast</div>
        </div>
        <div>
          <input class="search" type="text" placeholder="search" />
        </div>
        <div class="problem align-center">
          <div>
            <img
              class="icon-people"
              src="../../assets/images/people_icon.png"
              alt=""
            />
          </div>
          <div class="text">
            <div class="mirror">Mirror guide</div>
            <div class="common">common problem</div>
          </div>
        </div>
      </div>
      <div class="container flex">
        <div class="picture">
          <div class="item-picture">
            <img
              class="icon-picture"
              src="../../assets/images/picture_icon.png"
              alt=""
            />
          </div>
          <div class="text-align pd-top10-bottom5">Picture</div>
          <div class="font-color">local screencast</div>
        </div>
        <div class="file">
          <div class="item-file">
            <img
              class="icon-folder"
              src="../../assets/images/folder_icon.png"
              alt=""
            />
          </div>
          <div class="text-align pd-top10-bottom5">file</div>
          <div class="font-color">local screencast</div>
        </div>
        <div class="file">
          <div class="item-file">
            <img
              class="icon-folder"
              src="../../assets/images/folder_icon.png"
              alt=""
            />
          </div>
          <div class="text-align pd-top10-bottom5">file</div>
          <div class="font-color">local screencast</div>
        </div>
      </div>
      <div class="footer">
        <div class="screen align-center">
          <div class="icon-round flex-center">
            <img src="../../assets/images/book_icon.png" alt="" />
          </div>
          <div class="tv">
            <div>Screen mirroring...</div>
            <div class="mobile">mobile screen sharing to TV</div>
          </div>
        </div>
        <div class="flex-between footer-button">
          <div class="timeout align-center">
            <img src="../../assets/images/timeout_icon.png" alt="" />
            <div class="">time out</div>
          </div>
          <div class="end align-center">
            <img src="../../assets/images/end_icon.png" alt="" />
            <div class="pl-5">End</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home {
  background-color: #948bfc;
}
.main {
  padding: 0 24px;
  border-radius: 20px;
  background: -webkit-linear-gradient(#dbcbf7, #ebeff7); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#dbcbf7, #ebeff7); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#dbcbf7, #ebeff7); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    #dbcbf7,
    #ebeff7
  ); /* 标准的语法（必须放在最后） */
}
.title {
  font-size: 2.4rem;
  padding: 20px 0;
  padding-left: 30px;
}
.search {
  font-size: 1.6rem;
  text-indent: 20px;
  width: 31.6rem;
  height: 6rem;
  border-radius: 2.5rem;
  outline: none;
  border: none;
  background-image: url(../../assets/images/search_icon.png);
  background-repeat: no-repeat;
  background-position: 280px;
}
.problem {
  padding: 0 20px;
  margin: 40px 0;
  background-color: #eceaff;
  border-radius: 40px;
}
.icon-people {
  width: 9.4rem;
  height: 11rem;
  position: relative;
  bottom: 15px;
}
.text {
  padding: 20px 10px;
}
.mirror {
  font-size: 1.9rem;
  font-weight: bold;
}
.common {
  font-size: 1rem;
}
.picture {
  padding: 27px 12px;
  background-color: #7367fb;
  font-size: 1.7rem;
  color: #fff;
  border-radius: 30px;
}
.icon-picture {
  padding: 15px;
  display: block;
  margin: 0 auto;
}
.item-picture {
  background-color: #d3d7ff;
  margin: 0 26px;
  border-radius: 25px;
}
.font-color {
  color: #b6bbc9;
}
.file {
  padding: 27px 12px;
  background-color: #fff;
  font-size: 1.7rem;
  border-radius: 30px;
  color: black;
  margin: 0 15px;
}
.icon-folder {
  padding: 15px;
  display: block;
  margin: 0 auto;
}
.item-file {
  background-color: #ffebdc;
  margin: 0 26px;
  border-radius: 25px;
}
.footer {
  background-color: #e5e2ff;
  border-radius: 30px;
  font-size: 1.6rem;
  padding-top: 26px;
}
.icon-round {
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  background-color: #8c84fd;
}
.screen {
  background-color: #fff;
  border-radius: 30px;
  padding: 26px 20px;
}
.tv {
  padding: 0 15px;
}
.mobile {
  font-size: 1.2rem;
  color: #b6bbc9;
}
.timeout {
  font-size: 1rem;
  padding: 14px 42px;
  background-color: #fff;
  border-radius: 30px;
  font-weight: bold;
}
.end {
  font-size: 1rem;
  padding: 14px 42px;
  background-color: #fff;
  border-radius: 40px;
  font-weight: bold;
}
.footer-button {
  padding: 40px 7px;
}
.container {
  overflow-x: scroll;
}
::-webkit-scrollbar {
  display: none;
}
</style>