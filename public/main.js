const app = Vue.createApp({

    el: "#app",
    data() {
        return {
            cart: [],
            //part: this.data

        }
    },
    

    methods: {
         updateCart(part) {
            this.cart.push(part)
            axios.post('http://localhost:3000/getParts', {
                cart: this.cart,
            });
        },
        removeCart(part) {
            var temp = this.cart;
            this.cart = [];
            for (x of temp) {
                if (x !== part) {
                    this.cart.push(x)
                }
            }
            // console.log(this.cart)
        },
    },
})



app.component('searchbar');
app.component('checkout');
app.component('productlist');
app.component('brackets');
app.component('newbracket');
app.component('searchorders');

