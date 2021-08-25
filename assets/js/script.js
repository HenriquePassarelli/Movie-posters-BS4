$(function(){
    $.ajax({
        url:'assets/js/json.json',
        type:'GET',
        dataType:'json',
        beforeSend: function(){
            $('.movies').html('<div class="col-md-12">Loading...</div>');
        },
        success: function(json){

            var html = '' ;

            for(var i in json){
                html += '<div class="col-md-4 "><div class="movie"><img src="' + json[i].avatar + '"/><div class="title">' + json[i].titulo + '</div></div></div>';
            }
            $('.movies').html(html);
        }
    })
});