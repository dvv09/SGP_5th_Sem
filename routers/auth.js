const express = require('express');
const User = require('../models/userSchema');
const Ground = require('../models/groundSchema');
const router = express.Router();
require('../db/conn');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());
app.use(cors());
// In your server code
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://http://localhost:5000');
    res.header('Access-Control-Allow-Credentials', true);
    // ...
    next();
  });
  


app.use(express.json());

// ++++++++++++++++++++++++++ Routes +++++++++++++++++++++++++++++++++++++
router.get('/', (req,res) => {
    res.send("Vraj Desai");
})

router.get('/grounds', async(req,res) => {

    try {
        const groundExit = await Ground.find();

        return res.status(200).json(groundExit);
    } catch (error) {
        
    }
})

router.get('/profile', async(req,res) => {
    res.send("My profile");
})

// router.post('/grounds', async (req,res) => {

//     // Destructuring req.body to get the registerig users data
//     const {name,city,location,price,Ratings,userrated,Description,image} = req.body;

//     // if any of the fields is not filled then giving error
//     if(!name || !city || !location || !price || !Ratings || !userrated || !Description || !image){
//         return res.status(422).send(`Please Fill all the details...`);
//     }
//     // addinng data into the database
//     try {

//         // since user doesn't exist in database, adding user into db
//         const ground = new Ground({name,city,location,price,Ratings,userrated,Description,image});
//         await ground.save();

//         res.status(201).send("User successfullly Registered...");
        
//     } catch (error) {
//         console.log(error);
//     }

// });

// ++++++++++++++++++++++++++ REGISTERING THE USER ROUTE ++++++++++++++++++++++++++++++++++++++++

// since dealing with the database usiing async-await, asynce is used in the callback funnction
router.post('/register', async (req,res) => {

    // Destructuring req.body to get the registerig users data
    const {name,email,phone,password,cpassword} = req.body;

    // if any of the fields is not filled then giving error
    if(!name || !email || !phone || !password || !cpassword || (password !== cpassword)){
        return res.status(422).send(`Please Fill all the details...`);
    }

    // addinng data into the database
    try {

        //checking if the user already exits in the database
        const userExist = await User.findOne(
            {
                $or : [{email},{phone}]
            }
        );

        // if exits then giving error
        if(userExist){
            return res.status(422).send(`Data already exist.....`);
        }

        // since user doesn't exist in database, adding user into db
        const user = new User({name,email,phone,password,cpassword});
        await user.save();

        res.status(201).send("User successfullly Registered...");
        
    } catch (error) {
        console.log(error);
    }

});
// ++++++++++++++++++++++++++ END OF REGISTERING THE USER ROUTE ++++++++++++++++++++++++++++++++++++++++


// ++++++++++++++++++++++++++ LOGGIN THE USER ROUTE ++++++++++++++++++++++++++++++++++++++++
router.post('/login', async (req,res) => {
    try {
    // Destructuring req.body to get the registerig users data
    const {name,email,password} = req.body;

    // if any of the fields is not filled then giving error
    if(!email || !password){
        res.status(422).send(`Please Fill all the details...`);
    }

        //checking if the user already exits in the database
        const userLogin = await User.findOne({email : email});

        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);

            if(!isMatch){
            res.status(422).send(`You're not logged in.....`);
            }
else{
            const token = await userLogin.generateAuthToken();
            console.log(token); 
            res
            .status(200)
            .cookie("token", token, {
                expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            })
            .json({ success: true, userLogin, token });

        }
        }else{
            res.status(422).send(`You're not logged in.....`);
        }

        
    } catch (error) {
        console.log(error);
    }

});
// ++++++++++++++++++++++++++ END OF LOGGIN THE USER ROUTE ++++++++++++++++++++++++++++++++++++++++

module.exports = router;