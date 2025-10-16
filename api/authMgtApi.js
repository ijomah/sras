var axios = require("axios").default;

export const apiAuth0Send = (tokensObj) => {
  // var mgtApiAccessToken;
  var options = {
    method: 'POST',
    url: 'http://localhost:3000/api/private',
    // url: 'http://192.168.42.138:8081/api/private',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${tokensObj.accessToken}`,
    },
    data: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: 'ZrPJHabBbjFefV8H5HA6Mmq0Wti3ea3B',
      client_secret: 'Hf4KxO3zAsO0PZEsl07a8DnbWHNYurIaeFg03Vw5LCx86F45HiXUMMyT8P3SR_PR',
      audience: 'https://dev-a5l4tidpguu30ikt.us.auth0.com/api/v2/'
    })
  };


  axios.request(options).then(function (response) {
    console.log('authMgtApi file: ', response.data);

    // mgtApiAccessToken = response.data;
    // getIdpData(response.data.accessToken);
  }).catch(function (error) {
    console.error('authMgtApi Err: ', error);
  });
  // return mgtApiAccessToken;
}


// userId
// google-oauth2|109393560359928363818

// GET  /v2/users/{id}

// export const getIdpData = (mgtAccessToken) => {

//   var options = {
//     method: 'GET',
//     url: `https://dev-a5l4tidpguu30ikt.us.auth0.com/api/v2/users/google-oauth2|109393560359928363818`,
//     // params: {q: 'email:"jane@exampleco.com"', search_engine: 'v3'},
//     headers: {authorization: `Bearer ${mgtAccessToken}`}
//   };

//   axios.request(options).then(function (response) {
//     console.log('IDP data: ', response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });
// }