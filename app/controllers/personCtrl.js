const Person = require('../models/person')
const axios =  require('axios')

const personController = {} 

personController.list = (req, res) => {
    Person.find()
      .then((person) => {
        res.json(person)
      })
      .catch((err) =>{
        res.json(err)
      })
}

personController.create = (req, res) => {
  //    const body = req.body 
        const person = new Person(req.genderData) 
        person.save()
           .then((person) => {
               res.json(person)
           })
           .catch((err) => {
              res.json(err)
           })
}

personController.destroy = (req, res) => {
    const id = req.params.id 
    Person.findByIdAndDelete(id)
       .then((person) => {
           res.json(person)
       })
       .catch((err) => {
          res.json(err)
       })
}

module.exports = personController