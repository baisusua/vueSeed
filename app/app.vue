<style>
   @import './libs/css/cssreset.min.css';
   #app{
        width: 100%;
        height: 100%;
   }
   html,body{
        width: 100%;
        height: 100%;
   }
   .AppWarp{
        background-image: url(./images/background.jpg);
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-size: cover;
   }
</style>

<template>
    <div class="AppWarp">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        replace: false,
        data () {
            return {
                msg: 'Hello World!'
            }
        }
    }
</script>