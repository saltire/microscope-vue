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
            <scene v-for='scene in reverse(scenes)' :initScene='scene'></scene>
        </section>

    </div>
</template>

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
