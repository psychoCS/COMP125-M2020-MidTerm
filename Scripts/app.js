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
      // Step 2 - Create a new div element

      let introDiv = document.createElement("div");
      introDiv.innerHTML = `
          Now is the time to travel to Greece. The country may be going
          through an economic crisis, but many travellers say that it hasn't
          impacted the experience of visiting. Plus, there may be some great deals.
          Greece has 1, 400 islands, though only 230 of them are inhabited. 
          And while everyone knows about Santorini and Mykonos, there are gorgeous lesser
          - known islands in Greece, too.`;

      // Step 3 - Attach the new element
      text.appendChild(introDiv);

      return true;
    }
    return false;
  }

  // Step 4 - Repeat Steps 1 - 3 to Folegandros
  function addTextToFolegandros() {
    let text = document.getElementsByClassName(
      "col-md-10 col-xs-offset-1 col-xs-10"
    )[3];

    if (text) {

      let islandDiv = document.createElement("div");
      islandDiv.innerHTML = `
          Folegandros is almost a Greek cliché, full of beautiful 
          whitewashed houses with bright blue doors lining cobblestoned 
          streets on steep cliffs.Rugged and remote, without chain hotels
          or package tours— not even a bank or ATM— and accessible only 
          by ferry, the volcanic island boasts solitude in spades, 
          secluded beaches, and incredible sunsets.
          `;

      // Step 3 - Attach the new element
      text.appendChild(islandDiv);

      return true;
    }
    return false;
  }

  // Step 5 - Repeat Steps 1 - 3 to Alonissos
  function addTextToAlonissos() {
    let text = document.getElementsByClassName(
      "col-md-10 col-xs-offset-1 col-xs-10"
    )[6];

    if (text) {

      let islandDiv = document.createElement("div");
      islandDiv.innerHTML = `
          Off the mainland, this island, whose surrounding waters 
          are a designated marine park full of seals and dolphins, 
          is a nature lover 's dream. The spectacular spot's 
          crystal clear waters and beautiful beaches are perfect
          for diving, and its lush flora and dense forests ideal
          for hikes.Since the rich landscape is chock full of 
          indigenous herbs, it 's also known for its traditional 
          medicine, and home of the International Academy of Homeopathy.
          `;

      // Step 3 - Attach the new element
      text.appendChild(islandDiv);

      return true;
    }
    return false;
  }






  // Start the functions
  function Start() {
    console.log("%cApp Started...", "color:white; font-size: 24px;");

    let success = addTextToIntro();
    if (success) {
      console.log("successfully added paragraphs to text");
    } else {
      console.warn("content not added to text- does not exist");
    }

    let success1 = addTextToFolegandros();
    if (success1) {
      console.log("successfully added paragraphs to text");
    } else {
      console.warn("content not added to text- does not exist");
    }

    let success2 = addTextToAlonissos();
    if (success2) {
      console.log("successfully added paragraphs to text");
    } else {
      console.warn("content not added to text- does not exist");
    }

    let success3 = addTextToAlonissos();
    if (success3) {
      console.log("successfully added paragraphs to text");
    } else {
      console.warn("content not added to text- does not exist");
    }

    let success4 = addTextToAlonissos();
    if (success4) {
      console.log("successfully added paragraphs to text");
    } else {
      console.warn("content not added to text- does not exist");
    }

    let success5 = addTextToAlonissos();
    if (success5) {
      console.log("successfully added paragraphs to text");
    } else {
      console.warn("content not added to text- does not exist");
    }

    let success6 = addTextToAlonissos();
    if (success6) {
      console.log("successfully added paragraphs to text");
    } else {
      console.warn("content not added to text- does not exist");
    }

    let success7 = addTextToAlonissos();
    if (success7) {
      console.log("successfully added paragraphs to text");
    } else {
      console.warn("content not added to text- does not exist");
    }

    let success8 = addTextToAlonissos();
    if (success8) {
      console.log("successfully added paragraphs to text");
    } else {
      console.warn("content not added to text- does not exist");
    }

  }

  window.addEventListener("load", Start);
})();