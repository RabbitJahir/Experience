1. @PathVariable → input in URL path
2. @RequestParam → input in query string
3. @RequestBody → input as JSON (MOST IMPORTANT)

> - PathVariable
>```java
> @RestController
> public class HomePage {
> 
>     @GetMapping("/hello/{name}")
>     public String hello(@PathVariable String name) {
>         return "Hello " + name;
>     }
> }
>```

> RequestParam, /add?a=5&b=5
>```java
> @RestController
> public class HomePage {
> 
>   @GetMapping("/add")
> public int add(@RequestParam int a, @RequestParam int b) {
>     return a + b;
> }
> }
>```

> RequestBodt, see postMapping.md
