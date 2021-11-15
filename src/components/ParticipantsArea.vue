<template>
  <div class="contentsWrap">
    <h2>PARTICIPATIONS</h2>
    <ul class="participants-wrap">
      <li v-for="(participant, index) in this.participants" :key="index">
        <p class="participant-img">
          <img :src="setImgSrc(index)" />
        </p>
        <p class="participant-name">{{ participant.name }}</p>
        <p class="participant-nickname">（{{ participant.nickname }}）</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'participantsArea',
  props: ['participants'],
  computed: {
    setImgSrc () {
      return (index) => {
        return this.participants[index].imgSrc
      }
    }
  }
}
</script>
<style>
.participants-wrap {
  flex-wrap: wrap;
  margin-top: 35px;
  display: flex;
  gap: 60px;
}
.participant-img {
  border: 1px solid #cccccc;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  overflow: hidden;
}
.participant-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0 auto;
}
.participant-name {
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
  letter-spacing: 1.5px;
}
.participant-nickname {
  font-size: 12px;
  text-align: center;
}
@media screen and (max-width: 400px) {
  .participants-wrap {
    gap: 10px 8px;
  }
  .participant-img {
    width: 80px;
    height: 80px;
  }
  .participant-name {
    width: 80px;
    font-size: 12px;
    line-height: 1.2;
  }
  .participant-nickname {
    font-size: 10px;
  }
}
</style>
