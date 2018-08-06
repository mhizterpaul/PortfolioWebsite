
             /*SLIDER FOR SMALLER SCREENS*/

let offset = [];
let dpWidth = [];
let slideContainerIndex;
let slideCounter;

                /*GET ELEMENT INFORMATION*/
const viewer = function(){
        els= $('.slide');   
        for ( let i = 0; i < els.length; i++) {
        	let elWidth = [];
        	els.eq(i).children().each(function(){

        		elWidth.push($(this).outerWidth(true));
        	});

        	let elWidthSum = elWidth.reduce(function(initial,nextUp){
        	return initial += nextUp;
            });
            let elDpWidth = els.eq(i).parent().outerWidth();
            offset.push((elWidthSum-elDpWidth)/2);
            dpWidth.push(elDpWidth);
            }
        }
                          /*GIVE THE SLIDE AN INDEX NUMBER*/
 const properties = function(){
 	el= $(this);
 	i=0;
 	$('.slide').parent('[class*="slide-container-"]').each(function(){
      if(el.parent('[class*="slide-container-"]').attr('class')== 'slide-container-'+i) {
      	slideContainerIndex = i;
      	return null;
      } else {
           i++;
        } 
 	});
           
    slideCounter = [offset[slideContainerIndex], offset[slideContainerIndex]];
    $('.slide').css({'margin':'0'});
    $('[class*="fa-angle-"]').css({'display':'block'});

 };

                       /*SLIDE LEFT OR RIGHT DEPENDING ON ELEMENT CLICKED*/

 const slider = function() {
 	let margin;
 	let remainder = offset[slideContainerIndex]%dpWidth[slideContainerIndex];

                  /*check Right Make sure it ready for offset*/
                  /*CASE 1 LEFT ARROW*/
 	if ($(this).attr('class') == 'fa fa-angle-left' && offset[slideContainerIndex] > slideCounter[1] && offset[slideContainerIndex] < dpWidth[slideContainerIndex]){
 		margin = Number($(this).siblings('.slide').css('margin-left').split('p')[0]);
    $(this).siblings('.slide').css({'margin-left': margin + ((offset[slideContainerIndex])*2) +'px'});
    slideCounter[1] += offset[slideContainerIndex];
    margin=0;
    $(this).siblings('.fa-angle-right').css({'display':'block'});
    return false;
    }               /*CASE 2 LEFT ARROW*/
    else if ($(this).attr('class') == 'fa fa-angle-left' && offset[slideContainerIndex] > slideCounter[1] && offset[slideContainerIndex] > dpWidth[slideContainerIndex]){
    margin = Number($(this).siblings('.slide').css('margin-left').split('p')[0]);
	if (slideCounter[1] === 0){
		$(this).siblings('.slide').css({'margin-left': margin +(remainder*2) +'px'}) 
		slideCounter[1] += remainder;
	}else{
		$(this).siblings('.slide').css({'margin-left': margin +(dpWidth[slideContainerIndex]*2) +'px'})
		slideCounter[1] += dpWidth[slideContainerIndex];
	}
	margin = 0;
	$(this).siblings('.fa-angle-right').css({'display':'block'});
	return false;

	}                 /*CASE 3 LEFT ARROW*/
	else if ($(this).attr('class') == 'fa fa-angle-left' && offset[slideContainerIndex] > slideCounter[1] && offset[slideContainerIndex] === dpWidth[slideContainerIndex]){
		margin = Number($(this).siblings('.slide').css('margin-left').split('p')[0]);
		$(this).siblings('.slide').css({'margin-left': margin +(dpWidth[slideContainerIndex]*2) +'px'})
		slideCounter[1] += dpWidth[slideContainerIndex];
		margin = 0;
		return false;
		
	}else{             /*Slide Left*/ 
		/*CORRESPONDING CASE 1 LEFT ARROW*/
		if ($(this).attr('class') == 'fa fa-angle-left' && slideCounter[0] < dpWidth[slideContainerIndex]){
			margin = Number($(this).siblings('.slide').css('margin-right').split('p')[0]);
			$(this).siblings('.slide').css({'margin-right': margin - (slideCounter[0]*2) + 'px'});
			slideCounter[0] -= remainder;
			margin = 0;
			$(this).css({'display':'none'});
			$(this).siblings('.fa-angle-right').css({'display':'block'});
			}
                       /*CORRESPONDING CASE 2 LEFT ARROW*/
	    else if ($(this).attr('class') == 'fa fa-angle-left' && slideCounter[0] > dpWidth[slideContainerIndex]){
			margin = Number($(this).siblings('.slide').css('margin-right').split('p')[0]);	
			$(this).siblings('.slide').css({'margin-right': margin- (dpWidth[slideContainerIndex]*2) +'px'});
			slideCounter[0] -= dpWidth[slideContainerIndex]; 
			margin = 0; 
			}
	}

     /* Check Left: Make sure it is ready for offset*/
                       /*CASE 1 RIGHT ARROW*/
	if ($(this).attr('class') == 'fa fa-angle-right' && offset[slideContainerIndex] > slideCounter[0] && offset[slideContainerIndex] < dpWidth[slideContainerIndex]){
 		margin = Number($(this).siblings('.slide').css('margin-right').split('p')[0]);
        $(this).siblings('.slide').css({'margin-right': margin + ((offset[slideContainerIndex])*2) +'px'});
        slideCounter[0] += offset[slideContainerIndex];
        margin=0;
        $(this).siblings('.fa-angle-left').css({'display':'block'});
        return false;
    }
                          /*CASE 2 RIGHT ARROW*/
	else if ($(this).attr('class') == 'fa fa-angle-right' && offset[slideContainerIndex] > slideCounter[0] && offset[slideContainerIndex] > dpWidth[slideContainerIndex]){
    margin = Number($(this).siblings('.slide').css('margin-right').split('p')[0]);
	if (slideCounter[0] === 0){
		$(this).siblings('.slide').css({'margin-right': margin +remainder*2 +'px'}) 
		slideCounter[0] += remainder;
	}else{
		$(this).siblings('.slide').css({'margin-right': margin +(dpWidth[slideContainerIndex]*2) +'px'})
		slideCounter[0] += dpWidth[slideContainerIndex];
	}
	margin = 0;
	$(this).siblings('.fa-angle-left').css({'display':'block'});
	return false;

	}                      /*CASE 3 RIGHT ARROW*/
	else if ($(this).attr('class') == 'fa fa-angle-right' && offset[slideContainerIndex] > slideCounter[0] && offset[slideContainerIndex] === dpWidth[slideContainerIndex]){
		margin = Number($(this).siblings('.slide').css('margin-right').split('p')[0]);
		$(this).siblings('.slide').css({'margin-right': margin +(dpWidth[slideContainerIndex]*2) +'px'})
		slideCounter[0] += dpWidth[slideContainerIndex];
		margin = 0;
		return false;

	}else {              /*Slide Right*/ 
		           /*CORRESPONDING CASE 1 RIGHT ARROW*/
		if ($(this).attr('class') == 'fa fa-angle-right' && slideCounter[1] < dpWidth[slideContainerIndex]){
    margin = Number($(this).siblings('.slide').css('margin-left').split('p')[0]);
	$(this).siblings('.slide').css({'margin-left': margin - (slideCounter[1]*2) +'px'}); 
		slideCounter[1] -= remainder;
		margin = 0;
		$(this).siblings('.fa-angle-left').css({'display':'block'});
		$(this).css({'display':'none'});
	}
                            /*CORRESPONDING CASE 2 RIGHT ARROW*/
	else  if ($(this).attr('class') == 'fa fa-angle-right' && slideCounter[1] > dpWidth[slideContainerIndex]){
		margin = Number($(this).siblings('.slide').css('margin-left').split('p')[0]);
		$(this).siblings('.slide').css({'margin-left': margin - (dpWidth[slideContainerIndex]*2) +'px'});
		slideCounter[1] -= dpWidth[slideContainerIndex]; 
		margin = 0;     
	}
	}

 };

 $(viewer);
 window.addEventListener('resize', function(){
 	offset = [];
 	dpWidth = [];
 	viewer();
 }, false);
 $('[class*="fa-angle-"]').on('focus',properties).on('click', function(){$('[class*="fa-angle-"]').off('focus', properties);}).click(slider);
 window.addEventListener('scroll', function(){
 	$('[class*="fa-angle-"]').on('focus', properties);
 }, false);