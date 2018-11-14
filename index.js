const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/apple-app-site-association', (req, res) => {
    const aasa = fs.readFileSync(path.join(__dirname, 'apple-app-site-association'));
    res.set('Content-Type', 'application/json');
    res.status(200).send(aasa);
  })
  .get('/', (req, res) => res.render('pages/index'))
  .get('/white', (req, res) =>
    res.render('pages/cat', {
      category: {
        name: 'White Tea',
        image: 'white',
        description:
          'White tea is produced using very young shoots with no oxidation process. ' +
          'White tea has an extremely delicate flavor that is sweet and fragrent. White ' +
          'tea should be steeped at lower temperatures for short periods of time.'
      }
    })
  )
  .get('/yellow', (req, res) =>
    res.render('pages/cat', {
      category: {
        name: 'Yellow Tea',
        image: 'yellow',
        description:
          'A rare tea from China, yellow tea goes through a similar shortened oxidation ' +
          'process like green teas. Yellow teas, however, do not have the grassy flavor ' +
          'that green teas tend to have. The leaves often resemble the shoots of white ' +
          'teas, but are slightly oxidized.'
      }
    })
  )
  .get('/green', (req, res) =>
    res.render('pages/cat', {
      category: {
        name: 'Green Tea',
        image: 'green',
        description:
          'Green teas have the oxidation process stopped very early on, leaving them ' +
          'with a very subtle flavor and complex undertones. These teas should be ' +
          'steeped at lower temperatures for shorter periods of time.'
      }
    })
  )
  .get('/oolong', (req, res) =>
    res.render('pages/cat', {
      category: {
        name: 'Oolong',
        image: 'oolong',
        description:
          'Oolong teas are partially oxidized, giving them a flavor that is not as ' +
          'robust as black teas but also not as suble as green teas. Oolong teas often ' +
          'have a flowery fragrance.'
      }
    })
  )
  .get('/black', (req, res) =>
    res.render('pages/cat', {
      category: {
        name: 'Black Tea',
        image: 'black',
        description:
          'A fully oxidized tea, black teas have a dark color and a full robust and pronounced flavor. ' +
          'Black teas tend to have a higher caffeine content than other teas.'
      }
    })
  )
  .get('/dark', (req, res) =>
    res.render('pages/cat', {
      category: {
        name: 'Dark Tea',
        image: 'dark',
        description:
          'From the Hunan and Sichuan provinces of China, dark teas are flavorful aged ' +
          'probiotic teas that steeps up very smooth with slightly sweet notes.'
      }
    })
  )
  .get('/puer', (req, res) =>
    res.render('pages/cat', {
      category: {
        name: 'Puer',
        image: 'puer',
        description:
          'An aged black tea from china. Puer teas have a strong rich flavor that could ' +
          'be described as "woody" or "peaty."'
      }
    })
  )
  .get('/herbal', (req, res) =>
    res.render('pages/cat', {
      category: {
        name: 'Herbal Infusions',
        image: 'herbal',
        description:
          'Herbal infusions are not actually "tea" but are more accurately ' +
          'characterized as infused beverages consisting of various dried herbs, ' +
          'spices, and fruits.'
      }
    })
  )
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
