(function(exports) {
  function getAppDiv() {
    document.getElementById('app').innerHTML = "Alternative text"
    return element;
  };
  exports.getAppDiv = getAppDiv;
})(this);

getAppDiv();
