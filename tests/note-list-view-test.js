window.noteList = new NoteList();
window.listView = new ListView(noteList);

function listViewHasAListModel() {
  assert.truthy(listView.getHtml() === '<ul></ul>');
};


function listCanShowAListWithANote() {
  text = "Hi, I am a note";
  noteList.makeNote(text);
  assert.truthy(listView.getHtml() === '<ul><li><div>' + text + '</div></li></ul>');
};


// assert.truthy(noteList.getNotes().constructor === Array);


listViewHasAListModel();
listCanShowAListWithANote();
