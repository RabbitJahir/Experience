> ```dart 
> press 'F5', if (launch.json shows) print the code, for dart language
>
> {
>   "version": "0.2.0",
>   "configurations": [
>     {
>       "name": "Dart Debug",
>       "type": "dart",
>       "request": "launch",
>       "program": "${file}"
>     }
>   ]
> }
> ```
>
> else { add a breakpoint on main, where the code starts running and start debuggin} 
>
> debuggin is very precise, having any kind of code that might throw error won't start the debugging