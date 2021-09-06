const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    name: { type: String },
    username: { type: String, required: true },
    password: { type: String, required: true },
});

//Run this function before every save
userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    bcrypt.hash(this.password, 10, (err, passwordHashed) => {
        if (err) {
            return next(err);
        }
        this.password = passwordHashed;
        next();
    });
});

// Password verification
userSchema.methods.comparePassword = function (password, callback) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) {
            return callback(err);
        }
        if (!isMatch) {
            return callback(null, isMatch);
        }
        return callback(null, this);
    });
};

module.exports = mongoose.model("User", userSchema);
