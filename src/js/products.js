/**
 * Created by glazewska on 25/08/2018.
 */
(function () {
  console.log('produkty weszły');

  function getProducts() {
    const wallets = document.querySelector(".wallets");
    const accounts = document.querySelector(".accounts");
    const loans = document.querySelector(".loans");
    const deposits = document.querySelector(".deposits");
    const funds = document.querySelector(".funds-span");

    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      url: "https://efigence-camp.herokuapp.com/api/data/products",
    };

    axios(options).then(function (response) {
      const products = response.data.content;

      wallets.innerHTML = products[0].amount + " " + products[0].currency;
      accounts.innerHTML = products[2].amount + " " + products[2].currency;
      loans.innerHTML = products[4].amount + " " + products[4].currency;
      deposits.innerHTML = products[1].amount + " " + products[1].currency;
      funds.innerHTML = products[3].amount + " " + products[3].currency;

      // console.log(funds);

    }).catch(function (error) {
      console.log('Error on Authentication');
    });
  }

  return getProducts();

})();