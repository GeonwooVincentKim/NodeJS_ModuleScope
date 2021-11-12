const $result = document.querySelector(".result");
const render = content => {
    $result.textContent = JSON.stringify(content, null, 2);
    /*$result.innerHTML = `
        <div class="result_list">
            <div class="list_body">
               ${JSON.stringify(content, null, 2)}
            </div>
        </div>
    `*/

    console.log($result.textContent);
    // console.log($result.textContent(res).get(1));
};
console.log(render);

const promiseAJAX = (method, url, payload) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        console.log(xhr);

        xhr.open(method, url);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(payload));
        console.log(JSON.stringify(payload));

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== XMLHttpRequest.DONE) 
                return;
            
            if (xhr.status >= 200 && xhr.status < 400) {
                resolve(xhr.response);

                // xhr.response()
            } else {
                reject(new Error(xhr.status));
            }
        }
    });
}

const url = 'http://jsonplaceholder.typicode.com/posts';

promiseAJAX('GET', `${url}/1`)
    .then(
        res => promiseAJAX('GET', `${url}?userId=${JSON.parse(res).userId}`)
        // .foreach(element => {     item = 'User ID : ' + element.userId + '\nID : ' +
        // element.id + '\nTitle : ' +             element.title + '\nCompleted : ' +
        // element.completed     console.log(item);     result.append(item + "\n"); })
    )
    .then(JSON.parse)
    .then(render)
    // .then((res) => {     var item = ''     res.foreach(element => {         item
    // = 'User ID : ' + element.userId + '\nID : ' + element.id + '\nTitle : ' +
    // element.title + '\nCompleted : ' + element.completed
    // console.log(item);         result.append(item + "\n");     })
    .then((response) => {
        // var item = ''
        // response.foreach(element => {
        //     item = 'User ID : ' + element.userId + '\nID : ' + element.id + '\nTitle : ' +
        //             element.title + '\nCompleted : ' + element
        //         .completed
        //         console
        //         .log(item);
        //     result.append(item + "\n");
        // })
    }).catch(console.error);
