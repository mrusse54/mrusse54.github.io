$(document).ready(function () {

    $("#nav_list a").click(evt => {
        var title = "json_files/" 
        title += evt.target.getAttribute("title"); //gets the title of the a tag pressed and other lines create the path needed for the getJson
        title += ".json";
        $("main h1:first").empty(); //gets the first h1 tag in the main tag and emptys its contents
        $("main h2:first").empty(); // could not get other methods to clear the text of the tag to work
        $("main h3:first").empty();
        $("main p:first").empty();

        $.getJSON(title, function (data) { // get from the slides/lecture video
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("main h1:first").append(value.title); // appends the content to the first h1 tag in the main tag etc for the remaining
                    $("main h2:first").append(value.month);
                    $("main h3:first").append(value.speaker);
                    $("main p:first").append(value.text);
                    $("main img:first").attr("src", value.image); // if main img was not used the img from the header is changed
                });
            });
        });
    });
}); // end ready