<template>
  <div>
    <div :id='`period-${id}`' class='period'>
      <header>
        <h1>{{ name }}</h1>
        <div class='spot' :class='{dark}'></div>
      </header>
    </div>

    <section class='events'>
      <event v-for='event in events' :key='event.id' :initEvent='event'></event>
    </section>

  </div>
</template>

<style lang='scss'>
@import '../scss/mixins';

.period {
  @include card-vertical;
}
</style>

<script>
import Event from './event.vue';

export default {
  components: {
    event: Event
  },
  props: ['initPeriod'],
  data() {
    return {
      id: this.initPeriod.id,
      name: this.initPeriod.name || '',
      dark: !!this.initPeriod.dark,
      events: this.initPeriod.events || []
    };
  }
};
</script>
