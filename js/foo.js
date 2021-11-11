var x = 'foo';
console.log(window.x);

document.getElementById("show_text").innerHTML = window.x;

// const template = document.createElement("template");
// template.innerHTML = `
//     <link href="../css/style.css" rel="stylesheet">
//     <p></p>
// `

// class TestIndex extends HTMLElement {
//     constructor(){
//         super();

//         this.attachShadow({mode: "open"});
//         this.shadowRoot.appendChild(template.content.cloneNode(true));

//         this.shadowRoot.querySelector("p").innerText = this.getAttribute(window.x);
//     }
// }


// window.customElements.define("test-index", TestIndex)
