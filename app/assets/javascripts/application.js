// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

if(document.getElementById('note_content')) {
  function wordCount() {
    if(document.getElementById('note_content').value !== 0) {
      var text = document.getElementById('note_content').value;
      var countElement = document.getElementById('word_count');
      var count = 0;
      for (var i = 1; i < text.length; i++) {
        if (text.charAt(i) == " ") {
          count ++;
        }
      }
      if(count + 1 == 1){
        countElement.innerHTML = count + 1 + ' word';
      } else {
        countElement.innerHTML = count + 1 + ' words';
      }

    } else {
      countElement.innerHTML = '0 words';
    }
  }

  window.onload = wordCount();
}
