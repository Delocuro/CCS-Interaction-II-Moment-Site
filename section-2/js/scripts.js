$(document).ready(function() {
    var pressure = 0.7;
    var leadBroken = false;
    
    $("#bigLead").bind('contextmenu select', function(e) {
        return false;
    });
    
    $("#bigLead").bind("mousedown touchstart", function(){
        if(leadBroken == false) {
            var pressureTimer = setInterval(function(){
                if(pressure < 1.2){
                    pressure += 0.025;
                    $("#bigLead").css({"top":(5 * (pressure - 0.7) + pressure + 0.7) + "vh","height":(70 - (5 * (pressure - 0.7) + pressure + 0.7)) + "vh"});
                    $("#stressContainer").css("transform","translate(-50%, 0) scaleX(" + pressure + ")");
                }
                else{
                    pressure = 0.5;
                    $("#bigLead").css({"top":"0","height":"60vh","cursor":"default"});
                    $("#stressContainer").css("transform","translate(-50%, 0) scaleX(" + pressure + ")");
                    leadBroken = true;
                    clearInterval(pressureTimer);
                }
                $(this).bind("mouseup touchend", function(){
                    clearInterval(pressureTimer);
                });
                $(this).bind("mouseleave touchleave", function(){
                    clearInterval(pressureTimer);
                });
            }, 100);
            $(this).bind("mouseup touchend",function(){
                clearInterval(pressureTimer)
            });
        }
    });
    
    $("#bigLead").bind("mouseup touchend",function(){
        var pressureTimer = setInterval(function(){
            if(pressure > 0.7){
                pressure -= 0.1;
                $("#bigLead").css({"top":(5 * (pressure - 0.7) + pressure + 0.7) + "vh","height":(70 - (5 * (pressure - 0.7) + pressure + 0.7)) + "vh"});
                $("#stressContainer").css("transform","translate(-50%, 0) scaleX(" + pressure + ")");
            }
            else{
                clearInterval(pressureTimer);
            }
            $(this).bind("mousedown touchstart", function(){
                clearInterval(pressureTimer);
            });
        }, 100);
        $(this).bind("mousedown touchstart", function(){
            clearInterval(pressureTimer)
        });
    });
    
    $("#bigLead").bind("mouseleave touchleave", function(){
        var pressureTimer = setInterval(function(){
            if(pressure > 0.7){
                pressure -= 0.1;
                $("#bigLead").css({"top":(5 * (pressure - 0.7) + pressure + 0.7) + "vh","height":(70 - (5 * (pressure - 0.7) + pressure + 0.7)) + "vh"});
                $("#stressContainer").css("transform","translate(-50%, 0) scaleX(" + pressure + ")");
            }
            else{
                clearInterval(pressureTimer);
            }
            $(this).bind("mousedown touchstart", function(){
                clearInterval(pressureTimer);
            });
        }, 100);
        $(this).bind("mousedown touchstart", function(){
            clearInterval(pressureTimer)
        });
    });
    
    setInterval(function(){
        if(leadBroken == true){            
            for(i = Math.floor((Math.random() * 5) + 1);i>0;i--){
                var width = Math.floor((Math.random() * 20) + 2);
                var height = Math.floor((Math.random() * 50) + 10);
                var angle = Math.floor((Math.random() * 90) + 1);
                
                $("#shardGenerator").append('<div class="shard" style="border-left:' + width + 'px solid transparent;border-right:' + width + 'px solid transparent;border-bottom:' + height + 'px solid #3a3941;transform:rotate(' + (angle * ((Math.random() * 2)-1)) + 'deg)"></div>');
                $(".shard").last().animate({height:"1300px"}, {easing: "linear",duration: 1000});
            }
            $(".shard").each(function(){
                if($(this).height() >= 1000 || $(this).width() >= 600){
                    $(this).remove();
                }
            });
        }
    }, 100);
});