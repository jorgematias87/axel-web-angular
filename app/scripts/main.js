/*galeria*/

$('#blueimp-gallery').data('useBootstrapModal', false);
$('#blueimp-gallery').toggleClass('blueimp-gallery-controls', true);

/********************************************************/
/*      ON.SCROLL - CONFIG                              */
/********************************************************/

var navClass = 'sidebar-nav';
var activeNavItemClass = 'nav-active';
var sectionAnchorClass = 'section';
var visibleFromBottom = 100; //how m
var scrollLock = false;
var sections = [];
var sectionsCount = 0;         

function setActiveNavItem(itemId){
    
    $('.'+ navClass +' a').toggleClass(activeNavItemClass, false);
    $('.menu-abs-bg').toggleClass(activeNavItemClass, false);
    
    $('.' + navClass).find('a[href="#' + itemId + '"]').toggleClass(activeNavItemClass, true);
    $('.menu-abs-bg.' + itemId).toggleClass(activeNavItemClass, true);
};

var Section = function(_id, _top){
    this.id = _id;
    this.top = Math.round(_top); //px
    this.select = function(){
        setActiveNavItem(this.id);
    };
};

var markNav = (function() {
    if(!scrollLock){
        var position = $(window).scrollTop();       
        if(position == 0){
            setActiveNavItem(sections[0].id);
            return true;
        }
        var i = 0;      
        while(i < sectionsCount-1 && ((sections[i+1].top - position) < ($(window).height() - visibleFromBottom)) )
        {
            i++;
        }
        setActiveNavItem(sections[i].id);
    }
});

var calcSection = (function() {
    var anchors = $('.' + sectionAnchorClass);
    sectionsCount = anchors.length;
    var position = 0;

    for(i=0; i<sectionsCount; i++){
        position = $(anchors[i]).offset();
        sections[i] = new Section($(anchors[i]).attr('id'),  position.top);
    }
});

$(document).ready(function() {
    $(window).load(function(){
        $('.doc-loader').fadeOut('slow');
    });
	
    $('.gallery').code4netslideshow({
        'navigation' : [
            {
                'id' : 'gallery-nav',
                'type' : 'bullet'           //bullet/arrow
            }
        ],
        'slideInterval' : 5,
        'pauseInterval' : 10, 
        'type' : 'horizontal',
        'autoSlide' : true
    });
	
	$(function() {	
		$('.roll').css('opacity','0');
		$('.roll').hover(function () {
				$(this).stop().animate({opacity: .7}, 'slow');
			},
			function () {
				$(this).stop().animate({opacity: 0}, 'slow');
			});
	});
	
	/*Menu Toggle*/
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#contenedor").toggleClass("active");
    });

    /*on-scroll*/

    calcSection();

    markNav();
    $(window).scroll(function() {
        markNav();
        $('body').append($('<div></div>').addClass('iosfix'));
        setTimeout(function() {
            $('.iosfix').remove();
        }, 500);
    });
    
    $('.sidebar-nav a').each(function(){
        $(this).click(function(event){
            event.preventDefault();
            scrollLock = true;
            var itemId = ($(this).attr('href')).replace('#', '');
            var position = $('div#' + itemId).position();
            $('html,body').animate(
                { scrollTop: position.top+'px' },
                1000, 
                function() {
                    scrollLock = false;
                    setActiveNavItem(itemId);
                }   
            );
            
        });
    });

    $('.myTabBottom a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      e.target

      calcSection();

      var itemId = ($(this).attr('href')).replace('#', '');

      $('#myTab a').closest("li").toggleClass("active", false);
      $("#myTab").find('a[href="#' + itemId + '"]').closest("li").toggleClass("active", true);

      scrollLock = true;
      var position = $('div#' + itemId).position();
      $('html,body').animate(
        { scrollTop: position.top+'px' },
        1000, 
        function() {
            scrollLock = false;
        }   
        );
    })

    $('#myTab a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      e.target

      calcSection();
      
      var itemId = ($(this).attr('href')).replace('#', '');
      $('#myTab2 a').closest("li").toggleClass("active", false);
      $("#myTab2").find('a[href="#' + itemId + '"]').closest("li").toggleClass("active", true);
    })
});
