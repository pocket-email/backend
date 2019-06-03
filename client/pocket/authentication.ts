import config from 'config';
import axios from 'axios';

const redirect_uri = `${config.get("app.root")}/authorization`;
const consumer_key = config.get("pocket.consumer_key");

export const getUniqueUserRequestToken = async () => {
  try {
    const response = await axios.post(
      "https://getpocket.com/v3/oauth/request",
      {
        consumer_key, redirect_uri
      },
      {
        headers: {
          'X-Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );
    const request_token = response.data.code;
    return request_token;
  } catch (error) {
    throw error;
  }
}

export const getPocketAuthUrl = request_token =>
  `https://getpocket.com/auth/authorize?request_token=${request_token}&redirect_uri=${redirect_uri}`;
