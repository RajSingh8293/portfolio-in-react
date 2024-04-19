// ************ crud part one *******************

export const mkdir = `  mkdir crud_app_express`
export const cd = `  cd crud_app_express
npm init
`

export const npmInit = `  name: (crud_app_express) 
version: (1.0.0) 
description: node.js restful CRUD API with Node.js, Express and MongoDB
entry point: index.js
test command: 
git repository: 
keywords: nodejs, express, mongodb, rest, api
author: raj
license: (ISC)

Is this ok? (yes) yes`

export const packageJson = `{
  "name": "crud_app_express",
  "version": "1.0.0",
  "description": "node.js restful CRUD API with Node.js, Express and MongoDB",
  "main": "index.js",
  "scripts": {
	"test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
	"nodejs",
	"express",
	"rest",
	"api",
	"mongodb"
  ],
  "author": "raj",
  "license": "ISC",
  "dependencies": {
	"cors": "^2.8.5",
	"express": "^4.18.2",
	"mongoose": "^6.11.1"
	"body-parser": "^6.11.1"
  }
}`

export const codeString = `  const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.get('/', (req, res) => {
	res.json({"message": "Hello Crud Node Express"});
});
app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});`

export const data = `  mkdir database
  cd database`

export const installExpress = `  npm install express body-parser mongoose cors`

export const db = `
const mongoose = require('mongoose');

const dbConnect = async(){
 try {
   await mongoose.connect('mongodb://localhost:27017/crud_app_express')
   console.log("Databse Connected Successfully!!");    

 } catch (error) {
  console.log('Could not connect to the database', err);
  process.exit();
 }
}
  `
export const connecDb = `node index.js`

// ************** part two *****************

export const modalSchema = `const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
	password : {
		type: String
		required: true
	}
});
const UserModel = new mongoose.model('User', userSchema);
module.exports = UserModel; `

export const createUserController = `const UserModel = require('../model/userShema')
// Create new user
exports.create = async (req, res) => {
	const {firstName,lastName,email, password} = req.body
    if (!email && !firstName && !lastName && !password) {
        res.status(400).send({ message: "All fields are empty!" });
    }

	const existUser = await findOne.UserModel({email})
	if(existUser){
		return res.send({
            message:"User already exist!!",
        });
	}
    
    const user = new UserModel({
        email,
        firstName,
        lastName,
        phone
    });
    
   const saveUser = await user.save().
        retrun res.send({
            message:"User created successfully!!",
            user:saveUser
        });
};

// Get all Users form database
exports.findAll = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single User with user id
exports.findOne = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);

		if(!user){
			return res.status(400).json({message : "User does not exist"});
		}

        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};


// Update a user by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
     const updatedUser =await UserModel.findByIdAndUpdate(id, req.body, { new: true }).
	 
	 if(updatedUser){
		res.send({ message: "User updated successfully." })
	 }
	 
};


// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
	const findUserByid = await findById(req.params.id)
	if(!findUserByid){
		res.status(404).send({
            message: "User not found."
          });
	}
   await UserModel.findByIdAndRemove(req.params.id)
   
          return res.send({
            message: "User deleted successfully!"
          });
       
};

`
