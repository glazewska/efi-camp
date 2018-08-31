// import {chart} from 'chart';

(function () {

  function getSummary() {

    console.log("Podsumowanie weszło");

    const availableFunds = document.querySelector(".available");


    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      // data: Qs.stringify(data),
      url: "https://efigence-camp.herokuapp.com/api/data/summary",
    };

    axios(options).then((res) => {

      console.log(res);
      const data = res.data.content[0];

      console.log(data.funds);
      availableFunds.innerHTML = data.funds + " ";


    }).catch(function (error) {
      console.log(error);
    });
  }

  return getSummary();

})();
