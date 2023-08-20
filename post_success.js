document.addEventListener("DOMContentLoaded", function () {
    const latestPostContainer = document.getElementById("latest-post");

    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const latestPost = storedPosts[storedPosts.length - 1];

    if (latestPost) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2>${latestPost.name}</h2>
            <p>${latestPost.description}</p>
        `;
        latestPostContainer.appendChild(postElement);
    }
});
