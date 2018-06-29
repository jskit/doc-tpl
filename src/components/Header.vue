<template>
  <div class="kit-doc-header">
    <div class="kit-doc-row">
    <div class="kit-doc-header__top">
      <a class="kit-doc-header__logo" href="/"></a>
        <ul class="kit-doc-header__top-nav">
          <li v-for="(value, key) in nav" :key="value">
            <a :href="value" :class="{ active: key === active }">{{ key }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kit-doc-header',

  props: {
    nav: Object,
    active: String,
  },

  methods: {
    // onSwitchLang(lang) {
    //   this.$router.push(this.$route.path.replace(lang.from, lang.to));
    // },
  },
};
</script>

<style lang="stylus">
@import '../style/var';

.kit-doc-header {
  width: 100%;
  user-select: none;
  border-bottom: 1px solid $kit-doc-border-color;

  &__top {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 0 $kit-doc-padding;
    height: $kit-doc-header-top-height;
    line-height: $kit-doc-header-top-height;
    box-shadow: 0 1px 4px rgba(0,0,0,.1);

    &-nav {
      flex: 1;
      text-align: right;

      > li {
        display: inline-block;
        position: relative;
        vertical-align: middle;
      }
      &:last-child {
        a {
          margin-right: 5px;
        }
      }

      a {
        margin: 0 20px;
        font-size: 15px;
        display: block;
        letter-spacing: 1px;
        color: $kit-doc-text-color;

        &:hover,
        &.active {
          color: $kit-doc-blue;
        }
      }

      &-lang {
        padding: 0 7px;
        font-size: 14px;
        line-height: 24px;
        display: block;
        border-radius: 3px;
        text-align: center;
        color: $van-doc-code-color;
        border: 1px solid currentColor;
        font-family: 'Helvetica Neue', Arial, sans-serif;
        transition: 0.3s ease-in-out;

        &:hover {
          color: $van-doc-blue;
        }
      }

      &-item {
        margin-left: 20px;
      }

      &-title {
        font-size: 15px;
        letter-spacing: 1px;
        color: $kit-doc-text-color;

        &:hover,
        &.active {
          color: $kit-doc-blue;
        }

        svg {
          fill: $kit-doc-code-color;
          display: block;
          vertical-align: middle;
          transition: 0.3s ease-in-out;

          &:hover {
            fill: $van-doc-blue;
          }
        }
      }

      .kit-doc-header__arrow:hover {
        color: $kit-doc-text-color;
      }

      .van-doc-header__arrow::after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        margin-top: -1px;
        margin-left: 1px;
        margin-right: -4px;
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 5px solid #ccc;
        pointer-events: none;
      }
    }
  }

  &__logo {
    display: block;
    width: 100px;
    height: 80%;
    background-image: url('../assets/img/logo.png');
    background-size: contain;
    background-repeat: no-repeat;
    .kit-doc-header__version {
      font-size: 90%;
      padding-top: 7px;
      opacity: 0.7;
      margin-left: 3px;
      line-height: 1;
    }
  }


  &__bottom {
    height: $kit-doc-header-bottom-height;
    line-height: $kit-doc-header-bottom-height;

    &-nav {
      text-align: center;

      li {
        display: inline-block;
      }

      a {
        color: #fff;
        opacity: 0.8;
        display: block;
        padding: 0 20px;
        font-size: 14px;

        &.active {
          background-color: rgba(255, 255, 255, 0.1);
        }

        &:hover,
        &.active {
          opacity: 1;
        }
      }
    }
  }
}
</style>
