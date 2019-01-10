<template>
  <div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Inicio</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/youtube">YouTube</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/proyectos">Proyectos</nuxt-link>
        </li>
      </ul>
      <div class="button">
        <a class="btn-open" href="#"></a>
      </div>
    </nav>
    <div class="overlay">
      <div class="wrap">
        <ul class="wrap-nav">
          <li>
            <a href="#">Sobre Mi</a>
            <ul>
              <li>
                <a href="#">About Company</a>
              </li>
              <li>
                <a href="#">Designers</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Pets</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Services</a>
            <ul>
              <li>
                <a href="https://www.google.hr/">Web Design</a>
              </li>
              <li>
                <a href="#">Development</a>
              </li>
              <li>
                <a href="#">Apps</a>
              </li>
              <li>
                <a href="#">Graphic design</a>
              </li>
              <li>
                <a href="#">Branding</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Work</a>
            <ul>
              <li>
                <a href="#">Web</a>
              </li>
              <li>
                <a href="#">Graphic</a>
              </li>
              <li>
                <a href="#">Apps</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="social">
          <a href="http://mario-loncarek.from.hr/">
            <div class="social-icon">
              <i class="fa fa-facebook"></i>
            </div>
          </a>
          <a href="#">
            <div class="social-icon">
              <i class="fa fa-twitter"></i>
            </div>
          </a>
          <a href="#">
            <div class="social-icon">
              <i class="fa fa-codepen"></i>
            </div>
          </a>
          <a href="#">
            <div class="social-icon">
              <i class="fa fa-behance"></i>
            </div>
          </a>
          <a href="#">
            <div class="social-icon">
              <i class="fa fa-dribbble"></i>
            </div>
          </a>
          <p>
            From: Zagreb, Croatia
            <br>Site:
            <a href="http://mario-loncarek.from.hr/">mario-loncarek.from.hr</a>
          </p>
        </div>
      </div>
    </div>
    <div class="content">
      <nuxt/>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $(".button a").click(function() {
      $(".overlay").fadeToggle(200);
      $(this)
        .toggleClass("btn-open")
        .toggleClass("btn-close");
    });
  }
};
</script>

<style scoped>

</style>
