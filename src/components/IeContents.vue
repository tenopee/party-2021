<template>
  <div class="ie-wrap">
    <p class="title">え、まだInternet Explorer使ってるの？！</p>
    <img src="../../static/ie.png" />
    <p class="discription">Microsoft社はInternet Explorer（以下、IE）のサポート終了を発表したため、多くのwebサイトでもIEを推奨環境から外す潮流になっています。<br />今後IEでは正常に閲覧できなくなるwebサイトが増えるため、メインブラウザをchromeに変えることをお勧めいたします。</p>
    <div class="download-btn">
      <a href="https://www.google.com/intl/ja/chrome/" target="_blank">ダウンロードはこちら</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ieContents'
}
</script>
<style>
.ie-wrap {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.ie-wrap > .title {
  font-size: 30px;
  font-weight: bold;
}
.ie-wrap > .discription {
  text-align: left;
}
.download-btn {
  background: #D0111B;
  width: fit-content;
  margin: auto;
  border-radius: 8px;
}
.download-btn > a {
  color: #ffffff;
  padding: 20px 40px;
  font-size: 20px;
  line-height: 1;
  font-weight: bold;
}
</style>
