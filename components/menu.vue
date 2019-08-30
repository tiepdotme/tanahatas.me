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

    <div class="menu-icon" @click="show = !show">
      <!-- <button @click="changed = !changed">Change</button> -->

      <svg
        @click="changed = !changed"
        :class="{ active: changed }"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
      >
        <transition-group name="layout" tag="g">
          <rect class="items line1" ref="rect" key="rect" width="15" height="2" />
          <rect class="items line2" ref="rect" key="rect" x="0" y="6" width="30" height="2" />
          <rect class="items line3" ref="rect" key="rect" x="15" y="12" width="15" height="2" />
        </transition-group>
      </svg>
      <!-- <transition-group name="menu-button" tag="g">
        <g :class="{ active: changed }">
          <span class="menu-icon__line menu-icon__line-left"></span>
          <span class="menu-icon__line"></span>
          <span class="menu-icon__line menu-icon__line-right"></span>
        </g>
      </transition-group>-->
    </div>
    <transition name="slide-in">
      <div v-if="show">
        <div class="nav">
          <span class="nav__content">
            <span class="nav__list-item">
              <nuxt-link to="/">Home</nuxt-link>
            </span>
            <span class="nav__list-item">
              <nuxt-link to="/projects">Projects</nuxt-link>
            </span>
            <span class="nav__list-item">
              <nuxt-link to="/blog">Blog</nuxt-link>
            </span>
            <span class="nav__list-item">
              <nuxt-link to="/about">About</nuxt-link>
            </span>
            <span class="nav__list-item">
              <nuxt-link to="/opensource">Open Source</nuxt-link>
            </span>
            <span class="nav__list-item">
              <nuxt-link to="/donate">Donate</nuxt-link>
            </span>
          </span>
        </div>
      </div>
    </transition>

    <!-- <div class="site-content">
      <h1 class="site-content__headline">Another menu concept</h1>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      changed: false
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
  position: absolute;
  overflow: hidden;
  left: 15%;
  padding-top: 30px;
  transform: translate(-50%);
  z-index: 10;
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
/* menu */
/* menu icon */
/* testing */
svg {
  fill: var(--primary-color);
}
/* .active .circ {
  transform: translate3d(30px, 0, 0) scale(0.5);
}
.active .text {
  transform: rotate(90deg) scaleX(0.08) translate3d(-300px, -35px, 0);
} */
.items {
  transition: all 0.4s ease;
}
#text {
  transform-origin: 50% 50%;
}
/* testing end */
.menu-icon {
  position: fixed;
  z-index: 2;
  left: 32px;
  top: 50%;
  cursor: pointer;
}
.active {
  fill: black;
}
.active .rect {
  transform: translate3d(0, 30px, 0);
}
.active .line1 {
  transform: translateX(1px) rotate(45deg);
}
.active .line2 {
  transform: translate3d(-4px, 18px, 0px) rotate(-45deg);
}
.active .line3 {
  transform: translate3d(10px, -7px, 0px) rotate(45deg);
}
/* .menu-icon__line {
  background-color: #000;
  transform: translateX(0px) rotate(-45deg);
}
.menu-icon__line-left {
  transform: translateX(1px) rotate(45deg);
}
.menu-icon__line-right {
  transform: translateX(-2px) rotate(45deg);
} */
.nav {
  position: fixed;
  width: 100vw;
  top: 0%;
  height: 100vh;
  background: var(--secondary-color);
  z-index: -1;
}
/* .nav:before {
  content: '';
  position: fixed;
  width: 100vw;
  top: 0%;
  height: 100vh;
  background: var(--primary-color);
  z-index: -1;
} */
.slide-in-enter,
.slide-in-leave-to {
  transform: translateX(-100vw) translateY(0%);
}
/* .nav:after {
  background: #c21818;
  transition-delay: 0s;
} */
/* .nav:before {
  transition-delay: 0.1s;
} */
.slide-in-enter-to,
.slide-in-leave {
  transform: translateX(0%) translateY(0%);
}
.slide-in-enter-active,
.slide-in-leave-active {
  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}
.nav__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.6em;
}
.nav__list-item {
  margin: 10px 24px;
  display: inline-block;
  position: relative;
}
/* .nav__content {
  position: relative;
  top: 75%;
  left: 71%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 2.6em;
  font-weight: 200;
} */
/* .nav__list {
  display: flex;
}
.nav__list-item {
  position: relative;
  display: inline-block;
  transition-delay: 0.8s;
  opacity: 1;
  transform: translate(100%, 100%);
  transition: opacity 0.2s ease, transform 0.3s ease;
  margin-right: 5%;
} */
.nav__list-item:before {
  content: '';
  position: absolute;
  background: var(--primary-color);
  width: 20px;
  height: 3px;
  top: 100%;
  transform: translate(0%, 0%);
  transition: all 0.3s ease;
  z-index: -1;
}
.nav__list-item:hover:before {
  width: 100%;
}
/* .slide-in-enter-to .nav__list-item {
  opacity: 1;
  transform: translateX(0%);
} */
/* .slide-in-enter-active .nav__list-item {
  transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
}
.slide-in-enter-active .nav__list-item:nth-child(0) {
  transition-delay: 0.5s;
}
.slide-in-enter-active .nav__list-item:nth-child(1) {
  transition-delay: 0.6s;
}
.slide-in-enter-active .nav__list-item:nth-child(2) {
  transition-delay: 0.7s;
}
.slide-in-enter-active .nav__list-item:nth-child(3) {
  transition-delay: 0.8s;
}
.slide-in-enter-active .nav__list-item:nth-child(4) {
  transition-delay: 0.9s;
} */
@media screen and (max-width: 999px) {
  .menu-icon {
    height: 30px;
    width: 30px;
    position: fixed;
    z-index: 2;
    left: auto;
    right: 22px;
    top: 25px;
    cursor: pointer;
  }
}
</style>