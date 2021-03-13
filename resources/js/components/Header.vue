<template>
  <header class="header">
    <div class="header_inner">
      <div class="head01">
        <h1><router-link to="/">ロゴ</router-link></h1>
      </div>
      <NavBar />
    </div>
  </header>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
  components: {
    NavBar,
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/_variables.scss';

.header {
  width: 100%;
  padding: 30px 0;
  .header_inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: $layout-width;
    margin: 0 auto;
    .head01 {
      h1 {
        font-size: 2.6rem;
        a {
          color: $text-color;
        }
      }
    }
  }
}
</style>