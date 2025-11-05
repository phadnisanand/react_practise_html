$(document).ready(function(){
    const lazyLoadInstance = new LazyLoad({
        elements_selector:"img.lazy, video.lazy, div.lazy, section.lazy, header.lazy, footer.lazy,iframe.lazy"
    });   
});



$(window).scroll(function(){
    $('header').toggleClass('scrolled', $(this).scrollTop() > 20);
});