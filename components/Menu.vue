<template>
  <div class="menu clf">
    <div class="menu-left fl">
      <span class="menu-list fl">1-800-311-5393</span>
      <span class="menu-list fl" @click="sendMsg()">Contact Us</span>
    </div>
    <div class="menu-right fr">
      <span href="" class="menu-list fl" @click="ifShowLogin = true">Sign In</span>
    </div>

    <div class="popup" v-if="ifShowLogin">
      <div class="login">
        <div class="login-top">
          <div class="tit">SIGN IN</div>
          <i class="iconfont iconjian" @click="ifShowLogin = false"></i>
        </div>

        <div class="text">Enter Email Address</div>
        <div class="ipt-box">
          <input type="text" class="ipt" placeholder="Email..." v-model="ipt" @focus="focus()">
        </div>
        <div class="prompt">{{text}}</div>
        <div class="login-btn" @click="login()">LOGIN</div>
      </div>
    </div>

    <div class="popup" v-if="ifShowSuccess">
      <div class="success">Login successful !</div>
    </div>
  </div>
</template>

<script>
  import Bus from './Bus.js'

  export default{
    data(){
      return{
        ipt: '',
        text: '',
        ifShowLogin: false,
        ifShowSuccess: false
      }
    },
    methods:{
      login(){
        var email = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if(0){
          this.text = 'Sorry, Your account does not exist !'
        }
        if(email.test(this.ipt) == false){
          this.text = 'E-mail format is incorrectŁĄ'
        }else(
          this.text = '',
          this.ifShowLogin = false,
          this.ifShowSuccess = true,
          setTimeout(()=>{
            this.ifShowSuccess = false
          },1500)
        )
      },
      focus(){
        this.text = ''
      },
      sendMsg(){
        Bus.$emit('send', true)
      }
    }
  }
</script>

<style>
  .menu{
    padding: 0 100px;
    box-sizing: border-box;
    border-top: 8px solid #e2eaf0;
  }
  .menu-left,
  .menu-right{
    height: 46px;
    overflow: hidden;
    text-align: center;
  }
  .menu-list{
    font-size: 12px;
    color: #666;
    padding: 0 10px;
    box-sizing: border-box;
    height: 16px;
    line-height: 16px;
    margin-top: 12px;
  }
  .menu-left .menu-list:last-child{
    cursor: pointer;
  }
  .menu-right .menu-list{
    padding-right: 0;
    cursor: pointer;
  }
  .menu-list:not(:first-child){
    border-left: 1px solid #ccc;
  }

  .popup{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 14;
  }
  .login{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    width: 320px;
    height: 320px;
    background-color: #fff;
    border-radius: 10px;
  }

  .login-top{
    height: 72px;
    line-height: 72px;
    border-bottom: 2px solid #eaeaea;
    font-size: 16px;
    color: #480f33;
    font-weight: bold;
    text-align: center;
    position: relative;
  }
  .login-top .iconfont{
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    cursor: pointer;
  }

  .popup .text{
    font-size: 18px;
    color: #333;
    font-weight: bold;
    margin: 40px 0 0 25px;
  }

  .popup .ipt-box{
    width: 280px;
    height: 32px;
    margin: 34px auto 0;
    border-bottom: 1px solid #999;
  }

  .popup .ipt{
    width: 100%;
    font-size: 16px;
    color: #480F32;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .popup .prompt{
    height: 30px;
    font-size: 14px;
    color: #be1e28;
    font-weight: bold;
    line-height: 30px;
    margin-left: 30px;
  }

  .login-btn{
    width: 292px;
    height: 40px;
    background-color: #480F32;
    border-radius: 6px;
    margin: 28px auto 0;
    font-size: 14px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }

  .popup .success{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    width: 180px;
    height: 60px;
    background-color: #fff;
    border-radius: 10px;
    font-size: 16px;
    color: #480f33;
    font-weight: bold;
    text-align: center;
    line-height: 60px;
  }
</style>
