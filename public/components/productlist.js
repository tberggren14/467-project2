app.component('productlist', {
    template:
        /*html*/
        `<div class="part">         
                 <img :src = "part.pictureURL" >
                   {{part.description}}<br>
                   \${{ part.price }} <br>
                   {{ part.weight }}lbs <br>
                  Available: {{ part.quantity }}                                          
                <button @click=addToCart(part) >Add to cart</button> 
                               
         </div>`,
    props: {
        part: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            quantity: this.quantity,

        }
    },
    methods: {
        async addToCart(part) {
            this.$emit('addToCart', part)
            
        }
    },

})