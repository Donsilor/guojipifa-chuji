<template>
  <div>
    <h2 class="engagement">Engagement Rings</h2>
    <div class="engagement-text">Find the diamond engagement ring or bridal set of her dreams from our selection of
      designer styles. Choose from classic solitaires with traditional round or princess‐cut diamonds, glistening
      halo‐framed Asscher or cushion‐cut diamonds, meaningful three‐stone looks, and much more.</div>

    <div class="components-box clf">
      <div class="commodity-left fl">
        <div class="refinements">Refinements</div>
        <div class="classify-box" v-bind:class="{'pack-up': ifOpenA}">
          <div class="tit clf">
            <i class="iconfont iconxiangshang fr" @click="controlOpenA()"></i>
          </div>

          <div class="D-box">
            <div class="child-b" v-for="item in arr">
              <i class="iconfont iconshanchu"></i>{{item}}
            </div>

            <div class="clear-all" v-if="arr.length != 0" @click="clearAll()">
              <i class="iconfont iconquxiao"></i>CLEAR ALL
            </div>
          </div>
        </div>

        <div class="refinements">Select Refinments</div>

        <div class="classify-box" v-bind:class="{'pack-up': item.isShowT}" v-for="(item, index) in dataItem" :key="index"
          v-if="index<3">
          <div class="tit clf" @click="ifShowF(index)">
            <div class="fl">{{item.form}}</div>
            <i class="iconfont iconxiangshang fr"></i>
          </div>

          <div class="D-box" v-for="(children, idx) in item.content" :key="idx">
            <div class="child-a clf" :class="[children.isChoose ? 'active' : '']" @click="ifChooseF(index, idx)">
              <div class="square fl">
                <i class="iconfont iconduihao" v-if="children.isChoose"></i>
              </div>
              <span class="square-text fl">{{children.text}}</span>
            </div>
          </div>
        </div>

        <div class="classify-box" v-bind:class="{'pack-up': ifOpenB}">
          <div class="tit clf" @click="controlOpenB()">
            <div class="fl">HOLIDAY DEALS</div>
            <i class="iconfont iconxiangshang fr"></i>
          </div>

          <div class="D-box">
            <div class="child-c" :class="index_c == index ? 'active' : ''" v-for="(item, index) in priceList" @click="clickC(index)">{{item.list}}</div>

            <div class="search-scope">
              <span class="color">$</span><input type="text" class="ipt" placeholder="low"> -
              <span class="color">$</span><input type="text" class="ipt" placeholder="high">
              <div class="search-btn">GO</div>
            </div>

            <div class="more">More...</div>
          </div>
        </div>

        <div class="classify-box" v-bind:class="{'pack-up': item.isShowT}" v-for="(item, index) in dataItem" :key="index"
          v-if="index>=3">
          <div class="tit clf" @click="ifShowF(index)">
            <div class="fl">{{item.form}}</div>
            <i class="iconfont iconxiangshang fr"></i>
          </div>

          <div class="D-box" v-for="(children, idx) in item.content" :key="idx">
            <div class="child-a clf" :class="[children.isChoose ? 'active' : '']"  @click="ifChooseF(index, idx)">
              <div class="square fl">
                <i class="iconfont iconduihao" v-if="children.isChoose"></i>
              </div>
              <span class="square-text fl">{{children.text}}</span>
            </div>
          </div>
        </div>

      </div>

      <div class="commodity-right fr">
        <div class="filtrate clf">
          <div class="filtrate-text fl"><span class="bold">6,060</span> Items found for Engagement Rings</div>

          <div class="filtrate-condition fr clf">
            <div class="filtrate-child fl" :class="[index_r == 0 ? 'active' : '']" @click="filtrateType(0)">
              <div class="filtrate-child-text fl">Price</div>
              <div class="triangle-wrap fl">
                <div class="triangle-box" :class="[filter.price == 0 ? 'on' : '']" @click="sort(1)">
                  <i class="iconfont iconshengxu"></i>
                </div>
                <div class="triangle-box" :class="[filter.price == 1 ? 'on' : '']" @click="sort(2)">
                  <i class="iconfont iconjiangxu"></i>
                </div>
              </div>
            </div>

            <div class="filtrate-child fl" :class="[index_r == 1 ? 'active' : '']" @click="filtrateType(1)">
              <div class="filtrate-child-text fl">Popular</div>
              <div class="triangle-wrap fl">
                <div class="triangle-box" :class="[filter.popular == 0 ? 'on' : '']" @click="sort(3)">
                  <i class="iconfont iconshengxu"></i>
                </div>
                <div class="triangle-box" :class="[filter.popular == 1 ? 'on' : '']" @click="sort(4)">
                  <i class="iconfont iconjiangxu"></i>
                </div>
              </div>
            </div>

            <div class="filtrate-child fl" :class="[index_r == 2 ? 'active' : '']" @click="filtrateType(2)">
              <div class="filtrate-child-text fl">Latest</div>
              <div class="triangle-wrap fl">
                <div class="triangle-box" :class="[filter.latest == 0 ? 'on' : '']" @click="sort(5)">
                  <i class="iconfont iconshengxu"></i>
                </div>
                <div class="triangle-box" :class="[filter.latest == 1 ? 'on' : '']" @click="sort(6)">
                  <i class="iconfont iconjiangxu"></i>
                </div>
              </div>
            </div>

            <div class="filtrate-child fl" :class="[index_r == 3 ? 'active' : '']" @click="filtrateType(3)">
              <div class="filtrate-child-text fl">Integrated</div>
              <div class="triangle-wrap fl">
                <div class="triangle-box" :class="[filter.integrated == 0 ? 'on' : '']" @click="sort(7)">
                  <i class="iconfont iconshengxu"></i>
                </div>
                <div class="triangle-box" :class="[filter.integrated == 1 ? 'on' : '']" @click="sort(8)">
                  <i class="iconfont iconjiangxu"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="commodity-show clf">
          <div class="commodity-show-list fl" v-for="(item, index) in commodityItem" :key="index">
            <a href="/commodity-detail">
              <div class="img-box">
                <img :src=item.url alt="">
              </div>
              <div class="price"><span class="reference">Reference Price</span>{{item.price}}</div>
              <div class="online">
                <span v-if="item.onLine">{{item.onLine}}</span>
              </div>
              <div class="explain">{{item.explain}}</div>
              <div class="btn">VIEW DETAILS</div>
            </a>
          </div>

        </div>

        <div class="pages">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3"
            :page-size="100" layout="prev, pager, next, jumper" :total="1000">
          </el-pagination>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        ifOpenA: false,
        ifOpenB: false,
        dataItem: [{
            form: 'GENDER',
            isShowT: false,
            content: [{
              text: 'Black Friday Special(1)',
              isChoose: false
            }]
          },
          {
            form: 'GENDER',
            isShowT: false,
            content: [{
              text: 'Black Friday Special(2)',
              isChoose: false
            }]
          },
          {
            form: 'GENDER',
            isShowT: false,
            content: [{
                text: 'Black Friday Special(3)',
                isChoose: false
              },
              {
                text: 'Black Friday Special(4)',
                isChoose: false
              },
              {
                text: 'Black Friday Special(5)',
                isChoose: false
              },
            ]
          },
          {
            form: 'GENDER',
            isShowT: false,
            content: [{
                text: 'Black Friday Special(6)',
                isChoose: false
              },
              {
                text: 'Black Friday Special(7)',
                isChoose: false
              },
              {
                text: 'Black Friday Special(8)',
                isChoose: false
              },
            ]
          },
          {
            form: 'GENDER',
            isShowT: false,
            content: [{
                text: 'Black Friday Special(9)',
                isChoose: false
              },
              {
                text: 'Black Friday Special(10)',
                isChoose: false
              },
              {
                text: 'Black Friday Special(11)',
                isChoose: false
              },
            ]
          },
        ],
        arr: [], //选中的项目
        order: [], //选中的位置
        index_r: 0, // 筛选第几个
        commodityItem: [{
            url: '../index/1.png',
            price: '$1,298.64',
            explain: 'Customize Your Engagement Ring'
          },
          {
            url: 'https://bddco.oss-cn-hongkong.aliyuncs.com/images/2019/12/14/image_157631778355995698.jpg',
            price: '$1,799.99',
            explain: 'Customize Your Vera Wang Love Engagement Ring'
          },
          {
            url: '../index/1.png',
            price: '$1,298.64',
            onLine: 'Online Exclusive Brilliant Value',
            explain: '1/5 CT. T.W. Diamond Cascading Bridal Set in Sterling Silver'
          },
          {
            url: '../index/1.png',
            price: '$1,298.64',
            onLine: 'Online Exclusive Brilliant Value',
            explain: '1/5 CT. T.W. Diamond Cascading Bridal Set in Sterling Silver'
          },
          {
            url: '../index/1.png',
            price: '$1,298.64',
            onLine: 'Online Exclusive Brilliant Value',
            explain: '2 CT. T.W. Diamond Double Cushion Frame Split Shank Bridal Set in 14K White Gold'
          },
          {
            url: '../index/1.png',
            price: '$1,298.64',
            onLine: 'Online Exclusive Brilliant Value',
            explain: '2 CT. T.W. Diamond Double Cushion Frame Split Shank Bridal Set in 14K White Gold'
          },
          {
            url: '../index/1.png',
            price: '$1,298.64',
            onLine: 'Online Exclusive Brilliant Value',
            explain: 'Customize Your Engagement Ring'
          },
          {
            url: '../index/1.png',
            price: '$1,799.99',
            onLine: 'Online Exclusive Brilliant Value',
            explain: 'Customize Your Vera Wang Love Engagement Ring'
          },
          {
            url: '../index/1.png',
            price: '$1,298.64',
            onLine: 'Online Exclusive Brilliant Value',
            explain: '1/5 CT. T.W. Diamond Cascading Bridal Set in Sterling Silver'
          },
          {
            url: '../index/1.png',
            price: '$1,298.64',
            onLine: 'Online Exclusive Brilliant Value',
            explain: '1/5 CT. T.W. Diamond Cascading Bridal Set in Sterling Silver'
          },
          {
            url: '../index/1.png',
            price: '$1,298.64',
            onLine: 'Online Exclusive Brilliant Value',
            explain: '2 CT. T.W. Diamond Double Cushion Frame Split Shank Bridal Set in 14K White Gold'
          },
          {
            url: 'https://bddco.oss-cn-hongkong.aliyuncs.com/images/2019/12/14/image_157631778355995698.jpg',
            price: '$1,298.64',
            ifReference: '$199.99',
            onLine: 'Online Exclusive Brilliant Value',
            explain: '2 CT. T.W. Diamond Double Cushion Frame Split Shank Bridal Set in 14K White Gold'
          }
        ],
        filter: {
          price: 1,
          popular: 1,
          latest: 1,
          integrated: 1,
        },
        priceList:[
          {'list': 'Under $50 (1)'},
          {'list': 'Under $50 (1)'},
          {'list': 'Under $50 (1)'},
          {'list': 'Under $50 (1)'},
          {'list': 'Under $50 (1)'},
          {'list': 'Under $50 (1)'},
          {'list': 'Under $50 (1)'},
          {'list': 'Under $50 (1)'}
        ],
        index_c: '-1'
      }
    },
    // created(){
    //     this.$axios.get('sss',{
    //         params:{
    //             title:'眼镜'
    //         }
    //     }).then(function(res){
    //         this.goodsList = res.data;
    //         console.log(112)
    //     }).catch(function (error) {
    //         console.log(error);
    //         console.log(886)
    //     });
    // },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      ifShowF(k) {
        this.dataItem[k].isShowT = !this.dataItem[k].isShowT
      },
      ifChooseF(i, j) {
        this.dataItem[i].content[j].isChoose = false;
        var s = i + '' + j;
        var result = this.order.some(o => {
          return s == o;
        })
        if (result) {
          this.arr.splice(this.order.indexOf(s), 1)
          this.order.splice(this.order.indexOf(s), 1)
        } else {
          this.dataItem[i].content[j].isChoose = true;
          this.order.push(s);
          var atems = this.dataItem[i].content[j].text;
          this.arr.push(atems);
        }
      },
      // 关闭第一项
      controlOpenA() {
        if (this.arr.length == 0) {

        } else {
          this.ifOpenA = !this.ifOpenA;
        }
      },
      // 清楚全部选项
      clearAll() {
        this.dataItem.map(o => {
          o.content.map(m => {
            m.isChoose = false
          })
        })
        this.order.length = 0;
        this.arr.length = 0;
      },
      // 关闭中间项
      controlOpenB() {
        this.ifOpenB = !this.ifOpenB;
      },
      filtrateType(n) {
        this.index_r = n;
      },
      sort(i) {
        switch (i) {
          case 1:
            this.filter.price = 0;
            break;
          case 2:
            this.filter.price = 1;
            break;
          case 3:
            this.filter.popular = 0;
            break;
          case 4:
            this.filter.popular = 1;
            break;
          case 5:
            this.filter.latest = 0;
            break;
          case 6:
            this.filter.latest = 1;
            break;
          case 7:
            this.filter.integrated = 0;
            break;
          case 8:
            this.filter.integrated = 1;
            break;
        }
      },
      clickC(i){
        this.index_c = i;
      }
    }
  }
</script>

<style>
  .engagement {
    font-family: Didot;
    font-size: 38px;
    color: #000;
    text-align: center;
    margin-top: 40px;
  }

  .engagement-text {
    font-size: 16px;
    color: #333;
    margin: 10px 60px;
    text-align: center;
    line-height: 24px;
  }

  .components-box {
    width: 1380px;
    margin: 0 auto;
    margin-top: 50px;
  }

  .commodity-left {
    width: 330px;
    border-top: 8px solid #808080;
    padding: 0 25px;
    box-sizing: border-box;
  }

  .refinements {
    font-size: 20px;
    color: #333333;
    line-height: 56px;
  }

  .commodity-left .tit {
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: #333;
    padding: 0 4px;
    box-sizing: border-box;
    cursor: pointer;
  }

  .commodity-left .tit .iconfont {
    font-size: 20px;
  }

  .commodity-left .classify-box.pack-up .iconfont {
    transform: rotate(180deg);
  }

  .D-box {
    height: auto;
  }

  .commodity-left .classify-box.pack-up .D-box {
    height: 0;
    transition: all 1s;
    overflow: hidden;
  }

  .classify-box {
    border-top: 1px solid #808080;
  }

  .child-b {
    margin-left: 40px;
    line-height: 30px;
  }

  .child-b .iconfont {
    position: relative;
    top: -1px;
  }

  .child-a {
    margin-left: 40px;
    font-size: 12px;
    color: #808080;
    line-height: 40px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .child-a.active{
    color: #480f33;
  }

  .child-a.active .square {
    border-color: #480f33;
  }

  .child-a.active .square-text {
    text-decoration: underline;
  }

  .child-a.active .iconfont {
    color: #480f33;
  }

  .child-c {
    margin-left: 40px;
    line-height: 30px;
    cursor: pointer;
    font-size: 12px;
    color: #808080;
  }

  .child-c.active{
    color: #480f33;
    text-decoration: underline;
  }

  .iconshanchu {
    color: #480f33;
    margin-right: 6px;
    font-size: 16px;
    position: relative;
    top: 1px;
  }

  .clear-all {
    width: 122px;
    height: 36px;
    border: 1px solid #480f33;
    margin: 10px 40px;
    border-radius: 4px;
    line-height: 30px;
    font-size: 12px;
    color: #480f33;
    text-align: center;
    cursor: pointer;
  }

  .clear-all .iconfont {
    font-size: 20px;
    position: relative;
    top: 3px;
  }

  .child-a .square {
    width: 18px;
    height: 18px;
    border: 1px solid #808080;
    text-align: center;
    line-height: 18px;
    margin-top: 6px;
  }

  .square-text {
    margin: -5px 0 0 5px;
  }

  .search-scope {
    height: 32px;
    margin: 10px 0;
  }

  .search-scope .color {
    color: #999;
  }

  .search-scope .ipt {
    width: 98px;
    height: 32px;
    border: 1px solid #480f33;
    border-radius: 4px;
    margin-left: 2px;
    padding: 0 4px;
    box-sizing: border-box;
  }

  .search-scope .ipt:last-of-type {
    border-radius: 4px 0 0 4px;
  }

  .search-scope .search-btn {
    display: inline-block;
    width: 42px;
    height: 32px;
    border: 3px solid #480f33;
    background-color: #f0f5fb;
    text-align: center;
    line-height: 28px;
    color: #808080;
    vertical-align: top;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
  }

  .more {
    font-size: 12px;
    color: #666;
    margin: 18px 40px;
    cursor: pointer;
  }

  .filtrate {
    width: 1030px;
    height: 70px;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #808080;
    line-height: 70px;
    padding: 0 50px 0 10px;
    box-sizing: border-box;
  }

  .filtrate-text {
    font-family: Didot;
    font-size: 16px;
    color: #000;
  }

  .filtrate-text .bold {
    font-family: Didot-B;
  }

  .filtrate-child {
    font-family: Didot-B;
    font-size: 16px;
    color: #999;
    margin-left: 50px;
    cursor: pointer;
  }

  .filtrate-child.active .filtrate-child-text {
    color: #480f32;
    text-decoration: underline;
  }

  .triangle-wrap {
    margin-left: 6px;
  }

  .triangle-box {
    width: 20px;
    height: 16px;
    text-align: center;
    line-height: 4px;
    overflow: hidden;
  }

  .triangle-box.on .iconfont {
    color: #555;
  }

  .triangle-box .iconfont {
    color: #c8c8c8;
  }

  .filtrate-child .triangle-box:first-child {
    margin-top: 20px;
    line-height: 28px;
  }

  .commodity-show {
    width: 960px;
    margin: 30px auto;
  }

  .commodity-show-list {
    width: 294px;
    margin-bottom: 40px;
  }

  .commodity-show-list:not(:nth-child(3n+1)) {
    margin-left: 39px;
  }

  .commodity-show-list .img-box {
    width: 100%;
    height: 294px;
  }

  .commodity-show-list .price {
    font-family: Didot;
    font-size: 22px;
    color: #b64d52;
    margin-top: 10px;
    text-align: center;
  }

  .commodity-show-list .reference {
    font-family: Didot;
    font-size: 16px;
    color: #b64d52;
    margin-right: 10px;
  }

  .commodity-show-list .online {
    font-family: Didot;
    font-size: 14px;
    color: #daab60;
    font-style: italic;
    margin-top: 6px;
    height: 20px;
  }

  .explain {
    font-family: Didot;
    height: 40px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 16px;
    color: #333;
    line-height: 20px;
  }

  .commodity-show-list .btn {
    width: 294px;
    height: 38px;
    background-color: #480f33;
    line-height: 38px;
    text-align: center;
    border-radius: 4px;
    font-size: 12px;
    color: #fff;
    margin-top: 10px;
  }

  .pages {
    height: 100px;
    text-align: center;
  }

  .el-pager .number {
    height: 24px;
    min-width: 24px;
    color: #999;
    line-height: 24px;
    margin-top: 2px;
  }

  .el-pager .number.active {
    background-color: #480F32;
    height: 24px !important;
    width: 24px !important;
    line-height: 24px;
    border-radius: 50%;
    padding: 0;
    margin: 2px 6px;
    color: #fff;
  }

  .el-pagination__jump {
    color: #480F32;
  }

  .pages input[type=number] {
    width: 30px;
    height: 30px !important;
    border-color: #480F32;
    padding: 0;
    color: #480F32;
  }
</style>
