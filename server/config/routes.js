var Quotes = require('../controllers/quotes.js');
var mongoose = require('mongoose');
var Quote = mongoose.model('Quote')

module.exports = function(app) {
    //Get all quotes
    app.get('/quotes', function(request, response) {
        console.log('Get all route is hit in route.js');
        Quotes.all(request, response)
    })
    //Create a quote
    app.post('/quotes', function(request, response) {
        console.log('CreateQuotes at route hit');
        Quotes.create(request, response)
    })
    //Upvote (votes)
    app.get('/quotes/upvote/:id', function(request, response) {
        Quotes.updateBy1(request, response)
    })
    // Downvote (votes)
    app.get('/quotes/downvote/:id', function(request, response) {
        Quotes.downVoteBy1(request, response)
    })
    //Delete a quote
    app.delete('/quotes/:ids', function(request, response) {
        console.log('DeleteQuot route is hit');
        Quotes.deleteone(request, response)
    })
    
}