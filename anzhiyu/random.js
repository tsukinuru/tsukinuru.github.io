var posts=["posts/4a17b156/","posts/266ec334/","posts/7429ccc3/","posts/d92b6daa/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };