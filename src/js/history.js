/**
 * Created by glazewska on 25/08/2018.
 */
(function() {
  console.log('historia weszła');

  function getHistory() {
    const listContainer = document.querySelector(".list-container");

    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      //data: Qs.stringify(data),
      url: "https://efigence-camp.herokuapp.com/api/data/history",
    };


    axios(options).then(function (response) {
      //console.log('Authenticated', response);

      const history = response.data.content;
      console.log(history);

/*      let html = '';

      for (let i = 0, l = history.length; i < l; i++) {
        html += '<li>' + history[i];
        for (let j = 0, k = history[i]; j < k; j++) {
          html += ', ' + history[i] + ': ' + history[i]
        }
        html += '</li>';
      }

      listContainer.innerHTML = '<ul> ' +
        '<li class="history-item"> <div class="date">'
        + html +
        '</div></li>' +
        '</ul>';*/

      const date = history.map(item => item.date);
      const dateDiv = document.querySelector(".day");
      dateDiv.innerHTML = date[0];

      const description = history.map(item => item.description);
      const descriptionDiv = document.querySelector(".description");
      descriptionDiv.innerHTML = description[0];
      // console.log(date);

    }).catch(function (error) {
      console.log('Error on Authentication');
    });
  }
  return getHistory();


})();