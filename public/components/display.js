app.component('display', {
    template:
        `<div class="display">
                <input v-model="search" placeholder="search parts"> Search by Description   
                <div v-if="search= ''"> Parts that match your search</div>
                <div v-else>All parts available (use search bar to filter results)</div>
                </input>
        </div>`,

    data() {
        return {
            parts: null,
            search: ''
        }
    },

    methods: {
        async getParts() {
            var resp = await axios.get('http://localhost:3000/getParts')
            this.parts = resp.data
        },

        async addtocart(part) {
            this.$emit('add-to-cart', part)

        }
    },

    computed: {
        list() {
            if (this.parts == null) {
                this.getParts()
            }
            return this.parts
        }
    }
})