require(['./list.vue'], function (list) {
    <style>
  
    </style>
    <template>
        <div class="color_4" v-for="n in 10">{{msg}}</div>
    </template>
    <script>
        export default {
            data () {
                return {
                    msg: 'testetstesteste!'
                }
            }
        }
    </script>   
})