const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Pusher = require('pusher');

var pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
});

const {foods} = require('./data/foods');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/images', express.static('images'));

// Routes

/** Pusher channels auth
  * The Channels client on the app makes a request to this route when it initializes a connection. This allows the user
  * to trigger events directly from the client side.
  *
  * Note that this app will auth users immediately - no checking if the user is actually a valid user of your app.
  * Obviously this wouldn't work for a real production app.
  */
app.post('/pusher/auth', (request, response) => {
  var socketId = request.body.socket_id;
  var channel = request.body.channel_name;
  var auth = pusher.authenticate(socketId, channel); // authenticate the request
  response.send(auth);
});

app.get('/foods/:query?', (req, res) => {
  const foods_r = foods();

  if (req.query.query != null) {
    const query = req.query.query.toLowerCase();
    return res.send({
      foods: foods_r.filter(itm =>
        itm.name.toLowerCase().includes(query) || itm.restaurant.name.toLowerCase().includes(query),
      ),
    });
  }

  return res.send({
  foods: foods_r,
  });
});

const PORT = 5000;
app.listen(PORT, err => {
    if (err) {
        console.error(err);
    } else {
        console.log(`food-delivery service running on port ${PORT}`);
    }
});
