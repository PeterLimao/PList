<template>
    <section class="app">
        <v-loading></v-loading>
        <v-main></v-main>
    </section>
</template>
<script>
    import Store from 'store';
    import Loading from 'components/loading';
    import Main from 'components/main';
    import Actions from 'actions';

    export default {
        vuex: {
            actions: {
                setLoad: Actions.setLoad
            }
        },
        ready: function() {
            this.setLoad(true);
        },
        store: Store,
        components: {
            'v-loading': Loading,
            'v-main': Main,
        }
    };
</script>
