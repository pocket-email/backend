import express from 'express';
import {
  getRequestToken,
  getAccessToken
} from 'controllers/signup';

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get-request-token', getRequestToken);
router.post('/get-access-token', getAccessToken);

export default router;
