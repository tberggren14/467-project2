const part = Vue.createApp({
    template:
        `<div class="part">
         <img :src=part.pictureURL>
         <div class="information">
         {{part.description}} <br>
         \${{part.price}}<br>
         {{part.weight}}<br>
        </div> 
    </div >`,/* need to add part.quantity*/
    /*need to add button for ordering but do not have quantity*/

    data() {
        return {
            quantity: (this.type === 'ordering' && this.part.quantity > 0)

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
                let orderingPart = {part}
                orderingPart.quantity = amount
                this.$emit('add-to-cart', orderingPart)
            }
        }


    }
})