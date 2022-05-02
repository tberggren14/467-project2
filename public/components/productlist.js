app.component('productlist', {
    template:
        /*html*/
        `<div class="part">         
                 <img :src = "part.pictureURL" >
                <div class="info">
                   {{part.description}}<br>
                   \${{ part.price }} <br>
                   {{ part.weight }}lbs <br>
                  Available: {{ part.quantity }}
                </div>                 
                <label for="quantity">Quantity:</label><input id="quantity" size=1 :="quantity">                          
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
            var amount = parseInt(this.amount)
           // this.$emit('addToCart', part, amount)
            this.$emit('addToCart', part)
            
        }
    },

})