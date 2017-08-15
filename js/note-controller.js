(function(exports) {
  function getAppDiv() {
    element = document.getElementById('app');
    console.log(element);
    return element;
  };
  exports.getAppDiv = getAppDiv;
})(this);

getAppDiv();
