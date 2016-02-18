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


( function () {

	var tpl = document.getElementById( 'tpl-parcelas' ).innerHTML;
	var inputPortions = document.getElementById( 'total-parcelas' );
	var portionsList = document.getElementById( 'lista-parcelas' );
	var totalPrice = document.getElementById( 'valor-total' ).value;
	totalPrice = +totalPrice;

	var showPortions = function ( num ) {
		var i = 1
			, h = []
			, p = totalPrice / num;

		while ( i <= num ) {
			h.push( templateEngine( tpl, { index: i, data: '18/02/2016', price: p }, true ) );
			i++;
		}

		portionsList.innerHTML = h.join( '' );
	};

	inputPortions.onchange = function () {
		if ( this.value && +this.value ) {
			showPortions( +this.value );
		}
	};
	templateEngine
})();