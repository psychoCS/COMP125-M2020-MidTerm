/*

 FILE: COMP125-M2020-MidTerm-Test js
 AUTHOR: Thiago Luiz Batista
 WEB SITE: The Travel Report
 DESCRIPTION: This is the JavaScript file for the whole web page

*/

// setup your IIFE (Immediately Invoked Function Expression)
(function () {
  "use strict";

  // YOUR CODE GOES HERE


  // Step 1 - Anchor to the IntroParagraph 
  function addTextToIntro() {
    let text = document.getElementsByClassName(
      "col-md-4 col-xs-offset-1 col-xs-10"
    )[0];

    if (text) {
      // Then lets create a new div element

      let newDiv = document.createElement("p");

      // Configure
      newDiv.innerHTML = `
          <div>Now is the time to travel to Greece. The country may be going
          through an economic crisis, but many travellers say that it hasn't
          impacted the experience of visiting. Plus, there may be some great deals.
          Greece has 1, 400 islands, though only 230 of them are inhabited. 
          And while everyone knows about Santorini and Mykonos, there are gorgeous lesser
          - known islands in Greece, too.</div>`;

      // step 4 attach the new element
      text.appendChild(newDiv);

      return true;
    }
    return false;
  }

  // named function
  function Start() {
    console.log("%cApp Started...", "color:white; font-size: 24px;");

    let success = addTextToIntro();

    if (success) {
      console.log("successfully added paragraphs to text");
    } else {
      console.warn("content not added to text- does not exist");
    }
  }

  window.addEventListener("load", Start);
})();