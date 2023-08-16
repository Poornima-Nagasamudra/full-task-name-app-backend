const axios = require('axios')

function genderCall(req, res, next){
        // axios.get('https://api.genderize.io?name=peter')
    axios.get('https://api.genderize.io', {
        params : {
            name : req.body.name
        }
    })
    .then((response) => {
        req.genderData = response.data
        next()
    })
    .catch((err) => {
          res.json(err)
    })

}

module.exports = genderCall
