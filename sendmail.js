"use strict";

const nodemailer = require('nodemailer');

// Account Authorization
let transporter = nodemailer.createTransport({
    host: 'smtp.pepipost.com',
    port: 587,
    secure: false,
    auth: {
        user: 'USERNAME', // Pepipost login Username
        pass: 'PASSWORD' // Pepipost Account Password
    }
});

// Email Functions
let mailOptions = {
    from: '"Santhosh veer 👻" <me@example.com>', // Sender address
    to: 'user@example.com', // List of receivers
    subject: 'Hello World ✔', // Subject line
    replyTo: 'me@example.com', //  Reply-to Email
    //text: 'Hello world', // plain text
    html: '<b><u>Hello World Email</u></b>' // HTML Mail
};

// Log output
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
