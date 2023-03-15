    function attachEvents() {
        document.getElementById("btnLoadPosts").addEventListener("click", getAllPosts);
        document.getElementById("btnViewPost").addEventListener("click", displayPost);

    }
    attachEvents();

    async function displayPost() {
        const selectedId = document.getElementById("posts").value;

        const titleElement = document.getElementById("post-title");
        const bodyElement = document.getElementById("post-body");
        const ulElement = document.getElementById("post-comments");

        titleElement.textContent = `Loading...`;
        bodyElement.textContent = "";
        ulElement.replaceChildren(); 

        const [post, comments] = await Promise.all([
            getPostById(selectedId),
            getCommentsByPostId(selectedId)
        ]);

        titleElement.textContent = post.title;
        bodyElement.textContent = post.body; 


        comments.forEach(c => {
            const liElement = document.createElement('li');
            liElement.textContent = c.text
            ulElement.appendChild(liElement);
        })

    }

    async function getAllPosts() {
        const URL = `http://localhost:3030/jsonstore/blog/posts`;
        const RESP = await fetch(URL);
            // if (RESP.ok !== true || RESP.status !== 200){
            //     throw new Error(`Error code ${RESP.status}`);
            // }
        const DATA = await RESP.json();
        
        const selectElement = document.getElementById("posts");
        selectElement.replaceChildren();
        Object.values(DATA).forEach(p => {
            const optionElemetn = document.createElement("option");
            optionElemetn.textContent= p.title;
            optionElemetn.value= p.id;

            selectElement.appendChild(optionElemetn)
        })        
    }
    
    async function getPostById(postId) {
        const URL = `http://localhost:3030/jsonstore/blog/posts/` + postId;
        const RESP = await fetch(URL);
        if (RESP.ok !== true || RESP.status !== 200){
            throw new Error(`Error code ${RESP.status}`);
        }
        const data = await RESP.json();
        return data;

    }
    
    async function getCommentsByPostId(postId) {
        const URL = `http://localhost:3030/jsonstore/blog/comments`; 
        const RESP = await fetch(URL);
        if (RESP.ok !== true || RESP.status !== 200){
            throw new Error(`Error code ${RESP.status}`);
        }
        const DATA = await RESP.json();

        const comments = Object.values(DATA).filter(e => e.postId == postId);

        return comments;
    }
