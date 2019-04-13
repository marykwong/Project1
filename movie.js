      // This .on("click") function will trigger the AJAX Call
      document.querySelector("#movieSearch").addEventListener("click", function(event) {

        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();

        $("#searchTable").show();

        // Here we grab the text from the input box
        var movie = document.querySelector("#searchTerm").value;

        $("#searchTerm").val("");
        // Here we construct our URL
        var queryURL = `https://www.omdbapi.com/?s=${movie}&apikey=598a871e`;

        // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
        // and display it in the div with an id of movie-view

        // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.
        const APIKey = "598a871e";

// Here we are building the URL we need to query the database
//var queryURL =
  //"https://api.openweathermap.org/data/2.5/weather?" +
  //"q=Bujumbura,Burundi&units=imperial&appid=" +
  //APIKey;

// Here we run our AJAX call to the OpenWeatherMap API
//const xhr = new XMLHttpRequest();

$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	var results = response.data;
            console.log(results);
            

      // We store all of the retrieved data inside of an object called "response"

      //let response = JSON.parse(xhr.response);
      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);
      // Transfer content to HTML

   $(".content").empty();
   
   

    //  document.querySelector("#movie-view1").innerText = `Title: ${response.Search[0].Title}`;

      for (var i = 0; i < 10; i++) {


var Title = response.Search[i].Title;
//var defaultAnimatedSrc = response.Search[i].Poster;
var posterSrc = response.Search[i].Poster;
var mYear = response.Search[i].Year;
$("#added-movie > tbody").append("<tr><td>" + "<img src=" + posterSrc + " width=100px>" + "</img>" + "</td><td>" + Title + "</td><td>" +
mYear + "</td></tr>");

    }
});
  });

