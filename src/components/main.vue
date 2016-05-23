<template>
    <div class="main">
        <v-header></v-header>
        <v-nav></v-nav>
        <v-add-panel></v-add-panel>
        <v-day-list-item></v-day-list-item>
    </div>
</template>
<script>
    var header = require('components/header'),
        nav = require('components/nav'),
        addPanel = require('components/addPanel'),
        datePicker = require('components/datePicker'),
        dayListItem = require('components/dayListItem');

    module.exports = {
        components: {
            'v-header': header,
            'v-nav': nav,
            'v-add-panel': addPanel,
            'v-day-list-item': dayListItem
        }
    };
</script>
