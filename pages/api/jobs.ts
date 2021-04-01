import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
const data = require('../../data/jobs.json');

const url = 'https://jobs.github.com/positions.json';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
  // const response = await axios.get(url);
  // res.send(response.data);
  res.send(data);
  } catch (err) {
    console.log(err);
    res.json({error: err});
  }
};
