<style lang="less">
    .loading-transition {
        transition: all 0.5s ease;
    }

    .loading-leave {
        opacity: 0;
    }
</style>
<template>
    <div class="app">
        <v-loading v-show="!isLoad" transition="loading"></v-loading>
        <v-main v-show="isLoad"></v-main>
    </div>
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
            //TODO loading
            window.setTimeout(function() {
                _self.isLoad = true;
            }, 1000);
        },
        components: {
            'v-loading': loading,
            'v-main': main,
        }
    };
</script>
