const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
  
app.listen(PORT, console.log(`Server running on the port number ${PORT}`));

//Configuration (MONGODB)
var curl = "mongodb://localhost:27017";
var client = new MongoClient(curl); 


//STUDENT LOGIN MODULE
app.post('/login/student', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP41');
        users = db.collection('users');
        const { regNo, pass } = req.body;
        const user = await users.findOne({ regNo, pass });
        if (user) {
            // Successful login
            res.json({ success: true, message: 'Login successful' });
        } else {
            // Failed login
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
        conn.close();
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

//COUNSELLOR LOGIN MODULE
app.post('/login/counsellor', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP41');
        users = db.collection('counsellor');
        const { counselorId, cpass } = req.body;
        const counsellor = await users.findOne({ counselorId, cpass });
        if (counsellor) {
            // Successful login
            res.json({ success: true, message: 'Login successful' });
        } else {
            // Failed login
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
        conn.close();
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

//STUDENTHOME MODULE
app.post('/studenthome/uname', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP41');
        users = db.collection('users');
        data = await users.find(req.body,{projection:{regNo : true}}).toArray();
        conn.close();
        res.json(data);
    }catch(err)
    {
        res.json(err).status(404);
    }
});


//COUNSELLORHOME MODULE
app.post('/counsellorhome/uname', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP41');
        users = db.collection('counsellor');
        data = await users.find(req.body,{projection:{firstName: true,lastName: true}}).toArray();
        conn.close();
        res.json(data);
    }catch(err)
    {
        res.json(err).status(404);
    }
});

//ADMIN HOME MENU
app.post('/adminhome/adminmenu', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP41');
        adminmenu = db.collection('adminmenu');
        data = await adminmenu.find({}).sort({mid:1}).toArray();
        conn.close();
        res.json(data);
    }catch(err)
    {
        res.json(err).status(404);
    }
});

//ADMIN HOME SUB MENUS
app.post('/adminhome/adminmenus', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP41');
        adminmenus = db.collection('adminmenus');
        data = await adminmenus.find(req.body).sort({smid:1}).toArray();
        conn.close();
        res.json(data);
    }catch(err)
    {
        res.json(err).status(404);
    }
});

//ADMINHOME ADD STUDENT
app.post('/registration/signup', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP41');
        users = db.collection('users');
        data = await users.insertOne(req.body);
        conn.close();
        res.json("Registered successfully...");
    }catch(err)
    {
        res.json(err).status(404);
    }
});



//View Student MODULE
app.get('/viewstudent/details', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP41');
        users = db.collection('users');
        data = await users.find().sort({ regNo: 1 }).toArray();
        conn.close();
        res.json(data);
    }catch(err)
    {
        res.json(err).status(404);
    }
});



//ADMINHOME ADD Counsellor
app.post('/registration/addcounsellor', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP41');
        users = db.collection('counsellor');
        data = await users.insertOne(req.body);
        conn.close();
        res.json("Registered successfully...");
    }catch(err)
    {
        res.json(err).status(404);
    }
});