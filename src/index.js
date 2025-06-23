// write code here

function displayPosts(){

  fetch('http://localhost:3000/posts')
  .then((response => response.json()))
  .then((posts)=>{
    const postList = document.getElementById('posts-list');

    
    postList.innerHTML="";
    
    posts.forEach((post)=>{
        const List=document.createElement('li');
        List.textContent= post.title
        List.classList.add('post-item')

        List.addEventListener('click',()=>{
          handlePostClick(post.id);
        })

        postList.appendChild(List);
        
        });
         
         if(posts.length >0){
          handlePostClick(posts[0].id);
         }
    
      });

      };

function handlePostClick(postId){

  fetch(`http://localhost:3000/posts/${postId}`)

  .then(response=>response.json())
  .then((post)=>{
    const detail = document.getElementById('post-content');
    detail.innerHTML= `
        <h2>${post.title}</h2>
        <p><strong>Author:</strong> ${post.author}</p>
        <p>${post.content}</p>
        <button id="edit-btn">Edit</button>
        <button id="delete-btn">Delete</button>
      `;

      document.getElementById('edit-btn').addEventListener('click',()=>{
        showEditForm(post);
      });
        document.getElementById('delete-btn').addEventListener('click', () => {
  fetch(`http://localhost:3000/posts/${post.id}`, {
    method: 'DELETE'
  })
  .then(() => {
    displayPosts();
    document.getElementById('post-detail').innerHTML = '<p>Post deleted.</p>';
  });
});

    
        })
         
         }
      

function addNewPostListener() {
  const form = document.getElementById('new-post-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    // Collect values of the new form
    const title = document.getElementById('newTitle').value;   
    const author = document.getElementById('newTitle').value;
    const image = document.getElementById('newImage').value;
    const content = document.getElementById('newContent').value;

    const newPost= {title, image,author, content};
       
    // fetch
    fetch('http://localhost:3000/posts',{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(newPost)

    })
      .then(res=> res.json())
      .then(()=>{
        displayPosts();
        form.reset();
      });
      
      
  });
}


function showEditForm(post){
  const form =document.getElementById('edit-post-form');
  form.classList.add('hidden');
  document.getElementById('edit-title').value=post.title;
  document.getElementById('edit-content').value=post.content;

  form.onsubmit= function(event){
    event.preventDefault();

    const updatedTitle=document.getElementById('edit-title').value;
    const updatedContent=document.getElementById('edit-content').value;

    const updatedPost={
      title:updatedTitle,
      content:updatedContent

    };
    fetch( `http://localhost:3000/posts/${post.id}`,{
      method: "PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(updatedPost)
    })
    .then(res => res.json())
    .then(()=>{
      displayPosts();

      document.getElementById('post-detail').innerHTML='<p>Post updated. click a post to view it.</P>';
       form.reset();
       form.classList.add('hidden');
    });
  };
    document.getElementById('cancel-edit').addEventListener('click',()=>{
      form.reset();
      form.classListl.add('hidden');
    });

        
      }
      
    



    
function main(){
  displayPosts();
  addNewPostListener();
}


document.addEventListener('DOMContentLoaded', main);