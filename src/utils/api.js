var axios = require('axios');

//TODO: needs to figure out how to import Instagram followers list
module.exports = {
    fetcheFollowingLists : function (tag) {
      
       var encodedURI = window.encodeURI('https://api.instagram.com/v1/tags/'+tag+'/media/recent?access_token=1829743.c3a1ad7.748f389653634ce3adbc5d8c854063fd');
      // var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ tag + '&sort=stars&order=desc&type=Repositories');
      return axios.get(encodedURI)
        .then(function (response) {
            return response.data.name;
        });
     }
};  