<template>
  <div class="file">
    <div class="item-file">
      <img
        class="icon-folder"
        :src="'/src/assets/images/' + icon + '_icon.png'"
        alt=""
      />
    </div>
    <div class="text-align pd-top10-bottom5"><slot></slot></div>
    <div class="flex-center">{{ desc }}</div>
  </div>
</template>
<script>
export default {
  props: {
    icon: String,
    desc: String,
  },
};
</script>

<style scoped>
.file {
  padding: 27px 12px;
  background-color: #fff;
  font-size: 1.7rem;
  border-radius: 30px;
  color: black;
  margin: 0 15px;
}
.item-file {
  background-color: #ffebdc;
  margin: 0 26px;
  border-radius: 25px;
}
.icon-folder {
  padding: 15px;
  display: block;
  margin: 0 auto;
}
</style>
