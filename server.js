require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', async (error) => console.error(error));
db.once('open', () => console.error('Connect'));

app.use(express.json());

const subscribersRouter = require('./routes/subscribers');

app.use('/subscribers', subscribersRouter);

app.listen(8000, () => console.log('server has hellow'));

// const mongoose = require('mongoose');
// const express = require('express');
// const app = express();

// const url = `mongodb+srv://aliakwe:Arsenogie1@cluster0.f0bjp.mongodb.net/NodeApp?retryWrites=true&w=majority`;

// const connectionParams = {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// };
// mongoose
//   .connect(url, connectionParams)
//   .then(() => {
//     console.log('Connected to database ');
//   })
//   .catch((err) => {
//     console.error(`Error connecting to the database. \n${err}`);
//   });
