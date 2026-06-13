>```java
> package com.learning.javaback;
> 
> import org.springframework.web.bind.annotation.PostMapping;
> import org.springframework.web.bind.annotation.RequestBody;
> import org.springframework.web.bind.annotation.RestController;
> 
> class Response {
>     public String name;
>     public int code;
> }
> 
> class Post {
>     public String title;
>     public String content;
> }
> 
> @RestController
> public class HomePage {
> 
> @PostMapping("/user")
>     public String createUser(@RequestBody Response user) {
>         return "Received user: " + user.name;
>     }
> @PostMapping("/post")
>     public String createPost(@RequestBody Post post) {
>         return "Post created: " + post.title;
> }
> }
>```

> ```bash
> curl -X POST http://localhost:8080/user \
> -H "Content-Type: application/json" \
> -d '{"name":"rabbit","code":1006}'
> ```

> ```bash
> curl -X POST http://localhost:8080/post \
> -H "Content-Type: application/json" \
> -d '{"title":"my sad life","content":"its a > post about my sad life"}'
> ```

> without -X POST, defaut to GET
> -H, header, has many other types, 
> -d, send data in request body