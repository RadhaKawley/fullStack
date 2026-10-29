import express , {Express , Request,Response} from 'express';
import fetchUser from './fetchUser';
import cors from 'cors';
import { get } from 'node:http';

const app : Express = express();
app.use(cors());
app.use(express.json());
const port = 3000;



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/events',async(req,res)=>{
  const api_key='knuMOf2BuBrVDgH9pmQaeh0KUT16ZJuY';
  const city='Leeds';
  const url='https://app.ticketmaster.com/discovery/v2/events.json?city=London&countryCode=GB&apikey=knuMOf2BuBrVDgH9pmQaeh0KUT16ZJuY';
  const response = await fetch(url);
  const data = await response.json();
  const events = (data._embedded?.events ?? []).map((event) => ({
      id: event.id,
      name: event.name,
      date: event.dates?.start?.localDate ?? "Date unavailable",
      time: event.dates?.start?.localTime ?? "Time unavailable",
      venue:event._embedded?.venues?.[0]?.name ?? "Venue unavailable",
      priceMin: event.priceRanges?.[0]?.min ?? null,
      priceMax: event.priceRanges?.[0]?.max ?? null,
      url:event.url
    }));

    res.json(events);

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