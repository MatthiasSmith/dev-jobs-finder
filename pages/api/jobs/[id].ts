import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
// const data = require('../../data/jobs-details.json');

const githubApi = 'https://jobs.github.com/positions/';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.id === 'undefined')
    return res.status(400).json({ error: 'Bad Request' });

  let url = `${githubApi}${req.query.id}.json`;
  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (err) {
    console.error(err);
    res.json({ error: err });
  }
};
