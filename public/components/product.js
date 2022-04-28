app.component('product', {
    template:
        /*html*/
        `<div class="part">         
                 <img :src = "part.pictureURL" >
                <div class="info">
                   {{part.description}}<br>
                   \${{ part.price }} <br>
                   {{ part.weight }}lbs <br>
                   Quantity on hand: {{ part.quantity }}
                </div>                 
                <label for="quantity">Quantity:</label><input id="quantity" size=1 :="quantity">                            
                <button v-on:click="addToCart(part)" :disabled="quantity==0">Add to cart</button>                          
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
            console.log(part)
        },
        
    },
})