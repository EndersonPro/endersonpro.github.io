<template>
  <!-- <div class="youtube_container item">
    <div class="img_container">
      <img :src="img" :alt="title">
    </div>
    <div class="description_container">
      <div class="title">
        <span>{{title}}</span>
      </div>
      <div class="description">
        <div class="parrafo">
          <p>{{description}}</p>
        </div>
        <div class="more">
          <a class="btn" href="#">More information</a>
        </div>
      </div>
    </div>
  </div>-->
  <div class="blog-card">
    <div class="meta">
      <div class="photo" :style="{backgroundImage: 'url('+img+')'}"></div>
      <ul class="details">
        <li class="author">
          <a href="#">{{channelTitle}}</a>
        </li>
        <li class="date">{{published}}</li>

        <!-- Tags por si en un futuro los llegase a colocar -->
        <!-- <li class="tags">
          <ul>
            <li>
              <a href="#">Learn</a>
            </li>
            <li>
              <a href="#">Code</a>
            </li>
            <li>
              <a href="#">HTML</a>
            </li>
            <li>
              <a href="#">CSS</a>
            </li>
          </ul>
        </li>-->
      </ul>
    </div>
    <div class="description">
      <h1>{{title}}</h1>
      <h2>{{published}}</h2>
      <p>{{description}}</p>
      <p class="read-more">
        <nuxt-link :to="{path:'youtube/'+id}">Read More</nuxt-link>
        <!-- <a href="#"></a> -->
      </p>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: ["img", "title", "description", "id", "publishedAt", "channelTitle"],
  computed: {
    published() {
      moment.locale("es");
      return moment(this.publishedAt).format("DD, MMM YYYY");
    }
  }
};
</script>

<style lang="scss" scoped>
$color_white: #fff;
$color_prime: #5ad67d;
$color_grey: #e2e2e2;
$color_grey_dark: #a2a2a2;

.blog-card {
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  box-shadow: 0 3px 7px -1px rgba(#000, 0.1);
  margin-bottom: 1.6%;
  background: $color_white;
  line-height: 1.4;
  font-family: sans-serif;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
  a {
    color: inherit;
    &:hover {
      color: $color_prime;
    }
  }
  &:hover {
    .photo {
      transform: scale(1.3) rotate(3deg);
    }
  }
  .meta {
    position: relative;
    z-index: 0;
    height: 200px;
  }
  .photo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    transition: transform 0.2s;
  }
  .details,
  .details ul {
    margin: auto;
    padding: 0;
    list-style: none;
  }

  .details {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -100%;
    margin: auto;
    transition: left 0.2s;
    background: rgba(#000, 0.6);
    color: $color_white;
    padding: 10px;
    width: 100%;
    font-size: 0.9rem;
    a {
      text-decoration: dotted underline;
    }
    ul li {
      display: inline-block;
    }
    .author:before {
      font-family: FontAwesome;
      margin-right: 10px;
      content: "\f007";
    }

    .date:before {
      font-family: FontAwesome;
      margin-right: 10px;
      content: "\f133";
    }

    .tags {
      ul:before {
        font-family: FontAwesome;
        content: "\f02b";
        margin-right: 10px;
      }
      li {
        margin-right: 2px;
        &:first-child {
          margin-left: -4px;
        }
      }
    }
  }
  .description {
    padding: 1rem;
    background: $color_white;
    position: relative;
    z-index: 1;
    h1,
    h2 {
      font-family: Poppins, sans-serif;
    }
    h1 {
      line-height: 1;
      margin: 0;
      font-size: 1.5rem;
    }
    h2 {
      font-size: 0.8rem;
      font-weight: 300;
      text-transform: uppercase;
      color: $color_grey_dark;
      margin-top: 5px;
    }
    .read-more {
      text-align: right;
      a {
        color: $color_prime;
        display: inline-block;
        position: relative;
        &:after {
          content: "\f061";
          font-family: FontAwesome;
          margin-left: -10px;
          opacity: 0;
          vertical-align: middle;
          transition: margin 0.3s, opacity 0.3s;
        }

        &:hover:after {
          margin-left: 5px;
          opacity: 1;
        }
      }
    }
  }
  p {
    position: relative;
    margin: 1rem 0 0;
    &:first-of-type {
      margin-top: 1.25rem;
      &:before {
        content: "";
        position: absolute;
        height: 5px;
        background: $color_prime;
        width: 35px;
        top: -0.75rem;
        border-radius: 3px;
      }
    }
  }
  &:hover {
    .details {
      left: 0%;
    }
  }

  @media (min-width: 640px) {
    flex-direction: row;
    max-width: 700px;
    .meta {
      flex-basis: 40%;
      height: auto;
    }
    .description {
      flex-basis: 60%;
      &:before {
        transform: skewX(-3deg);
        content: "";
        background: #fff;
        width: 30px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        z-index: -1;
      }
    }
    &.alt {
      flex-direction: row-reverse;
      .description {
        &:before {
          left: inherit;
          right: -10px;
          transform: skew(3deg);
        }
      }
      .details {
        padding-left: 25px;
      }
    }
  }
}

/* img {
  width: 130px;
}
.youtube_container {
  margin: 1em;
  padding: 1em;
  background-color: rgba(2, 94, 115, 0.7);
  flex-basis: calc(50% - 2em);
  display: flex;
  flex-direction: row;
  align-content: space-between;
}
.img_container {
  background-size: cover;
}

.description_container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.title {
  background-color: brown;
  padding: 0.3em;
  flex-basis: 20%;
  text-align: center;
}
.title span {
  font-size: 13px;
  color:#ebf2f1;
}

.description {
  padding: 0.9em;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  justify-content: space-between;
}
.btn {
  text-decoration: none;
  font-size: 13px;
  padding: 0.4em;
  background-color: orange;
  color: white;
}
.btn:hover {
  transition: 0.5s all ease-out;
  background-color: green;
}

.parrafo {
  margin-bottom: 1em;
  font-size: 14px;
  color: #ebf2f1;
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media screen and (max-width: 999px) {
  .youtube_container {
    flex-basis: calc(100% - 1em);
  }
  .parrafo {
    white-space: normal;
    width: 100%;
  }
  .title span {
    font-size: 17px;
  }
}

@media screen and (max-width: 560px) {
  .youtube_container {
    flex-direction: column;
  }
  .parrafo {
    margin-bottom: 1em;
  }
  .more {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  img {
    max-width: 100%;
    width: 100%;
  }
}  */
</style>

