<template>
  <main class="main">
    <div class="form_inner">
      <section class="form_area">
        <!-- <div class="head02">
          <h2>Login</h2>
        </div> -->
        <ul class="tab">
          <li @click="tab = 1" :class="{'js-active': tab === 1}">Login</li>
          <li @click="tab = 2" :class="{'js-active': tab === 2}">Register</li>
        </ul>
        <form class="panel" v-show="tab === 1" @submit.prevent="Login">
          <div class="text_block">
            <label for="email">email</label>
            <input type="email" v-model="loginForm.email" id="email" name="email" placeholder="example@example.com">
          </div>
          <div class="text_block">
            <label for="password">password</label>
            <input type="password" v-model="loginForm.password" id="password" name="password">
          </div>
          <div class="submit">
            <input type="submit" value="Login">
          </div>
        </form>
        <form class="panel" v-show="tab === 2" @submit.prevent="Register">
          <div class="text_block">
            <label for="username">name</label>
            <input type="text" v-model="registerForm.name" id="username" placeholder="inamumu">
          </div>
          <div class="text_block">
            <label for="email">email</label>
            <input type="email" v-model="registerForm.email" id="email" placeholder="example@example.com">
          </div>
          <div class="text_block">
            <label for="password">password</label>
            <input type="password" v-model="registerForm.password" id="password">
          </div>
          <div class="text_block">
            <label for="password_confirmation">password (confirm)</label>
            <input type="password" v-model="registerForm.password_confirmation" id="password_confirmation">
          </div>
          <div class="submit">
            <input type="submit" value="Register">
          </div>
        </form>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      tab: 1,
      loginForm: {
        email: '',
        password: '',
      },
      registerForm: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    login () {
      console.log(this.loginForm)
    },
    register () {
      console.log(this.registerForm)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/_variables.scss';

.form_inner {
  max-width: $layout-width;
  margin: 0 auto;
  .form_area {
    width: 500px;
    margin: 0 auto;
    padding: 20px 50px;
    // .head02 {
    //   text-align: center;
    //   h2 {
    //     display: inline-block;
    //     position: relative;
    //     padding-bottom: 15px;
    //     font-size: 2.2rem;
    //     &::before {
    //       position: absolute;
    //       content: "";
    //       bottom: 0;
    //       left: 0;
    //       background: $green;
    //       width: 100%;
    //       height: 2px;
    //     }
    //   }
    // }
    .tab {
      display: flex;
      list-style: none;
      li {
        padding: 10px;
        border: 2px solid #eee;
        border-radius: 5px;
        cursor: pointer;
        &:nth-child(2) {
          margin-left: 2px;
        }
        &.js-active {
        background-color: #dfdfdf;
      }
      }
    }
    form {
      .text_block {
        margin-top: 45px;
        label {
          position: relative;
          display: block;
          padding-left: 10px;
          font-size: 1.8rem;
          &::before {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            background: $green;
            width: 3px;
            height: 100%;
          }
        }
        input[type="text"], input[type="email"], input[type="password"] {
          width: 100%;
          margin-top: 10px;
          padding: 10px;
          border-top: none;
          border-right: none;
          border-left: none;
          border-bottom: 2px solid #d6dce3;
          cursor: pointer;
          &:focus {
            outline: none;
            border-bottom: 2px solid #f7dc84;
            transition-duration: .3s;
            &::placeholder {
              color: transparent;
              transition-duration: .2s;
            }
          }
          &:hover {
            border-bottom: 2px solid #f7dc84;
            transition-duration: .3s;
          }
        }
      }
      .submit {
        margin-top: 50px;
        input[type="submit"] {
          width: 100%;
          padding: 10px;
          border: 2px solid #d6dce3;
          cursor: pointer;
          &:hover {
            opacity: .6;
            transition-duration: .5s;
          }
        }
      }
    }
  }
}
</style>