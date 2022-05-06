app.component('productlist', {
    template:
        /*html*/
        `<div class="part">         
                 <img :src = "part.pictureURL" >
                   {{part.description}}<br>
                   \${{ part.price }} <br>
                   {{ part.weight }}lbs <br>
                  Available: {{ available }}   
                  <label for="quantity">Quantity:</label>
                  <input id="quantity" size=3 v-model="quantity"> &nbsp;                         
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
            var x = parseInt(this.quantity)
            if (isNaN(x)) {
                alert('Quantity was not a number')
                return
            }
            console.log(x)
            let orderParts = { ...part }
            orderParts.quantity = x
            this.$emit('add-to-cart', orderParts)
        }
    },
    computed: {
        available() {
            var x = Math.floor(Math.random() * 10);
            return x
        },
        howmanyparts() {
            if (this.part.quantity === 0) {
                return 0
            }
            return this.quantity
        }
    }

})