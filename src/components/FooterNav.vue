<template>
  <div class="kit-doc-footer-nav">
    <div
      v-if="leftNav"
      class="kit-doc-footer-nav__link kit-doc-footer-nav__left"
      @click="handleNavClick('prev');"
    >
      <div class="kit-doc-footer-nav__arrow-left"></div>
      <span>{{ leftNav.title }}</span>
    </div>
    <div
      v-if="rightNav"
      class="kit-doc-footer-nav__link kit-doc-footer-nav__right"
      @click="handleNavClick('next');"
    >
      <span>{{ rightNav.title }}</span>
      <div class="kit-doc-footer-nav__arrow-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "kit-doc-footer-nav",

  props: {
    // navConfig: Array,
    list: Array,
    index: Number,
    base: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      nav: [],
      currentPath: null
      // leftNav: null,
      // rightNav: null,
    };
  },

  computed: {
    leftNav() {
      return this.list[this.index - 1];
    },
    rightNav() {
      return this.list[this.index + 1];
    }
  },

  // watch: {
  //   '$route.path'() {
  //     this.setNav()
  //     this.updateNav()
  //   },
  // },

  // created() {
  //   this.setNav();
  //   this.updateNav();
  //   this.keyboardHandler();
  // },

  methods: {
    // setNav() {
    //   const nav = this.navConfig
    //   for (let i = 0; i < nav.length; i++) {
    //     const navItem = nav[i]
    //     if (!navItem.groups) {
    //       this.nav.push(nav[i])
    //     } else {
    //       for (let j = 0; j < navItem.groups.length; j++) {
    //         this.nav = this.nav.concat(navItem.groups[j].list)
    //       }
    //     }
    //   }
    // },

    // updateNav() {
    //   let currentIndex;

    //   this.currentPath = '/' + this.$route.path.split('/').pop();

    //   for (let i = 0, len = this.nav.length; i < len; i++) {
    //     if (this.nav[i].path === this.currentPath) {
    //       currentIndex = i;
    //       break;
    //     }
    //   }
    //   this.leftNav = this.nav[currentIndex - 1];
    //   this.rightNav = this.nav[currentIndex + 1];
    // },

    handleNavClick(direction) {
      const nav = direction === "prev" ? this.leftNav : this.rightNav;
      if (nav.path) {
        this.$router.push(`${this.base}/${nav.path}`);
      } else if (nav.link) {
        window.location.href = nav.link;
      }
    }
  },

  keyboardHandler() {
    window.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37: // left
          this.handleNavClick("prev");
          break;
        case 39: // right
          this.handleNavClick("next");
          break;
      }
    });
  }
};
</script>

<style lang="stylus">
@import '../style/var';

.kit-doc-footer-nav {
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  padding: 24px 45px;
  position: absolute;

  &__link {
    flex: 1;
    font-size: 14px;
    line-height: 1.5;
    cursor: pointer;
    opacity: 0.7;
    color: $kit-doc-code-color;
    transition: 0.3s;

    &:hover {
      opacity: 1;
      color: $kit-doc-blue;
    }

    .kit-icon {
      font-size: 12px;
      line-height: 16px;
    }

    span {
      vertical-align: middle;
    }
  }

  &__left,
  &__right {
    padding: 0 15px;
    position: relative;
  }

  &__right {
    text-align: right;
  }

  &__arrow-left,
  &__arrow-right {
    top: 50%;
    width: 8px;
    height: 8px;
    margin-top: -4px;
    position: absolute;
    border: solid currentColor;
    border-width: 0 1px 1px 0;
  }

  &__arrow-left {
    left: 0;
    transform: rotate(135deg);
  }

  &__arrow-right {
    right: 0;
    transform: rotate(-45deg);
  }
}
</style>
