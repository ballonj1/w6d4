function DOMNodeCollection(HTMLelements) {
  this.HTMLElements = HTMLelements;
}

DOMNodeCollection.prototype.html = function(string){
  if (typeof string === "string"){
    this.HTMLElements.forEach(element => {
      element.innerHTML = string;
    });
  } else {
    return this.HTMLElements[0].innerHTML;
  }
};

DOMNodeCollection.prototype.empty = function(){
  this.html("");
};

DOMNodeCollection.prototype.append = function(input){
  if (Array.isArray(input)){
    input.forEach(element => {
      this.HTMLElements.forEach(el => {
        element.append(input);
      });
    });
  } else if (input instanceof HTMLElement) {
    this.HTMLElements.forEach(el => {
      el.append(input);
    });
  } else if (typeof input === 'string'){
    this.HTMLElements.forEach(el => {
      el.append(input);
    });
  }
};

DOMNodeCollection.prototype.attr = function(attributeName, value){
  if(value){
    this.HTMLElements.forEach(el => {
      el.setAttribute(attributeName, value);
    });
  } else {
    this.HTMLElements.forEach(el => {
      el.getAttribute(attributeName);
    });
  }
};

DOMNodeCollection.prototype.children = function(){
  const children = [];
  this.HTMLElements.forEach(el => {
    children.push(Array.from(el.children));
  });
  return new DOMNodeCollection(children);
};

DOMNodeCollection.prototype.parent = function(){
  const parents = [];
  this.HTMLElements.forEach(el => {
    parents.push(el.parentNode);
  });
  return new DOMNodeCollection(parents);
};

DOMNodeCollection.prototype.find = function(selector){
  const matches = [];
  this.HTMLElements.forEach(el => {
    matches.concat(Array.from(el.querySelectorAll(selector)));
  });
  return new DOMNodeCollection(matches);
};

module.exports = DOMNodeCollection;
