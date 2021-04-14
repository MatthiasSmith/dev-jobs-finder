import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { gitHubJobsApiUrl } from '../../../data/github-jobs-api-url';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Bad Request' });
  }

  const url = `${gitHubJobsApiUrl}/${id}.json`;

  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (err) {
    console.error(err);
    res.json({ error: err });
  }
};
