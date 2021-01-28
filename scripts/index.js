async function LatestBlog(elementId) {
    let element = document.getElementById(elementId);
    if(!element) {
        createError("Element with id " + elementId + " not found.");
        return;
    }


    let blog = getLatest(await readJson("blogs"));
    if(!blog) {
        createError("No blog was found.");
        return;
    }

    var text = document.createElement("a");
    text.href = "/blog.html?link=" + blog.link;
    text.innerText = blog.name;
    element.appendChild(text);
}

function getLatest(array) {
    var latestBlog;
    var latestDate = { year: 0, month: 0, day: 0 };

    for(var blog of array) {
        let date = decomposeDate(blog.date);
        if(compareDate(latestDate, date) < 0) {
            latestDate = date;
            latestBlog = blog;
        }
    }

    return latestBlog;
}