var DOMNodeCollection = require('dom_node_collection.js');

window.$l = function(selector) {
  if(document.querySelector(selector) instanceof HTMLElement){
    let objs = document.querySelectorAll(selector);
    let elList = Array.from(objs);
    return new DOMNodeCollection(elList);
  }
};
