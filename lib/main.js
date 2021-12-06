require ("../lib/acctionsbtns.js");
require ("../lib/download.js");
require ("../lib/lookcode.js");
require ("../lib/buscador.js");


const dragula = require("dragula");

const deleteBtnHtml ="<div class='js-delete-btn hide'><span class='material-icons fc1'>delete</span></div>";


//importando contenidos al drag
const droppable = document.querySelector(".js-droppable");
const snippets = document.querySelector(".js-snippets");
const snippet = document.querySelectorAll(".js-snippet");

// inicio de la seccion de drag and drop
dragula([snippets, droppable], {
    copy: function (el, source) {
      return source === snippets;
    },
    accepts: function (el, target) {
      return target !== snippets;
    }
  }).on("drop", (el, target) => {
    el.innerHTML += deleteBtnHtml;
    el.classList.add("relative"); // es necesario agregar una posision relavida desde css
  });
// final de la seccion de drag and drop

//inicio de la seccion eliminar fiture
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("js-delete-btn")) {
      document
        .querySelector(".js-droppable")
        .removeChild(event.target.parentElement);
    }
});
  //final de la seccion eliminar fiture
