const baseUrl = "https://m2-api-living.herokuapp.com/"

async function requestPosts(page) {
    const request = await fetch(baseUrl + `news?page=${page}`)
    .then((response) => response.json())
    .then((response) => response)


    localStorage.setItem("pagePost", JSON.stringify(request))
}

requestPosts(2);

const pagePost = JSON.parse(localStorage.getItem("pagePost"))
const arrayPosts = pagePost.news
console.log(arrayPosts)

function renderPosts(array){
    array.forEach(element => {
        const ulPosts = document.querySelector(".posts_ul")
        const liPosts = document.createElement("li")
        const imgPost = document.createElement("img")
        const titlePost = document.createElement("h3")
        const descPost = document.createElement("p")
        const contentPost = document.createElement("p")
        const catPost = document.createElement("span")
        const idPost = document.createElement("p")

        const btnAcessPost = document.createElement("button")


        liPosts.classList.add("li_post")
        imgPost.classList.add("img_post")
        btnAcessPost.classList.add("acess_post")

        idPost.innerText = element.id
        btnAcessPost.innerText = "Acessar conteúdo"
        imgPost.src = element.image
        titlePost.innerText = element.title
        descPost.innerText = element.description
        catPost.innerText = element.category
        contentPost.innerText = element.content



        liPosts.append(imgPost, titlePost, descPost, btnAcessPost)
        ulPosts.append(liPosts)
        

    });
}

renderPosts(arrayPosts)