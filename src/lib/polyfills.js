define( function() {
	if( !Function.prototype.bind ) {
		Function.prototype.bind = function bind( obj ) {
		var slice = [].slice,
			args = slice.call(arguments, 1),
			self = this,
			Nop = function () {},
			bound = function () {
				return self.apply( this instanceof Nop ? this : ( obj || {} ), args.concat( slice.call(arguments) ) );
			};

			Nop.prototype = self.prototype;
			bound.prototype = new Nop();
			return bound;
		};
	}

	if( !Array.prototype.remove ) {
		Array.prototype.remove = function remove(value) {
			var i = this.indexOf( value );
			if( i !== -1 ) {
				this.splice( i, 1 );
			}
		};
	}
	
	return true;
});
