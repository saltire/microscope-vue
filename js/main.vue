<template>
    <main>
        <header>
            <h1>{{ title }}</h1>
        </header>

        <section class='periods'>
            <div v-for='period in periods'>
                <div :id='`period-${period.id}`' class='period'>
                    <header>
                        <h1>{{ period.name }}</h1>
                        <div class='spot' :class='{dark: period.dark}'></div>
                    </header>
                </div>

                <section class='events'>
                    <div v-for='event in period.events' class='collapsed'>
                        <div :id='`event-${event.id}`' class='event'>
                            <header>
                                <h1>{{ event.name }}</h1>
                            </header>
                            <div class='spot' :class='{dark: event.dark}'></div>
                        </div>

                        <section class='scenes'>
                            <div v-for='scene in reverse(event.scenes)'>
                                <div :id='`scene-${scene.id}`' class='scene'>
                                    <header>
                                        <h1>{{ scene.name }}</h1>
                                    </header>
                                    <p>{{ scene.question }}</p>
                                    <p>{{ scene.answer }}</p>
                                    <div class='spot' :class='{dark: scene.dark}'></div>
                                </div>
                            </div>
                        </section>

                    </div>
                </section>

            </div>
        </section>
    </main>
</template>

<script>
import game from '../static/game.json';

export default {
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
    },
    methods: {
        reverse(array) {
            return array.slice().reverse();
        }
    }
};
</script>
