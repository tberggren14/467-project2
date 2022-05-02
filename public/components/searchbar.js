app.component('searchbar', {
    template:
        `<div class="display"> 
          <input v-model="search" placeholder="search parts"> Search by Description   
                <div v-if="search!= ''"> Parts that match your search</div>
                <div v-else>All parts available (use search bar to filter results)</div>
                
         </div>`,

    data() {
        return {
            parts: null,
            search: ''
        }
    },

    methods: {


    },

})