import express from 'express';
import bodyParser from 'body-parser';
import mailRouter from './routes/mail';

const app: express.Application = express();
const port: string = process.env.PORT || '3000';

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/mails', mailRouter);

app.get('/', function (req, res) {
  res.send('hello world!');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});