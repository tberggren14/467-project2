app.component('item', {
    template:
        `<div class="item">
        <div v-for="items in item">
            Min:
                    {{items.itemid}} ,
                    to
                    {{items.itemname}} lbs,
                    \${{items.itemid}}
                    <button @click ="removeItem(part)">Remove</button>
                    </div>
                    </div>`,
    props: {
        item: {
            type: Object,
            required: true
        }
    },

    data() {
        return { // should be all of the data you want to return
            itemid: '',
            itemname: '',
            cost: ''
        }
    },

    methods: { // idk if these method functions are right
        async getitems() {
            var resp = await axios.get('http://localhost:3000/getitems')
            this.item = resp.data
        },

       
        async deleteitems() {
            var resp = await axios.get('http://localhost:3000/deleteitem')
            this.item = resp.data
        }

    },

})