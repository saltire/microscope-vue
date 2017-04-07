<template>
    <main>
        <header>
            <h1>{{ title }}</h1>
        </header>

        <section v-for='period in periods'>
            <div :id='`period-${period.id}`' class='period'>
                <header>
                    <h1>{{ period.name }}</h1>
                    <div class='spot' :class='{dark: period.dark}'></div>
                </header>
            </div>

            <div v-for='event in period.events'>
                <div :id='`event-${event.id}`' class='event'>
                    <header>
                        <h1>{{ event.name }}</h1>
                    </header>
                    <div class='spot' :class='{dark: event.dark}'></div>
                </div>

                <div v-for='scene in event.scenes' :id='`scene-${scene.id}`' class='scene'>
                    <header>
                        <h1>{{ scene.name }}</h1>
                    </header>
                    <p>{{ scene.question }}</p>
                    <p>{{ scene.answer }}</p>
                    <div class='spot' :class='{dark: scene.dark}'></div>
                </div>

            </div>

        </section>
    </main>
</template>

<script>
import game from '../static/game.json';

export default {
    data() {
        game.periods.forEach((period, p) => {
            period.id = p;
            period.events.forEach((event, e) => {
                event.id = p * 10 + e;
                event.scenes.forEach((scene, s) => {
                    scene.id = e * 10 + s;
                });
            });
        });

        return game;
    }
};
</script>
