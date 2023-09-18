//Renders ejs templates (client's view)

const express = require('express');
const router = express.Router();
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

router.get('/', (req, res) => {
  res.render('index', { apiKey }); // Pass the google API key to the maps.ejs template

});

router.get('/create', (req, res) => {
<<<<<<< HEAD
<<<<<<< HEAD
  res.render('maps_new');
=======
  const title = req.body.title;
=======

>>>>>>> 5895149fdbf7defdf83e71f69b9b18dc477c63b3
  // app.get('/login/:id', (req, res) => {
  //   res.cookie('user_id', req.params.id);
  //   return res.redirect("/")
  //   });
  const id = req.cookies.id
  //const userID = req.session.userID; //edit this, we are not using session, refer to login route
  //pass the api key to the render
  res.render('maps_new', { apiKey });
  //res.json({apiKey})
>>>>>>> 8a66a79e7bbd8dc7d72375c63bf6c0fb8d9bd6f5

});


module.exports = router;
