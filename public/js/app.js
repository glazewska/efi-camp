(function () {

  const idButton = document.querySelector(".id-button");
  const idInput = document.querySelector(".client-id");
  const result = document.querySelector("#result");
  const passInput = document.querySelector(".password");
  const passButton = document.querySelector(".pass-button");
  const resultButton = document.querySelector(".result-button");
  const selectButton = document.getElementById("select");

  let toShow = document.querySelector(".view1");
  let toHide = document.querySelector(".view2");


  let toggleState = function (element, one, two) {
    element.setAttribute('data-state', element.getAttribute('data-state') === one ? two : one);
  };

  idButton.addEventListener('click', function (event) {
    event.preventDefault();
    result.innerText = idInput.value;
    passInput.innerText = passInput.value;
    toggleState(toShow, 'show', 'hide');
    toggleState(toHide, 'hide', 'show');
  });

resultButton.addEventListener("click", function (event) {
    event.preventDefault();
    toggleState(toShow, 'show', 'hide');
    toggleState(toHide, 'hide', 'show');
    idInput.value = "";
})


selectButton.addEventListener("click", function (event) {
    event.preventDefault();
    toggleState(toShow, 'show', 'hide');
    toggleState(toHide, 'hide', 'show');
    idInput.value = "";
})

/*  idButton.addEventListener("click", (event) => {
    event.preventDefault();
    result.innerText = idInput.value;
    passInput.innerText = passInput.value;
    idButton.style.display = "none";
    idInput.style.display = "none";
    idResult.style.display = "flex";
    result.style.display = "block";
    passInput.style.display = "block";
    passButton.style.display = "block";
    resultButton.style.display = "flex";
    selectButton.style.display = "flex";
    passButtons.style.display = "flex";
  });

  resultButton.addEventListener("click", (event) => {
    event.preventDefault();
    idInput.value = "";
    result.style.display = "none";
    passInput.style.display = "none";
    passButton.style.display = "none";
    idButton.style.display = "block";
    idInput.style.display = "block";
    resultButton.style.display = "none";
    selectButton.style.display = "none";
    passButtons.style.display = "none";
  });*/

  passButton.addEventListener("click", (event) => {
    event.preventDefault();
    const data = {
      login: idInput.value,
      password: passInput.value
    };
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: Qs.stringify(data),
      url: "https://efigence-camp.herokuapp.com/api/login",
    };
    axios(options)
      .then((res) => {
        console.log(res)
      })
      .catch(function (error) {
        console.log("Login error", error);
      });

    window.location.href = "/dashboard.html";
  })

})();
