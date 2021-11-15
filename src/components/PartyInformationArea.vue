<template>
  <div class="contentsWrap" id="partyInformation">
    <h2>PARTY INFORMATION</h2>
    <dl class="party-information-wrap">
      <dt>コミュニケーションツール</dt>
      <dd>
        <span>今回もDiscordを利用します。<br />最初はボイスチャンネルのpublic-roomに集合してください。</span>
        <a href="#" target="_blank" class="link">会場にアクセスする</a>
      </dd>
      <dt>コンテンツ</dt>
      <dd>
        <ol class="contents-list">
          <li>
              <span>20:00</span>
              <span>はじめの挨拶</span>
          </li>
          <li>
              <span>20:05</span>
              <span>自己紹介（ひとり1分）</span>
          </li>
          <li>
              <span>21:00</span>
              <span class="among-us-font">@</span>
          </li>
          <li>
              <span>22:00</span>
              <span>締めの挨拶</span>
          </li>
        </ol>
      </dd>
      <dt>事前準備</dt>
      <dd>
        <ul class="preparation-list">
          <li>
            <p>Discordアカウント作成</p>
            <p class="note">アカウント名は誰のかわかるようにしておいてください。</p>
            <p class="note">事前の接続確認をお願いします。</p>
          <li>
            <p>飲み物＆おつまみ</p>
            <p class="note">早く酔ってしまうのを防ぐために、飲む前にちょっとお腹に入れておきましょう。</p>
            <p class="note">次の日が休みではない人はお酒は程々にしましょう。</p>
            <p class="note">人に飲酒を強要する行為は禁止です。</p>
            <p class="note">おつまみはkiriのスティックが入っているものをお勧めします。特にバジル＆トマト風味が美味しいです。</p>
          </li>
          <li>
            <p>AmongUsのダウンロードと設定</p>
            <p class="note">利用可能なプラットフォーム</p>
            <ul class="platform-list">
              <li>
                <a href="https://store.steampowered.com/app/945360/Among_Us/" target="_blank">Win PC（¥520）</a>
              </li>
              <li>Nintendo Switch（¥520）</li>
              <li>iOS/Android（無料）</li>
            </ul>
            <p class="note">キャラクター名は誰かわかるようにしましょう。</p>
            <p class="note">Discordで会話しながらゲームをします。AmongUsはアプリを切り替えると落ちますので、DiscordはできればPCで開いてください。</p>
            <p class="note">日本語設定ができるので英語がわからない人は言語を日本語にしてください。</p>
            <p class="note">既にダウンロード済みの方はバージョンを最新にしておいてください。</p>
          </li>
          <li>
            <p>AmongUsのルール確認</p>
            <p class="note">ステージはTHE AIRSHIPの予定です。プレイ人数が8人になったらTHE SKELDに変更予定です。</p>
            <p class="note">会話はpublic-roomで行います。会議以外はスピーカー＆マイクミュートでお願いします。追放または死亡した場合は会議はマイクミュート、会議以外は会話OKです。死亡した場合の切り替えは直後の会議のうちに行ってください。</p>
            <p class="note">クルーのタスクを覚えることをお勧めします。</p>
            <p class="note">ルールは事前に確認をお願いします。</p>
            <p class="reference-links">【参考】</p>
            <ul class="help-list">
              <li>
                <a href="https://gamenext.net/among-us/archives/62" target="_blank">ルールとプレイの流れ【初心者向けの簡単ルール】</a>
              </li>
              <li>
                <a href="https://gamenext.net/among-us/archives/1023" target="_blank">The Airship(エアーシップ / 飛行船)のマップと特徴【アモングアス】</a>
              </li>
              <li>
                <a href="https://gamenext.net/among-us/archives/148" target="_blank">THE SKELD(スケルド号)のマップと特徴【アモングアス】</a>
              </li>
            </ul>
          </li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'invitationArea'
}
</script>
<style>
.party-information-wrap {
  margin-top: 35px;
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 35px 40px;
  font-size: 16px;
}
.party-information-wrap dt {
  border: 1px solid #D0111B;
  padding: 5px 10px;
  height: fit-content;
  width: 220px;
  text-align: center;
  font-weight: bold;
  color: #D0111B;
  white-space: nowrap;
  box-sizing: border-box;
}
.party-information-wrap dd {
  font-size: 16px;
}
.party-information-wrap a {
  color: #1470CC;
}
.link {
  display: flex;
  align-items: center;
}
.link::before {
  display: inline-block;
  width: 22px;
  height: 22px;
  background: url('../../static/discord.png') center / contain no-repeat;
  margin-right: 2px;
  content: "";
}
.contents-list > li {
  display: flex;
}
.contents-list > li + li {
  margin-top: 10px;
}
.contents-list > li span + span {
  margin-left: 10px;
}
@font-face {
  font-family: 'WebFont';
  src: url('../../static/amongus vector.ttf');
}
.among-us-font {
  font-family: WebFont;
  font-size: 26px;
  line-height: 1;
}
.preparation-list .note {
  display: flex;
  padding-left: 15px;
  font-size: 12px;
  color: #666666;
  line-height: 1.6;
}
.preparation-list .note::before {
  display: block;
  margin-right: 5px;
  content: "※";
}
.preparation-list .note > span {
  display: flex;
  flex-wrap: wrap;
}
.platform-list {
  padding-left: 30px;
  font-size: 12px;
  color: #666666;
  line-height: 1.6;
}
.platform-list li {
  display: flex;
}
.platform-list li::before {
  display: block;
  margin-right: 5px;
  content: "-";
}
.reference-links {
  margin-top: 5px;
  padding-left: 15px;
  font-size: 12px;
  color: #666666;
}
.preparation-list > li + li {
  margin-top: 10px;
}
.help-list {
  padding-left: 15px;
  font-size: 12px;
  line-height: 1.6;
}
@media screen and (max-width: 900px) {
  .contentsWrap .party-information-wrap {
    gap: 15px 20px;
  }
}
@media screen and (max-width: 750px) {
  .contentsWrap .party-information-wrap {
    margin-top: 10px;
    grid-template-columns: 1fr;
    gap: 5px;
  }
  .contentsWrap .party-information-wrap > dt {
    border: none;
    padding: 0;
    width: fit-content;
  }
}
@media screen and (max-width: 400px) {
  .party-information-wrap dt {
    font-size: 14px;
  }
  .party-information-wrap dd {
    font-size: 12px;
  }
  .platform-list a {
    pointer-events: none;
    color: #666666;
  }
}
</style>
