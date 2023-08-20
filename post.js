document.addEventListener("DOMContentLoaded", function () {
    const postForm = document.getElementById("post-form");

    postForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const postName = document.getElementById("post-name").value;
        const postDescription = document.getElementById("post-description").value;
        const filesInput = document.getElementById("post-files");
        const files = filesInput.files;

        const post = {
            name: postName,
            description: postDescription,
            files: files,
        };

        const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
        storedPosts.push(post);
        localStorage.setItem("posts", JSON.stringify(storedPosts));

        window.location.href = "post_success.html";
    });
});
