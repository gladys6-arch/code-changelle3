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


const deleteBtn=document.getElementById("btn");
// adding the click event to the delete button
deleteBtn.addEventListener('click', ()=>{
  

  if(RemovePost){
    RemovePost.remove();
  }
  postDetails.innerHTML='<p>select a post to see details</p>'
});

// the edit button
const editButton=document.getElementById('edit-btn');

editButton.addEventListener('click',()=>{
  populateEditForm(post);
})

}


