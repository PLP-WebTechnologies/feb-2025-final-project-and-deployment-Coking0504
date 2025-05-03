document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("nav-links").classList.toggle("active");
  });
  
  // Sample blog post loader for demonstration
  if (document.getElementById("post-container")) {
    const posts = [
      { title: "First Post", content: "This is the first blog post." },
      { title: "Learning JavaScript", content: "JavaScript is fun and powerful!" },
      { title: "Responsive Design Tips", content: "Make your site mobile-friendly!" }
    ];
  
    const container = document.getElementById("post-container");
    posts.forEach(post => {
      const div = document.createElement("div");
      div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
      container.appendChild(div);
    });
  }
  