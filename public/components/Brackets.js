app.component('brackets', {
    template:
        `<div class="brackets">
        <div v-for="bracket in brackets">
            Min:
                    {{bracket.minweight}} lbs,
                     to Max:
                    {{bracket.maxweight}} lbs,
                    \${{bracket.cost}}
                    <button @click ="removeItem(part)">Remove</button>
                    </div>
                    </div>`,
    props: {
        brackets: {
            type: Object,
            required: true
        }
    },

    data() {
        return { // should be all of the data you want to return
            weight: '',
            cost: ''
        }
    },

    methods: { // idk if these method functions are right
        async getBrackets() {
            var resp = await axios.get('http://localhost:3000/getBrackets')
            this.brackets = resp.data
        },

        async newBrackets() {
            if (this.weight === '' || this.cost === '') {
                alert('Please put in the wieght and cost for the item.')
                return
            }
        },

    },

})