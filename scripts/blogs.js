const months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const blogPage = "blog.html";

async function ListBlogs() {
    var blogs = await readJson("blogs");
    var content = document.getElementById("blogs");

    var map = new Map();

    for(let i = 0; i < blogs.length; i++) {
        let blog = blogs[i];
        blog.year = parseInt(blog.date.substring(0, 4));
        blog.month = parseInt(blog.date.substring(5, 7));
        blog.day = parseInt(blog.date.substring(8, 10));
        if(!map.has(blog.year)) {
            var array = [];
            for(let m = 0; m <= 12; m++) {
                array[m] = [];
            }
            map.set(blog.year, array);
        }

        map.get(blog.year)[blog.month].push(blog);
    }

    // sort descending by year
    map[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((x, y) => -(x[0] - y[0]));
    }

    var yearList = document.createElement("ul");
    yearList.style = "list-style-type: none;"
    for(var [year, value] of map) {
        var yli = document.createElement("li");
        var h3 = document.createElement("h3");
        h3.innerText = year;
        yli.appendChild(h3);
        var monthList = document.createElement("ul");
        monthList.style = "list-style-type: none;"
        for(var m = 12; m > 0; m--) {
            if(value[m].length > 0) {
                var mli = document.createElement("li");
                var h4 = document.createElement("h4");
                h4.innerText = months[m];
                mli.appendChild(h4);
                var blogList = document.createElement("ul");
                blogList.style = "list-style-type: none;"
                value.sort((x, y) => x.day - y.day);

                for(var blog of value[m]) {
                    var li = document.createElement("li");
                    var obj = document.createElement("a");
                    obj.href = "/" + blogPage + "?link=" + blog.link;
                    obj.innerHTML = blog.name;
                    li.appendChild(obj);
                    blogList.appendChild(li);
                }
                mli.appendChild(blogList);
                monthList.appendChild(mli);
            }
        }
        yli.appendChild(monthList);
        yearList.appendChild(yli);
    }

    content.appendChild(yearList);
}