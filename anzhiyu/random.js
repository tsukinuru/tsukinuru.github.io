var posts=["posts/7429ccc3/","posts/d92b6daa/","posts/266ec334/","posts/f9a31fa8/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };