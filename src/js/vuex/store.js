var actions = require('actions'),
    mutations = require('mutations'),
    state = require('state'),
    vuex = require('vuex');

module.exports = new vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions
});
