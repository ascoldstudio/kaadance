;"use strict";
$(document).ready(function(){
   // Пользовательские функции 
    $(" .gallery__photo").fancybox();
    $(function(){
     
        var area = $(".forms_main");
        console.log(area);
        var offset_left = function(){
            
            var result = area.offset().left + area.width() - 150;
            console.log( area.css("width"));
            return result;
        }
        var offset_top= function(){
            var result = area.offset().top - 50;
            console.log(result);
            return result;
        }
        $(".two_section__img").offset({ 
            top: offset_top(),
            left: offset_left(),
        }); 
        
    });
    
});