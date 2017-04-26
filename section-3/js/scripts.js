$(document).ready(function() {
    var mouseX = 0;
    
    $("#sectionThird").mousemove(function(event){
        mouseX = event.clientX;
    });
    
    setInterval(function(){
        for(i = Math.floor((Math.random() * 5) + 1);i>0;i--){
            var width = Math.floor((Math.random() * 20) + 2);
            var height = Math.floor((Math.random() * 50) + 10);
            var angle = Math.floor((Math.random() * 90) + 1);

            $("#shardGenerator").append('<div class="shard" style="border-left:' + width + 'px solid transparent;border-right:' + width + 'px solid transparent;border-bottom:' + height + 'px solid #3a3941;transform:rotate(' + (angle * ((Math.random() * 2)-1)) + 'deg)"></div>');
            $(".shard").last().animate({height:"180vh"}, {easing: "linear",duration: (mouseX * 10)});
        }
        $(".shard").each(function(){
            if($(this).height() >= 1.4 * $(window).height() || $(this).width() >= 0.5 * $(window).height()){
                $(this).remove();
            }
        });
    }, 100);
});