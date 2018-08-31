/**
 * Created by glazewska on 25/08/2018.
 */
(function () {
  console.log('podsumowanie weszło');

  function getSummary() {

    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      url: "https://efigence-camp.herokuapp.com/api/data/summary",
    };

    axios(options).then(function (response) {
      const summary = response.data.content;



    }).catch(function (error) {
      console.log('Error on Authentication');
    });
  }

  return getSummary();

})();