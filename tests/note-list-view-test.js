window.noteList = new NoteList();
window.listView = new ListView(noteList);

function listViewHasAListModel() {
  assert.truthy(listView.getHtml() === '<ul></ul>');
};

listViewHasAListModel();



// assert.truthy(noteList.getNotes().constructor === Array);
