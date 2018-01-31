<template>
  <div :class='{collapsed}'>
    <div :id='`event-${id}`' class='event'>
      <header>
        <h1>{{ name }}</h1>
      </header>
      <input type='checkbox' v-model='collapsed'>
      <div class='spot' :class='{dark}'></div>
    </div>

    <section class='scenes'>
      <scene v-for='scene in reverse(scenes)' :key='scene.id' :initScene='scene'></scene>
    </section>

  </div>
</template>

<style lang='scss'>
@import '../scss/mixins';

.event {
  @include card-horizontal;
}

.scenes {
  display: flex;
  flex-direction: column-reverse;

  width: 400px;
  margin: auto;
}

.collapsed {
  position: relative;
  padding: 100px 0;

  .scenes {
    position: absolute;
    top: 0;
    left: 50px;
    z-index: -1;

    flex-direction: row-reverse;
    justify-content: space-between;
    text-align: center;
    padding-right: 295px;

    > div {
      width: 5px;

      &:first-child:last-child {
        margin: auto;
      }
    }
  }
}
</style>

<script>
import Scene from './scene.vue';

export default {
  components: {
    scene: Scene
  },
  props: ['initEvent'],
  data() {
    return {
      id: this.initEvent.id,
      name: this.initEvent.name || '',
      dark: !!this.initEvent.false,
      scenes: this.initEvent.scenes || [],
      collapsed: true
    };
  },
  methods: {
    reverse(array) {
      return array.slice().reverse();
    }
  }
};
</script>
