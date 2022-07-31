var axios = require('axios');

const shorten = 'https://api.shrtco.de/v2/';

export const shortenLink = url => {
	return axios.get(base + `shorten?url=${url}`);
};


