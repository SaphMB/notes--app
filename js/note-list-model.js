(function(exports) {
  function NoteList() {
    this.notes = [];
		this.noteCount = 0

  }

  exports.NoteList = NoteList;
})(this);

NoteList.prototype.getNotes = function() {
	return this.notes;
};

NoteList.prototype.makeNote = function(text) {
	id = this.noteCount
	note = new Note(text, id);
	this.noteCount += 1;
  this._addNote(note);
};

// Private

NoteList.prototype._addNote = function(note) {
  this.notes.push(note);
};
