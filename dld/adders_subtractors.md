# Half adder

### Circuit Diagram
![half_adder_circuit_diagram](pics/half_adder_circuit_diagram.png)

### Truth Table
| X | Y | S| C|
|:-:|:-:|:-:|:-:|
|0|0|0|0|
|0|1|0|1|
|1|0|0|1|
|1|1|1|0|

### Logical Diagram
![half_adder_logical_diagram](pics/half_adder_logical_diagram.png)

#### Boolean Expression
$S = XY' + X'Y$\
$S = X \oplus Y$

$C = XY $

<img src="pics/breaker.png" width=100% height=200px>

# Full adder

### Circuit Diagram
![full_adder_circuit_diagram](pics/full_adder_circuit_diagram.png)


### Truth Table
| X | Y | Z/ Cᵢₙ | S | Cₒᵤₜ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

### Logical Diagram
![full_adder_logical_diagram](pics/full_adder_logical_diagram.png)

#### Boolean Expression
$S = (X \oplus Y) \oplus Z$
 
$C = XY + (X \oplus Y) \cdot Z$


## Design Procedure of Full Adder

> - Half adders add only upto 2 bits. To add two binary numbers, we need to add 3 bits, including the carry.    
> - Z = Carry in, C = Carry out

#### **Kmap for S**
| | y'z'(00) |y'z(01) |yz(11) |yz'(10) |
|:-: |:-:|:-:|:-:|:-:|
x'(0) | |1| | 1|
x(1)  |1| |1|  | 

#### Boolean Expression :


$C = XZ + YZ + XY$\
$= XY + (X+Y)Z$\
$= XY + ((X \oplus Y) + XY)Z$\
$= XY + (X \oplus Y)Z + XYZ$ \
$= XY + (X \oplus Y)Z$


#### **Kmap for C**
| | y'z'(00) |y'z(01) |yz(11) |yz'(10) |
| :-: |:-:|:-:|:-:|:-:|
|x'(0) | | |1| |
|x(1)  | |1|1|1| 

#### Boolean Expression :

$C = XZ + YZ + XY$ \
$= XY + (X+Y)Z$  \
$= XY + ((X \oplus Y) + XY)Z$ \
$= XY + (X \oplus Y)Z + XYZ$ \
$= XY + (X \oplus Y)Z $


<img src="pics/breaker.png" width=100% height=200px>


# Half Subtractor

### Circuit Diagram
![half_subtractor_circuit_diagram](pics/half_subtractor_circuit_diagram.png)

### Truth Table
| A | B | Difference (D) | Borrow (Bo) |
|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |


### Logical Diagram
![half_subtractor_logical_diagram](pics/half_subtractor_logical_diagram.png)

#### Boolean Expression
$D = X \oplus Y$  
$B = X' \cdot Y$

<img src="pics/breaker.png" width=100% height=200px>

# Full Subtractor
 
### Circuit Diagram
![full_subtractor_circuit_diagram](pics/full_subtractor_circuit_diagram.jpeg)


### Truth Table
| A | B | Bin | Difference (D) | Borrow-out (Bout) |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 1 | 1 |

### Logical Diagram
![full_subtractor_logical_diagram](pics/full_subtractor_logical_diagram.png) 

#### Boolean Expression
$D = A \oplus B \oplus Bin$  
$Bout = A'B + A'Bin + BBin$

>```md
> # Design Precedure of Full Subtractor
>```

<img src="pics/breaker.png" width=100% height=200px>

