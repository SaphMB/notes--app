(function(exports) {
	function NoteController(noteList) {
    this.noteList = noteList;
    this.listView = new ListView(this.noteList);
  }

  NoteController.prototype.eventListener = function() {
    var self = this;
    window.addEventListener("hashchange", function() {
      console.log("hashchange!");
      self.renderSingleView();
    });
  };

  NoteController.prototype.renderSingleView = function() {
    var note = this.noteList.getNotes()[getIdFromUrl()];
    var app = document.getElementById("app");
    noteView = new SingleNoteView(note);
    app.innerHTML = noteView.getNoteHtml();
    console.log(noteView.getNoteHtml())
  };

  NoteController.prototype.renderHtml = function() {
    var app = document.getElementById("app");
    app.innerHTML = this.listView.getHtml();
  };

  function getIdFromUrl() {
    return window.location.hash.split("/")[1];
  }

	exports.NoteController = NoteController;

})(this);

notelist = new NoteList();
notelist.makeNote("this is the first note");
notelist.makeNote("this is the second note");
notelist.makeNote("this is the third note");
notelist.makeNote("this is the fourth note");
notelist.makeNote("this is the fifth note");
controller = new NoteController(notelist);
controller.eventListener();
controller.renderHtml();
