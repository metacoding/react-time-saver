const functions = require('firebase-functions')
const express = require('express')
const admin = require('firebase-admin')
const engines = require('consolidate')
const Handlebars = require('handlebars')
const path = require('path')

const fs = require('fs')

const app = express()

admin.initializeApp()

// function getFirebaseData (path) {
//   const ref = admin.database().ref(path)
//   return ref.once('value').then(snap => snap.val())
// }
//
app.engine('hbs', engines.handlebars)

app.set('views', './views')
app.set('view engine', 'hbs')

Handlebars.registerPartial('partial', fs.readFileSync(path.join(__dirname, '/views/partials/partial.hbs'), 'utf8'))

app.get('/', (request, response) => {
  // response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  response.render('index', { data: {
    author: 'MEHRAN TAHERIMOUD'
  } })
})

app.get('/cached', (request, response) => {
  response.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  response.render('index', { data: {
    author: 'MEHRAN TAHERIMOUD'
  } })
})

exports.app = functions.https.onRequest(app)
