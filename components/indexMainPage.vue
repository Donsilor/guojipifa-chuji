<template>
  <div>
    <div class="banner">
      <img src="../static/index/1.png" alt="">
    </div>

    <div class="width-box">
      <h3 class="tit">POPULAR COLLECTION</h3>
      <h4 class="subheading">POPULAR COLLECTION</h4>

      <div class="banner">
        <img src="../static/index/1.png" alt="">
      </div>
      <div class="box clf">
        <div class="img-box fl">
          <img src="../static/index/1.png" alt="">
        </div>
        <div class="img-box fr">
          <img src="../static/index/1.png" alt="">
        </div>
      </div>

      <h3 class="tit">BRAND CULTURE</h3>
      <h4 class="subheading">BRAND CULTURE</h4>

      <div class="classify clf">
        <div class="classify-left fl">
          <img src="../static/index/1.png" alt="">
        </div>
        <div class="classify-right fr">
          <div class="classif-list">
            <img src="../static/index/1.png" alt="">
          </div>
          <div class="classif-list">
            <img src="../static/index/1.png" alt="">
          </div>
        </div>
      </div>

      <h3 class="tit">QUALITY ASSURANCE</h3>
      <h4 class="subheading">QUALITY ASSURANCE</h4>

      <div class="quality">
        <img src="../static/index/1.png" alt="">
      </div>
      <div class="vadio">
        <img src="../static/index/1.png" alt="">
      </div>

      <h3 class="tit">PRODUCT CATEGORIES</h3>
      <h4 class="subheading">PRODUCT CATEGORIES</h4>

      <div class="series">
        <el-carousel indicator-position="" :autoplay= auto class="swiper">
          <el-carousel-item v-for="item in 4" :key="item" class="swiper-item">
            <div class="swiper-item-box">
              <img src="../static/index/1.png" alt="" class="swiper-img">
              <img src="../static/index/1.png" alt="" class="swiper-img">
              <img src="../static/index/1.png" alt="" class="swiper-img">
              <img src="../static/index/1.png" alt="" class="swiper-img">
              <img src="../static/index/1.png" alt="" class="swiper-img">
              <img src="../static/index/1.png" alt="" class="swiper-img">
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="new">
        <img src="../static/index/1.png" alt="">
      </div>

    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        auto: false
      }
    }
  }
</script>

<style>
  .banner {
    width: 100%;
    height: 360px;
    background-color: #d0c9ce;
    margin-top: 16px;
  }

  .width-box {
    width: 1360px;
    margin: 0 auto;
  }

  h3.tit {
    font-size: 24px;
    color: #333;
    font-weight: bold;
    margin-top: 98px;
    text-align: center;
  }

  h4.subheading {
    font-family: Microsoft-Light;
    font-size: 14px;
    color: #333;
    letter-spacing: 3px;
    margin: 10px 0 40px;
    text-align: center;
  }

  .box {
    margin-top: 30px;
  }

  .img-box {
    width: 670px;
    height: 400px;
    background-color: #d0c9ce;
  }

  .classify-left {
    width: 520px;
    height: 740px;
    background-color: #d0c9ce;
  }

  .classif-list {
    width: 820px;
    height: 360px;
    background-color: #d0c9ce;
  }

  .classif-list:first-child {
    margin-bottom: 20px;
  }

  .quality {
    width: 100%;
    height: 240px;
    background-color: #d0c9ce;
  }

  .vadio {
    width: 1120px;
    height: 630px;
    background-color: #d0c9ce;
    margin: 40px auto;
  }

  .series {
    height: 320px;
  }

  .new {
    height: 240px;
    background-color: #d0c9ce;
    margin: 100px 0;
  }

  .series .el-carousel__container {
    height: 320px;
  }

  .series .swiper {
    width: 100%;
    height: 320px;
  }

  .series .swiper-item {
    width: 100%;
    height: 320px;
  }

  .series .el-carousel__button {
    display: none;
  }

  .series .el-carousel__arrow {
    display: none !important;
  }

  .series .swiper-item-box{
    display: flex;
    justify-content: space-between;
  }
  .series .swiper-img{
    width: 220px;
    height: 320px;
  }

</style>
