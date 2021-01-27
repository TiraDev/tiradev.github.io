// const marked = require("marked");

async function LoadBlog() {
    let link = getParameterByName("link");
    if(!link) {
        createError("No link declared.");
        return;
    }
    
    let blog = (await readJson("blogs")).find(x => x.link == link);
    if(!blog) {
        createError("Blog not found.");
        return;
    }

    let author = (await readJson("authors")).find(x => x.id == blog.author);
    if(!author) {
        createError("Author not found.");
        return;
    }

    let text = await readText("blogPages/" + link + ".md", "text/markdown");
    var content = document.getElementById("content");

    let date = decomposeDate(blog.date);

    var info = document.createElement("p");
    info.innerText = "" + date.year + " " + monthsShort[date.month] + " " + date.day + " - Written By " + author.name;
    content.appendChild(info);

    var markdown = document.createElement("div");
    markdown.innerHTML = marked(text);
    content.appendChild(markdown);

    var img = document.createElement("img");
    img.src = "res/" + author.image;
    img.alt = "Avatar";
    img.style = "width: 16px; height: 16px; border-radius: 50%;";
    content.appendChild(img);

    var authorName = document.createElement("p");
    authorName.innerText = author.name;
    content.appendChild(authorName);

    document.title = document.title + " " + blog.name;
}