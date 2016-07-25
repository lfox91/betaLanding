window.onload = function () {
  // build a reference to the existing node to be replaced
  var form  = document.getElementById('emailForm');

  form.addEventListener('submit', function () {
    var email = document.getElementById('email').value;
    var request = new XMLHttpRequest();

    request.open('POST', '/save', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.onreadystatechange = function () {
      if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        var confirm = document.createElement("span");

        // give it an id attribute called 'confirm'
        confirm.id = "confirm";

        // create some content for the new element.
        var confirm_content = document.createTextNode(" Your information has been submitted. On behalf of Censter Stage, thank you for taking the time to sign up. -Center Stage Team ");

        // apply that content to the new element
        confirm.appendChild(confirm_content);

        var parentDiv = form.parentNode;

        // replace existing node form with the new text elements confirm
          parentDiv.replaceChild(confirm, form);
      }
    };
    request.send(`email=${email}`);
  } ) ;
};
