var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://{yourDomain}/oauth/token',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  data: new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: '{yourClientId}',
    client_secret: '{yourClientSecret}',
    audience: 'https://{yourDomain}/api/v2/'
  })
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});