const $result = document.querySelector(".result");
const render = content => { $result.textContent = JSON.stringify(content, null, 2);};
// console.log(render);

const promiseAJAX = (method, url, payload) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        console.log(xhr);

        xhr.open(method, url);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(payload));
        console.log(JSON.stringify(payload));

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;

            if (xhr.status >= 200 && xhr.status < 400) {
                resolve(xhr.response);
            } else {
                reject(new Error(xhr.status));
            }
        }
    });
}

promiseAJAX('GET', 'http://jsonplaceholder.typicode.com/posts/1')
    .then(JSON.parse)
    .then(
        render,
        console.error
    );