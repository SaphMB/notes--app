(function listViewHasAListModel() {
  var noteList = new NoteList();
  var listView = new ListView(noteList);
  description = "Notelistview: #getHtml returns a string of html";
  assert.truthy(listView.getHtml() === '<ul></ul>', description);
})();


(function listCanShowAListWithANote() {
  var noteList = new NoteList();
  var listView = new ListView(noteList);
  description = "Notelistview: #getHtml returns a string of html containing any notes";
  text = "Hi, I am a note";
  noteList.makeNote(text);
  assert.truthy(listView.getHtml() === '<ul><li><a href="#notes/0">' + text + '</a></div></li></ul>', description);
})();

(function listOnlyShows20Characters() {
  var noteList = new NoteList();
  var listView = new ListView(noteList);

  description = "Notelistview: #getHtml truncates long note descriptions to 20 characters";
  text = "hello, this is a very long note that is longer than 20 characters";
  noteList.makeNote(text);
  assert.truthy(listView.getHtml() === '<ul><li><a href="#notes/0">hello, this is a ve</a></div></li></ul>', description);
})();
