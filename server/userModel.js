const mongoose = require('mongoose');

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define a schema
const userSchema = new mongoose.Schema({
    name: String,
    color: String
});

// Create a model based on the schema
const Car = mongoose.model('Car', userSchema);

// Create a new user document
const newUser = new Car({ name: 'Tesla model S', color: 'white' });

// Save the document to the database
newUser.save()
    .then(() => console.log('Car saved:', newUser))
    .catch(error => console.error('Error saving car:', error));
