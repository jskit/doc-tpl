<template>
  <div class="kit-doc-nav" :style="style">
    <ul class="kit-doc-nav__list">
      <li
        class="kit-doc-nav__item"
        v-for="(item, index) in navConfig"
        :key="index"
      >
        <kit-doc-nav-link :item="item" :base="base" />
        <ul v-if="item.children">
          <li
            class="nav-item"
            v-for="(navItem, index) in item.children"
            :key="index"
          >
            <kit-doc-nav-link :item="navItem" :base="base" />
          </li>
        </ul>
        <template v-if="item.groups">
          <div v-for="(group, index) in item.groups" :key="index">
            <div class="kit-doc-nav__group-title">{{ group.title }}</div>
            <ul class="kit-doc-nav__list">
              <li
                :key="index"
                class="kit-doc-nav__subitem"
                v-for="(navItem, index) in group.list"
                v-if="!navItem.disabled"
              >
                <kit-doc-nav-link :item="navItem" :base="base" />
              </li>
            </ul>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  name: "kit-doc-nav",

  components: {
    [NavLink.name]: NavLink
  },

  props: {
    navConfig: Array,
    base: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      top: 60,
      bottom: 0
    };
  },

  computed: {
    style() {
      return {
        top: this.top + "px",
        bottom: this.bottom + "px"
      };
    }
  },

  created() {
    window.addEventListener("scroll", this.onScroll);
    this.onScroll();
  },

  methods: {
    onScroll() {
      const { pageYOffset: offset } = window;
      this.top = Math.max(0, 60 - offset);
    }
  }
};
</script>

<style lang="stylus">
@import '../style/var';

.kit-doc-nav {
  left: 0;
  top: 60px;
  bottom: 0;
  z-index: 1;
  position: fixed;
  overflow-y: scroll;
  padding: 25px 0 75px;
  min-width: $kit-doc-nav-width;
  max-width: $kit-doc-nav-width;
  border-right: 1px solid $kit-doc-border-color;

  @media (max-width: 1300px) {
    min-width: 220px;
    max-width: 220px;
  }
  &__list{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  @media (min-width: $kit-doc-row-max-width) {
    left: 50%;
    margin-left: -$kit-doc-row-max-width/2;
  }

  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: transparent;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(69, 90, 100, .2)
  }

  &__item,
  &__subitem {
    a {
      margin: 0;
      display: block;
      color: #455a64;
      font-size: 16px;
      padding: 8px 20px;
      // padding: 10px calc($kit-doc-padding/2) 10px $kit-doc-padding;
      line-height: 24px;
      transition: all .3s;

      // &.active {
      //   color: $kit-doc-blue;
      //   background-color: #f5f7fa;
      //   border-right: 3px solid;
      //   padding-right: 1px;
      //   margin-right: -1px;
      // }
    }
  }

  &__item {
    > a {
      font-weight: bold;
    }
  }

  &__subitem {
    a {
      font-size: 14px;
      padding-left: 34px;

      &:hover {
        color: $kit-doc-blue;
        background-color: #f5f7fa;
      }
    }

    small {
      opacity: 0.6;
      font-size: 80%;
    }
  }

  &__group-title {
    font-size: 13px;
    line-height: 40px;
    // padding-left: $kit-doc-padding;
    padding-left: 22px;
    color: $kit-doc-text-light-blue;
  }

  @media (max-width: 1300px) {
    min-width: 220px;
    max-width: 220px;

    &__item,
    &__subitem {
      a {
        line-height: 22px;
      }
    }

    &__subitem {
      a {
        font-size: 13px;
        padding-left: 30px;
      }
    }
  }
}
</style>
