app.component('newbracket', {
    template:
        `
         <div class="newWeight">
         <form @submit.prevent ="submit" >
                    <label for="weight">Weight: </label>
                    <input id="want"  v-model="weight"><br>
                    <label for="cost">Cost: </label>
                    <input id="cost"  v-model="cost"><br>
                    <input type="submit" value="Add new bracket">                  
                </form>    
         </div>`,
    
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
            this.newBracket = {
                weight: this.weight,
                cost: this.cost
            }
            axios.post('http://localhost:3000/newbracket', {
                newBracket: this.newBracket,
            });
        },

    },

})