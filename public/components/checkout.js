app.component('checkout', {
    template:
        `<div class="checkout">
         <div v-if= "cart.length ==0"> No Parts are in the cart </div>
         <div v-else> You have {{cart.length}} parts in the cart </div>
         <div v-for="part in cart" class="part">
                    <img :src="part.pictureURL">
                    <div class="info">
                    {{ part.description }} <br>
                    \${{ part.price }} <br>
                    {{ part.weight }}lbs <br>
                    </div>
                    <button v-on:click="remove(part)">Delete</button>
                </div>
                <div v-if= "cart.length !=0"> Billing information <br>
                <form>
                <label for="name" > Name: </label><input id="name" v-model="name"><br>
                <label for="email" > Email: </label><input id="email" v-model="email"><br>
                <label for="address" > Address: </label><input id="address" v-model="address"><br>
                <label for="cc" > Credit Card Number: </label><input id="cc" v-model="cc"><br>
                <label for="exp" > Credit Card Expiration: </label><input id="exp" v-model="exp"><br>
                
                </form> </div>
         </div>`,
    
    props: {
        cart: {
            type: Array,
            required:true
        }
    },

    data() {
        return {
            name: '',
            email: '',
            address: '',
            cc: '',
            exp: '',
            brackets: null,
            order: null
            

        }
    },

    methods: {
        async remove(part) {
            this.$emit('remove', part)
        }
    },

})
