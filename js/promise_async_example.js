const $reuslt = document.querySelector(".result");
const render = content => {$reuslt.textContent = JSON.stringify(content, null, 2);};
