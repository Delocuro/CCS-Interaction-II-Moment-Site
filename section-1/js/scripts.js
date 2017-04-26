$(document).ready(function() {
    var leadCount = 150;
    var drawWidth = 0;
    var leadBottom = $("#sectionFirst").height() - $("#lead").height();
    var guideBottom = $("#sectionFirst").height() - $("#leadGuide").height() - $("#leadGuide").offset().top;
    
    $("#lead").draggable({
        drag: function(event, ui) {    
            if(drawWidth < 50) {
                drawWidth = drawWidth + 0.12;
            }
            
            if(leadCount > 0) {
                leadCount = leadCount - 0.1;
                $("#lead").css({height: leadCount+"px"});
                $("#sectionFirst").append('<div class="drawBox" style="left:' + $("#lead").offset().left + 'px; top:' + ($("#lead").offset().top + ($("#lead").height() - 40)) + 'px; width:' + drawWidth + 'px; height:' + (drawWidth * 0.5) + 'px;"></div>');
            }
            
//            leadBottom = $("#sectionFirst").height() - $("#lead").height() - $("#lead").offset().top;
//            
//            if(Math.abs(leadBottom - guideBottom) < 1 && Math.abs($("#lead").offset().left - $("#leadGuide").offset().left) < 1) {
//                $(this).css({"cursor":"default"});
//                $(document).trigger("mouseup");
//                $(this).draggable("destroy"); 
//            }
        },
        
        stop: function(event, ui) {
            drawWidth = 0;
        }
    });
    
    $("#leadGuide").droppable({
        drop: function (event, ui) {
            $("#lead").draggable("destroy");
            $("#lead").css({"cursor":"default", "top":"auto", "bottom":"-28px", "left":"70vw"});
        }
    });
});