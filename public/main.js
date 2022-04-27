const app = Vue.createApp({
        
    data() {
        return {
            cart: [],
            content: "List",
            //part: this.data

        }
    },
    methods: {
        updateTheCart(part) {
            console.log('added to cart')
            this.cart.push(part)
            console.log(this.part)
        },

        deleteFromCart(part) {
            var currentCart = this.cart;
            this.cart = [];
            for (let c of currentCart) {
                if (c !== part) {
                    this.cart.push(c)
                }
            }
        },
    },

});

app.component('display');
//app.component('checkout');
app.component('product');

