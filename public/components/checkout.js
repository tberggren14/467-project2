app.component('checkout', {
    template:
        `<div class="checkout">
         <div v-if= 'cart.length == 0'> Time to start shopping! <br> Your cart is empty  </div>
         <div v-if= 'cart.length != 0'> You have {{cart.length}} parts in your cart </div>
         <div v-for='part in cart' class="part">
                    <img :src="part.pictureURL">
                    {{ part.description }} <br>
                    \${{ part.price }} <br>
                    {{ part.weight }}lbs <br>
                    <button @click ="removeItem(part)">Delete</button>
                </div>
                <div v-if= "cart.length != 0">
               <form @submit.prevent ="submit" >
               Order Details: <br>
                    <label>Subtotal: </label>\${{ amount }}<br>
                    <label>Total Weight: </label>{{ weight }}lbs<br>
                    <label>Shipping and handling: </label>\${{ shipping }}<br>
                    <label> Order Total: </label>\${{ (amount + shipping).toFixed(2) }}<br> <br>
                    Billing Information: <br>
                    <label for="name">Name: </label>
                    <input id="name" maxlength="30" placeholder="John Doe" v-model="name"><br>
                    <label for="email">Email: </label>
                    <input id="email" maxlength="255" placeholder="johndoe@email.com" v-model="email"><br>
                    <label for="address">Street Address: </label>
                    <input id="address" maxlength="255" placeholder="123 niu lane" v-model="address"><br>
                    <label for="cc">Credit Card: </label>
                    <input id="cc" maxlength="19" placeholder="0000 0000 0000 0000" v-model="cc"><br>
                    <label for="exp">Expiration Date </label>
                    <input id="exp" maxlength="7" placeholder="01/2022" v-model="exp"><br>
                    <input type="submit" value="Submit order">                  
                </form>    
                </div>
         </div>`,

    props: {
        cart: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
            name: '',
            email: '',
            address: '',
            cc: '',
            exp: '',
            order: null
        }
    },

    methods: {
        async removeItem(part) {
            this.$emit('remove-Item', part)
        },

        submit() {
            if (this.name == '') {
                alert('Please insert your name')
                return
            }
            else if (this.email == '') {
                alert('Please insert your Email')
                return
            }
            else if (this.address == '') {
                alert('Please insert your Address')
                return
            }
            else if (this.cc == '') {
                alert('Please insert your Credit Card Number')
                return
            }
            else if (this.exp == '') {
                alert('Please insert your Credit Card\'s Expiration Date')
                return
            }
            const data = {
                vendor: "Company",
                trans: (Math.random() * 10 + Math.random() * 10 + Math.random() * 10 + '-987654321-' + Math.random() * 10 + Math.random() * 10 + Math.random() * 10) ,
                name: this.name,
                cc: this.cc,
                exp: this.exp,
                amount: this.amount + this.shipping,
                weight: this.weight,
            }
            axios.post('http://blitz.cs.niu.edu/creditcard', data).then((res) => {
                if (res.data.errors != null) {
                    alert('Credit card transaction denied: ' + res.data.errors + ' Please try again.')
                }
                if (res.data.authorization != null) {
                    this.order = {
                        name: this.name,
                        email: this.email,
                        address: this.address,
                        date: new Date(),
                        amount: this.amount,
                        weight: this.weight,
                        shipping: this.shipping,
                        status: 'open',
                        items: this.cart,
                        auth: res.data.authorization
                    }
                    axios.post('http://localhost:3000/createOrder', {
                        order: this.order,
                    });
                    
                }


            });
        }
    },
    computed: {
        amount() {
            var x = 0;
            for (part of this.cart) {
                x += part.price
            }
            return x
        },
        weight() {
            var x = 0;
            for (part of this.cart) {
                x += part.weight
            }
            return x
        },

        shipping() {
            var x = 10;
            return x

        }
    }
})