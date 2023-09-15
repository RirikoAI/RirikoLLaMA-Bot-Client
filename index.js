const axios = require('axios'); // For Node.js

/**
 * Create a new RirikoLLaMAClient. An example client can be created like this:
 *
 * const client = new RirikoLLaMAClient({
 *   apiUrl: "",
 *   token: "",
 *   settings: {
 *     "max_new_tokens": 30,
 *     "temperature": 1.0,
 *     "repetition_penalty": 1,
 *     "top_p": 0.2,
 *     "start": "",
 *     "break": "\nHuman:"
 *   }
 * });
 *
 * @author Earnest Angel https://github.com/earnestangel
 */
class RirikoLLaMAClient {
  /**
   * @param params {token: string, apiUrl: string, settings: {
   *  "max_new_tokens": integer,
   *  "temperature": float,
   *  "repetition_penalty": integer,
   *  "top_p": float,
   *  "start": string,
   *  "break": string
   * }}
   */
  constructor(params) {
    // check if the token is in params
    if (typeof params.token === "undefined") {
      throw new Error("Token is not set");
    }

    this.token = params.token;
    this.apiUrl = params.apiUrl;
    this.settings = params.settings;
  }

  async ask(prompt) {
    const url = this.apiUrl; // Replace with your URL
    const data = {
      "prompt": prompt,
      ...this.settings
    };

    return await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 5 * 60 * 1000 // 5 minutes in milliseconds
    });
  }
}

module.exports = {RirikoLLaMAClient};
