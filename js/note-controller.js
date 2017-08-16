(function(exports) {
	function NoteController(noteList) {
    this.noteList = noteList;
    listView = new ListView(this.noteList);
  }

  NoteController.prototype.renderHtml = function() {
    var app = document.getElementById("app");
    app.innerHTML = listView.getHtml();
  };

	exports.NoteController = NoteController;

})(this);
