# tiradev.github.io

The repository for the tiradev page.
Since the GitHub pages are static, adding blogs and authors has to be done manually. For this there are instructions available.

## Adding a new blog:

1. Add a markdown file with the content of the blog to the [blogs](blogPages) folder.
2. Add the blog object to the [blogs.json](blogs.json) file.
    > A blog object has the following structure:
    > - `"name"`: The name or headline of the blog.
    > - `"date"`: The date of the blog in ISO 8691 Format (yyyy-mm-dd)
    > - `"link"`: The link to the markdown file without the '.md' file extension. The link is relative to the blogs folder. 
    If the file is stored directly in the blogs folder, the link is just the name of the file without the ending.
    > - `"author"`: The author id of the author. The id can be found in the [authors.json](authors.json) file, 
    if the author already exists. If not, see ['Adding a new author'](#adding-a-new-author).
    >
    > Example: `{ "name": "An example blog", "date": "2021-09-28", "author": "example-author" }
    
    > Since the objects are stored in a list, there needs to be a comma between every object.
  
## Adding a new author:

All authors are stored in the [authors.json](authors.json) file. To add a new author, an author object has to be added to the file.

> An author object has the following structure:
> - `"id"`: The id of the author. It has to be unique.
> - `"name"`: The written out name of the author.
> - `"image"`: The link to the profile picture of the author including the file extension. The link is relative to the [avatars](avatars) folder.
>
> Example: `{ "id": "example-author", "name": "The example author", "example.jpg" }`

> Since the objects are stored in a list, there needs to be a comma between every object.

[blogPages]: https://github.com/TiraDev/tiradev.github.io/tree/master/data/blogPages
[blogs.json]: https://github.com/TiraDev/tiradev.github.io/blob/master/data/blogs.json
[authors.json]: https://github.com/TiraDev/tiradev.github.io/blob/master/data/authors.json
[avatars]: https://github.com/TiraDev/tiradev.github.io/tree/master/res/avatars
