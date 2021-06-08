const express = require("express");
const app = express();
const client = require("./db.js");
const db = client.db();
const mongodb = require('mongodb');

const dotenv = require("dotenv");
dotenv.config();

const jwt = require("jsonwebtoken");
const jwtsecret = process.env.JWT_SECRET;

const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const bcrypt = require('bcrypt');
const saltRounds = 10;

// ==============================================

const pets               = client.db("JoshTestDB").collection("pets");
const users_collection   = client.db("JoshTestDB").collection("users");
const classes_collection = client.db("JoshTestDB").collection("classes");
const appointmentAppDB_usersCollection = client.db("appointmentApp").collection("users");
const appointmentAppDB_apntsCollection  = client.db("appointmentApp").collection("apnts");

// ==============================================
//
// CRUD Read
//
app.get("/classes", async (req, res) => {
  try {
    const classes = await classes_collection.find().toArray();
    console.log('classes: ', classes);
    res.status(200).json(classes);
  } catch (err) {
    console.log(err);
    res.status(400).json("Getting classes from db failed");
  }
});
app.get("/users", async (req, res) => {
  try {
    const users = await appointmentAppDB_usersCollection.find().toArray();
    console.log('users: ', users);
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(400).json("Getting users from db failed");
  }
});
app.get("/apnts", async (req, res) => {
  try {
    const apnts = await appointmentAppDB_apntsCollection.find().toArray();
    const apnts_objs = apnts.map((apnt, idx) => {
      
      const complete_date = Date(apnt.start_time);
      const split_date = complete_date.split(' ');
      const time = split_date[4];
      const time_split = time.split(':');

      return {
        user_id: idx, // DUMMY: Store this in DB upon user adding new apnt, then retrieve address, name etc from indexing into this corresponding users collection
        duration: apnt.duration,
        time_idx: apnt.time_idx,
        apnt_type: apnt.apnt_type,
        day: split_date[0],
        month: split_date[1],
        date: split_date[2],
        year: split_date[3],
        time: time,
        hour: time_split[0],
        minute: time_split[1],
        second: time_split[2],
        time_zone: split_date[5],
      };
    });
    // console.log('Complete Date: ', complete_date, ',  typeof complete_date: ', typeof complete_date);
    // console.log('date_obj: ', date_obj);
    res.status(200).json(apnts_objs);
  } catch (err) {
    console.log(err);
    res.status(400).json("Getting apnts from db failed");
  }
});
app.get("/apnts-admin", async (req, res) => {
  try {
    const apnts = await appointmentAppDB_apntsCollection.find().toArray();

    // console.log('Complete Date: ', complete_date, ',  typeof complete_date: ', typeof complete_date);
    // console.log('date_obj: ', date_obj);
    res.status(200).json(apnts);
  } catch (err) {
    console.log(err);
    res.status(400).json("Getting apnts from db failed");
  }
});

// ==============================================
//
// CRUD Create
//
app.post("/apnts/add", async (req, res) => {
  try {

    // const classes = await classes_collection.find().toArray();
    const result = await appointmentAppDB_apntsCollection.insertOne({
      user_id:    req.body.user_id, // DUMMY: Store this in DB upon user adding new apnt, then retrieve address, name etc from indexing into this corresponding users collection
      duration:   req.body.duration,
      time_idx:   req.body.time_idx,
      apnt_type:  req.body.apnt_type,
      day:        req.body.day,
      month:      req.body.month,
      date:       req.body.date,
      year:       req.body.year,
      time:       req.body.time,
      hour:       req.body.hour,
      minute:     req.body.minute,
      second:     req.body.second,
      time_zone:  req.body.time_zone,
    });

    console.log('/classes :: result.insertedId: ', result.insertedId);

    const id = result.insertedId;
    res.status(200).json(id);
  } catch (err) {
    console.log(err);
    res.status(400).json("Adding class to db failed");
  }
});

// ==============================================

app.get("/classes/:id", async (req, res) => {

  const ID = String(req.params.id);

  try {
    const session = await classes_collection.find({ _id: mongodb.ObjectID(ID)}).toArray();
    console.log('session: ', session);
    res.status(200).json(session);
  } catch (err) {
    console.log('Error: ', err);
    res.status(400).json(`Getting class ${ID} from db failed`);
  }
});

app.get("/classes/location/:location", async (req, res) => {

  console.log('===========================================');
  console.log('===========================================');
  console.log('===========================================');
  console.log('===========================================');

  const location = String(req.params.location);
  console.log('location: ', location);

  console.log('===========================================');
  console.log('===========================================');
  console.log('===========================================');
  console.log('===========================================');

  try {
    const sessions = await classes_collection.find({ location: location }).toArray();
    if (sessions.length) {
      console.log('sessions: ', sessions);
      res.status(200).json(sessions);
    } else {
      console.log('There are no classes at location: ', location);
      res.status(200).json([]);      
    }
  } catch (err) {
    console.log('Error: ', err);
    res.status(400).json(`Getting classes for location: ${location} from db failed`);
  }
});

app.get("/classes/intensity/:intensity", async (req, res) => {

  console.log('===========================================');
  console.log('===========================================');
  console.log('===========================================');
  console.log('===========================================');

  const intensity = String(req.params.intensity);
  console.log('intensity: ', intensity);

  console.log('===========================================');
  console.log('===========================================');
  console.log('===========================================');
  console.log('===========================================');

  try {
    const sessions = await classes_collection.find({ intensity: intensity }).toArray();
    if (sessions.length) {
      console.log('sessions: ', sessions);
      res.status(200).json(sessions);
    } else {
      console.log('There are no classes at intensity: ', intensity);
      res.status(200).json([]);      
    }
  } catch (err) {
    console.log('Error: ', err);
    res.status(400).json(`Getting classes for intensity: ${intensity} from db failed`);
  }
});

app.get("/classes/duration/:duration", async (req, res) => {

  console.log('===========================================');
  console.log('===========================================');
  console.log('===========================================');
  console.log('===========================================');

  const duration = Number(req.params.duration);
  console.log('duration: ', duration);

  console.log('===========================================');
  console.log('===========================================');
  console.log('===========================================');
  console.log('===========================================');

  try {
    const sessions = await classes_collection.find({ duration: duration }).toArray();
    if (sessions.length) {
      console.log('sessions: ', sessions);
      res.status(200).json(sessions);
    } else {
      console.log('There are no classes at duration: ', duration);
      res.status(200).json([]);      
    }
  } catch (err) {
    console.log('Error: ', err);
    res.status(400).json(`Getting classes for duration: ${duration} from db failed`);
  }
});

app.get("/classes/exercise_type/:exercise_type", async (req, res) => {

  console.log('===========================================');
  console.log('===========================================');
  console.log('===========================================');
  console.log('===========================================');

  const exercise_type = String(req.params.exercise_type);
  console.log('exercise_type: ', exercise_type);

  console.log('===========================================');
  console.log('===========================================');
  console.log('===========================================');
  console.log('===========================================');

  try {
    const sessions = await classes_collection.find({ exercise_type: exercise_type }).toArray();
    if (sessions.length) {
      console.log('sessions: ', sessions);
      res.status(200).json(sessions);
    } else {
      console.log('There are no classes with exercise_type: ', exercise_type);
      res.status(200).json([]);      
    }
  } catch (err) {
    console.log('Error: ', err);
    res.status(400).json(`Getting classes for exercise_type: ${exercise_type} from db failed`);
  }
});

// ==============================================
//
// CRUD Create
//
app.post("/classes/add", async (req, res) => {
  try {

    // const classes = await classes_collection.find().toArray();
    const result = await classes_collection.insertOne({
      instructor_name: req.body.instructor_name, 
      exercise_type: req.body.exercise_type, 
      intensity: req.body.intensity,
      location: req.body.location,
      duration: req.body.duration,
      class_size: req.body.class_size,
      date: req.body.date
    });

    console.log('/classes :: result.insertedId: ', result.insertedId);

    const id = result.insertedId;
    res.status(200).json(id);
  } catch (err) {
    console.log(err);
    res.status(400).json("Adding class to db failed");
  }
});

// ==============================================
//
// CRUD Update
//
app.post("/classes/update/:id", async (req, res) => {

  const ID = String(req.params.id);

  let key;
  let value;
  if (req.body.instructor_name) {
    key = 'instructor_name';
    value = req.body.instructor_name;
  } else if (req.body.exercise_type) {
    key = 'exercise_type';
    value = req.body.exercise_type;
  } else if (req.body.intensity) {
    key = 'intensity';
    value = req.body.intensity;
  } else if (req.body.location) {
    key = 'location';
    value = req.body.location;
  } else if (req.body.duration) {
    key = 'duration';
    value = req.body.duration;
  } else if (req.body.class_size) {
    key = 'class_size';
    value = req.body.class_size;
  } else if (req.body.date) {
    key = 'date';
    value = req.body.date;
  }

  try {
    // const result = await pets.updateOne({_id: mongodb.ObjectID(ID)}, {$set: {name: 'UPDATED-josh'}});
    const result = await classes_collection.updateOne({ _id: mongodb.ObjectID(ID)}, { 
      $set: { [key]: value}
    });

    console.log('Successfully updated class');
    res.json(result);
  } catch(e) { 
    console.log('Updating class failed! Error: ', e);
    res.json("Updating classfailed!");
  } 
});

// ==============================================
//
// CRUD Delete
//
app.get("/classes/delete/:id", async (req, res) => {

  const ID = String(req.params.id);
  console.log('id: ', ID);

  try {
    const result = await classes_collection.deleteOne({_id: mongodb.ObjectID(ID)});
    console.log('Deleted class, result: ', result);
    res.status(200).json(result);
  } catch(e) { 
    console.log('Deleting animal failed! Error: ', e);
    res.status(400).json("Deleting animal failed!");
  } 
});

// ==============================================
//
// Register
//
app.post("/register", async (req, res) => {

  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email
  const password = req.body.password;
  const role = req.body.role;
  
  // TODO: Move this to the frontend so that the hashed password is transmitted
  //       to the backend to avoid man-in-the-middle attacks!!!

  // Cryptographically hash password
  bcrypt.genSalt(saltRounds).then((salt) => {
    console.log('salt: ', salt);
    bcrypt.hash(password, salt).then(async function(hash) {
        // Store hash in your password DB.
        console.log('hash: ', hash);
        try {
          const result = await users_collection.insertOne({name, username, email, password: hash, role});
          console.log('Added new user');
          res.status(201).json(result);
        } catch(e) { 
          console.log('Adding user failed! Error: ', e);
          res.status(400).json("Adding user failed!");
        } 
    });
  });
});

// ==============================================
//
// Login
//
app.post("/login", async (req, res) => {

  try {
    
    // TODO: Add logic in registration to ensure that usernames are unique
    const users = await users_collection.find({ username: req.body.username }).toArray();
    
    console.log('req.body.username: ', req.body.username);
    console.log('req.body.password: ', req.body.password);
    console.log('users: ', users);
    
    if (users.length > 0) {
      const user = users[0];
      console.log('user: ', user);

      // Compare hashed plain-text password against stored hashed password
      const hash = user.password;
      const plain_text_password = req.body.password;
      bcrypt.compare(plain_text_password, hash, function(err, result) {
        // result == true
        console.log('Password is valid!');

        if (result == true) {
          const token = jwt.sign({ name: "John Doe", favColor: "green" }, jwtsecret);
          res.status(200).json({ status: "success", token: token, role: user.role });
        } else {
          res.status(400).json({ status: "failure" });
        } // if (result == true)
      });

    } else { // if (users > 0)
      res.status(400).json({ status: "username not in database" });
    }

  } catch (err) {
    console.log(err);
    res.status(400).json("No user with that name");
  }

});

// ==============================================

app.post("/topsecret", (req, res) => {

  // get token from payload
  const token = req.body.token;
  
  jwt.verify(token, jwtsecret, function (err, decoded) {
    
    if (err) {
      res.status(400).json({ status: "failure" });
    } 
    else {
      res.status(200).json({ status: "success", message: `Hello ${decoded.name} your favorite color is ${decoded.favColor} and we can tell you the secret info that the sky is blue.` });
    }
  })
});

// ==============================================

module.exports = app;