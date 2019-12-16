<template>
  <div class="nav" @mouseleave="closeMe()">
    <div class="inline">
      <div class="nav-list fl" v-for="(list, index) in navList" :key="'a'+index" @mouseover="chooseMe(index)">
        <span>{{list}}</span>
      </div>
    </div>

    <div class="nav-box" v-if="isShow">
      <div class="clf">
        <div class="nav-classify fl" v-for="(item, index) in jsonData[idx_r].secondData" :key="'b'+index">
          <div class="nav-classify-child" v-for="(ite, ide) in item.thirdData" :key="'c'+ide">
            <a href="/commodity-list">{{ite.title}}</a>
          </div>
        </div>
      </div>
      <div class="nav-btn" v-if="isShowText">{{nav_text}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navList: ['ABOUT US', 'RINGS', 'NECKLACES', 'EARRINGS', 'BRACELETS', 'JADE', 'COLLECTIONS', 'GIFT IDEAS', 'EVENT', 'BDD BRIDAL'],
        isShow: false,
        idx_r: 1,
        isShowText: false,
        nav_text: '',

        jsonData: [{
          "secondData": [{
              "thirdData": [{
                  "title": "Shop by Material"
                },
                {
                  "title": "Diamond"
                },
                {
                  "title": "Gemstone"
                },
                {
                  "title": "Pearl"
                },
                {
                  "title": "Gold"
                },
                {
                  "title": "Platinum"
                },
                {
                  "title": "Rose Gold"
                },
                {
                  "title": "Silver"
                },
                {
                  "title": "Brass"
                }
              ]
            },
            {
              "thirdData": [{
                  "title": "Popular Styles"
                },
                {
                  "title": "Bridal Sets"
                },
                {
                  "title": "Claddagh"
                },
                {
                  "title": "Class Rings"
                },
                {
                  "title": "Cocktail Rings"
                },
                {
                  "title": "Engagement"
                },
                {
                  "title": "Eternity Bands"
                },
                {
                  "title": "Fashion"
                },
                {
                  "title": "Infinity"
                },
                {
                  "title": "Mother's and Family"
                },
                {
                  "title": "Personalized"
                },
                {
                  "title": "Promise Rings"
                },
                {
                  "title": "Right Hand Rings"
                },
                {
                  "title": "Solitaire Rings"
                },
                {
                  "title": "Three Stone"
                },
                {
                  "title": "Trio Collection"
                },
                {
                  "title": "Vintage-Inspired Rings"
                },
                {
                  "title": "Wedding Bands"
                }
              ]
            },
            {
              "thirdData": [{
                  "title": "Gender'"
                },
                {
                  "title": "Ladies'"
                },
                {
                  "title": "Men's"
                }
              ]
            },
            {
              "thirdData": [{
                  "title": "Price"
                },
                {
                  "title": "Under $50"
                },
                {
                  "title": "$50 - $99"
                },
                {
                  "title": "$100 - $249"
                },
                {
                  "title": "$250 - $499"
                },
                {
                  "title": "$500 - $749"
                },
                {
                  "title": "$750 - $999"
                },
                {
                  "title": "$1,000 - $1,999"
                },
                {
                  "title": "$2,000 - $2,999"
                },
                {
                  "title": "$3,000 - $4,999"
                },
                {
                  "title": "Over $5,000"
                }
              ]
            }
          ]
        }, {
          "secondData": [{
              "thirdData": [{
                  "title": "Shop by Material"
                },
                {
                  "title": "Diamond"
                },
                {
                  "title": "Gemstone"
                },
                {
                  "title": "Pearl"
                },
                {
                  "title": "Gold"
                },
                {
                  "title": "Platinum"
                },
                {
                  "title": "Rose Gold"
                },
                {
                  "title": "Silver"
                },
                {
                  "title": "Brass"
                }
              ]
            },
            {
              "thirdData": [{
                  "title": "Popular Styles"
                },
                {
                  "title": "Bolo Necklaces"
                },
                {
                  "title": "Chains"
                },
                {
                  "title": "Choker Necklaces"
                },
                {
                  "title": "Crosses"
                },
                {
                  "title": "Hearts"
                },
                {
                  "title": "Infinity"
                },
                {
                  "title": "Lockets"
                },
                {
                  "title": "Monogram"
                },
                {
                  "title": "Name"
                },
                {
                  "title": "Necklace Charms"
                },
                {
                  "title": "Personalized"
                },
                {
                  "title": "Whimsical"
                }
              ]
            },
            {
              "thirdData": [{
                  "title": "Gender"
                },
                {
                  "title": "Ladies'"
                },
                {
                  "title": "Men's"
                },
                {
                  "title": "Child's"
                }
              ]
            },
            {
              "thirdData": [{
                  "title": "Price"
                },
                {
                  "title": "Under $50"
                },
                {
                  "title": "$50 - $99"
                },
                {
                  "title": "$100 - $249"
                },
                {
                  "title": "$250 - $499"
                },
                {
                  "title": "$500 - $749"
                },
                {
                  "title": "$750 - $999"
                },
                {
                  "title": "$1,000 - $1,999"
                },
                {
                  "title": "$2,000 - $2,999"
                },
                {
                  "title": "$3,000 - $4,999"
                },
                {
                  "title": "Over $5,000"
                }
              ]
            }
          ]
        }, {
          "secondData": [{
              "thirdData": [{
                  "title": "Shop by Material"
                },
                {
                  "title": "Diamond"
                },
                {
                  "title": "Gemstone"
                },
                {
                  "title": "Pearl"
                },
                {
                  "title": "Gold"
                },
                {
                  "title": "Platinum"
                },
                {
                  "title": "Rose Gold"
                },
                {
                  "title": "Silver"
                },
                {
                  "title": "Brass"
                }
              ]
            },
            {
              "thirdData": [{
                  "title": "Popular Styles"
                },
                {
                  "title": "Crawlers"
                },
                {
                  "title": "Create Your Own"
                },
                {
                  "title": "Diamond Studs"
                },
                {
                  "title": "Drop"
                },
                {
                  "title": "Front-Back"
                },
                {
                  "title": "Gemstone Studs"
                },
                {
                  "title": "Hoop"
                },
                {
                  "title": "Personalized"
                }
              ]
            },
            {
              "thirdData": [{
                  "title": "Gender"
                },
                {
                  "title": "Ladies'"
                },
                {
                  "title": "Men's"
                },
                {
                  "title": "Child's"
                }
              ]
            },
            {
              "thirdData": [{
                  "title": "Price"
                },
                {
                  "title": "Under $50"
                },
                {
                  "title": "$50 - $99"
                },
                {
                  "title": "$100 - $249"
                },
                {
                  "title": "$250 - $499"
                },
                {
                  "title": "$500 - $749"
                },
                {
                  "title": "$750 - $999"
                },
                {
                  "title": "$1,000 - $1,999"
                },
                {
                  "title": "$2,000 - $2,999"
                },
                {
                  "title": "$3,000 - $4,999"
                },
                {
                  "title": "Over $5,000"
                }
              ]
            }
          ]
        }, {
          "secondData": [{
              "thirdData": [{
                  "title": "Shop by Material"
                },
                {
                  "title": "Diamond"
                },
                {
                  "title": "Gemstone"
                },
                {
                  "title": "Pearl"
                },
                {
                  "title": "Gold"
                },
                {
                  "title": "Platinum"
                },
                {
                  "title": "Rose Gold"
                },
                {
                  "title": "Silver"
                },
                {
                  "title": "Brass"
                }
              ]
            },
            {
              "thirdData": [{
                  "title": "Popular Styles"
                },
                {
                  "title": "Anklets"
                },
                {
                  "title": "Bangles"
                },
                {
                  "title": "Bolo Bracelets"
                },
                {
                  "title": "Bracelet Charms"
                },
                {
                  "title": "Charm Bracelets"
                },
                {
                  "title": "Personalized"
                },
                {
                  "title": "Tennis Bracelets"
                }
              ]
            },
            {
              "thirdData": [{
                  "title": "Gender"
                },
                {
                  "title": "Ladies'"
                },
                {
                  "title": "Men's"
                },
                {
                  "title": "Child's"
                }
              ]
            },
            {
              "thirdData": [{
                  "title": "Price"
                },
                {
                  "title": "Under $50"
                },
                {
                  "title": "$50 - $99"
                },
                {
                  "title": "$100 - $249"
                },
                {
                  "title": "$250 - $499"
                },
                {
                  "title": "$500 - $749"
                },
                {
                  "title": "$750 - $999"
                },
                {
                  "title": "$1,000 - $1,999"
                },
                {
                  "title": "$2,000 - $2,999"
                },
                {
                  "title": "$3,000 - $4,999"
                },
                {
                  "title": "Over $5,000"
                }
              ]
            }
          ]
        }, {
          "secondData": [{
            "thirdData": [{
                "title": "Categories"
              },
              {
                "title": "Bangle"
              },
              {
                "title": "Pendant"
              },
              {
                "title": "Loose"
              },
              {
                "title": "Others"
              }
            ]
          }]
        }, {
          "secondData": [{
              "thirdData": [{
                  "title": "Designer"
                },
                {
                  "title": "Eddie Borgo"
                }
              ]
            },
            {
              "thirdData": [{
                  "title": "Co-branding"
                },
                {
                  "title": "Amore La Vita"
                },
                {
                  "title": "Edward Mirell"
                },
                {
                  "title": "Julianna B"
                },
                {
                  "title": "Le Vian"
                },
                {
                  "title": "Made In Italy"
                },
                {
                  "title": "Past Present Future"
                },
                {
                  "title": "Sirena"
                },
                {
                  "title": "Stackable Expressions"
                },
                {
                  "title": "Triton"
                }
              ]
            },
            {
              "thirdData": [{
                  "title": "Popular Categories"
                },
                {
                  "title": "As Seen In Marie Claire"
                },
                {
                  "title": "Birthstones"
                },
                {
                  "title": "Black Diamonds"
                },
                {
                  "title": "Brilliant Values"
                },
                {
                  "title": "Certified"
                },
                {
                  "title": "Colored Diamonds"
                },
                {
                  "title": "Infinity"
                },
                {
                  "title": "Lab-Created Diamonds"
                },
                {
                  "title": "Name Jewelry"
                },
                {
                  "title": "New Arrivals"
                },
                {
                  "title": "Personalized Jewelry"
                },
                {
                  "title": "Promise Rings"
                },
                {
                  "title": "Right Hand Rings"
                },
                {
                  "title": "Sideways"
                },
                {
                  "title": "Silver & Diamonds"
                },
                {
                  "title": "Top Pinned On Pinterest"
                },
                {
                  "title": "Top Rated Products"
                },
                {
                  "title": "Whimsical"
                }
              ]
            },
            {
              "thirdData": [{
                  "title": "Trending"
                },
                {
                  "title": "All About the Wrist"
                },
                {
                  "title": "Bolo Bracelets"
                },
                {
                  "title": "Bolo Necklaces"
                },
                {
                  "title": "Earring Trends"
                },
                {
                  "title": "Trendy Rings"
                },
                {
                  "title": "Layering Necklaces"
                },
                {
                  "title": "Stacking Rings"
                }
              ]
            }
          ]
        }, {
          "secondData": [{
              "thirdData": [{
                  "title": "Holiday Shop"
                },
                {
                  "title": "Black Friday"
                },
                {
                  "title": "Christmas"
                },
                {
                  "title": "Holiday Gift Guide"
                },
                {
                  "title": "Stocking Stuffers"
                }
              ]
            },
            {
              "thirdData": [{
                  "title": "Shop by Recipient"
                },
                {
                  "title": "Gifts for Her"
                },
                {
                  "title": "Gifts for Him"
                },
                {
                  "title": "Gifts for Children"
                }
              ]
            },
            {
              "thirdData": [{
                  "title": "Popular Gift Types"
                },
                {
                  "title": "Accessories"
                },
                {
                  "title": "Birthstone Jewelry"
                },
                {
                  "title": "Cufflinks and Tie Bars"
                },
                {
                  "title": "Gift Cards"
                },
                {
                  "title": "Gifts for the Home"
                },
                {
                  "title": "Jewelry Sets"
                },
                {
                  "title": "Money Clips"
                },
                {
                  "title": "Most-Wanted Gifts"
                },
                {
                  "title": "Personalized Gifts"
                },
                {
                  "title": "Pet Mom Jewelry"
                },
                {
                  "title": "Wallets and Key Chains"
                }
              ]
            },
            {
              "thirdData": [{
                  "title": "Price"
                },
                {
                  "title": "Under $50"
                },
                {
                  "title": "$50 - $99"
                },
                {
                  "title": "$100 - $249"
                },
                {
                  "title": "$250 - $499"
                },
                {
                  "title": "$500 - $749"
                },
                {
                  "title": "$750 - $999"
                },
                {
                  "title": "$1,000 - $1,999"
                },
                {
                  "title": "$2,000 - $2,999"
                },
                {
                  "title": "$3,000 - $4,999"
                },
                {
                  "title": "Over $5,000"
                }
              ]
            }
          ]
        }]

      }
    },
    methods: {
      closeMe() {
        this.isShow = false;
      },
      chooseMe(i) {
        switch (i) {
          case 0:
            this.isShow = false;
            this.isShowText = false;
            break;
          case 1:
            this.isShow = true;
            this.idx_r = 0;
            this.nav_text = 'VIEW ALL RINGS';
            this.isShowText = true;
            break;
          case 2:
            this.isShow = true;
            this.idx_r = 1;
            this.isShowText = false;
            break;
          case 3:
            this.isShow = true;
            this.idx_r = 2;
            this.nav_text = 'VIEW ALL EARRINGS';
            this.isShowText = true;
            break;
          case 4:
            this.isShow = true;
            this.idx_r = 3;
            this.isShowText = false;
            break;
          case 5:
            this.isShow = true;
            this.idx_r = 4;
            this.nav_text = 'VIEW ALL JADES';
            this.isShowText = true;
            break;
          case 6:
            this.isShow = true;
            this.idx_r = 5;
            this.nav_text = 'VIEW ALL PRODUCTS';
            this.isShowText = true;
            break;
          case 7:
            this.isShow = true;
            this.idx_r = 6;
            this.isShowText = false;
            break;
          case 8:
            this.isShow = false;
            this.idx_r = 1;
            this.isShowText = false;
            break;
          case 9:
            this.isShow = false;
            this.idx_r = 1;
            this.isShowText = false;
            break;
          default: this.isShow = false;
        }
      }
    }
  }
</script>

<style>
  .nav {
    width: 100%;
    height: 50px;
    background-color: #eee;
    margin-top: 18px;
    text-align: center;
    position: relative;
  }

  .nav .inline {
    display: inline-block;
  }

  .nav-list {
    line-height: 48px;
    font-size: 12px;
    color: #333;
    padding: 0 10px;
    border-bottom: 2px solid transparent;
    box-sizing: border-box;
    cursor: pointer;
  }

  .nav-list:hover {
    border-color: #7f004e;
    color: #7f004e;
  }

  .nav-list:not(:first-child) {
    margin-left: 20px;
  }

  .nav-box {
    position: absolute;
    top: 50px;
    z-index: 12;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    width: 1200px;
    border: 1px solid #eee;
    background-color: #fff;
    padding: 30px 40px;
    box-sizing: border-box;
  }

  .nav-box .nav-classify {
    width: 200px;
    text-align: left;
    line-height: 24px;
    font-size: 14px;
    color: #333;
  }

  .nav-box .nav-classify:not(:first-child) {
    margin-left: 80px;
  }

  .nav-box .nav-classify .nav-classify-child:first-child {
    margin-bottom: 10px;
  }

  .nav-box .nav-classify .nav-classify-child:first-child a {
    cursor: inherit;
    font-family: Didot;
    font-size: 16px;
    color: #999;
  }

  .nav-box .nav-classify .nav-classify-child:not(:first-child):hover {
    color: #7f004e;
    text-decoration: underline;
  }

  .nav-btn{
    height: 40px;
    border: 1px solid #480f33;
    padding: 0 10px;
    margin: 20px auto 0;
    font-size: 12px;
    color: #480f33;
    text-align: center;
    line-height: 40px;
    display: inline-block;
    cursor: pointer;
  }
</style>
