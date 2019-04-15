function loadAjax(Title, posterSrc, mYear) {
  $.ajax({
    url: `https://itunes.apple.com/search?term=${Title}+movie&country=us&limit=10`,
    method: "GET"
  }).done(function(newResponse) {
    var newResults = JSON.parse(newResponse).results[0].previewUrl;
    var description = JSON.parse(newResponse).results[0].longDescription
    console.log(newResults);
    console.log(newResponse);
    $("#added-movie > tbody").append("<tr><td>" + "<img src=" + posterSrc + " width=100px height=150px>" + "</img>" + "</td><td>" + Title + "</td><td>" +
  mYear + "</td><td>"+ "<video src=" + newResults + " width=320 height=200 controls preload></video>"+ "</td><td>"+ description+"</td></tr>");
  //   $("#added-movie > tbody").append("<tr><td>"+ "<video src=" + newResults + " width=320 height=200 controls preload></video>"+ "</td><td>"+ description+"</td></tr>");
  });
}


// This .on("click") function will trigger the AJAX Call
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
  var queryURL = `https://www.omdbapi.com/?s=${movie}&apikey=598a871e`;
  const APIKey = "598a871e";
  $.ajax({
    url: queryURL,
    method: "GET"
    }).done(function(response) {
    // var results = response.data;
    $(".content").empty();

    for (var i = 0; i < 10; i++) {
      var Title = response.Search[i].Title;
      var posterSrc = response.Search[i].Poster;
      var mYear = response.Search[i].Year;
      loadAjax(Title, posterSrc, mYear)
      console.log(response)
      console.log(Title)

    };
  });
});