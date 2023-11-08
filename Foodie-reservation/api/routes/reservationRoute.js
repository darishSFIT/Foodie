var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var nodemailer = require('nodemailer');

// require("dotenv").config();

const Day = require("../models/day").model;
const Reservation = require("../models/reservation").model;



const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: "foodiereserve@gmail.com", //your email
    pass: "jgvc flaz wgqa nvrl" // your app password
  }
});



// Parameters:
// {
//   "date": String ("Dec 02 2019 06:00"),
//   "table": table id,
// 	"name": String,
// 	"phone": String,
// 	"email": String
// }

router.post("/", function(req, res, next) {
  Day.find({ date: req.body.date }, (err, days) => {
    if (!err) {
      if (days.length > 0) {
        let day = days[0];
        day.tables.forEach(table => {
          if (table._id == req.body.table) {
            // The correct table is table
            table.reservation = new Reservation({
              name: req.body.name,
              phone: req.body.phone,
              email: req.body.email
            });
            table.isAvailable = false;
            day.save(err => {
              if (err) {
                console.log(err);
              } else {
                console.log("Reserved");
                var tableno = table.name;
                var tableloc= table.location;
                var name = req.body.name;
                var to = req.body.email;

                const msg = `
                        <html>
                          <body>
                             <p style="font-size: 16px; font-weight: bold;">
                                Hi!, ${name} We received your table booking request for ${tableno}. Thank you for choosing Foodie.
                             </p>
                           </body>
                        </html>`;

                const mailOptions = {
                  from: 'foodiereserve@gmail.com',
                  to: to,
                  subject: 'Reservation details',
                  html : msg
                  // text: 'Hi! '+name+' we recived your table booking request for '+tableno+' thank you for choosing Foodie'
                };

                transporter.sendMail(mailOptions, function(error, info) {
                  if (error) {
                    console.log('Error: ' + error);
                  } else {
                    console.log('Email sent: ' + info.response);
                  }
                });
                res.status(200).send("Added Reservation");
              }
            });
          }
        });
      } else {
        console.log("Day not found");
      }
    }
  });
});

module.exports = router;
