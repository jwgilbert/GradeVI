jQuery(document).ready(function($) {

	var input = document.createElement('input');
	
  // Change text inside send button on submit
  var send = document.getElementById('contact-submit');
    if(send) {
        send.onclick = function () {
            this.innerHTML = '...Sending';
        }
    }
});