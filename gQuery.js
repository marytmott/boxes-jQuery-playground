(function() {

  //will create a gQuery instance
  function GQueryCtor(selector, elements) {
    this.selector = selector;
    this.elements = elements;
  }

  function gQuery(param) {
    var output;
    var nodeList;
    var oneNode = [];

    if (typeof param === 'string') {
      nodeList = document.querySelectorAll(param);
      output = new GQueryCtor(param, nodeList);
      // console.log(output);
      return output;
    } else if (param instanceof HTMLElement) {
      oneNode.push(param);
      output = new GQueryCtor(param, oneNode);
      return output;
    } else if (param instanceof NodeList) {
      output = new GQueryCtor(param, param);
      return output;
    }
  }


  GQueryCtor.prototype.css = function(property, value) {
    var styleVal;
    var elements = this.elements;

    if (!value) {
      styleVal = getComputedStyle(elements[0]);

      for (var style in styleVal) {
        if (style === property) {
          return styleVal[property];
        }
      }
    } else {
      elements = this.elements;

      for (var i = 0; i < elements.length; i++) {
        elements[i].style[property] = value;
      }
    }
  };

  GQueryCtor.prototype.html = function(htmlString) {
    var elements = this.elements;

      if (!htmlString) {
        return elements[0].innerHTML;

      } else {
        for (var i = 0; i < elements.length; i++) {
          elements[i].innerHTML = htmlString;
        }
      }
  };

  GQueryCtor.prototype.attr = function(attribute, value) {
    var attribute;
    var elements = this.elements;

    if (!value) {
      return elements[0].getAttribute(attribute);

    } else {

      for (var i = 0; i < elements.length; i++) {
        elements[i].setAttribute(attribute, value);
      }
    }
  };

  window.gQuery = gQuery;
  window.$ = window.gQuery;
})();
