import { getAllFile } from '../../API/connectDB';

export default async (req, res) => {
  ///api/post?q=shindo
  // const url = decodeURI(req.url);
  // const queryString = url.split('=')[1];
  // console.log('queryString', queryString)
  // const data = requestByName(queryString);
  // console.log('data from post route', data)

  const data = await getAllFile();
  console.log('data', data);
  res.statusCode = 200;
  res.send({
    data,
  });
};
