function createcard(image, title, views, duration, cname, old) {
    let viewsstr;
    if (views < 1000000) {
        viewsstr = views / 1000 + "K";
    }
    else if (views > 1000000) {
        viewsstr = (views / 1000000 ).toFixed(1) + " M";
    }
    else {
        viewsstr = (views / 1000 ).toFixed(1)+ " K";
    }
    let cards = `<div class="card">
            <div class="image"><img  src="${image}" alt="">
                <h4 class="time">${duration}</h4>
            </div>
            <div class="details">
                <h3 class="title">${title}
                </h3>
                <h5 class="cname">${cname} &nbsp;&nbsp;.&nbsp;&nbsp; ${viewsstr} views &nbsp;&nbsp;.&nbsp;&nbsp; ${old} months ago</h5>
            </div>

        </div>`
    let cont = document.querySelector(".container");
    cont.insertAdjacentHTML("beforeend", cards);
}

createcard("https://i.ytimg.com/vi/-2RAq5o5pwc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDZUq9bGZe0htvyna15ptRZsGf3fA", "Jhol | Coke Studio Pakistan | Season 15 | Maanu x Annural Khalid", 345635328, "4:38", "Ahmad", 12);
createcard("https://i.ytimg.com/vi/8of5w7RgcTc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBbGM5JEf3RBbAddKBd2VJ_Uq_NkA", "Afusic - Pal Pal (Official Music Video) Prod. ‪@AliSoomroMusic‬", 828000, "2:27", "Ahmad", 6);



