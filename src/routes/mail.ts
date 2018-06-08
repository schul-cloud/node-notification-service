import express from 'express';
import MailService from '../services/MailService';
import Mail from '@/interfaces/Mail';

const router: express.Router = express.Router();
const mailService: MailService = new MailService();

router.post('/', (req, res) => {
  const mail: Mail = {
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text,
    html: req.body.html
  };

  if (req.body.from) {
    mail.from = req.body.from;
  }

  mailService.send(req.body.platformId, mail)
    .then((response: any) => {
      console.log(response);
    })
    .catch((e: Error) => {
      console.log('Error: ' + e);
    });

    res.send('Mail queued.');
});

export default router;
