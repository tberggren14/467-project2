app.component('searchorders', {
    template:
        `<div class="newWeight">
         <form @submit.prevent ="submit" >
                    <label for="dateFrom"> Date from: </label>
                    <input id="dateFrom"  v-model="dateFrom">
                    <label for="dateTo">  to: </label>
                    <input id="dateTo"  v-model="dateTo"><br>
                    <label for="status">Status </label>
                    <input id="status"  v-model="status"><br>
                    <label for="priceFrom">Price from </label>
                    <input id="priceFrom"  v-model="priceFrom">
                    <label for="priceTo"> to </label>
                    <input id="priceTo"  v-model="priceTo"><br>
                    <input type="submit" value="Search orders">                  
                </form>    
         </div>`,

    data() {
        return { // should be all of the data you want to return
            dateFrom: '',
            dateTo: '',
            status: '',
            priceFrom: '',
            priceTo: '',

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