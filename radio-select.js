var radioSelect = ( function () {
	var selector = '.radio-select';

	var init = function ( s ) {

		var inputs = document.querySelectorAll( s ? s : selector );
		for ( var i = 0, l = inputs.length; i < l; i++ ) {
			( function () {
				var p = this.parentNode.parentNode;

				if ( this.checked ) {
					p.classList.add( 'active' );
				} else {
					p.classList.remove( 'active' );
				}

				this.onchange = function () { init( s ? s : null ); };

			}).call( inputs[ i ] );
		}
	 	
	};

	init();

	return {
		init: init
	};

})();
