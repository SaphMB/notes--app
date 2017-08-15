(function(exports) {
  function ListView(noteList) {
    this.noteList = noteList;
  };
  exports.ListView = ListView;
})(this);

ListView.prototype.getHtml = function() {
  var notes = this._getNoteList().getNotes();
  var htmlToReturn = "<ul>";
  htmlToReturn += "</ul>";
  return htmlToReturn;
};

// Private(ish)

ListView.prototype._getNoteList = function() {
  return this.noteList;
};
