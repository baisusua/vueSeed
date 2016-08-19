require(['./list.vue'], function (list) {
    <style>
        html{
            background-color: red;
        }
        .color_4{
            color:#fff;
            font-size: 16px;
        }
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