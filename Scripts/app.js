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

  // ADDING THE PARAGRAPHS

  // Step 1 - Anchor to the IntroParagraph
  function addTextToIntro() {
    let text = document.getElementsByClassName(
      "col-md-4 col-xs-offset-1 col-xs-10"
    )[0];

    if (text) {
      // Step 2 - Create a new div element

      let introDiv = document.createElement("div");
      introDiv.innerHTML = `
          Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals.Greece has 1, 400 islands, though only 230 of them are inhabited. And while everyone knows about Santorini and Mykonos, there are gorgeous lesser - known islands in Greece, too.`;

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
          Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs.Rugged and remote, without chain hotels or package tours— not even a bank or ATM— and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.
          `;
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
          Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover 's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes.Since the rich landscape is chock full of indigenous herbs, it 's also known for its traditional medicine, and home of the International Academy of Homeopathy.
          `;
      text.appendChild(islandDiv);

      return true;
    }
    return false;
  }

  // Step 6 - Repeat Steps 1 - 3 to Spetses
  function addTextToSpetses() {
    let text = document.getElementsByClassName(
      "col-md-10 col-xs-offset-1 col-xs-10"
    )[9];

    if (text) {
      let islandDiv = document.createElement("div");
      islandDiv.innerHTML = `
          This bohemian paradise is more Côte d 'Azur than Grecian island. Spetses was hot in the '60 s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens ' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight.
          `;
      text.appendChild(islandDiv);

      return true;
    }
    return false;
  }

  // Step 7 - Repeat Steps 1 - 3 to Amorgos
  function addTextToAmorgos() {
    let text = document.getElementsByClassName(
      "col-md-10 col-xs-offset-1 col-xs-10"
    )[12];

    if (text) {
      let islandDiv = document.createElement("div");
      islandDiv.innerHTML = `
          Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the mountainous island is the perfect compromise between unwinding and adventure, boasting beautiful beaches but also hiking, scuba diving and rock - climbing. One of the island 's main attractions is the 11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff.
          `;
      text.appendChild(islandDiv);

      return true;
    }
    return false;
  }

  // Step 8 - Repeat Steps 1 - 3 to Syros
  function addTextToSyros() {
    let text = document.getElementsByClassName(
      "col-md-10 col-xs-offset-1 col-xs-10"
    )[15];

    if (text) {
      let islandDiv = document.createElement("div");
      islandDiv.innerHTML = `
          A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.
          `;
      text.appendChild(islandDiv);

      return true;
    }
    return false;
  }

  // Step 9 - Repeat Steps 1 - 3 to Milos
  function addTextToMilos() {
    let text = document.getElementsByClassName(
      "col-md-10 col-xs-offset-1 col-xs-10"
    )[18];

    if (text) {
      let islandDiv = document.createElement("div");
      islandDiv.innerHTML = `
        This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, it 's also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as "the island of colours" it's home to around 80 beaches — some only accessible by boat— ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian - clear turquoise waters, and is surrounded by a rugged mountain landscape.
          `;
      text.appendChild(islandDiv);

      return true;
    }
    return false;
  }

  // Step 10 - Repeat Steps 1 - 3 to Hydra
  function addTextToHydra() {
    let text = document.getElementsByClassName(
      "col-md-10 col-xs-offset-1 col-xs-10"
    )[21];

    if (text) {
      let islandDiv = document.createElement("div");
      islandDiv.innerHTML = `
          The first thing you 'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other wheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions, churches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by donkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia Loren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic yet almost rural island paradise more or less to themselves.
          `;
      text.appendChild(islandDiv);

      return true;
    }
    return false;
  }

  // Step 11 - Repeat Steps 1 - 3 to Ithaca
  function addTextToIthaca() {
    let text = document.getElementsByClassName(
      "col-md-10 col-xs-offset-1 col-xs-10"
    )[24];

    if (text) {
      let islandDiv = document.createElement("div");
      islandDiv.innerHTML = `
          Most famous for being the home of Odysseus, and a prominent figure in Homer's "The Odyssey," Ithaca is said to have been inhabited since the 2nd millennium BC. Made up of two islands joined by a narrow strip of land, many visit it to see the legendary sites mentioned by Homer. However, Ithaca is more than its mythical counterpart, beckoning with secluded beaches, dramatic cliffs, beautiful olive groves, and sleepy fishing villages full of Byzantine churches and monasteries.
          `;
      text.appendChild(islandDiv);

      return true;
    }
    return false;
  }

  // Step 12 - Repeat Steps 1 - 3 to Gavdos
  function addTextToGavdos() {
    let text = document.getElementsByClassName(
      "col-md-10 col-xs-offset-1 col-xs-10"
    )[27];

    if (text) {
      let islandDiv = document.createElement("div");
      islandDiv.innerHTML = `
          Near the more well - known Crete, Gavdos is the most southern island in Greece— and the most southern spot in Europe discounting the Canaries. Only accessible by ferry, the remote island has only about 50 permanent residents, and can feel like your private playground. Local legend has it that the island was the home of goddess Calypso, who kept Odysseus prisoner here. Today, a favorite tourist activity is to visit the spot believed to be her cave. Be warned, you won 't find any luxury hotels here. While the romantically under-developed, super laid back island has a number of rooms for rent, those are limited, as the real draw here for many is the free, seaside camping.
          `;
      text.appendChild(islandDiv);

      return true;
    }
    return false;
  }

  // OUTPUT THE VARIABLES IN CONSOLE

  // Step 1 - Create an array to store the variables
  let Users = [];

  // Step 2 - Lets create a function that prevent the click to reload the page
  const addUser = (ev) => {
    ev.preventDefault();

    // Step 3 - Lets create the user and retrieve its values from the form.
    let user = {};

    (user.date = Date.now()),
      (user.FName = document.getElementById("firstName").value),
      (user.LName = document.getElementById("lastName").value),
      (user.CNumber = document.getElementById("contactNumber").value),
      (user.Email = document.getElementById("email").value),
      (user.Message = document.getElementById("yourMessage")),
      (user.Filled = new (function () {
        console.log(
          `%c${user.FName} filled the form`,
          "background: green; color: white; font-size: 14px;"
        );
      })());

    // Step 4 - Lets display in the console the Message + variables.
    console.log(user);
  };

  // Step 5 - Lets 'close the circuit' by adding the variables when someone click the button.
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sendButton").addEventListener("click", addUser);
  });

  // Lets Check if all the functions are working properly displaying the result on the console.
  function Start() {
    console.log(
      "%cChecking the functions...",
      "background: green; color: white; font-size: 14px;"
    );

    let success = addTextToIntro();
    if (success) {
      console.log(
        "%cSuccessfully added paragraphs to Intro",
        "color:blue; font-size: 12px;"
      );
    } else {
      console.warn(
        "%cContent not added to Intro does not exist",
        "color:red; font-size: 12px;"
      );
    }

    let success1 = addTextToFolegandros();
    if (success1) {
      console.log(
        "%cSuccessfully added paragraphs to Folegandros",
        "color:blue; font-size: 12px;"
      );
    } else {
      console.warn(
        "%cContent not added to Folegandros does not exist",
        "color:red; font-size: 12px;"
      );
    }

    let success2 = addTextToAlonissos();
    if (success2) {
      console.log(
        "%cSuccessfully added paragraphs to Alonissos",
        "color:blue; font-size: 12px;"
      );
    } else {
      console.warn(
        "%cContent not added to Alonissos does not exist",
        "color:red; font-size: 12px;"
      );
    }

    let success3 = addTextToSpetses();
    if (success3) {
      console.log(
        "%cSuccessfully added paragraphs to Spetses",
        "color:blue; font-size: 12px;"
      );
    } else {
      console.warn(
        "%cContent not added to Spetses does not exist",
        "color:red; font-size: 12px;"
      );
    }

    let success4 = addTextToAmorgos();
    if (success4) {
      console.log(
        "%cSuccessfully added paragraphs to Amorgos",
        "color:blue; font-size: 12px;"
      );
    } else {
      console.warn(
        "%cContent not added to Amorgos does not exist",
        "color:red; font-size: 12px;"
      );
    }

    let success5 = addTextToSyros();
    if (success5) {
      console.log(
        "%cSuccessfully added paragraphs to Syros",
        "color:blue; font-size: 12px;"
      );
    } else {
      console.warn(
        "%cContent not added to Syros does not exist",
        "color:red; font-size: 12px;"
      );
    }

    let success6 = addTextToMilos();
    if (success6) {
      console.log(
        "%cSuccessfully added paragraphs to Milos",
        "color:blue; font-size: 12px;"
      );
    } else {
      console.warn(
        "%cContent not added to Milos does not exist",
        "color:red; font-size: 12px;"
      );
    }

    let success7 = addTextToHydra();
    if (success7) {
      console.log(
        "%cSuccessfully added paragraphs to Hydra",
        "color:blue; font-size: 12px;"
      );
    } else {
      console.warn(
        "%cContent not added to Hydra does not exist",
        "color:red; font-size: 12px;"
      );
    }

    let success8 = addTextToIthaca();
    if (success8) {
      console.log(
        "%cSuccessfully added paragraphs to Ithaca",
        "color:blue; font-size: 12px;"
      );
    } else {
      console.warn(
        "%cContent not added to Ithaca does not exist",
        "color:red; font-size: 12px;"
      );
    }

    let success9 = addTextToGavdos();
    if (success9) {
      console.log(
        "%cSuccessfully added paragraphs to Gavdos",
        "color:blue; font-size: 12px;"
      );
    } else {
      console.warn(
        "%cContent not added to Gavdos does not exist",
        "color:red; font-size: 12px;"
      );
    }
  }

  window.addEventListener("load", Start);
})();
