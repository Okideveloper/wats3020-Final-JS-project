AOS.init({
  duration: 800,
  easing: 'slide',
  once: true
});

//$(document).ready(function () {
document.addEventListener("DOMContentLoaded",
  function (event) {


    const beaches = [{
      name: "Manza Beach",
      description: "Located at ANA Intercontinental Manza Beach Resort with many water rentals including access to the large and popular playground on the water."
    }, {
      name: "Okuma Beach",
      description: "Located on a military base you will have camping, grilling and fun in the water with many beach activities including kayaks and jet skis."
    }, {
      name: "Kerama Beach",
      description: "This is the beach where you can swim with sea turtles. You will need a ferry to reach this beach."
    }, {
      name: "Sesoko Beach",
      description: "No camping here but you can snorkel and relax at this 800-meter-long white smooth sandy beach with crystal-clear water. Located at Sesoko 73 Kunigamigun Motobucho."
    }, {
      name: "Emerald Beach",
      description: "Located within Okinawa Ocean Expo Park in Motobu-cho. Relax and enjoy the sun with no admission fees."
    }, {
      name: "Zanpa Beach",
      description: "Located just before Cape Zanpa, with plenty of water activites. Feel the sand between your toes! Pure white sand, beautiful blue water with no rocks to step on."
    }];

    //getting the beach image and applying a description
    let items = document.querySelectorAll("#caption")
    let counter = 0
    for (let item of items){
      item.innerHTML = beaches[counter].description
      counter++
    }


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

    //});



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

   
    document.addEventListener('submit', function (event) {
      event.preventDefault()
      validate()
    });
  })



