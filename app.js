document.getElementById('get-jokes-btn').addEventListener('click', getJokes);

function getJokes(e) {
  const xhr = new XMLHttpRequest;
  const number = document.getElementById('number').value;

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {

      const response = JSON.parse(this.responseText);
      // console.log(response.value);
      // const joke = response.value.joke;
      let jokes = '';

      response.value.forEach(function (joke) {
        jokes += `
        <li>${joke.joke}</li>
        `;

        // console.log('jokes');
        document.querySelector('.display-jokes').innerHTML = jokes;
      })
    }
  };
  xhr.send();
}