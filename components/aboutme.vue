<template>
  <div class="sobremi">
    <div class="texto">
      <p>
        Mi nombre es Enderson Vizcaíno tengo 20 años de edad, desde muy pequeño me atrajo el mundo de la tecnologías, por eso decidí estudiar Ingeniería en sistemas en la Universidad del magdalena, actualmente estoy cursando 6to semestre, he realizado varios proyectos personales que los puedes revisar en *Proyectos*.
        También tengo un canal en Youtube donde me gusta enseñar lo poco que se del mundo de la programación.
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.sobremi {
  margin-top: 100px;
  display: flex;
  width: 100%;
  background: #fbfbfb;
  height: 400px;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  z-index: 1;
  clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  &::after {
    background: url(https://png.pngtree.com/element_origin_min_pic/16/10/07/1557f7558869880.jpg);
    content: "";
    opacity: 0.1;
    background-repeat: no-repeat;
    background-position: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 1;
  }
  .texto {
    display: block;
    width: 100%;
    &::before {
      content: "Sobre Mí";
      position: absolute;
      color: black;
      font-size: 30px;
      right: 7%;
      top: 1em;
      z-index: 2;
    }
    p {
      margin: 0 auto;
      color: black;
      font-size: 20px;
      text-align: justify;
      line-height: 1.8em;
      padding: 1em;
    }
    width: 100%;
    z-index: 3;
  }
}
</style>

