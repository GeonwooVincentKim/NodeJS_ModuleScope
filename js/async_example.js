function get(url) {
    const xhr = new XMLHttpRequest();
    console.log(xhr);

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) 
            return;
        if (xhr.status === 200) {
            console.log(xhr.response);

            document.getElementById("result").innerHTML = xhr.response;

            return xhr.response;
        } else {
            console.log("Error : " + xhr.status);
        }
    }

    xhr.open("GET", url);
    xhr.send();
}

const res = get("http://jsonplaceholder.typicode.com/posts/1");
console.log(res);