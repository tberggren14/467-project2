app.component('brackets', {
    template:
        `<div class="brackets">
            Here you will add the user interface that displays what you need to
            <h3>Admin functions</h3>
            <label for="Price">=Input Price here:</label>
            <input type="text" id="Price" name="Price" required
            minlength="4" maxlength="10" size="16">
     
            <button @click="onClick()" :style="{ background: color }" class="btn">
                {{ text }}
                </button> 
         
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