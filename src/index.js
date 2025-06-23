// write code here

function displayPosts(){

  fetch('http://localhost:3000/posts')
  .then((response => response.json()))
  .then((posts)=>{
    const postList=document.getElementById('post-list');
    
    postList.innerHTML="";
    
    posts.forEach((post)=>{
        const postDiv=document.createElement('div');
        
        postDiv.classList.add('post-Item');
        postDiv.dataset.id =post.id;

        const title=document.createElement('h3');
        title.textContent=post.title;

        const image=document.createElement('img');
        img.src=post.image;
        img.alt=post.title;
        img.style.width="150px";

        postDiv.appendChild(title);
        postDiv.appendChild(img);

        postDiv.addEventListener('click',()=>{
          handlePostClick(post.id);
        });

         postList.appendChild(postDiv);
         
         if(posts.length >0){
          handlePostClick(posts[0].id);
         }
      

      });
      

      });

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
  .catch((error)=>console.error('Error loading post details:', error));

}

function addNewPostListener() {
  const form = document.getElementById('new-post-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    // ✅ Collect values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const content = document.getElementById('content').value;

    // Optional inputs
     const image = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d";
// or document.getElementById('image')?.value
    const date = new Date().toISOString().split('T')[0]; // format: YYYY-MM-DD

    // ✅ Construct the post object
    const newPost = {
      title,
      author,
      content,
      image,
      date
    };

    // ✅ Debug log
    console.log("Submitting new post:", newPost);

    // ✅ Send to server
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    })
      .then((res) => res.json())
      .then((createdPost) => {
        console.log("Post created:", createdPost);
        form.reset();
        displayPosts(); // Refresh post list
      })
      .catch((error) => console.error("Error creating post:", error));
  });
}

    
function main(){
  displayPosts();
  addNewPost();
}


document.addEventListener('DOMContentLoaded', main);