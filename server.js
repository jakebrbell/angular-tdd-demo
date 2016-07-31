'use strict';

const express = require('express');
const app = express();

const contacts = [
  {
    name: 'Edward'
  },
  {
    name: 'Robert'
  }];

  app.get('/contacts', (req, res) => {
    res.status(200).json(contacts);
  });

  app.listen(9001);
