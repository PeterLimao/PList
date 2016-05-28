<style lang="less" scoped>
    .loading-transition {
        transition: opacity 0.5s ease;
    }

    .loading-leave {
        opacity: 0;
    }
</style>
<template>
    <section class="app">
        <v-loading v-if="!isLoad" transition="loading"></v-loading>
        <v-main v-if="isLoad"></v-main>
    </section>
</template>
<script>
    var store = require('store'),
        loading = require('components/loading'),
        main = require('components/main');

    module.exports = {
        store: store,
        data: function() {
            return {
                isLoad: false
            }
        },
        ready: function() {
            var _self = this;
            window.onload = function() {
                _self.isLoad = true;
            };
        },
        components: {
            'v-loading': loading,
            'v-main': main,
        }
    };
</script>
