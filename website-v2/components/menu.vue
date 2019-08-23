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
  </div>
</template>

<script>
export default {}
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
</style>
