app.component('searchbar', {
    template:
        `<div class="display"> 
          <input v-model="search" placeholder="search parts"> Search by Description   
           <div v-if="search!= ''"> Parts that match your search</div>
                <div v-else>All parts available (use search bar to filter results)</div>
                <div v-for="part in parts">
                 <div v-if="part.description.toLowerCase().includes(search.toLowerCase())" >
                    <productlist :part="part" @add-to-Cart="addToCart"></productlist>               
                    </div>
                    </div>
         </div>`,
    props: {
        parts: {
            type: Object,
            required: true
        }
    },
         

    data() {
        return {
            partss: null,
            search: ''
        }
    },

    methods: {
        async addToCart(part) {
            this.$emit('add-to-cart', part)
        }


    },

})
