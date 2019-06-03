import {
  getPocketAuthUrl,
  getUniqueUserRequestToken
} from "client/pocket/authentication";

import * as Authorization from "client/pocket/authorization";

export const getRequestToken = async (req, res, next) => {
  try {
    const request_token = await getUniqueUserRequestToken();
    const url = await getPocketAuthUrl(request_token);

    return res.json({
      url,
      request_token
    })
  } catch (error) {
    next(error);
  }
}

export const getAccessToken = async (req, res, next) => {
  try {
    const request_token = req.body.request_token
    const { access_token, username } = await Authorization.getAccessToken(request_token);
    return res.json({
      username,
      access_token
    })
  } catch (error) {
    next(error);
  }
}