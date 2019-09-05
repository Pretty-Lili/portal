<template>
  <ol class="menu-wrap">
    <li
    v-for="(data,index) in menuDate"
    :key="index"
    @mouseenter="mouseEnter($event)"
    @mouseleave="mouserLeave($event)">
      <span class="title">{{data.text}}</span>
      <template v-if="data.items !== null">
        <ul class="menu-con" v-show="false">
          <li
          v-for="(data1,index) in data.items"
          :key="index">
            <span class="title">{{data1.text}}</span>
            <template v-if="data1.items !== null">
              <ul class="menu-item">
                <li
                v-for="(data2,index) in data1.items"
                :key="index">
                  <span>{{data2.text}}</span>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </template>
    </li>
  </ol>
</template>

<script>
import axios from 'axios'
export default {
  name: 'meunList',
  data () {
    return {
      menuDate: [],
      subMenu: []
    }
  },
  methods: {
    getMenuData () {
      axios.get('/api/menu.json').then(
        this.getMenuDataSucc)
    },
    getMenuDataSucc (res) {
      res = res.data
      if (res.ret && res.items) {
        this.menuDate = res.items
      }
    },
    mouseEnter (event) {
      event.target.children[1].style.display = 'block'
    },
    mouserLeave (event) {
      event.target.children[1].style.display = 'none'
    }
  },
  mounted () {
    this.getMenuData()
  }
}
</script>

<style scoped>
  .menu-wrap{
    background-color: #ffffff;
    padding: 0 10px;
  }
  .menu-wrap>li{
    position: relative;
    border-bottom: 5px solid #ffffff00;
    z-index: 2;
  }
  .menu-wrap>li:hover{
    border-bottom: 5px solid #0079fc;
  }
  .menu-wrap li{
    display: inline-block;
  }
  .menu-con{
    position: absolute;
    left: 0;
    top: 40px;
    background-color: #ffff;
    box-shadow: 0px 0px 3px rgba(0,0,0,0.4);
    padding: 10px 0;
    box-sizing: border-box;
  }
  .menu-wrap span{
    display: inline-block;
    color: #666666;
    cursor: pointer;
    font-size: 12px;
  }
  .menu-wrap>li>span{
    font-size: 14px;
    font-weight: 700;
    padding: 10px 10px 5px 10px;
    z-index: 3;
  }
  .menu-con>li{
    display: block;
    width: 580px;
    overflow: hidden;
  }
  .menu-item{
    float: right;
    width: 480px;
  }
  .menu-con .title{
    width: 100px;
    text-align: right;
    font-weight: 700;
    padding: 5px;
  }
  .menu-item li{
    padding: 5px;
  }
  .menu-item span{
    border-left: 1px solid #efefef;
    padding-left: 10px;
  }
</style>
