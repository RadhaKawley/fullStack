import express , {Express , Request,Response} from 'express';
import fetchUser from './fetchUser';
import cors from 'cors';

const app : Express = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/users/:id',async (req, res) => {
  //console.log(req.params.id);
  const id=req.params.id as string;
  const user=await fetchUser(id);
  res.json(user);
  //res.send('Done!');
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});