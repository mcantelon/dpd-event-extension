(function(Script) {
	var _run = Script.prototype.run;
	Script.prototype.run = function(ctx, domain, fn) {
		if (typeof domain === 'object') {
			domain.require = function(module) {
				return require(module);
			};
			domain.context = function() { // access Context via context()
				return ctx;
			};
		}
		_run.call(this, ctx, domain, fn);
	}
})(require('deployd/lib/script'));
