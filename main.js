$(document).ready(function () {
    var key = 'AIzaSyAe9WCHk57lLRWnMGfpFLsMh3t16oq2jbI';

    $('#search').keypress(function(event){
        //console.log('key pressed'); 

        if(event.keyCode == 13) {
            event.preventDefault();

            var q = $(this).val();

            // log out what the user has entered in the search box
            console.log(q);

            $.ajax({
                url: 'https://www.googleapis.com/youtube/v3/search',
                method: 'GET',
                data: {
                    "key": key,
                    "maxResults": "4",
                    "q": q + 'dog',
                    "part": "snippet",
                    "type": "video"
                }
            }).done(function (response) {
                console.log(response);

                $.each(response.items, function (index, video) {
                    console.log(video);
                    $('.search-results .video-list').append('<li data-video-id="' + video.id.videoId + '"><img src="' + video.snippet.thumbnails.medium.url + '" /><div>Video: ' + video.snippet.title + '</div></li>');
                })

                $('.search-results').show();

                $('#search').val("");
            });
        }
    });

    //Get top Corgi videos
    $.ajax({
        url:'https://www.googleapis.com/youtube/v3/search',
        method: 'GET',
        data: {
            "key":key,
            "maxResults": "8",
            "q": "Corgi",
            "part": "snippet",
            "type": "video"
        }

    }).done(function(response){
        console.log(response);

        $.each(response.items, function(index, video){
            console.log(video);
            $('.corgi-videos .video-list').append('<li data-video-id="' + video.id.videoId +'"><img src="' + video.snippet.thumbnails.medium.url + '" /><div>Video: ' + video.snippet.title + '</div></li>');
        })
    });


});
