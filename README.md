## Blog post Manager
This is a simple blog web application built using HTML,CSS and JavaScript. it uses Html live server for the frontend and Json server for the backend.


**.** View all available blog post.
**.** View post details of the blog post *title,author,content*.
**.** Add a new blog post.
**.** Edit an existing blog post.
**.** Delete a blog post.
**.** All changes are persisted to a backend using json-server.

### Project structure

project-folder/
├── index.html
├── src/
│   └── index.js
├── css/
│   └── styles.css
├── db.json
└── README.md

### Setup instructions
1. **Clone the Rrpository**
2. **install JSON server Globally**
   *npm install -g json-server@0.17.4*
3.**Start the Backend**
   *json-server --watch db.json*
4. **start the Frontend**
    *live-server*
