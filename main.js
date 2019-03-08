AOS.init({
  duration: 800,
  easing: 'slide',
  once: true
});

$(document).ready(function () {

  const beaches = [{
    name: "Zanpa Beach",
    description: "This beach has it all, jet skies, kayaks, water tubing and more! Relax on the beach or rent a chair and umbrella. "
  }, {
    name: "Emerald Beach",
    description: "Info"
  }, {
    name: "Sesoko Beach",
    description: "info."
  }, {
    name: "Manza Beach",
    description: "Located at ANA Intercontinental Manza Beach Resort this family friendly beach has rentable water activites, including a fun playground for kids and adults!"
  }, {
    name: "Kabira Beach",
    description: "Any input I want"
  }, {
    name: "Okuma Beach",
    description: "add more info"
  }];


  const findBeach = function (beachName) {
    return beaches.find(function (beach) {
      return beachName === beach.name
    });
  }


  // Register click event for gallery items
  $('.item').click(function () {


    let beachName = $(this).find('.description-heading').text();
    let getBeachInfo = findBeach(beachName);
    console.log(getBeachInfo);


    $('#description').text(getBeachInfo.description);
  })

});



// email subscription
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  //let $result = $("#result");
  //let email = $("#email").val();
  //$result.text("");
  let result = document.querySelector("#result")
  let email = document.querySelector("#email").value
  result.innerHTML = ""


  if (validateEmail(email)) {
    result.innerHTML = (" Thanks for stopping by!");
    result.style.color = "green"
    //$result.text(" Thanks for stopping by!");
    //$result.css("color", "green");
  } else {
    result.style.color = "red"
    result.innerHTML = "oops something went wrong:("
    //$result.text(" oops something went wrong:(");
    //$result.css("color", "red");
  }
  return false;
}

//$("#validate").bind("click", validate);

let validateButton = document.querySelector('#validate');
validateButton.addEventListener('submit', function (event) {
  event.preventDefault()
  validate()
})




//video