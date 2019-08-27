<template>
  <div class="nav-container">
    <nuxt-link to="/">
      <div class="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="74.707"
          height="71.707"
          viewBox="0 0 74.707 71.707"
        >
          <defs>
          <style>
            .cls-1 {
              fill: none;
              stroke: #f6ecdd;
            }
            .cls-2 {
              fill: #fc3a52;
            }
          </style>
        </defs>
        <g>
          <line class="cls-1" x1="53.35" y1="0.35" x2="0.35" y2="53.35"/>
          <path class="cls-1" d="M64.35,9.35l-9.11,9.11L11.35,62.35" transform="translate(0 0)"/>
          <path class="cls-1" d="M74.35,18.35l-9.11,9.11L21.35,71.35" transform="translate(0 0)"/>
          <path class="cls-2" d="M29.46,42.68l-2.51,5H21.47L36.27,18,46.15,37.8H40.6l-4.33-8.7L31.9,37.8Zm21.61,5H45.56l-2.44-4.92h5.47Z" transform="translate(0 0)"/>
        </g>
        </svg>
      </div>
    </nuxt-link>

    <!-- <div class="menu-button-container">
      <button v-on:click="show = !show" class="menu-button">Toggle</button>
      <transition name="slide">
        <div v-if="show" class="test1">hello</div>
      </transition>
    </div>-->

    <div class="menu-icon">
      <span class="menu-icon__line menu-icon__line-left"></span>
      <span class="menu-icon__line"></span>
      <span class="menu-icon__line menu-icon__line-right"></span>
    </div>

    <div class="nav">
      <div class="nav__content">
        <ul class="nav__list">
          <nuxt-link to="/" class="nav__list-item">Home</nuxt-link>
          <nuxt-link to="/projects" class="nav__list-item">Projects</nuxt-link>
          <nuxt-link to="/blog" class="nav__list-item">Blog</nuxt-link>
          <nuxt-link to="/about" class="nav__list-item">About</nuxt-link>
        </ul>
      </div>
    </div>

    <!-- <div class="site-content">
      <h1 class="site-content__headline">Another menu concept</h1>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>
<style scoped>
.nav-container {
  width: 100px;
  height: 100vh;
  left: 0%;
  position: fixed;
  top: 0%;
  z-index: 900;
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}
.menu-applause {
  width: 100%;
  position: absolute;
  bottom: 30px;
  display: block;
  left: 77%;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
}
/* .nav-container:hover {
  width: 90%;
} */
@media screen and (max-width: 999px) {
  .nav-container {
    width: 100%;
    height: 65px;
  }
  .menu-applause {
    display: none;
  }
}
.logo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  position: relative;
  overflow: hidden;
  left: 15%;
  padding-top: 30px;
  transform: translate(-50%);
}
@media screen and (max-width: 999px) {
  .logo {
    left: 8%;
    padding-top: 0px;
  }
  svg {
    width: 60px;
  }
}
@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}
@keyframes godown {
  100% {
    top: 180px;
  }
}
@keyframes goright {
  100% {
    left: 70px;
  }
}
/* menu button */
.menu-button {
  position: relative;
  z-index: 1001;
}
.test1 {
  width: 100%;
  height: 100vw;
  position: fixed;
  z-index: 1000;
  top: 0%;
  left: 0%;
  background-color: var(--primary-color);
}
.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
/* menu */
.site-content {
  max-width: 1100px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.site-content__headline {
  font-weight: 200;
  color: #ffffff;
  font-size: calc(2vw + 10px);
}
.menu-icon {
  height: 30px;
  width: 30px;
  position: fixed;
  z-index: 2;
  left: 50px;
  transition: translate();
  transform: translate(-50%, -50%);
  top: 50%;
  cursor: pointer;
}
.menu-icon__line {
  height: 2px;
  width: 30px;
  display: block;
  background-color: var(--primary-color);
  margin-bottom: 4px;
  transition: background-color 0.5s ease, -webkit-transform 0.2s ease;
  transition: transform 0.2s ease, background-color 0.5s ease;
  transition: transform 0.2s ease, background-color 0.5s ease,
    -webkit-transform 0.2s ease;
}
.menu-icon__line-left {
  width: 15px;
}
.menu-icon__line-right {
  width: 15px;
  float: right;
}
.nav {
  position: fixed;
  z-index: 1;
}
.nav:before,
.nav:after {
  content: '';
  position: fixed;
  width: 100vw;
  top: 0%;
  height: 100vh;
  background: var(--primary-color);
  z-index: -1;
  transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s,
    -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
  -webkit-transform: translateX(0%) translateY(-100%);
  transform: translateX(0%) translateY(-100%);
}
.nav:after {
  background: #d6d6d6;
  transition-delay: 0s;
}
.nav:before {
  transition-delay: 0.1s;
}
.nav__content {
  position: fixed;
  top: 50%;
  -webkit-transform: translate(0%, -50%);
  transform: translate(0%, -50%);
  width: 100%;
  text-align: center;
  font-size: calc(2vw + 10px);
  font-weight: 200;
  cursor: pointer;
}
.nav__list-item {
  position: relative;
  display: inline-block;
  transition-delay: 0.8s;
  opacity: 0;
  -webkit-transform: translate(0%, 100%);
  transform: translate(0%, 100%);
  transition: opacity 0.2s ease, -webkit-transform 0.3s ease;
  transition: opacity 0.2s ease, transform 0.3s ease;
  transition: opacity 0.2s ease, transform 0.3s ease,
    -webkit-transform 0.3s ease;
  margin-right: 25px;
}
.nav__list-item:before {
  content: '';
  position: absolute;
  background: #000000;
  width: 20px;
  height: 1px;
  top: 100%;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  transition: all 0.3s ease;
  z-index: -1;
}
.nav__list-item:hover:before {
  width: 100%;
}
body.nav-active .menu-icon__line {
  background-color: #000;
  -webkit-transform: translateX(0px) rotate(-45deg);
  transform: translateX(0px) rotate(-45deg);
}
body.nav-active .menu-icon__line-left {
  -webkit-transform: translateX(1px) rotate(45deg);
  transform: translateX(1px) rotate(45deg);
}
body.nav-active .menu-icon__line-right {
  -webkit-transform: translateX(-2px) rotate(45deg);
  transform: translateX(-2px) rotate(45deg);
}
body.nav-active .nav {
  visibility: visible;
}
body.nav-active .nav:before,
body.nav-active .nav:after {
  -webkit-transform: translateX(0%) translateY(0%);
  transform: translateX(0%) translateY(0%);
}
body.nav-active .nav:after {
  transition-delay: 0.1s;
}
body.nav-active .nav:before {
  transition-delay: 0s;
}
body.nav-active .nav__list-item {
  opacity: 1;
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
  transition: opacity 0.3s ease, color 0.3s ease, -webkit-transform 0.3s ease;
  transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
  transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease,
    -webkit-transform 0.3s ease;
}
body.nav-active .nav__list-item:nth-child(0) {
  transition-delay: 0.5s;
}
body.nav-active .nav__list-item:nth-child(1) {
  transition-delay: 0.6s;
}
body.nav-active .nav__list-item:nth-child(2) {
  transition-delay: 0.7s;
}
body.nav-active .nav__list-item:nth-child(3) {
  transition-delay: 0.8s;
}
body.nav-active .nav__list-item:nth-child(4) {
  transition-delay: 0.9s;
}
@media screen and (max-width: 999px) {
  .menu-icon {
    height: 30px;
    width: 30px;
    position: fixed;
    z-index: 2;
    left: auto;
    right: 22px;
    top: 42px;
    cursor: pointer;
  }
}
</style>