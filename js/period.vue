<template>
    <div>
        <div :id='`period-${id}`' class='period'>
            <header>
                <h1>{{ name }}</h1>
                <div class='spot' :class='{dark}'></div>
            </header>
        </div>

        <section class='events'>
            <event v-for='event in events' :initEvent='event'></event>
        </section>

    </div>
</template>

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
