// This .on("click") function will trigger the AJAX Call
Title = "";
posterSrc = "";
mYear="";

document.querySelector("#movieSearch").addEventListener("click", function(event) {

  // event.preventDefault() can be used to prevent an event's default behavior.
  // Here, it prevents the submit button from trying to submit a form when clicked
  event.preventDefault();

  //display table
  $("#searchTable").show();

  // Here we grab the text from the input box
  var movie = document.querySelector("#searchTerm").value;

  $("#searchTerm").val("");
  // Here we construct our URL
  var queryURL = `https://www.omdbapi.com/?s=${movie}&apikey=598a871e&plot=short`;
  const APIKey = "598a871e";
  $.ajax({
    url: queryURL,
    method: "GET"
    }).done(function(response) {
    // var results = response.data;
  $(".content").empty();
   
    for (var i = 0; i < 5; i++) {
      var Title = response.Search[i].Title;
      var posterSrc = response.Search[i].Poster;
      var mYear = response.Search[i].Year;

      
      // console.log(response)
      // console.log(Title)

      $.ajax({
        url: `https://itunes.apple.com/search?term=${response.Search[i].Title}+movie&country=us&limit=5`,
        method: "GET"
      }).done(function(newResponse) {
        console.log(this)
        var newResults = JSON.parse(newResponse).results[0].previewUrl;
        var description = JSON.parse(newResponse).results[0].longDescription
        // console.log(newResults);
        // console.log(newResponse);
        $("#added-movie > tbody").append("<tr><td class=eachMovie>" + "<img src=" + posterSrc + " width=100px height=150px>" + "</img>" + "</td><td>" + Title + "</td><td>" +
        mYear + "</td></tr>");
        $("#added-movie > tbody").append("<tr><td>"+ "<video src=" + newResults + " width=320 height=200 controls preload></video>"+ "</td><td>"+ description+"</td></tr>");
        console.log(Title)

      
    
      });

    };
  });
});



