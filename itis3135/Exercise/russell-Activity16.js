jQuery(document).ready(function () {
    var url =
        "https://api.flickr.com/services/feeds/photos_public.gne?" +
        "id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding"; // gets the flickr 

    $.getJSON(url, function (data) { // as seen in the slides/hybrid video use the slides
        var html = "";
        $.each(data.items, function (key, value) {
            html += "<a data-lightbox=" + "vecta" + " data-title=" + value.title +" href="+ value.media.m + "> <img src= " + value.media.m + " title= " + value.title + " > </a>"; 
            //creates the img and a tags
            // the lightbox stuff needs to come before the href to not cause problems
            // the img is just stuff from the flickr website 
        });

        $("#new_building").html(html); // puts the var html stuff into the div in the html file
    });


    $('a').on("click", function(e) {
        e.preventDefault(); // need to prevent the default action of a tag
    });


});