const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true  
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    createdOn: {
        type: Date,
        'default': Date.now
    },
    hash: String,
    salt: String
    // cart: [cartSchema],
    // items: [itemSchema]
    
});

// sets the encrypted password in the User Model
userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 65, 'sha512')
        .toString('hex');
};

userSchema.methods.validPassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 65, 'sha512')
                .toString('hex');
    return this.hash == hash;
};

// making index for performance
userSchema.index({username: "text"});

mongoose.model('User', userSchema);

const User = mongoose.model('User');

const testUser = new User();
testUser.name = "Marco Castillo";
testUser.username = "marco001";
testUser.email = "marco001@gmail.com";
testUser.setPassword("test");

testUser.save((err, user) => {
    if(err) {
        console.log(JSON.stringify(err));
    }
});

// propiedades de elementos en un esquema
// type, unique, required, default, min, max, 

// valores que pertenecen a las propiedades
// String, Booolean, Number, 