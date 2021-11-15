<template>
  <div class="contentsWrap">
    <div class="talk-title-wrap">
        <h2>TALK GROUP</h2>
        <p @click="memberShuffle()"></p>
    </div>
    <ul class="talk-group-wrap">
      <li>
        <p>Room 1</p>
        <ul class="name-wrap">
          <li v-for="(group1Member, index) in this.group1" :key="index">{{ group1Member }}</li>
        </ul>
      </li>
      <li>
      <p>Room 2</p>
        <ul class="name-wrap">
          <li v-for="(group2Member, index) in this.group2" :key="index">{{ group2Member }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'talkGroup',
  data: () => {
    return {
      'allMembers': [],
      'harfNumber': null,
      'group1': [],
      'group2': []
    }
  },
  props: ['participants'],
  mounted () {
    for (let participant of this.participants) {
      this.allMembers.push(participant.nickname)
    }
    this.harfNumber = Math.floor(this.allMembers.length / 2)
    this.memberShuffle()
  },
  methods: {
    memberShuffle () {
      this.group1 = []
      this.group2 = []
      let memberList = this.allMembers
      for (let i = (memberList.length - 1); i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1))
        let tmp = memberList[i]
        memberList[i] = memberList[r]
        memberList[r] = tmp
      }
      for (let i = 0; i < memberList.length; i++) {
        if (i >= this.harfNumber) {
          this.group1.push(memberList[i])
        } else {
          this.group2.push(memberList[i])
        }
      }
    }
  }
}
</script>
<style>
.talk-group-wrap {
    margin-top: 35px;
    display: flex;
    gap: 20px;
}
.talk-group-wrap li {
  text-align: center;
  width : calc(100% / 2);
}
.talk-group-wrap > li > p {
  font-size: 22px;
  font-weight: bold;
  color: #D0111B;
}
.name-wrap  {
  margin: 5px auto 0;
  width: fit-content;
  white-space: nowrap;
}
.name-wrap li {
  width: fit-content;
  font-size: 16px;
}
.talk-group-wrap > li + li {
  border-left: 1px solid #cccccc;
}
.talk-title-wrap {
  position: relative;
}
.talk-title-wrap > h2 {
  width: 100%;
}
.talk-title-wrap > p {
  position: absolute;
  background: url(/static/update.png) center / 28px no-repeat;
  width: 28px;
  height: 28px;
  top: 50%;
  right: 10px;
  transform: translate3d(0, -50%, 0);
}
.talk-title-wrap > p:hover {
  cursor: pointer;
}
@media screen and (max-width: 400px) {
  .talk-group-wrap {
    margin-top: 5px;
  }
  .talk-group-wrap > li > p {
    font-size: 18px;
  }
  .name-wrap li {
    font-size: 14px;
  }
  .talk-title-wrap > p {
    background: url(/static/update.png) center / 22px no-repeat;
    width: 22px;
    height: 22px;
  }
}
</style>
