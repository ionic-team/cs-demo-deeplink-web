const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/white', (req, res) =>
    res.render('pages/cat', {
      category: {
        name: 'White Tea',
        image: 'white',
        description: 'Description'
      }
    })
  )
  .get('/yellow', (req, res) =>
    res.render('pages/cat', {
      category: {
        name: 'Yellow Tea',
        image: 'yellow',
        description: 'Description'
      }
    })
  )
  .get('/green', (req, res) =>
    res.render('pages/cat', {
      category: {
        name: 'Green Tea',
        image: 'green',
        description: 'Description'
      }
    })
  )
  .get('/oolong', (req, res) =>
    res.render('pages/cat', {
      category: {
        name: 'Oolong',
        image: 'oolong',
        description: 'Description'
      }
    })
  )
  .get('/black', (req, res) =>
    res.render('pages/cat', {
      category: {
        name: 'Black Tea',
        image: 'black',
        description: 'Description'
      }
    })
  )
  .get('/dark', (req, res) =>
    res.render('pages/cat', {
      category: {
        name: 'Dark Tea',
        image: 'dark',
        description: 'Description'
      }
    })
  )
  .get('/puer', (req, res) =>
    res.render('pages/cat', {
      category: {
        name: 'Puer',
        image: 'puer',
        description: 'Description'
      }
    })
  )
  .get('/herbal', (req, res) =>
    res.render('pages/cat', {
      category: {
        name: 'Herbal Infusions',
        image: 'herbal',
        description: 'Description'
      }
    })
  )
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
