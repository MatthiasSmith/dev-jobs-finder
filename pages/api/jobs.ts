import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
// const data = require('../../data/jobs.json');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let url = 'https://jobs.github.com/positions.json';

  if (req.query.search || req.query.location || req.query.full_time) {
    url += '?';
  }
  url += req.query.search ? `search=${req.query.search}` : '';
  url += req.query.location
    ? url.indexOf('?') > -1
      ? `&location=${req.query.location}`
      : `location=${req.query.location}`
    : '';
  url += req.query.full_time
    ? url.indexOf('?') > -1
      ? '&full_time=true'
      : 'full_time=true'
    : '';

  try {
    const response = await axios.get(url);
    res.send(response.data);
    // res.send(data);
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  }
};
