const blogPost1 = new BlogPost('a','b','c');
console.log(blogPost1);

function BlogPost
                (title,
                body,
                author,
                ){
        this.title = title;
        this.body = body;
        this.author = author;
        this.views = 0;
        this.comments = [];
        this.isLive = false;
}