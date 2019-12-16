<template>
  <div class="container">
    <menus></menus>
    <headers></headers>
    <navs></navs>
    <ad></ad>
    <commdityListPage></commdityListPage>
    <footers></footers>
    <scroll></scroll>
  </div>
</template>

<script>
import menus from '~/components/Menu.vue'
import headers from '~/components/Header.vue'
import navs from '~/components/Nav.vue'
import ad from '~/components/Ad.vue'
import commdityListPage from '~/components/CommdityListPage.vue'
import footers from '~/components/Footer.vue'
import scroll from '~/components/Scroll.vue'

export default {
  data(){
    return{
      title: '列表页'
    }
  },
  components: {
    menus,
    headers,
    navs,
    ad,
    commdityListPage,
    footers,
    scroll
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>

<style>
</style>
