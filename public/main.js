const app = Vue.createApp({
    data() {
        return {
            cart: [],
            content: "productList",

        }
    },
    methods: {
        updateTheCart(part) {
            this.cart.push(part)
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
    }
})

app.mount('#app')
