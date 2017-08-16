
(function noteControllerCanBeInstantiated() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  var description = "A NoteController can be instantiated";
  assert.truthy(noteController != null, description);
})();

(function getHTMLtest() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
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
  assert.truthy(document.getElementById("app").innerHTML === '<ul><li><a href="#notes/0">test note</a></div></li></ul>', description);
})();

// (function getHTMLtest() {
//   var noteList = new NoteList();
//   var noteController = new NoteController(noteList);
//   var description = "A NoteController can render a single note view";
//   noteList.makeNote("test note");
//
//   (function double() {
//     var app = {};
//     app.innerHTML = "";
//     document.getElementById = function(string) {
//       return app;
//     };
//   })();
//
//   noteController.renderHtml();
//   assert.truthy(document.getElementById("app").innerHTML === "<div>test note</div>", description);
// })();
