> ```java
> - package com.learning.javaback;
> -
> - import java.util.List;
> -
> - import org.springframework.web.bind.annotation.GetMapping;
> - import org.springframework.web.bind.annotation.RestController;
> -
> -
> - class Response{
> -     public String name;
> -     public int code;
> -     Response(String name, int code){
> -         this.name = name;
> -         this.code = code;
> -     }
> - }
> -
> - @RestController
> - public class homePage{
> -     @GetMapping("/")
> -     public Response homePage(){
> -         return new Response("Rabbit", 1006);
> -     }
> - }
> ```

> ```java
> - @RestController
> - public class homePage{
> -     @GetMapping("/")
> -     public List<Response> homePage(){
> -         return List.of(
> -             new Response("Rabbit", 1006),
> -             new Response("Rabbit", 1006)
> -         );
> -     }
> - }
> ```

>```java
> - package com.learning.javaback;
> - 
> - import java.util.HashMap;
> - import java.util.Map;
> - 
> - import org.springframework.web.bind.annotation.GetMapping;
> - import org.springframework.web.bind.annotation.RestController;
> - 
> - class Response {
> -     public String name;
> -     public int code;
> - 
> -     Response(String name, int code) {
> -         this.name = name;
> -         this.code = code;
> -     }
> - }
> - 
> - @RestController
> - public class HomePage {
> - 
> -     @GetMapping("/")
> -     public Map<String, Response> homePage() {
> -         Map<String, Response> map = new HashMap<>();
> - 
> -         map.put("user1", new Response("Rabbit", 1006));
> -         map.put("user2", new Response("Alice", 2001));
> - 
> -         return map;
> -     }
> - }
>```