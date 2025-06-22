// write code here

function displayPosts(){
  fetch('http://localhost:3000/posts')
  .then(response => response.json())
  .then(posts =>{
    const unodered=document.getElementById('post-list');
    unodered.innerHTML="";

    posts.forEach(post =>{
      const div=document.createElement('div');
      div.textContent=post.title;
      div.addEventListener('click',()=>handlePostClick(post.id));
      unodered.appendChild(div);
    })
    if (posts.length > 0){
      handlePostClick(posts[0].id);
    }
  })


}
function handlePostClick(postId){
fetch('http://localhost:3000/posts/${postId}')
.then(response => response.json())
.then(post =>{
  const detail=document.getElementById('post-detail');
  detail.innerHTML='<h2>${post.title</h2> <p><strong>Author:</strong></p> <button id="edit-btn">edit</button> <button id="btn">Delete</button>';
  document.getElementById('edit-btn').onclick=()=>showEditForm(post);
  document.getElementById('btn').onclick=()=>deletePost(post.id)
})


}


