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

      if(posts.length > 0){
        const firstpost=posts[0];
      }

      const detailContainer=document.createElement('div');
      detailContainer.id='first-post-detail';
      detailContainer.innerHTML=

      postHeader.addEventListener('click', ()=>handlePostClick(post.id));
      postList.appendChild(postHeader);

      

    });
  })
  .catch((error)=>console.error("Error loading post detail:",error));
}

function handlePostClick(postId){

  fetch(`http://localhost:3000/posts/${postId}`)

  .then(response=>response.json())
  .then((post)=>{
    const detail=document.getElementById('post-detail');
    detail.innerHTML= `
        <h2>${post.title}</h2>
        <img src="${post.image}" alt="${post.title}"/>
        <p><strong>Author:</strong> ${post.author}</p>
        <p>Date:${post.date}</p>
        <p>${post.content}</p>
      `;
  })
  .catch((error)=>console.error('Error loading post details',));

}



function addNewPost(){
  const form=document.getElementById('post-form');
  form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const title=document.getElementById('newTitle').value;
    const image=document.getElementById('newImage').value;
    const author=document.getElementById('newAuthor').value;
    const content=document.getElementById('newContent').value;
    const date=document.getElementById('newDate').value;

    const newPost={
      title,
      image,
      author,
      content,
      date
    };

    console.log("Submitting new post:", newPost);


    fetch('http://localhost:3000/posts',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
      },
      body:JSON.stringify(newPost)
    })
    .then(response=> response.json())
    .then((createdPost)=>{
      console.log('created Post',createdPost);
      displayPosts();
      form.reset();
  })
      .catch((error)=>
        console.error('Error creating new post:',error)
      );

    });
           
       
}

function main(){
  displayPosts();
  addNewPost();
}


document.addEventListener('DOMContentLoaded', main);