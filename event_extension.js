(function(Script) {
  var _run = Script.prototype.run;
  Script.prototype.run = function(ctx, domain, fn) {
    if (typeof domain === 'object') {
      domain.process = function() { // access process via process()
        return process;
      };
      domain.require = function(module) { // expose require function
        return require(module);
      };
      domain.context = function() { // access Context via context()
        return ctx;
      };
    }
    _run.call(this, ctx, domain, fn);
  }
})(require('deployd/lib/script'));
