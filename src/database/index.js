const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:123@cluster0.qzhjy.mongodb.net/web?retryWrites=true&w=majority", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
mongoose.Promise = global.Promise;

module.exports = mongoose;