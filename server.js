const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const User = require('./models/index.js')
var cors = require('cors');

async function main() {
  await mongoose.connect('mongodb+srv://elsword485667:9RQbEB3BJW9B1Q6Y@bolierplate.zacrguc.mongodb.net/User')
  .then(() => console.log('CONNECT MONGOOSE'))
  .catch(err => console.log("MONGOOSE CONNECTION ERROR!!", err));
}

main()

app.use(express.json());  
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'vite-project/dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/vite-project/dist/index.html'));
  
});

app.get('/allUser', async (req, res) => {
  const users = await User.find({});
  res.json(users);
})

app.get('/user', async (req, res) => {
  const {name} = req.body;
  const user = await User.findOne({name: name})
  res.json(user)
})

app.post('/user', async (req, res) => {
  const {name} = req.body;
  const user = await User.findOne({name: name})
  if (user) {
    console.log(user)
    console.log('found user')
    res.json(user)
  } else {
    const newUser = await User.insertMany({name: name, time: {hour: 0, minute: 0, second: 0}})
    console.log('not found user')
    console.log(newUser)
    res.json(newUser)
  }
})

app.get('/time', async (req, res) => {
  const {name} = req.query
  const user = await User.findOne({name: name})
  res.json(user)
})

app.post('/time', async (req, res) => {
  const {name, time} = req.body;
  const user = await User.findOne({name: name})
  if (user) {
    console.log(user.time)
    user.time = time;
    await user.save()
  } else {
    console.log('user not found:: post time', user)
  }
  
  res.send('timeSaveSuccess')
})


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/vite-project/dist/index.html'));
});

app.listen(3000, () => {
    console.log('connection server')
})
