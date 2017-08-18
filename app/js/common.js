;"use strict";
$(document).ready(function(){
   // Пользовательские функции 
    $(" .gallery__photo").fancybox({
                 
                   allowfullscreen: 'true'
                });
   
       $(".header__menu").slicknav({
           label: "",
       });
    //Accordeon
    $(function(){
        $(".question_item").on('click', function(e){
            
            var text = $(this).find(".question__text").text();
            var title = $(this).find(".question__title").text();
            $(".question_right .question__text").text(text);
            $(".question_right .question_title__text").text(title);
            $(this).slideUp().siblings().slideDown();
        })
    });
});