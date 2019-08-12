const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    user: 'antonycalderonacosta29@gmail.com',
    pass: 'acosta2019.'
  }
}))

module.exports = transporter
