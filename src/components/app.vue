<template>
    <section class="app">
        <v-loading></v-loading>
        <v-main></v-main>
    </section>
</template>
<script>
    var store = require('store'),
        loading = require('components/loading'),
        main = require('components/main'),
        actions = require('actions');

    module.exports = {
        vuex: {
            actions: {
                setLoad: actions.setLoad
            }
        },
        ready: function() {
            this.setLoad(true);
        },
        store: store,
        components: {
            'v-loading': loading,
            'v-main': main,
        }
    };
</script>
