var searchItem = "clinton"
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + searchItem + "&apikey=b75930e06a2146e6ab50506b671c5ef7";
// var searchItem = $('#searchTerm').val();

$.ajax ({
    url: queryURL,
    method: "GET",
}).then(function(response) {
    console.log(response)
    console.log(response.response.docs)
    for (i = 0; i < response.response.docs.length; i++){
    var articleDiv = $('div')
    articleDiv.html(JSON.stringify(response.response.docs[i]))
    $('#articles').append(articleDiv);
    console.log(response.response.docs[i]);
    }
})

</script>