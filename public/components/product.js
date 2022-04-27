app.component('product', {
    template:
        `<div class="part">
         <img :src = "part.pictureURL" >
         <div class="information">
          {{part.description}}
         \${{part.price}}
         {{part.weight}} lbs
        </div>
        <div class="addButton">
        <label for=" quantity"> Quantity </label> <input id="quantity" v-model="quantity">
        <button v-on:click="addToCart(part)">Add to Cart</button>
        </div>
    </div>`

    ,/* need to add part.quantity*/
    /*need to add button for ordering but do not have quantity*/
    props: {
        part: {
            type: Object,
            required: true,

        },
    },

    data() {
        return {
            quantity: (this.part.quantity > 0),
            part: Object
        }

    },

    methods: {
        async addToCart(part) {
            var amount = parseInt(this.quantity)
            if (amount > part.quantity) {
                alert("Amount requested to order is more than the amount we have")
                return
            }
            else {
                let orderingPart = { part }
                orderingPart.quantity = amount
                this.$emit('add-to-cart', orderingPart)
            }
        }


    }
});


