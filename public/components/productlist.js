app.component('productlist', {
    template:
        /*html*/
        `<div class="part">         
                 <img :src = "part.pictureURL" >
                   {{part.description}}<br>
                   \${{ part.price }} <br>
                   {{ part.weight }}lbs <br>
                  Available: {{ available }}                            
                <button @click=addToCart(part) :disabled="available==0" >Add to cart</button> 
                               
         </div>`,
    props: {
        part: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            quantity: this.part.quantity,

        }
    },
    methods: {
        async addToCart(part) {
            this.$emit('addToCart', part)
        }
    },
    computed: {
        available() {
            var x = Math.floor(Math.random() * 10);
            return x
        },
    }

})