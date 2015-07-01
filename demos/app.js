(function(ctx){

	var $ui,$input,$triples, db, step,
		triple = ["","",""],
		triple_class = ["node", "predicat","subject"];

	var app = {

		start: function(config){

			db 		= config.db;
			step 	= 0;

			$ui 	 = $('#ui'),
			$triples = $('#triples')
			$input 	 = $ui.children('input');

			$('body').on('keypress', self.on_keypress);

			$triples.css('height', (window.innerHeight-30)+'px');

			$input.focus();
		},

		on_keypress: function(e){

			if(e.which == 13) {

		        triple[step] = $input.val();
		        $input.val('').before('<div class="'+triple_class[step]+'">'+triple[step]+'</div>');
		        step++;

		        if(step == 1){
		        	$input.addClass('predicat');
		        }else{
		        	$input.removeClass('predicat');
		        }

		        if(step == 3){
		        	
		        	$ui.children('div').remove();
		        	var pred = ' <span style="color:#E83868">'+triple[1]+'</span> ';
		        	$triples.append('<p>'+triple[0]+pred+triple[2]+'</p>');
		        	triple = ["","",""];
		        	step = 0;
		        }
		    }
		}

		
	};

	var self 		= app;
	ctx.app 		= app;


	// --- private methods ---
	
	function clog( str ){
		console.log(str);
	}

})(window);