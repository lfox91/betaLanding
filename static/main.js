
window.onload = function () {
  // build a reference to the existing node to be replaced
  var form  = document.getElementByTagName('form');

  //add eventlistener
  form.onSubmit = function () {
    // <div id='container'>
    //  <form> ...</form>
    // </body>
    
    // create an empty element node
    // without an ID, any attributes, or any content
    var confirm = document.createElement("p");
    
    // give it an id attribute called 'newSpan'
    confirm.id = "confirm";
    
    // create some content for the new element.
    var confirm_content = document.createTextNode(" Your information has been submitted On behalf of Censter Stage, Thank you for taking the time to sign up -Center Stage Team ");
    
    // apply that content to the new element
    confirm.appendChild(sp1_content);
    
    var parentDiv = form.parentNode;
    
    // replace existing node form with the new text elements confirm
    parentDiv.replaceChild(confirm, form);
    
    // result:
    // <div>
    //   <form id="newSpan">" Your information has been submitted On behalf of Censter Stage, Thank you for taking the time to sign up -Center Stage Team "</form>
    // </div>
  }


}

