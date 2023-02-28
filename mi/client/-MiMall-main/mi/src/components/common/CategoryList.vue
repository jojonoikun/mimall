<template>
  <div id="itemListContainer" @mouseleave="changeDisplay2">
    <div class="itemList">
      <ul id="itemUl">
        <li class="itemLi" @mouseenter="changeDisplay(0)">
          <a class="hrefLi" href="javascript:;">手机</a>
          <i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="itemLi" @mouseenter="changeDisplay(1)">
          <a class="hrefLi" href="javascript:;">电视</a
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="itemLi" @mouseenter="changeDisplay(2)">
          <a class="hrefLi" href="javascript:;">笔记本 平板</a
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="itemLi" @mouseenter="changeDisplay(3)">
          <a class="hrefLi" href="javascript:;">家电</a
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="itemLi" @mouseenter="changeDisplay(4)">
          <a class="hrefLi" href="javascript:;">出行 穿戴</a
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="itemLi" @mouseenter="changeDisplay(5)">
          <a class="hrefLi" href="javascript:;">智能 路由器</a
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="itemLi" @mouseenter="changeDisplay(6)">
          <a class="hrefLi" href="javascript:;">健康 儿童</a
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="itemLi" @mouseenter="changeDisplay(7)">
          <a class="hrefLi" href="javascript:;">耳机 音箱</a
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="itemLi" @mouseenter="changeDisplay(8)">
          <a class="hrefLi" href="javascript:;">生活 箱包</a
          ><i class="iconfont icon-jiantouyou"></i>
        </li>
      </ul>
    </div>
    <div class="itemRight" v-if="currentIndex != -1">
      <div class="showList" v-show="currentIndex == 0">
        <SingleAd category="手机" />
      </div>
      <div class="showList" v-show="currentIndex == 1">
        <SingleAd category="电视" />
      </div>
      <div class="showList" v-show="currentIndex == 2">
        <SingleAd category="笔记本 平板" />
      </div>
      <div class="showList" v-show="currentIndex == 3">
        <SingleAd category="家电" />
      </div>
      <div class="showList" v-show="currentIndex == 4">
        <SingleAd category="出行 穿戴" />
      </div>
      <div class="showList" v-show="currentIndex == 5">
        <SingleAd category="智能 路由器" />
      </div>
      <div class="showList" v-show="currentIndex == 6">
        <SingleAd category="电源 配件" />
      </div>
      <div class="showList" v-show="currentIndex == 7">
        <SingleAd category="健康 儿童" />
      </div>
      <div class="showList" v-show="currentIndex == 8">
        <SingleAd category="耳机 音箱" />
      </div>
      <div class="showList" v-show="currentIndex == 9">
        <SingleAd category="生活 箱包" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleAd from "../header/SingleAd";
export default {
  data() {
    return {
      currentIndex: -1,
    };
  },
  methods: {
    changeDisplay(index) {
      this.currentIndex = index;
    },
    changeDisplay2() {
      //离开容器
      this.currentIndex = -1;
    },
  },
  components: {
    SingleAd,
  },
  mounted() {},
  watch: {
    currentIndex(newVal) {
      if (newVal == -1) {
        //移出去了
        for (let i = 0; i < 9; i++) {
          document.getElementsByClassName("itemLi")[i].style.background =
            "transparent";
          document.getElementsByClassName("hrefLi")[i].style.Color = "#333";
        }
      } else {
        for (let i = 0; i < 9; i++) {
          document.getElementsByClassName("itemLi")[i].style.background =
            "transparent";
          document.getElementsByClassName("hrefLi")[i].style.Color = "#333";
        }
        document.getElementsByClassName("itemLi")[
          newVal
        ].style.backgroundColor = "#ff6700";
        document.getElementsByClassName("hrefLi")[newVal].style.Color =
          "#fff !important";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#itemListContainer {
  height: 460px;
  .itemList {
    width: 234px;
    height: 460px;
    z-index: 10;
    position: absolute;
    left: 0px;
    background-color: #5a57557a;

    &:hover {
      .showList {
        opacity: 1;
      }
    }

    #itemUl {
      width: 234px;
      height: 420px;
      padding-top: 20px;
      padding-bottom: 20px;
      position: relative;
      background: transparent;

      .itemLi {
        width: 234px;
        height: 47px;
        position: relative;
        cursor: pointer;
        a {
          padding-left: 30px;
          text-decoration: none;
          font-size: 14px;
          line-height: 47px;
          font-family: "Helvetica Neue";
          color: #fff;
        }
        .icon-jiantouyou {
          position: absolute;
          right: 20px;
          top: 10px;
          color: #fff;
        }
      }
    }
  }

  .itemRight {
    position: absolute;
    left: 226px;
    height: 460px;
    z-index: 20;
    box-shadow: 0 30px 6px rgb(0 0 0 / 10%);
  }
}
</style>