const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let body = document.getElementById("body")

for ( i = 0; i < posts.length; i ++ ) {
    let HTML = `
        <div class="old-gram-post">
            <section id="user-info">
                <img src="${posts[i].avatar}" class="avatar" id="avatar">
                <div class="user-info">
                    <p class="dark-text" id="name">${posts[i].name}</p>
                    <p class="light-text" id="location">${posts[i].location}</p>
                </div>
            </section>

            <section class="post-img">
                <img src="${posts[i].post}" id="post">
            </section>

            <section id="post-body">
                <div class="icons">
                    <img src="images/icon-heart.png" class="icons" id="like">
                    <img src="images/icon-comment.png" class="icons" id="comment">
                    <img src="images/icon-dm.png" class="icons" id="share">
                </div>
                <div class="likes">
                    <p class="dark-text" id="likes">${posts[i].likes} likes</p>
                </div>
                <div class="username-caption">
                    <p id="comments"><span class=dark-text id="username">${posts[i].username}</span> ${posts[i].comment}
                        lol</p>
                </div>
            </section>
            <div class="empty-div"></div>
        </div>    
    `
    body.innerHTML += HTML
}
