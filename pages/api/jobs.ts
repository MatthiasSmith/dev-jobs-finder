import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { gitHubJobsApiUrl } from '../../data/github-jobs-api-url';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let url = `${gitHubJobsApiUrl}.json`;

  const page = Number(req.query.page);
  const { search, location, full_time } = req.query;

  url += `?page=${page}`;
  url += search ? `&search=${search}` : '';
  url += location ? `&location=${location}` : '';
  url += full_time ? `&full_time=true` : '';

  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (err) {
    console.log(err);
    res.status(err.response ? err.response.status : 404).json({
      error: err.response ? err.response.statusText : '404 Not Found',
    });
  }
};
