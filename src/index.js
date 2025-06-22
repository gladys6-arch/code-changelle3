// write code here

function displayPosts(){
  fetch('http://localhost:3000/posts')
  .then((response => response.json()))
  .then((posts)=>{
    const postList=document.getElementById('post-list');
    postList.innerHTML="";

    posts.forEach((post)=>{
      const postHeader= document.createElement('h3');
      postHeader.innerHTML= post.title;
      postHeader.style.cursor="pointer";
      postHeader.dataset.id=post.id;

      postHeader.addEventListener('click', ()=>handlePostClick(post.id));
      postList.appendChild(postHeader);
    });
  })
  .catch((error)=>console.log("Error",error));
}

displayPosts();
  




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

function addNewPostListeener(){
  const form=document.getElementById('post-form');
  form.onsubmit=event => {
    event.preventDefault();
    const newPost={
      title:
      document.getElementById()
    }
  }
}
fetch('http://localhost:3000/posts')
  .then(response => response.json())
  .then(posts => {
    console.log(posts); // An array of blog post objects
  });
