document.getElementById('add-post-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const postTitle = document.getElementById('post-title').value;
    const postContent = document.getElementById('post-content').value;

    if (postTitle && postContent) {
        const postList = document.getElementById('post-list').querySelector('ul');
        const newPost = document.createElement('li');
        
        // Create a span to hold the post title and content for easy editing
        newPost.innerHTML = `<span><strong>${postTitle}</strong>: ${postContent}</span> <button class="edit-btn">Edit</button>`;
        postList.appendChild(newPost);

        // Clear the form after submit
        document.getElementById('post-title').value = '';
        document.getElementById('post-content').value = '';

        // Add event listener for the edit button
        newPost.querySelector('.edit-btn').addEventListener('click', function() {
            // Get the current title and content
            const currentTitle = postTitle;
            const currentContent = postContent;

            // Set the form fields with the current title and content
            document.getElementById('post-title').value = currentTitle;
            document.getElementById('post-content').value = currentContent;

            // Remove the post from the list after editing
            postList.removeChild(newPost);
        });
    }
});
