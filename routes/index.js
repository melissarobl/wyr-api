const express = require('express')  // import express library
const router = express.Router()
const randomWYRQuestion = require('../model/wyr_questions')  //whatever is exported in .js file, will be available here

//router that handles homepage
router.get('/', function (req, res, next) {
    res.send('Placeholder for home page')
})

//router that handles wyr json page
//made an object
//adding all the routes it can respond to
router.get('/wyr', function (req, res, next) {
    // const wyr = {
    //     'question': 'Live in a circle house or a triangle house',
    //     'answer1': 'Circle House',
    //     'answer2': 'Triangle House'
    // }

    const wyr = randomWYRQuestion() //calling function

    res.json(wyr) //send as a response change js object to json

})




//router becomes indexRouter in server.js
module.exports = router