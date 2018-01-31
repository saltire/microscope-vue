<template>
  <main>
    <header>
      <h1>{{ title }}</h1>
    </header>

    <section class='periods'>
      <period v-for='period in periods' :initPeriod='period'></period>
    </section>
  </main>
</template>

<script>
import game from '../static/game.json';
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
    this.$http.get('./game.json').then(
      resp => {
        this.title = resp.body.title;

        this.periods = resp.body.periods;
        this.periods.forEach((period, p) => {
          period.id = p;
          period.events.forEach((event, e) => {
            event.id = p * 10 + e;
            event.scenes.forEach((scene, s) => {
              scene.id = e * 10 + s;
            });
          });
        });
      },
      resp => console.error(resp));
  }
};
</script>
