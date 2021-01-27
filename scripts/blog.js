async function LoadBlog() {
    let link = getParameterByName("link");
    if(!link) {
        createError("No link declared.");
        return;
    }
    
    let blog = (await readJson("blogs")).find(x => x.link == link);
    if(!blog) {
        createError("Blog not found.")
        return;
    }

    let text = await readHtml(link);
    var content = document.getElementById("content");
    content.innerHTML = text;

    document.title = document.title + " " + blog.name;
}