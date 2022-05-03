const axios = require('axios');

module.exports = {
    processSample: async result => {
        var data = {
            'vendor': 'VE001-99',
            'trans': this.trans,
            'cc': this.cc,
            'name': this.name, 
            'exp': this.exp, 
            'amount': this.amount
        };
        axios.post('http://blitz.cs.niu.edu/creditcard', data).then((response) => {           
            result(response.data);
        }).catch(err => {
            throw err;
        });
    }
}