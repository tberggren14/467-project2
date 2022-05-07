app.component('brackets', {
    template:
        <div class="display">
           
        </div>,

    data() {
        return {
           brackets: null,
            weight: '',
            cost: ''
        }
    },

    methods: {
        async getBrackets() {
            var resp = await axios.get('http://localhost:3000/getBrackets')
            this.brackets = resp.data
        }

        async newBrackets() {
            if (this.weight === '' || this.cost === '') {
                alert('Inventory items check results')
                return
            }
        }

        }
    },

    computed: {
        list() {
            if (this.parts == null) {
                this.getBrackets()
            }
            return this.brackets
        }
    }
