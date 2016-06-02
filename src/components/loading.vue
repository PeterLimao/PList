<style lang="less" scoped>
    /*动画部分*/
    @keyframes trans {
        from, to {
            transform: scale(0);
        }
        50% {
            transform: scale(1);
        }
    }

    .frame-animation(@delay, @duration: 2s) {
        animation-name: trans;
        animation-duration: @duration;
        animation-delay: @delay;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }

    /*基本样式*/
    .loading {
        position: absolute;
        width: 100%;
        height: 100%;
        .content {
            margin: auto;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            width: 70px;
            height: 70px;
            .frame-content {
                position: relative;
                margin: 0 auto 10px auto;
                width: 100%;
                height: 100%;
                div {
                    border-radius: 35px;
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0.6;
                    background: #6f5499;
                }
                .frame-1 {
                    .frame-animation(0);
                }
                .frame-2 {
                    .frame-animation(-0.5s);
                }
            }
            p {
                color: #6f5499;
                text-align: center;
            }
        }
    }
</style>
<template>
    <section class="loading" v-if="!isLoad">
        <div class="content">
            <div class="frame-content">
                <div class="frame-1"></div>
                <div class="frame-2"></div>
            </div>
            <p>
                加载中...
            </p>
        </div>
    </section>
</template>
<script>
    export default {
        vuex: {
            getters: {
                isLoad (state) {
                    return state.isLoad;
                }
            }
        }
    }
</script>
