>```md
># Half adder
>```
> ![half_adder_circuit_diagram](pics/half_adder_circuit_diagram.png)
>
> #### **FIGURE: Half adder Circuit Diagram** 
>
> ---
> #### **Truth Table**
> | X | Y | S| C|
> |:-:|:-:|:-:|:-:|
> |0|0|0|0|
> |0|1|0|1|
> |1|0|0|1|
> |1|1|1|0|
>
>---  
>  
>![half_adder_logical_diagram](pics/half_adder_logical_diagram.png)
>
> #### **Figure: Half adder Logical Diagram**
>
> **S** = x.y' + x' . y  
> **S**  = x $\oplus$ y
>
> **C** = x.y 
>
>---

**-----------------------------------------------------------------------------------------------**


>```md
># Full adder
>```
>![full_adder_circuit_diagram](pics/full_adder_circuit_diagram.png)
>
> #### **Figure: Full adder Circuit diagram**
>
>---
>
> #### **Truth Table**
> | X | Y | Cᵢₙ | S | Cₒᵤₜ |
> |:-:|:-:|:-:|:-:|:-:|
> | 0 | 0 | 0 | 0 | 0 |
> | 0 | 0 | 1 | 1 | 0 |
> | 0 | 1 | 0 | 1 | 0 |
> | 0 | 1 | 1 | 0 | 1 |
> | 1 | 0 | 0 | 1 | 0 |
> | 1 | 0 | 1 | 0 | 1 |
> | 1 | 1 | 0 | 0 | 1 |
> | 1 | 1 | 1 | 1 | 1 |
>
>---
>
>![full_adder_logical_diagram](pics/full_adder_logical_diagram.png)
>
> #### **Figure Full adder logical diagram**
>
> **S** = (X $\oplus$ Y) $\oplus$ Z  
> **C** = X.Y + (X $\oplus$ Y).Z
>
> ---
>
> ## **Design Procedure**
>
> - Half adders add only upto 2 bits. To add two binary numbers, we need to add 3 bits, including the carry.    
>
> - Z = Carry in, C = Carry out
>
>---
> #### **Kmap for S**
>| | y'z'(00) |y'z(01) |yz(11) |yz'(10) |
>|:-: |:-:|:-:|:-:|:-:|
>x'(0) | |1| | 1|
>x(1)  |1| |1|  | 
>
> **S** = xy'z' + x'y'z + xyz + x'yz'  
>  = x (y'z' + yz) + x ' (y'z + yz')  
>  = x (y $\oplus$ z) + x ' (y $\oplus$ z)'   
>  = x $\oplus$ (y $\oplus$ z)
>
> ---
> #### **Kmap for C**
>| | y'z'(00) |y'z(01) |yz(11) |yz'(10) |
>|:-: |:-:|:-:|:-:|:-:|
>x'(0) | | |1| |
>x(1)  | |1|1|1| 
>
> **C** = xz + yz + xy   
>   = xy + (x+y)z  
>   = xy + ( (x $\oplus$ y) + xy )z  
>   = xy + (x $\oplus$ y)z + xyz  
>   = xy + (x $\oplus$ y)z 
>
> ---


**-----------------------------------------------------------------------------------------------**


```md
# Half Substractor
```

**-----------------------------------------------------------------------------------------------**

```md
# Full Substractor
```