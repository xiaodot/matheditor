
var app = angular.module('math', []);

app.directive('symbols', function() {
  return {
    restrict: 'A',
    templateUrl: './symbols.html'
  };
});

app.directive('editor', function() {
  return {
    restrict: 'A',
    templateUrl: './editor.html'
  };
});

app.directive('source', function() {
  var _ctrl = function(latex) {
    this.raw = '';
    this.onChange = function () {
      latex.render(this.raw);
    }
  };
  return {
    restrict: 'A',
    templateUrl: './source.html',
    controller: _ctrl,
    controllerAs: 'source'
  };
});

app.service('latex', function() {
  var _elem = undefined;
  this.render = function(code) {
    if(!_elem) _elem = document.getElementById('editor');
    console.log(code);
    try {
      katex.render(code, _elem, {
        displayMode: true,
        throwOnError: false
      });
    } catch(e) {
      _elem.innerHTML = e.message;
    }
  };
});
