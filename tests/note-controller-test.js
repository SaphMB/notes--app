var noteList = new NoteList();
var noteController = new NoteController(noteList);

(function noteControllerCanBeInstantiated() {
  var description = "A NoteController can be instantiated";
  assert.truthy(noteController != null, description);
})();

(function getHTMLtest() {
  var description = "A NoteController changes the app element to html";
  noteList.makeNote("test note");

  (function double() {
    var app = {};
    app.innerHTML = "";
    document.getElementById = function(string) {
      return app;
    };
  })();

  noteController.renderHtml();
  assert.truthy(document.getElementById("app").innerHTML === "<ul><li><div><a href='#notes/0'>test note</a></div></li></ul>", description);
})();
