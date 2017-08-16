var noteList = new NoteList();
var listView = new ListView(noteList);

(function listViewHasAListModel() {
  description = "Notelistview: #getHtml returns a string of html";
  assert.truthy(listView.getHtml() === '<ul></ul>', description);
})();


(function listCanShowAListWithANote() {
  description = "Notelistview: #getHtml returns a string of html containing any notes";
  text = "Hi, I am a note";
  noteList.makeNote(text);
  assert.truthy(listView.getHtml() === '<ul><li><div>' + text + '</div></li></ul>', description);
})();
