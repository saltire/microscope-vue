<template>
  <main>
    <header>
      <h1>{{ title }}</h1>
    </header>

    <section class='periods'>
      <period v-for='period in periods' :key='period.id' :initPeriod='period'></period>
    </section>
  </main>
</template>

<style lang='scss'>
main {
  text-align: center;
}

.periods > div {
  display: inline-block;
  width: 500px;
  margin: 0 20px;
  vertical-align: top;
  text-align: center;
}
</style>

<script>
import game from '../game.json';
import Period from './period.vue';

export default {
  components: {
    period: Period
  },
  data() {
    return {
      title: null,
      periods: []
    };
  },
  created() {
    this.title = game.title;

    this.periods = game.periods;
    this.periods.forEach((period, p) => {
      period.id = p;
      period.events.forEach((event, e) => {
        event.id = p * 10 + e;
        event.scenes.forEach((scene, s) => {
          scene.id = e * 10 + s;
        });
      });
    });
  }
};
</script>
