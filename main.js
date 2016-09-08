document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");

  $("#formSearch").submit(search);

  function search(ev) {
    ev.preventDefault();

    clearSearchResults();

    var url = "http://carparks-sg.herokuapp.com/api";
    var search = $("#query").val();

    $.get(url).done(function(data) {
      clearSearchResults();

      for(var i = 0; i < data.length; i++) {
        if(data[i].Area == search) {
          addSearchResult(data[i]);
        }
      }
    })

  }

  function clearSearchResults() {
    $("#informationSpace").empty();
  }

  function addSearchResult(result) {
    console.log("I'm in addSearchResult function")
    var li = document.createElement("li");
    li.textContent = result.Development + ": " + result.Lots + " lots"
    $("#informationSpace").append(li);
  }

})
