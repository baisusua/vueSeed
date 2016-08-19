<style>
    html{
        background-color: red;
    }
    .color_2{
        color:#fff;
    }

</style>

<template>
    <div class="color_2" v-for="n in 10">{{msg}}</div>
    <test></test>
</template>

<script>
    import test from './test';
    export default {
        data () {
            return {
                msg: 'ListListListListListListList!'
            }
        },
        components: {
        test: test
      }
    }
</script>