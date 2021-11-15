<template>
  <div class="wrapper">
    <CommonHeader v-if="this.notIe" />
    <main v-if="this.notIe">
        <PartyInformationArea />
        <ParticipantsArea :participants="participants" />
        <TalkGroup :participants="participants" />
    </main>
    <CommonFooter v-if="this.notIe" />
    <IeContents v-if="!this.notIe" />
  </div>
</template>

<script>
import PartyInformationArea from './components/PartyInformationArea'
import CommonFooter from './components/commonFooter'
import CommonHeader from './components/commonHeader'
import ParticipantsArea from './components/ParticipantsArea'
import TalkGroup from './components/TalkGroup'
import IeContents from './components/IeContents'

export default {
  name: 'app',
  data: () => {
    return {
      notIe: true,
      participants: [
        {
          name: '山田花子',
          nickname: 'やまはなさん',
          imgSrc: 'https://joeschmoe.io/api/v1/jeane'
        },
        {
          name: '速水もこ美',
          nickname: 'もこちゃん',
          imgSrc: 'https://joeschmoe.io/api/v1/jeri'
        },
        {
          name: 'フルチィフト・スカイ',
          nickname: 'ふるちぃさん',
          imgSrc: 'https://joeschmoe.io/api/v1/jazebelle'
        },
        {
          name: '佐久川わたる',
          nickname: 'さくさん',
          imgSrc: 'https://joeschmoe.io/api/v1/jordan'
        },
        {
          name: 'マイケル・マックィーン',
          nickname: 'まーいーさん',
          imgSrc: 'https://joeschmoe.io/api/v1/jia'
        },
        {
          name: '古寺春海',
          nickname: 'こじはるさん',
          imgSrc: 'https://joeschmoe.io/api/v1/jake'
        },
        {
          name: 'マスフェクト・ルピー',
          nickname: 'まっすー',
          imgSrc: 'https://joeschmoe.io/api/v1/jodi'
        },
        {
          name: '腰声越子',
          nickname: 'こっしー',
          imgSrc: 'https://joeschmoe.io/api/v1/jenni'
        },
        {
          name: '古川太郎',
          nickname: 'ふるぽん',
          imgSrc: 'https://joeschmoe.io/api/v1/jack'
        },
        {
          name: '城田ジョージ',
          nickname: 'シローさん',
          imgSrc: 'https://joeschmoe.io/api/v1/jacques'
        }
      ]
    }
  },
  components: {
    CommonFooter,
    PartyInformationArea,
    CommonHeader,
    ParticipantsArea,
    TalkGroup,
    IeContents
  },
  created () {
    let href = location.href
    if (href.indexOf('/#') > -1) {
      href = href.substring(0, href.indexOf('/#'))
      location.href = href
    }
    const ua = navigator.userAgent
    if (ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1) {
      this.notIe = false
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
  overflow-y: scroll;
}
html,
body {
  height: 100vh;
}
body {
  background: #F8EFE7;
}
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: Helvetica Neue,Segoe UI,Hiragino Kaku Gothic ProN,Hiragino Sans,ヒラギノ角ゴ ProN W3,Arial,メイリオ,Meiryo,sans-serif;
  line-height: 1.8;
  font-size: 14px;
  box-sizing: border-box;
}
ul,
ol {
  list-style-type: none;
}
a {
  display: block;
  color: #333;
  text-decoration: none;
}
table {
  border-collapse: collapse;
}
h2 {
  border-bottom: 1px solid #D0111B;
  font-size: 30px;
  line-height: 1.4;
}
.contentsWrap {
  background: #ffffff;
  margin: 40px auto 0;
  padding: 30px 5%;
  width: 85%;
  box-sizing: border-box;
}
.contentsWrap + .contentsWrap {
  margin-top: 0;
  padding-top: 20px;
}
.contentsWrap:first-child {
  border-radius: 10px 10px 0 0;
}
.contentsWrap:last-child {
  border-radius: 0 0 10px 10px;
}
@media screen and (max-width: 400px) {
  h2 {
    font-size: 20px;
  }
}
</style>
