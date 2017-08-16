(function(exports) {
  function ListView(noteList) {
    this.noteList = noteList;
  }

  exports.ListView = ListView;
})(this);

ListView.prototype.getHtml = function() {
  var notes = this._getNoteList().getNotes();
  var htmlToReturn = "<ul>";

	notes.forEach(function (note) {
		htmlToReturn += ("<li><div>" + note.getText().substring(0, 19) + "</div></li>");
	});

  htmlToReturn += "</ul>";
  return htmlToReturn;
};

// Private(ish)

ListView.prototype._getNoteList = function() {
  return this.noteList;
};
