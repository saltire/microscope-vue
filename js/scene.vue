<template>
    <div>
        <div :id='`scene-${id}`' class='scene'>
            <header>
                <h1>{{ name }}</h1>
            </header>
            <p>{{ question }}</p>
            <p>{{ answer }}</p>
            <div class='spot' :class='{dark}'></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['initScene'],
    data() {
        return {
            id: this.initScene.id,
            name: this.initScene.name || '',
            dark: !!this.initScene.dark,
            question: this.initScene.question || '',
            answer: this.initScene.answer || ''
        };
    }
};
</script>
