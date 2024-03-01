var posts=["posts/d92b6daa/","posts/4a17b156/","posts/7429ccc3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };