```md
## Sequential circuit/logic
```
> - A digital logic circuit whose output depends on both the current inputs and previous outputs.  
> - It can remember what happened before.  
> - Uses memory element to remember, latch or flip-flop

**-----------------------------------------------------------------------------------------------**


> ```md
> ### State table
> ```
> - A state table shows how a sequential circuit moves from its current state to its next state for each possible input.  
> - The key difference is that a state table describes the behavior of the whole sequential circuit, while a characteristic table describes how an individual flip-flop behaves.
> 
> | Present State A | Present State B | Input X | Next state A+ | Next state B+ | Output Y |
> |:---:|:---:|:---:|:---:|:---:|:---:|
> | 0 | 0 | 0 |  |  |  |
> | 0 | 0 | 1 |  |  |  |
> | 0 | 1 | 0 |  |  |  |
> | 0 | 1 | 1 |  |  |  |
> | 1 | 0 | 0 |  |  |  |
> | 1 | 0 | 1 |  |  |  |
> | 1 | 1 | 0 |  |  |  |
> | 1 | 1 | 1 |  |  |  |
> 
> - We can't fill in the outputs A+, B+, and Y yet without knowing the circuit's logic or its equations. 
> - Different circuits can have different next states and outputs for the same present state and input.
> - 4 basic types of flip-flops: JK, SR, D and T
> - Some circuits may or may not have y. It is just another output such as A and B, nothing else.

**-----------------------------------------------------------------------------------------------**

> ```md
> ### Finding state table from equations using JK flip-flop
> ```
> - inputs : **A+ = A . x + B . x**  
> - inputs : **B+ = A' . x**  
> - output : **Y = (A+B) . x'**
>
> calculate A+ and B+ for each combination of \(A,B,x\), then use these rules separately for flip-flops \(A\) and \(B\). There are \(2^3=8\) combinations because \(A\), \(B\), and \(x\) are binary variables.
> 
> | Present A | Present B | Input x | Next A+ | Next B+ | Output Y | JA | KA | JB | KB |
> |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
> | 0 | 0 | 0 | 0 | 0 | 0 | 0 | X | 0 | X |
> | 0 | 0 | 1 | 0 | 1 | 0 | 0 | X | 1 | X |
> | 0 | 1 | 0 | 0 | 0 | 1 | 0 | X | X | 1 |
> | 0 | 1 | 1 | 1 | 1 | 0 | 1 | X | X | 0 |
> | 1 | 0 | 0 | 0 | 0 | 1 | X | 1 | 0 | X |
> | 1 | 0 | 1 | 1 | 0 | 0 | X | 0 | 0 | X |
> | 1 | 1 | 0 | 0 | 0 | 1 | X | 1 | X | 1 |
> | 1 | 1 | 1 | 1 | 0 | 0 | X | 0 | X | 1 |
> 
> - used AND OR NOT
> - **A+ = JA & KA, B+ = JB & KB**

**-----------------------------------------------------------------------------------------------**

> ```md
> ### Finding state table from equations using SR flip-flop
> ```
>
> - inputs : **A+ = A . x + B . x**
> - inputs : **B+ = A' . x**
> - output : **Y = (A+B) . x'**
>
> Calculate A+ and B+ for each combination of (A,B,x), then use the SR excitation rules separately for flip-flops A and B. There are 2^3 = 8 combinations because A, B, and x are binary variables.
> 
> | Present A | Present B | Input x | Next A+ | Next B+ | Output Y | SA | RA | SB | RB |
> |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
> | 0 | 0 | 0 | 0 | 0 | 0 | 0 | X | 0 | X |
> | 0 | 0 | 1 | 0 | 1 | 0 | 0 | X | 1 | 0 |
> | 0 | 1 | 0 | 0 | 0 | 1 | 0 | X | 0 | 1 |
> | 0 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | X | 0 |
> | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | X |
> | 1 | 0 | 1 | 1 | 0 | 0 | X | 0 | 0 | X |
> | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 1 |
> | 1 | 1 | 1 | 1 | 0 | 0 | X | 0 | 0 | 1 |
> 
> - Used AND, OR, NOT
> - **A+ = SA & RA, B+ = SB & RB**

**-----------------------------------------------------------------------------------------------**

> ```md
> ### Finding state table from equations using D flip-flop
> ```
>
> - inputs : **A+ = A . x + B . x**
> - inputs : **B+ = A' . x**
> - output : **Y = (A+B) . x'**
>
> Calculate A+ and B+ for each combination of (A,B,x), then use the D excitation rules separately for flip-flops A and B. There are 2^3 = 8 combinations because A, B, and x are binary variables.
> 
> | Present A | Present B | Input x | Next A+ | Next B+ | Output Y | DA | DB |
> |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
> | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
> | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 1 |
> | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 |
> | 0 | 1 | 1 | 1 | 1 | 0 | 1 | 1 |
> | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
> | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 0 |
> | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 0 |
> | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 0 |
> 
> - Used AND, OR, NOT
> - **A+ = DA, B+ = DB**

**-----------------------------------------------------------------------------------------------**

> ```md
> ### Finding state table from equations using T flip-flop
> ```
>
> - inputs : **A+ = A . x + B . x**
> - inputs : **B+ = A' . x**
> - output : **Y = (A+B) . x'**
>
> Calculate A+ and B+ for each combination of (A,B,x), then use the T excitation rules separately for flip-flops A and B. There are 2^3 = 8 combinations because A, B, and x are binary variables.
> 
> | Present A | Present B | Input x | Next A+ | Next B+ | Output Y | TA | TB |
> |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
> | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
> | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 1 |
> | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 1 |
> | 0 | 1 | 1 | 1 | 1 | 0 | 1 | 0 |
> | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 0 |
> | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 |
> | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1 |
> | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 |
> 
> - Used AND, OR, NOT
> - **A+ = TA, B+ = TB**

**-----------------------------------------------------------------------------------------------**


> ```md
> ### State diagram
> ```
> > - A state diagram is a visual representation of your state table. Each circle represents a state (A,B), and each arrow shows what happens when input x is 0 or 1.
> 
> **using previous equation and state table**
> 
> > **A+ = A . x + B . x**, input  
> > **B+ = A' . x**, input  
> > **Y = (A+B) . x'**, output
> 
> > Because you have two state bits, \(A\) and \(B\), there are \(2^2=4\) states:
> 
> --- 
>
> **2. Get the arrows from your state table using previous state table**
> 
> | Current state AB | Input x | Next state A+B+ | Output Y | Arrow label |
> |:---:|:---:|:---:|:---:|:---:|
> | 00 | 0 | 00 | 0 | 0/0 |
> | 00 | 1 | 01 | 0 | 1/0 |
> | 01 | 0 | 00 | 1 | 0/1 |
> | 01 | 1 | 11 | 0 | 1/0 |
> | 10 | 0 | 00 | 1 | 0/1 |
> | 10 | 1 | 10 | 0 | 1/0 |
> | 11 | 0 | 00 | 1 | 0/1 |
> | 11 | 1 | 10 | 0 | 1/0 |
> 
> ![mealy diagram](pics/mealy_1.png)
> 

**-----------------------------------------------------------------------------------------------**

>```md
> ### Mealy and Moore state diagrams
> ```
> > - **Mealy machine:** The output depends on the present state and current input. The output is usually written on each arrow as `input/output`.
> 
> > - **Moore machine:** The output depends only on the present state. The output is written inside or beside each state circle, and arrows are labeled with the input.
>
> **Shorcut** : Output, y contains x, then mealy. Output y contains A, B no x, then moore

**-----------------------------------------------------------------------------------------------**

