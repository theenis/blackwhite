

/* DOM elements with background images */
let backgrounds = document.querySelectorAll(".parallax-background");

$(() => {
    "use strict";
    
    /* global namespace */
    let global = {
    	"window": $(window),
        "document": $(document),
        "parallaxBackground": $(backgrounds)
    };

    /* check if the element is in viewport */
    $.fn.isInViewport = function() {
    	let self = $(this); console.info(self);

        let elementTop = self.offset().top;
        let elementBottom = elementTop + self.outerHeight();

        let viewportTop = global.window.scrollTop();
        let viewportBottom = viewportTop + global.window.height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    global.window.on("load scroll", () => {
        let scroll = global.document.scrollTop();
        let offset = -0.4;

        global.parallaxBackground.each(function() {
        	let self = $(this);
            let selfPosition = self.offset().top;

        	if (self.isInViewport()) {
                self.css({
                    "background-position": "50% " + (selfPosition * offset - scroll * offset) + "px"
                });
			}
        });
    });
});




class FilterGallery {

    constructor() {
      this.$filtermenuList = $('.filtermenu li');
      this.$container = $('.container');
  
      this.updateMenu('all');
      this.$filtermenuList.on('click', $.proxy(this.onClickFilterMenu, this));
    }
  
    onClickFilterMenu(event) {
      const $target = $(event.target);
      const targetFilter = $target.data('filter');
  
      this.updateMenu(targetFilter);
      this.updateGallery(targetFilter);
    }
  
    updateMenu(targetFilter) {
      this.$filtermenuList.removeClass('active');
      this.$filtermenuList.each((index, element) => {
        const targetData = $(element).data('filter');
  
        if (targetData === targetFilter) {
          $(element).addClass('active');
        }
      });
    }
  
    updateGallery(targetFilter) {
  
      if (targetFilter === 'all') {
        this.$container.fadeOut(300, () => {
          $('.post').show();
          this.$container.fadeIn();
        });
      } else {
        this.$container.find('.post').each((index, element) => {
          this.$container.fadeOut(300, () => {
            if ($(element).hasClass(targetFilter)) {
              $(element).show();
            } else {
              $(element).hide();
            }
            this.$container.fadeIn();
          });
        });
      }
    }}
  
  
  const fliterGallery = new FilterGallery();



  var cooldown = 120;
  for(let i = 0; i < $(".accordeon").children().length; i++){ 
     setTimeout(function(){
       $(`.accordeon>.slice:eq(${i})`).css("animation", "SliceHeight .3s  infinite linear");
     }, cooldown*i);
   }
 /* jQuery connected */

 $(window).on("load", function() {
   $(".preloader").fadeOut("slow")
 });





function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

