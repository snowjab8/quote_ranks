var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

module.exports = {
    all: function(request, response) {
        Quote.find({}).sort('-votes').exec(function(err, result) {
            if (err) {
                response.json(err);
            } else {
                response.json(result);
            }
        })
    },
    create: function(request, response) {
        var quote = new Quote({quote: request.body.quote, author: request.body.author, votes: 0});
        quote.save(function(err, result) {
            if (err) {
                response.json(err);
            } else {
                console.log('Successful creation');
                Quote.find({}, function(err, result) {
                    if (err) {
                        response.json(err);
                    } else {
                        response.json(result);
                    }
                })
            }
        })
    },
    updateBy1: function(request, response) {
        Quote.update({_id: request.params.id}, {$inc: {votes: 1 }}, function(err, result) {
            if (err) {
                response.json(err);
            } else {
                Quote.find({}).sort('-votes').exec(function(err, result) {
                    if (err) {
                        response.json(err);
                    } else {
                        response.json(result);
                    }
                })
            }
        })
    },
    downVoteBy1: function(request, response) {
        Quote.update({_id: request.params.id}, {$inc: {votes: -1 }}, function(err, result) {
            if (err) {
                response.json(err);
            } else {
                Quote.find({}).sort('-votes').exec(function(err, result) {
                    if (err) {
                        response.json(err);
                    } else {
                        response.json(result);
                    }
                })
            }
        })
    },
    deleteone: function(request, response) {
        Quote.remove({_id: request.params.ids}, function(err, result) {
            if (err) {
                response.json(err);
            } else {
                console.log('Successful deletion');
                Quote.find({}, function(err, result) {
                    if (err) {
                        response.json(err);
                    } else {
                        response.json(result);
                    }
                })
            }
        })
    }
}