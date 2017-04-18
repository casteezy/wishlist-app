// http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api
const express = require('express');

const app = express();

const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const userRoute = '/api/v1/user/:userId';
const wishlistRoute = `${userRoute}/lists`;

// Wishlists
app.get(`${wishlistRoute}`, (req, res) => {
  res.send('Getting data on all lists');
});

app.route(`${wishlistRoute}/:listId`)
  .get((req, res) => {
    res.send('Getting specific list');
  })
  .put((req, res) => {
    res.send('Updating specific list');
  })
  .delete((req, res) => {
    res.send('Delete a specific list');
  });

app.route(`${wishlistRoute}/:listId/items`)
  .get((req, res) => {
    res.send('Getting all items in a list');
  });

// Wishlist Items
app.route(`${wishlistRoute}/:listId/items`)
  .post((req, res) => {
    res.send('Creating a new item');
  });

app.route(`${wishlistRoute}/:listId/items/:itemId`)
  .get((req, res) => {
    res.send('Get a specific item');
  })
  .put((req, res) => {
    res.send('Update a specific item');
  })
  .delete((req, res) => {
    res.send('Delete a specific item');
  });


app.listen(port, (err) => {
  // TODO `use` middleware error handling
  if (err) {
    return console.error('something bad happened', err);
  }
  return console.log(`Example app listening on port ${port}!`);
});

