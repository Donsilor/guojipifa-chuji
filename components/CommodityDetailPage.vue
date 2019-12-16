<template>
  <div>
    <div class="commodity-box clf">
      <div class="commodity-left fl">
        <div class="text-1">Online Exclusive Brilliant Value</div>
        <div class="text-2">1/5 CT. T.W. Diamond Cascading Bridal Set in Sterling Silver</div>
        <div class="img-box">
          <magnifying :msg = "text"></magnifying>
        </div>
        <div class="text-3">Mouse over the image to zoom or click here to view larger image
          <i class="iconfont iconfangda"></i>
        </div>
        <div class="show-img">
          <div class="img-box-b clf">
            <div v-if="index<4" class="img-box fl" :class="[index_k == index ? 'active' : '']" v-for="(item, index) in smallImg" @click="chooseImg(index)">
              <img :src="item" alt="">
            </div>
            <div v-if="index>3 && index<5" class="img-box fl" :class="[index_k == index ? 'active' : '']" v-for="(item, index) in smallImg" @click.prevent="chooseImg(index)">
              <img :src="item" alt="">
              <i class="iconfont iconyou" v-if="!isShowImg" @click.prevent="ShowImg()"></i>
            </div>
            <div v-if="index>4 && isShowImg" class="img-box fl" :class="[index_k == index ? 'active' : '']" v-for="(item, index) in smallImg" @click="chooseImg(index)">
              <img :src="item" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="commodity-right fl">
        <div class="price">Reference Price<span class="big">$199.99</span></div>
        <div class="mq">M0Q: 1 Pcs</div>
        <div class="contact"><a href="" class="color">Please contact us</a> for more ring size information.</div>
        <div class="contact-btn">CONTACT US</div>
        <div class="holiday-box">
          <div class="holiday clf">
            <div class="left fl">Product Parameters</div>
            <div class="right fr">
              <i class="iconfont"></i>
            </div>
          </div>

          <div class="table">
            <div class="table-list clf">
              <div class="left fl">Total Weight (CT. T.W.)</div>
              <div class="right fl">1/5</div>
            </div>
            <div class="table-list clf">
              <div class="left fl">Center Stone T.W.</div>
              <div class="right fl">1/15</div>
            </div>
            <div class="table-list clf">
              <div class="left fl">Color</div>
              <div class="right fl">1</div>
            </div>
            <div class="table-list clf">
              <div class="left fl">Clarity</div>
              <div class="right fl">13</div>
            </div>
            <div class="table-list clf">
              <div class="left fl">Lifetime Diamond </div>
              <div class="right fl">Yes</div>
            </div>
            <div class="table-list clf">
              <div class="left fl">Stone Type</div>
              <div class="right fl">Diamond</div>
            </div>
            <div class="table-list clf">
              <div class="left fl">Stone Color</div>
              <div class="right fl">White</div>
            </div>
            <div class="table-list clf">
              <div class="left fl">Stone Shape</div>
              <div class="right fl">Round</div>
            </div>
            <div class="table-list clf">
              <div class="left fl">Stone Carat Range</div>
              <div class="right fl">Under 1/4</div>
            </div>
            <div class="table-list clf">
              <div class="left fl">Stone Class</div>
              <div class="right fl">Natural</div>
            </div>
            <div class="table-list clf">
              <div class="left fl">Stone Carat Range</div>
              <div class="right fl">Under 1/4</div>
            </div>
            <div class="table-list clf">
              <div class="left fl">Setting Only</div>
              <div class="right fl">No</div>
            </div>
            <div class="table-list clf">
              <div class="left fl">Metal Type</div>
              <div class="right fl">Sterling Silver</div>
            </div>
            <div class="table-list clf">
              <div class="left fl">Metal Color</div>
              <div class="right fl">White</div>
            </div>
            <div class="table-list clf">
              <div class="left fl">Metal Finish</div>
              <div class="right fl">Polished</div>
            </div>
            <div class="table-list clf">
              <div class="left fl">Rhodium</div>
              <div class="right fl">Yes</div>
            </div>
            <div class="table-list clf">
              <div class="left fl">Ring Style</div>
              <div class="right fl">Bridal Set</div>
            </div>
            <div class="table-list clf">
              <div class="left fl">Standard Ring Size</div>
              <div class="right fl">7.0</div>
            </div>
          </div>
        </div>
        <div class="share-text">Share:</div>
        <div class="share-box">
          <a href="">
            <img src="../static/index/icon01.png" alt="">
          </a>
          <a href="">
            <img src="../static/index/icon02.png" alt="">
          </a>
          <a href="">
            <img src="../static/index/icon03.png" alt="">
          </a>
          <a href="">
            <img src="../static/index/icon04.png" alt="">
          </a>
          <a href="">
            <img src="../static/index/icon05.png" alt="">
          </a>
        </div>
      </div>
    </div>
    <h3 class="other">OTHER GUESTS ALSO LIKE</h3>

    <div class="carousel">
      <ul class="img-wrap">
        <li>
          <a href="#">
            <div><img src="../static/index/TB1.jpg" width="520" class="img-list"></div>
            <div class="commodity-name">Reference Price</div>
            <div class="commodity-price">$199.99</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div><img src="../static/index/TB2.jpg" width="520" class="img-list"></div>
            <div class="commodity-name">Reference Price</div>
            <div class="commodity-price">$199.99</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div><img src="../static/index/TB3.jpg" width="520" class="img-list"></div>
            <div class="commodity-name">Reference Price</div>
            <div class="commodity-price">$199.99</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div><img src="../static/index/TB4.jpg" width="520" class="img-list"></div>
            <div class="commodity-name">Reference Price</div>
            <div class="commodity-price">$199.99</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div><img src="../static/index/TB5.jpg" width="520" class="img-list"></div>
            <div class="commodity-name">Reference Price</div>
            <div class="commodity-price">$199.99</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div><img src="../static/index/TB1.jpg" width="520" class="img-list"></div>
            <div class="commodity-name">Reference Price</div>
            <div class="commodity-price">$199.99</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div><img src="../static/index/TB2.jpg" width="520" class="img-list"></div>
            <div class="commodity-name">Reference Price</div>
            <div class="commodity-price">$199.99</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div><img src="../static/index/TB3.jpg" width="520" class="img-list"></div>
            <div class="commodity-name">Reference Price</div>
            <div class="commodity-price">$199.99</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div><img src="../static/index/TB4.jpg" width="520" class="img-list"></div>
            <div class="commodity-name">Reference Price</div>
            <div class="commodity-price">$199.99</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div><img src="../static/index/TB5.jpg" width="520" class="img-list"></div>
            <div class="commodity-name">Reference Price</div>
            <div class="commodity-price">$199.99</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div><img src="../static/index/TB1.jpg" width="520" class="img-list"></div>
            <div class="commodity-name">Reference Price</div>
            <div class="commodity-price">$199.99</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div><img src="../static/index/TB2.jpg" width="520" class="img-list"></div>
            <div class="commodity-name">Reference Price</div>
            <div class="commodity-price">$199.99</div>
          </a>
        </li>
      </ul>
      <ol class="circle">
        <li class="active"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
      <div class="arrow">
        <span class="arrow-left">
          <i class="iconfont iconzuo2"></i>
        </span>
        <span class="arrow-right">
          <i class="iconfont iconyou2"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import magnifying from './Magnifying.vue'
  export default {
    components: {
      magnifying
    },
    data() {
      return {
        banners: [
          '../index/2.jpg',
          '../index/12.jpg',
          '../index/5.jpg',
          '../index/15',
        ],
        smallImg:[
          '../index/2.jpg',
          '../index/12.jpg',
          '../index/5.jpg',
          '../index/TB4.jpg',
          'https://bddco.oss-cn-hongkong.aliyuncs.com/images/2019/12/14/image_157631778355995698.jpg',
          '../index/15',
        ],
        isShowImg: false,
        text: '../index/2.jpg',
        index_k: 0,
        swiperOption: {
          loop: true,
          slidesPerView: '3',
          centeredSlides: true,
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          on: {
            slideChange() {
              console.log('onSlideChangeEnd', this);
            },
            tap() {
              console.log('onTap', this, index);
            }
          }
        },
        swiperOptionTwo: {
          loop: true,
          slidesPerView: '3',
          centeredSlides: true,
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          on: {
            slideChange() {
              console.log('onSlideChangeEnd', this);
            },
            tap() {
              console.log('onTap', this);
            }
          }
        }
      }
    },
    mounted() {
      this.slideshow();
    },
    methods: {
      ShowImg(){
        this.isShowImg = true;
      },
      chooseImg(n){
        this.text = this.smallImg[n];
        this.index_k = n;
      },
      slideshow() {
        var oImg = document.querySelector(".carousel .img-wrap"),
          aCircle = document.querySelectorAll(".circle > li"),
          oArrowL = document.querySelector(".arrow .arrow-left"),
          oArrowR = document.querySelector(".arrow .arrow-right"),
          nowIndex = 0,
          iTimer = null;

        function moveImg() {
          clearInterval(iTimer);
          for (var i = 0; i < len; i++) {
            aCircle[i].className = "";
          }
          aCircle[(nowIndex + 5) % 5].className = "active";
          slowMove(oImg, {
            left: (nowIndex + 1) * -220
          });
          iTimer = setInterval(autoPlay, 2000);
        }
        for (var i = 0, len = aCircle.length; i < len; i++) {
          aCircle[i].index = i;
          aCircle[i].onclick = function() {
            nowIndex = this.index;
            moveImg();
          };
        }

        function autoPlay() {
          nowIndex++;
          if (nowIndex === 6) {
            nowIndex = 1;
            oImg.style.left = "-220px";
          }
          moveImg();
        }
        oArrowL.onclick = function() {
          nowIndex--;
          if (nowIndex === -2) {
            nowIndex = 3;
            oImg.style.left = "-2600px";
          }
          moveImg();
        };
        oArrowR.onclick = autoPlay;
        iTimer = setInterval(autoPlay, 2000);
        oImg.onmouseover = function() {
          clearInterval(iTimer);
        };
        oImg.onmouseout = function() {
          iTimer = setInterval(autoPlay, 2000);
        };

        function getStyle(element, attr) {
          try {
            return getComputedStyle(element, null)[attr];
          } catch (e) {
            return element.currentStyle[attr];
          }
        }

        function slowMove(element, jAttr, fnEnd) { //减速函数（样式值是px和透明度都可以变化）
          clearInterval(element.iTimer); //清除上次打开的定时器，保证只有一个定时器
          var speed, styleVal, attr, bStop;
          element.iTimer = setInterval(function() {
            bStop = true;
            for (attr in jAttr) {
              if (attr === "opacity") {
                styleVal = getStyle(element, attr);
                styleVal = styleVal === undefined ? 100 : Math.round(parseFloat(getStyle(element, attr)) * 100); //获取最终样式值
              } else {
                styleVal = parseInt(getStyle(element, attr)); //获取最终样式值
              }
              speed = (jAttr[attr] - styleVal) / 2; //处理速度大小（系数越大速度越慢）
              speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //处理速度方向
              if (attr === "opacity") {
                element.style[attr] = (styleVal + speed) / 100;
                element.style.filter = "alpha(opacity:" + (styleVal + speed) + ")";
              } else {
                element.style[attr] = styleVal + speed + "px";
              }
              if (styleVal !== jAttr[attr]) {
                bStop = false;
              }
            }
            if (bStop) {
              clearInterval(element.iTimer);
              if (fnEnd) {
                fnEnd();
              }
            }
          }, 30);
        }
      }
    }
  }
</script>

<style>
  .commodity-box {
    margin-top: 40px;
  }

  .commodity-left {
    width: 760px;
    margin-left: 100px;
  }

  .commodity-box .text-1 {
    font-size: 16px;
    color: #daab60;
    font-family: Didot;
    font-style: italic;
  }

  .commodity-box .text-2 {
    font-family: Didot;
    font-size: 22px;
    color: #333;
    margin-top: 10px;
  }

  .commodity-box .img-box {
    width: 760px;
    height: 560px;
    margin-top: 20px;
    font-size: 0;
  }

  .commodity-box .text-3 {
    font-size: 16px;
    color: #480f33;
    text-align: right;
    margin-top: 10px;
  }

  .commodity-box .text-3 .iconfont {
    font-size: 20px;
    color: rgba(72,15,51,0.5);
    position: relative;
    top: 4px;
  }

  .show-img {
    height: 100px;
    margin-top: 20px;
  }

  .towards-left,
  .towards-right {
    width: 100px;
    height: 100px;
    background-color: #d0c9ce;
    text-align: center;
    line-height: 100px;
    position: relative;
  }

  .show-img .iconfont {
    font-size: 20px;
    color: #999;
  }

  .show-img .img-box-b {
    width: 660px;
    height: 102px;
    margin: 0 10px;
    position: relative;
    padding-top: 2px;
  }

  .show-img .img-box-b .img-box {
    width: 100px;
    height: 100px;
    margin: 0 10px 0 0;
    position: relative;
    cursor: pointer;
  }
  .show-img .img-box-b .img-box.active {
    border: 1px solid #480f33;
    box-sizing: border-box;
  }

  .show-img .img-box-b .img-box .iconfont{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
  }

  .swiper-button-prev {
    position: absolute;
    left: -76px;
    top: 50%;
    background-image: none;
    outline: none;
  }

  .swiper-button-next {
    position: absolute;
    left: 370px;
    top: 50%;
    background-image: none;
    outline: none;
  }

  .commodity-right {
    width: 406px;
    margin: 20px 0 0 42px;
  }

  .commodity-right .price {
    font-family: Didot;
    font-size: 24px;
    color: #b64d52;
  }

  .commodity-right .price .big {
    font-size: 32px;
    margin-left: 10px;
  }

  .commodity-right .mq {
    font-size: 16px;
    color: #333;
    margin-top: 10px;
  }

  .commodity-right .contact {
    height: 72px;
    line-height: 72px;
    text-align: center;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #808080;
    margin-top: 10px;
  }

  .commodity-right .contact .color {
    color: #b64d52;
    text-decoration: underline;
    font-weight: bold;
  }

  .commodity-right .contact-btn {
    width: 300px;
    height: 38px;
    background-color: #480f33;
    border-radius: 4px;
    margin: 40px auto;
    text-align: center;
    color: #fff;
    font-size: 12px;
    line-height: 38px;
    cursor: pointer;
  }

  .holiday-box {
    width: 406px;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #808080;
    padding: 0 24px 30px;
    box-sizing: border-box;
  }

  .holiday {
    margin: 14px 0;
  }

  .holiday .left {
    font-size: 12px;
    color: #666;
  }

  .table {
    border-top: 1px solid #999;
  }

  .table .table-list {
    border-bottom: 1px solid #999;
    height: 30px;
    line-height: 30px;
  }

  .table-list .left {
    text-align: left;
    font-weight: bold;
    font-size: 12px;
    width: 50%;
    border-right: 1px solid #999;
  }

  .table-list .right {
    text-align: center;
    width: 50%;
    color: #666;
  }

  .share-text {
    margin-top: 20px;
    font-family: Didot;
    font-size: 18px;
    color: #666;
    padding-left: 24px;
    box-sizing: border-box;
  }

  .share-box img {
    width: 30px;
    height: 30px;
    margin: 20px 0 0 24px;
  }

  .other {
    font-size: 24px;
    color: #333;
    text-align: center;
    font-weight: bold;
    margin-top: 80px;
  }

  .swiper-box-two {
    width: 1020px;
    height: 140px;
    margin: 40px auto 100px;
  }

  .swiper-box-two img {
    width: 140px;
    height: 140px;
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
  }

  .swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
  }


  .carousel {
    width: 1020px;
    height: 260px;
    position: relative;
    overflow: hidden;
    margin: 40px auto 80px;
  }

  .carousel .img-wrap {
    width: 2620px;
    height: 200px;
    position: absolute;
    left: -220px;
    top: 0;
    overflow: hidden;
  }

  .carousel .img-wrap li {
    float: left;
    width: 140px;
    height: 200px;
    margin-right: 80px;
  }

  .carousel .img-wrap li .img-list {
    width: 140px;
    height: 140px;
  }

  .carousel .img-wrap li .commodity-name,
  .carousel .img-wrap li .commodity-price {
    font-family: Didot;
    margin-top: 6px;
    text-align: center;
    font-size: 14px;
    color: #333;
  }

  .arrow>span {
    position: absolute;
    top: 90%;
    margin-top: -20px;
    z-index: 100;
    width: 22px;
    height: 40px;
    font-size: 18px;
    color: white;
    line-height: 40px;
    cursor: pointer;
    color: #480f33;
  }

  .arrow .arrow-left {
    padding-left: 2px;
    left: 444px;
    color: #480f33;
    line-height: 41px;
  }

  .arrow .arrow-right {
    padding-left: 2px;
    right: 412px;
    color: #480f33;
    line-height: 42px;

  }

  .circle {
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -45px;
    z-index: 50;
    width: 120px;
    height: 16px;
  }

  .circle li {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 6px;
    float: left;
    border: 1px solid #480f33;
    cursor: pointer;
  }

  .circle .active {
    background-color: #480f33;
  }
</style>
