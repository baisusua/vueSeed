<style scoped>
    html{
        background-color: red;
    }
    .color_3{
        color:#fff;
    }

</style>

<template>
    <div class="color_3" v-for="n in 10">{{msg}}</div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'LoginLoginLoginLoginLoginLoginLoginLogin!'
            }
        }
    }
</script>