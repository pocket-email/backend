import config from 'config';
import axios from 'axios';

const consumer_key = config.get("pocket.consumer_key");

export const getAccessToken = async (request_token) => {
  try {
    const response = await axios.post(
      "https://getpocket.com/v3/oauth/authorize",
      {
        consumer_key,
        code: request_token,
      },
      {
        headers: {
          'X-Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );

    const { access_token, username } = response.data;
    return { access_token, username };
  } catch (error) {
    throw error;
  }
}

