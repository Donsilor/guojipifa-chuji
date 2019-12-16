<template>
  <div class="ad">
    <el-carousel trigger="chick" class="swiper">
      <el-carousel-item v-for="item in 4" :key="item" class="swiper-item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default{
    data(){
      return{
      }
    },
    mounted(){
      this.mouseIncident();
    },
    methods:{
      mouseIncident(){
        var box = document.getElementsByClassName('swiper')[0];
        var leftBtn = document.getElementsByClassName('el-carousel__arrow--left')[0];
        var rightBtn = document.getElementsByClassName('el-carousel__arrow--right')[0];
        box.onmouseover = function(){
          leftBtn.style.backgroundColor = '#fff'
          rightBtn.style.backgroundColor = '#fff'
        }
      }
    }
  }
</script>

<style>
  .ad{
    height: 180px;
    margin-top: 20px;
    border-bottom: 1px solid #e2eaf0;
  }
  .ad .el-carousel__container{
    height: 130px;
  }
  .ad .swiper{
    width: 100%;
    height: 180px;
  }
  .ad .swiper-item{
    width: 100%;
    height: 130px;
  }
  .ad .is-active .el-carousel__button{
    background-color: #480f33;
  }
  .el-carousel__button{
    width: 12px;
    height: 12px;
    border: 1px solid #480f33;
    box-sizing: border-box;
    border-radius: 50%;
    position: relative;
    /* top: 20px; */
  }
  .ad .el-carousel__arrow{
    display: block !important;
  }
  .ad .el-carousel__arrow:hover{
    display: block !important;
  }
  .el-carousel__arrow--left{
    position: relative;
    top: 162px;
    left: 620px;
    background-color: #fff;
    color: #480f33;
    font-size: 20px;
  }
 .el-carousel__arrow--right{
    position: relative;
    top: 126px;
    right: -742px;
    background-color: #fff;
    color: #480f33;
    font-size: 20px;
  }
  .ad .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      margin: 0;
      height: 10px;
    }

  .ad .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .ad .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
