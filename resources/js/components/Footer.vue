<template>
  <footer class="footer">
    <div class="footer_inner">
      <p class="copyright">Copyright &copy; 2021 inamumu All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../../sass/_variables.scss';

.footer {
  width: 100%;
  .footer_inner {
    max-width: $layout-width;
    margin: 0 auto;
    .copyright {
      font-size: 1.2rem;
      text-align: center;
    }
  }
}
</style>