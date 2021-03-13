<template>
  <nav class="nav">
    <div class="toggle" @click="toggle" :class="{'js-active':active}">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="global_nav">
      <ul>
        <li><router-link to="/login">Login / Register</router-link></li>
      </ul>
    </div>
    <div class="js-gray" v-show="active" @click="toggle"></div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    }
  },
  methods: {
    toggle() {
      this.active = !this.active;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/_variables.scss';

.nav {
  .toggle {
    position: relative;
    width: 25px;
    height: 18px;
    margin: 0 auto;
    cursor: pointer;
    z-index: 99;
    span {
      position: absolute;
      width: 100%;
      height: 2px;
      top: 0;
      left: 0;
      background-color: #333;
      transition: .3s;
      &:nth-child(2) {
        top: 9px;
        transform: translateY(-50%);
      }
      &:last-child {
        top: 16px;
        width: 18px;
      }
    }
    &.js-active {
      span {
        transform: translateY(7px) rotate(-45deg);
        transition: .3s;
        &:nth-child(2) {
          opacity: 0;
        }
        &:last-child {
          transform: translateY(-8px) rotate(45deg);
          width: 100%;
        }
      }
    }
  }
  .global_nav {
    position: fixed;
    top: 0;
    width: 350px;
    height: 100vh;
    background-color: #fff;
    z-index: 10;
    transform: translateX(100vw);
    transition: .6s;
    ul {
      li {
        a {
          position: relative;
          display: block;
          padding: 10px;
          color: $text-color;
          &::before, &::after {
            position: absolute;
            content: "";
            bottom: 0;
            width: 0;
            border-bottom: 1px solid #333;
            transition: all .3s ease;
            -webkit-transition: all .3s ease;
          }
          &::before {
            left: 50%;
          }
          &::after {
            right: 50%;
          }
          &:hover {
            &::before, &::after {
              width: 50%;
            }
          }
        }
      }
    }
  }
  .js-active {
    & + .global_nav {
      transform: translateX(-70%);
      -webkit-transition: .6s ease-in-out;
      -moz-transition: .6s ease-in-out;
      transition: .6s ease-in-out;
    }
  }
  .js-gray {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #333;
    opacity: .8;
    visibility: visible;
    transition: all .6s;
    cursor: pointer;
    z-index: 2;
  }
}
</style>