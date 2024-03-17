var posts=["posts/d92b6daa/","posts/7429ccc3/","posts/266ec334/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };