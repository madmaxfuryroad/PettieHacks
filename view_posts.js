document.addEventListener("DOMContentLoaded", function () {
    const postsList = document.getElementById("posts-list");

    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];

    storedPosts.forEach((post, index) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2>${post.name}</h2>
            <p>${post.description}</p>
            <button class="delete-button" data-index="${index}">Delete</button>
        `;
        postsList.appendChild(postElement);
    });
const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function () {
            const postIndex = parseInt(button.getAttribute("data-index"));
            deletePost(postIndex);
            updatePostsList();
        });
    });
});


function deletePost(index) {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    storedPosts.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(storedPosts));
}


function updatePostsList() {
    const postsList = document.getElementById("posts-list");
    postsList.innerHTML = ""; // Clear the list
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    storedPosts.forEach((post, index) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2>${post.name}</h2>
            <p>${post.description}</p>
            <button class="delete-button" data-index="${index}">Delete</button>
        `;
        postsList.appendChild(postElement);
    });
}
