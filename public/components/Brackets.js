app.component('brackets', {
    template:
        `<div class="brackets">
            Here you will add the user interface that displays what you need to
         
         </div>`,

    data() {
        return { // should be all of the data you want to return
            brackets: null,
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