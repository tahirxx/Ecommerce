import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/User';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017");


app.get('/register', (req, res) => {
    // You can send a response, render a page, or handle the request in any way you want
    res.send('GET request to /register');
}); 

//login information send/posting it n
app.post('/login', async (req, res) => {
    const{email, password} = req.body

    try {
        const check=await RealEstate.findOne({ email })

        if(check){
            res.json('exist')
        } else{
            const newUser = new RealEstate({
                email,
                password
            });

            // Save the new user to the database
            await newUser.save();
            res.json('notexist')
        }
    } catch (err){
        res.json('error')
    }
})

//register info sending/posting
app.post('/register', async (req, res) => {
    const{email, password} = req.body

    const data = {
        email: email, 
        password: password
    }

    try {
        const check=await RealEstate.findOne({email:email})

        if(check){
            res.json('exist')
        } else{
            res.json('notexist')
            await RealEstate.insertMany([data])
        }
    } catch (err){
        res.json('notexist')
    }
})

//Contact message post/send
app.post('/contact', async (req, res) => {
    try {
      const { fullname, email, message } = req.body;
  
      // Insert the message into MongoDB
      const newMessage = new Contact({ fullname, email, message });
      await newMessage.save();
  
      res.status(200).send('Message received. We will get back to you soon.');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
app.listen(8000, () => {
    console.log("server is running")
})