/*!
 * jQuery Byllboard JavaScript Library v1.0.0
 * http://talarist.com/byllboard
 *
 * @author: cyveros
 * Released under the LGPL license
 * http://www.gnu.org/licenses/lgpl.html
 *
 */

(function($){
	$.fn.billboard = function(options){
		var configs = $.extend({
			hook: '.jobHolder',
			pos: {
                "0": {"left": 0, "top": 2},
                "1": {"left": 305, "top": 0},
                "2": {"left": 610, "top": 1}
			},
			adjustment: 16
		}, options);

		var methods = {
			get_min_top: function(){
                	var val = configs.pos['0']['top'];
                	var ref = "0";
               
               		 $.each(configs.pos, function(key, value){
                        	if (value['top'] < val){
                                	val = value['top'];
                                	ref = key;
                        	}
                	});
               
                	return ref;
		},
		get_max_top: function(){
                	var val = configs.pos['0']['top'];
                	var ref = "0";
               
               		 $.each(configs.pos, function(key, value){
                        	if (value['top'] > val){
                                	val = value['top'];
                                	ref = key;
                        	}                      
               		 });
				
                	return ref;              
		},
		get_min_left: function(){
                	var val = configs.pos['0']['left'];
                	var ref = "0";
               
               		 $.each(configs.pos, function(key, value){
                        	if (value['left'] < val){
                                	val = value['left'];
                                	ref = key;
                        	}
                	});
               
                	return ref;               
		}
	}; 
		
	return this.each(function(index){
		var height =  $(this).height() + 'px';
                $(this).css('height', height);
               
                var ref = methods.get_min_top();

                $(this).css({
                        'top': configs.pos[ref]['top'] + 'px',
                        'left': configs.pos[ref]['left'] + 'px'
                });
               
                configs.pos[ref]['top'] += (25 + Number($(this).height()) + configs.adjustment);
				
				$(configs.hook).css('height', Number(configs.pos[methods.get_max_top()]['top']) + 'px');
		});
	};
})(jQuery);
