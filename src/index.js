// write code here

function displayPosts(){
  fetch('http://localhost:3000/posts')
  .then((response => response.json()))
  .then((posts)=>{
    const postList=document.getElementById('post-list');
    postList.innerHTML="";
    // creating h3 for the title of the blog post
    posts.forEach((post)=>{
      const postHeader= document.createElement('h3');
      postHeader.innerHTML= post.title;
      postHeader.style.cursor="pointer";
      postHeader.dataset.id=post.id;

      postHeader.addEventListener('click', ()=>handlePostClick(post.id));
      postList.appendChild(postHeader);
    });
  })
  .catch((error)=>console.error("Error loading post",error));
}

function handlePostClick(postId){
  fetch('http://localhost:3000/posts/${postId}')
  .then((response)=>response.json())
  .then((post)=>{
    const detail=document.getElementById('post-detail');
    detail.innerHTML= `
        <h2>${post.title}</h2>
        <p><strong>Author:</strong> ${post.author}</p>
        <p>${post.content}</p>
      `;
  })
  .catch((error)=>console.error('Error loading post details',));

}


