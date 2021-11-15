<template>
  <header>
    <h1>
      <div class="kv-wrap" ref='kvWrap'>
        <div class="text-area">
          <p class="kv-title-wrap">
            <span class="kv-title">𝔽𝕣𝕠𝕟𝕥𝕖𝕟𝕕 × 𝔻𝕖𝕤𝕚𝕘𝕟𝕖𝕣 × 𝔻𝕚𝕣𝕖𝕔𝕥𝕠𝕣</span>
            <span class="kv-title">𝔸𝕦𝕥𝕦𝕞𝕟 ℙ𝕒𝕣𝕥𝕪 𝟚𝟘𝟚𝟙</span>
            <span class="kv-detail">2021/10/21(Thu) 20:00 START</span>
          </p>
        </div>
      </div>
    </h1>
    <a href="#partyInformation" class="scroll-btn">
      <span class="scroll-text">click</span>
      <img src="../../static/arrow.png" width="100" height="100" />
    </a>
  </header>
</template>

<script>
export default {
  name: 'commonHeader',
  data: () => {
    return {
      width: 0
    }
  },
  mounted () {
    this.setHeight()
    window.addEventListener('resize', this.setHeight)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.setHeight)
  },
  methods: {
    setHeight () {
      const height = window.innerHeight
      this.$refs.kvWrap.style.height = height + 'px'
      this.windowHeight = height
    }
  }
}
</script>
<style>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes scroll {
  0% {
    transform: translate(0,0px);
  }
  100% {
    transform: translate(0,-15px)
  }
}
.kv-wrap {
  animation: fadeIn 5s cubic-bezier(0.33, 1, 0.68, 1) 1 forwards;
  position: relative;
}
.kv-wrap.smile,
.kv-wrap:hover::after {
  background-position: -270px 0;
}
.text-area {
  position: relative;
  background: url(/static/kv-bg.png) center / 100% 88% no-repeat;
  height: 100%;
  top: 50%;
  transform: translate3d(0, -50%, 0);
}
.scroll-btn {
  cursor: pointer;
  animation: scroll ease-in-out 1.5s infinite alternate;
}
.scroll-btn  > img,
.scroll-text {
  position: absolute;
  bottom: 0;
  content: '';
  left: 0;
  right: 0;
  margin: auto;
}
.scroll-text {
  top: -43px;
  text-align: center;
}
.kv-title-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  color: #D0111B;
}
.kv-title-wrap > span {
  display: block;
  text-align: center;
}
.kv-title:first-child {
  font-size: 1em;
  line-height: 1;
}
.kv-title:nth-child(2) {
  font-size: 2.5em;
}
.kv-detail {
  margin-top: 12px;
  font-size: 1em;
  font-weight: bold;
  line-height: 1;
}
@media screen and (max-width: 1200px) {
  .kv-title:nth-child(2) {
    font-size: 2em;
  }
}
@media screen and (max-width: 1140px) {
  .kv-title:nth-child(2) {
    font-size: 1.5em;
  }
}
@media screen and (max-width: 840px) {
  .kv-title:first-child {
    font-size: 0.8em;
  }
}
@media screen and (max-width: 795px) {
  .kv-title:first-child,
  .kv-detail {
    font-size: 0.6em;
  }
  .kv-title:nth-child(2) {
    font-size: 1em;
  }
}
@media screen and (max-width: 700px) {
  .pepa-wrap {
    display: none;
  }
  .text-area {
    padding: 50px 30px;
    background: #D0111B;
  }
  .kv-title-wrap {
    background: #ffffff;
    position: initial;
    top: initial;
    left: initial;
    transform: initial;
    padding: 50px 30px;
  }
  .kv-title:first-child {
    font-size: 1em;
  }
  .kv-title:nth-child(2) {
    font-size: 2em;
  }
  .kv-detail {
    margin-top: 10px;
    font-size: 1em;
    font-weight: bold;
  }
  .kv-wrap {
    height: fit-content !important;
    animation: none;
  }
  .text-area {
    top: initial;
    transform: initial;
  }
  .scroll-btn {
    display: none;
  }
}
@media screen and (max-width: 645px) {
  .kv-title:first-child,
  .kv-detail {
    font-size: 16px;
  }
  .kv-title:nth-child(2) {
    margin-top: 5px;
    font-size: 23px;
  }
}
@media screen and (max-height: 450px) {
  .scroll-btn {
    display: none;
  }
}
@media screen and (max-width: 400px) {
  .kv-title:first-child,
  .kv-detail {
    font-size: 13px;
  }
  .kv-title:nth-child(2) {
    margin-top: 5px;
    font-size: 20px;
  }
}
</style>
