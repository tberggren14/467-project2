const products = Vue.createApp({
    template:
        `<div class="part">
         <img :src="part.pictureURL">
         <div class="information" v-if="type ==='ordering'">
         {{part.description}} <br>
         \${{part.price}}<br>
         {{part.weight}}<br>
        
        </div>` /* need to add part.quantity*/

        `<div class="information" v-else>
         {{part.description}} <br>
         \${{part.price}}<br>
         {{part.weight}}<br>
        
        </div>`, /* need to add part.quantity*/
        /*need to add button for ordering but do not have quantity*/

    data() {
        return {

        }
    },

    methods: {


    },

    computed: {

    }
})