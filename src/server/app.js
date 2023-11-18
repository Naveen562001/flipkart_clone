const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const user = require('./database');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

port =4000;


app.use(cors({
    origin:'http://localhost:3000'
}))


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/ecommerce',
  collection: 'sessions'
});

store.on('error', function(error) {
  console.log(error);
});

app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 } // session will expire after 1 day
  }));
  

const storage = multer.diskStorage({});
const upload = multer({ storage: storage });

app.post('/inputs',upload.none() ,async(req,res)=>{
    const {username,email,password} = req.body;
    const db = new user({username,email,password})
    try{
        
       const saving =  await db.save();
       console.log('saved');
       res.send(true);
    }
    catch(err){
        console.log(err)
    }
   
});

//login post reciver

app.post('/loginDetail', async (req,res)=>{
    const {email,password} = req.body;
    console.log(email,password);

    const findUser = await user.findOne({email , password})
    if(findUser){

        req.session.userId = findUser._id;
        res.send(true)
    }
    else{
        res.send(false);
    }
    
    
})
// example protected route
app.get('http://localhost:3000/', (req, res) => {
    if (!req.session.userId) {
      // if user is not logged in, redirect to login page
      return res.redirect('/login');
    }
    console.log(req.session.userId);
  
    // otherwise, render the home page
    res.render('Home');
  });
  


app.get('/',(req,res)=>{
    res.send('hello this is server');
});



app.listen(port,()=>{
    console.log(`server running at ${port}`);
});