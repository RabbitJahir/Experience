```md
### ls

- (list)(shows current directory's file)
- [ ls ]

### ls -lah

- [ls -la] , [ls -l -a], [ls -l -a -h]
- (list -long-format -all -human-readable)
- [ -l], long format of files and directories in current directory
- [ -a] shows everything including hidden files (shows . and ..)(. is current .. is one above)
- [ -h] shows space occupied in this directory, converted to mb or gb

#### examples

- [drwxrwxr-x 2 rabbit rabbit 4096 Sep 7 18:41 3D]
- [-rwxrwxrwx 1 rabbit rabbit 587 Jul 31 00:21 git.md]

---

- at front, d is directory, - is file, l is link
- three groups of rwx [read, write, execute]. First group shows for owner, second for groups, third for others

---

- [ ls | wc -l ]
- (list pipe(|) word-count -lines(files))
- [ ls -a | wc -l ]
- (list -all pipe word-count -lines(files includeing hidden) )
```

```md
### wc

- wc (word count)
- wc -l (lines only)
- wc -w (word only)
- wc -c (bytes only)
- wc -m (characters only)
```

```md
### cd

- cd is change-directory
- [ cd ../ ], [ cd .. ] (go above one directory)
- [ cd . ] (current directory)
- [ cd ~ ] (home directory)
- [ cd - ] (previous directory, change between 2, like alt+tab)
- [ cd / ] (root of the filesystem)
```

```md
### pwd

- print working directory
- [ pwd ]
```

```md
### cat

- print a file
- [ cat file1.txt ]
- [ cat file1.txt file2.md ]
- [ cat file1.txt file2.md > combine_them.txt ]
```

```md
### less

- see huge files one screen at a time
- space or page down to go down a page
- b or page up to go up a page
- down arrow or j for line down
- up arrow or k for line up
- g and G for jumping to top or bottom of page
- /pattern , /error, /failed, /something-specific
- n or N for next and previous result
- F for watching live updates
- q for quitting
```


```md
### head

- view top lines of a file
- [ head file.txt ] (top 10 lines)
- [ head -n 20 something.md ] (20 lines)
- [ head -20 something.md ] (20 lines)
```

```md
### tail

- view last lines of a file
- [ tail -f something.log ] (-follow the file as it is updating)
```

```md
### grep

- searches text
- grep "password" file.txt
- grep -i "PassWORD" file.txt (case insensitive)
- grep -n "password" file.txt (show line numbers )
- grep -E "password|passwd|secret|token|key" config.txt (-E multiple patterns)
- grep -i "password|passwd|secret|token|key" config.txt (case-insensitive )
- grep r "password" . (recursive) ( doing the same operation in this and all of its subdirectories)
- grep rI "password" . (ignore binary files)
- grep -v "comment" file.txt (invert match)
```

```md
### find

- [ find . -name "flag.txt" ] (exact match in current directory)
- [ find . -iname "flag.txt" ] (case insensitive in current directory)
- [ find . -name "*.txt" ] ( \* is all ending in .txt in current directory)
- [ find / -name "flag.txt" ] ( in entire filesystem)
- [ find / -type f ] (all files)
- [ find / -type d ] (all directories)
- [ find / -type l ] (all links)
- [ find / -type f -perm -o+w 2>/dev/null ] (file by permission)
- [ find / -user root 2>/dev/null ] (by user)
- [ find /tmp -type f -mtime -1 ] (modified the last day)
```

```md
### file

- shows description of a file
- [ file filename.jpg ]
- [ file filename.txt ]
- [ file * ]
- [ file -i name ] (MIME type)
- [ file -b name ] (Brief mode)
```

```md
### stat
- displays detailed file or filesystem status information.
- [ stat filename ]
- [ stat -t data.txt ] (Concise / Terse Output (-t)) (Prints the metadata in a single, space-separated line—ideal for piping into scripts)
- [ stat -f data.txt ] (Filesystem Information) (Shows details about the filesystem on which the file resides (block size, available space, free inodes) instead of the file itself)
```

```md
### strings

- like cat but best for images, executables, binary or formats that cant be read easily
- [ strings mystery.jpg | grep -iE "flag|password|secret" ] ( prints image texts pipeline only case insensitive and multiple if matches words between strings)
```

```md
### xxd
- creates hexadecimal dump
- seeing raw bytes
- [ xxd filename ] (in hexadecimal)
- [ xxd -r file ] (reverses)
- [ xxd -l 64 file ] (shows first 64 bytes)
- [ xxd -b file ] (in binary)

---

- [ xxd -l 16 image.png ]
- png [89 50 4e 47]
- jpg/jpeg (JFIF) [FF D8 FF E0]
- jpg/jpeg (Exif) [FF D8 FF E1]
- pdf [25 50 44 46]
- zip [50 4b 03 04]
- gif [47 49 46 38]
- 7z [37 7A BC AF]
- RAR [52 61 72 21]
- GZIP [1F 8B 08 00]
- BMP [42 4D]

---

#### fix broken bytes

- [ xxd -p challenge.png | sed '1s/^................/89504e470d0a1a0a/' | xxd -r -p > fixed.png ] ( Convert to plain hex, replace the first 16 hex characters, and revert back)
```

```md
### chmod

- change permission of any file
- [ chmod +x script.sh ] (makes it executable)

---

7 = rwx
6 = rw-
5 = r-x
4 = r--
0 = ---

---

- chmod ownergroupsothers file.txt
- [ chmod 764 file.txt ] (7 for owner, 6 for groups, 4 for others)
- [ chmod 700 secret.txt ] (only owner can read write and execute)
```

```md
### cp

- copy source destionation, for backup
- [ copy -r folder backup ] (for directories)
```

```md
### mv

- move and rename
- [ mv file /tmp/ ]
- [ mv old.txt new.txt ]
```

```md
### rm

- remove
- [ rm file ]
- [ rm -r directory ]
- [ rm -f file ] (forcefully)
- [ rm -ri directory ]
```

```md
### mkdir

- make a directory
- [ mkdir location ]
```

```md
### ps

- process status
- (information about currently running programs on system)
- PID (Process ID)
- [ ps aux ] (view all programs)
- [ ps -ef ] (view all programs)
- [ ps aux | grep a_program_name ] (view all programs)

---

| Column     | Full Name         | Description                                         |
| ---------- | ----------------- | --------------------------------------------------- |
| USER / UID | User ID           | The user account running the process.               |
| PID        | Process ID        | The unique numerical ID assigned to the process.    |
| %CPU       | CPU Usage         | Percentage of CPU time the process is using.        |
| %MEM       | Memory Usage      | Percentage of system RAM the process is using.      |
| VSZ        | Virtual Size      | Virtual memory size of the process (in KB).         |
| RSS        | Resident Set Size | Physical RAM used by the process (in KB).           |
| STAT       | Process State     | State code (R = Running, S = Sleeping, Z = Zombie). |
| COMMAND    | Command           | The program name or exact command used to start it. |
```

```md
### ln
1. hard links
2. symbolic links (soft links)

---

- [ ln -s TARGET LINK_NAME ]

---

-s	Create a symbolic link
-f	Force removal of an existing destination before creating the link
-v	Display what the command is doing
-n	Treat an existing symbolic link to a directory as a normal file in certain operations

---
```

```md
### ss

- network connection
- [ ss -tuln ], [ netstat -tuln ] (List all active listening ports (TCP & UDP))
- -t (TCP)
- -u (UDP)
- -l (listening)
- -n (don't resolve names,show numeric ports)
- -p (Show process name and PID using the socket (requires sudo or root privileges).)

-----------------------------------------
--
- [ sudo ss -tulnp ], [ netstat -tulnp ]
- [ ss -ta ], [ netstat -ta ] (View all active established network connections)
- [ ss -an ], [ netstat -an ] (Display all open sockets and connections)
- [ sudo ss -tulnp | grep -E "LISTEN|ESTAB" ] ( pipe only LISTEN or/and ESTAB)
- [ curl http://127.0.0.1:number ]

-----------------------------------------
--
- [ ss -tuln | grep :31000 ] (if listening, will return output else no output)
- [ ss -tuln 'sport = :80' ]
- [ sudo ss -tulnp '( sport >= :30000 and sport <= :40000 )' ] (need space between everything)
```

```md
### ip

- network configuration
- [ ip a ], [ ip addr ] (show all ip addresses)
- [ ip route ], [ ip r ] (routing table )
- [ sudo ip link set eth0 up], [ sudo ip link set eth0 down ] (Enable or disable an interface)

-----------------------------------------
--
| Old Command (net-tools) | Modern Equivalent (iproute2) | Purpose                         |
| ----------------------- | ---------------------------- | ------------------------------- |
| ifconfig                | ip a                         | View IP addresses & interfaces  |
| ifconfig eth0 up        | ip link set eth0 up          | Bring interface UP              |
| ifconfig eth0 down      | ip link set eth0 down        | Bring interface DOWN            |
| route -n                | ip r                         | Show routing table              |
| arp -a                  | ip neigh                     | Show ARP cache (neighbor table) |

-----------------------------------------
--
```

```md
### curl
- client url
- interact with web servers directly
- [ curl -I http://example.com ], [ curl -i http://example.com] (View headers)
- [ curl -v http://example.com ] (Verbose) (Shows full SSL/TLS handshake, sent request headers, and received headers)
- [ curl -X POST http://example.com/login ] (POST)
- [curl -X POST \
    -d "username=admin&password=test" \
    http://example.com/login ] (POST data)
- [ curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"username":"admin"}' \
     http://example.com/api ] (JSON)
- [ curl -L http://example.com ] (follow redirects)(Follows HTTP redirects (301/302) automatically)
- [ curl -o page.html http://example.com ] (save)
- [ curl -k [https://127.0.0.1:8443](https://127.0.0.1:8443) ] (insecure)(Bypasses SSL certificate verification (useful for self-signed certs))
- [ curl -sL http://127.0.0.1:42069/ ] (silent and follow-redirects)
```

```md
### nc
- netcat
- simple tool for making TCP connections and sending/receiving raw data
- [ nc bandit.labs.overthewire.org 2220 ]
- -l(listen), -v(verbose), -p(port)
```

```md
### netstat
- network statistics utility
- [ netstat -tulnp ] 
- t ( tcp sockets )
- u ( udp sockets )
- l (listening only )
- n ( numeric address / ports )
- p ( process name / PID )
```

```md
### openssl
- ( a free, open-source software library that provides robust cryptographic functions and secures internet communications using SSL and TLS protocols )
- [ openssl <subcommand> [flags] [arguments] ]
- [ openssl version -a ]

-----------------------------------------
--

- [ openssl dgst -sha256 file.txt ] ( Generate a SHA-256 hash )
- [ openssl enc -aes-256-cbc -pbkdf2 -salt -in secret.txt -out secret.enc ] ( Encrypt a file with AES-256-CBC )
- [ openssl enc -aes-256-cbc -pbkdf2 -d -in secret.enc -out secret.txt ] ( decrypt a file)

-----------------------------------------
--

- (openssl s_client is a command-line tool built into OpenSSL that acts as a generic SSL/TLS client.)
(It connects to network services secured by SSL/TLS (like HTTPS, SMTPS, IMAPS) and executes the initial TLS handshake, allowing you to inspect, test, and debug the connection at the transport level before any application data is sent)
- [ openssl s_client -connect host:port ]
- [ openssl s_client -connect google.com:443 ]
```

```md
### TLS
- (transport layer security)

- The Three Core Security Goals of TLS
- 1. Encryption (Confidentiality): Protects data from eavesdroppers (Man-in-the-Middle attacks).

- 2. Authentication (Identity): Uses digital X.509 certificates to verify that the server (and optionally the client) is who it claims to be.

- 3. Integrity: Uses Message Authentication Codes (MAC / HMAC) to ensure data hasn't been altered or tampered with in transit.
```

```md
### wget
- download things
```

```md
### ssh
- secure shell
- [ ssh rabbit@192.168.1.50 ] (connect to remote server)
- [ ssh -p 2222 rabbit@127.0.0.1 ] (connect on custom port)
- [ ssh rabbit@192.168.1.50 "uptime && free -h" ] (execute command without opening interactive shell)
- [ ssh -i id_rsa user@target ] (private key) 
```

```md
### scp
- secure copy protocol
- scp [options] [source] [destination] 
- [ scp local_file.txt rabbit@192.168.1.50:/home/rabbit/ ] (copy from local to remote-server)
- [ scp rabbit@192.168.1.50:/home/rabbit/remote_file.txt ./ ] (copy from remote-server to local)
- [ scp -r ./my_folder rabbit@192.168.1.50:/home/rabbit/ ] (copy directory)

```

```md
### |
- pipeline
```

```md
### 2>/dev/null
- 2       stderr
- >       redirect
- /dev/null  discard it
```

```md
### shebang
- [ #!/bin/bash ]
- use this to linux know that anything containing this should be run as bash command
```

```md
### next line in terminal
- ctrl+v ctrl+j
```

```md
> > <
> > &&
```

```md
### special shell parameters

| Parameter | Meaning |
| --- | --- |
| $0 | Name used to invoke the shell or script |
| $1 | First positional argument |
| $2 | Second positional argument |
| $# | Number of positional arguments |
| $@ | All positional arguments, individually preserved |
| $? | Exit status of the previous command |
| $$ | Process ID of the current shell |

-----------------------------------------
--

bash -c 'echo "Shell name: $0"; echo "First argument: $1"' demo hello

```

```md
### id
- [ id ]
```

```md
### gdb
- [ 0x080491da <+20>: movl $0x1bd3,-0xc(%ebp) ]

| Column | Value | Description |
| --- | --- | --- |
| 1 | 0x080491da | The memory address of the instruction. |
| 2 | <+20> | The offset from the start of the function. This instruction is 20 bytes into `main`. |
| 3 | movl | The mnemonic for the instruction. It moves a 32-bit value. |
| 4 | $0x1bd3,-0xc(%ebp) | The operands. The constant `0x1bd3` is written into the stack slot at `EBP-12`. |

---

#### 1. Function setup and stack initialization

| Address / Offset | Instruction | Meaning |
| --- | --- | --- |
| 0x080491c6 <+0> | lea 0x4(%esp),%ecx | Calculates `ESP + 4` and stores it in `ECX`. |
| 0x080491ca <+4> | and $0xfffffff0,%esp | Aligns `ESP` to a 16-byte boundary by clearing the lower bits. |
| 0x080491cd <+7> | push -0x4(%ecx) | Pushes the 32-bit value stored at `ECX - 4` onto the stack. |
| 0x080491d0 <+10> | push %ebp | Saves the caller's frame pointer. |
| 0x080491d1 <+11> | mov %esp,%ebp | Sets up the current function's stack frame. |
| 0x080491d3 <+13> | push %ebx | Saves the value of `EBX` because the function may modify it. |
| 0x080491d4 <+14> | push %ecx | Saves `ECX` on the stack. |
| 0x080491d5 <+15> | sub $0x10,%esp | Reserves 16 bytes of stack space for local variables and temporary data. |
| 0x080491d8 <+18> | mov %ecx,%eax | Copies `ECX` into `EAX`. |

Key concepts:
- `ESP` — stack pointer, pointing to the current top of the stack.
- `EBP` — frame pointer, commonly used to access function arguments and local variables.
- `EAX`, `EBX`, `ECX` — 32-bit general-purpose CPU registers.
- `push` — decreases `ESP` by 4 bytes (in 32-bit mode) and stores a value on the stack.
- `lea` — calculates an effective address without loading the value from memory.


#### 2. Initializing and checking the input

| Address / Offset | Instruction | Meaning |
| --- | --- | --- |
| 0x080491da <+20> | movl $0x1bd3,-0xc(%ebp) | Stores the constant `0x1bd3` at the local stack slot `EBP-12`. |
| 0x080491e1 <+27> | cmpl $0x2,(%eax) | Compares `2` to the value stored at the address pointed to by `EAX`. |
| 0x080491e4 <+30> | je 0x8049206 <main+64> | Jumps to `main+64` if the comparison is equal. |
| 0x080491e6 <+32> | mov 0x4(%eax),%eax | Loads the pointer to the first argument after the program name. |
| 0x080491e9 <+35> | mov (%eax),%eax | Loads the string pointer stored at that address. |
| 0x080491eb <+37> | sub $0x8,%esp | Reserves 8 bytes for the upcoming `printf` call arguments. |
| 0x080491ee <+40> | push %eax | Pushes the argument string onto the stack. |
| 0x080491ef <+41> | push $0x804a008 | Pushes the address of a format string, likely used by `printf`. |
| 0x080491f4 <+46> | call 0x8049040 <printf@plt> | Calls `printf` through the PLT. |
| 0x080491f9 <+51> | add $0x10,%esp | Restores the stack pointer after the `printf` call. |
| 0x080491fc <+54> | sub $0xc,%esp | Reserves 12 bytes for the final `exit` call. |
| 0x080491ff <+57> | push $0xffffffff | Pushes `0xffffffff`, which is `-1` in 32-bit two's-complement form. |
| 0x08049201 <+59> | call 0x8049080 <exit@plt> | Calls `exit(-1)` and terminates the program. |


#### 3. Reading and converting your four-digit code

| Address / Offset | Instruction | Meaning |
| --- | --- | --- |
| 0x08049206 <+64> | mov 0x4(%eax),%eax | Loads the value at `EAX + 4` into `EAX`. |
| 0x08049209 <+67> | add $0x4,%eax | Advances the pointer by 4 bytes to the next argument. |
| 0x0804920c <+70> | mov (%eax),%eax | Loads the string pointer stored at that address. |
| 0x0804920e <+72> | sub $0xc,%esp | Reserves 12 bytes for the `atoi` call. |
| 0x08049211 <+75> | push %eax | Pushes the command-line argument onto the stack. |
| 0x08049212 <+76> | call 0x80490a0 <atoi@plt> | Calls `atoi` to convert the numeric string into an integer. |
| 0x08049217 <+81> | add $0x10,%esp | Cleans up the stack after the call. |
| 0x0804921a <+84> | cmp %eax,-0xc(%ebp) | Compares the result of `atoi` with the value stored at `EBP-12`. |
| 0x0804921d <+87> | jne 0x804924a <main+132> | Jumps to `main+132` if the user input does not match the expected code. |
The critical instructions are:

| Instruction | Meaning |
| --- | --- |
| `movl $0x1bd3,-0xc(%ebp)` | Stores the expected value `0x1bd3` in a local variable. |
| `call 0x80490a0 <atoi@plt>` | Converts the user-supplied string into an integer. |
| `cmp %eax,-0xc(%ebp)` | Compares the converted input against the expected value. |
| `jne 0x804924a <main+132>` | Jumps away if the comparison fails. |

- The first instruction stores the expected value, `0x1bd3`, in a local variable. The `atoi` call converts your input to an integer, and `cmp` checks whether it matches that variable.

The hexadecimal value `0x1bd3` equals decimal `7123`.

#### 4. What happens when the code is correct?

| Address / Offset | Instruction | Meaning |
| --- | --- | --- |
| 0x0804921f <+89> | call 0x8049050 <geteuid@plt> | Retrieves the effective user ID of the process. |
| 0x08049224 <+94> | mov %eax,%ebx | Saves the returned effective user ID in `EBX`. |
| 0x08049226 <+96> | call 0x8049050 <geteuid@plt> | Retrieves the effective user ID again. |
| 0x0804922b <+101> | sub $0x8,%esp | Reserves 8 bytes for function arguments. |
| 0x0804922e <+104> | push %ebx | Pushes the saved effective user ID. |
| 0x0804922f <+105> | push %eax | Pushes the newly retrieved effective user ID. |
| 0x08049230 <+106> | call 0x8049090 <setreuid@plt> | Calls `setreuid` with the two IDs. |
| 0x08049235 <+111> | add $0x10,%esp | Reclaims 16 bytes of stack space. |

- The `setreuid` call is relevant because this is a setuid executable. It attempts to set the real and effective user IDs to the supplied values. The precise privilege behavior depends on the executable's ownership and permissions.

#### 5. Assembly vocabulary cheat sheet

| Term | Definition | Example |
| --- | --- | --- |
| Instruction address | Memory address where an instruction resides | `0x080491da` |
| Function offset | Byte offset from the function's beginning | `<+20>` |
| Mnemonic | Name of the operation | `movl`, `cmp`, `jne` |
| Operand | Register, constant, or memory reference used by an instruction | `$0x1bd3` |
| Immediate operand | Literal constant encoded in the instruction | `$0x1bd3` |
| Register operand | A CPU register used by the instruction | `%eax` |
| Memory operand | A memory location accessed by the instruction | `-0xc(%ebp)` |
| Conditional jump | A jump that depends on CPU flags | `je`, `jne` |
| PLT | Procedure Linkage Table, used to call dynamically linked functions | `printf@plt` |
| Stack frame | Memory area associated with a function call | Variables accessed using `%ebp` |
| Hexadecimal | Base-16 number representation | `0x1bd3` |
| Disassembly | Human-readable representation of machine-code instructions | The listing above |

- The most important pattern for CTF reverse engineering: find a `cmp` instruction, identify the values being compared, trace where those values originate, and then inspect the conditional jump that determines the program's next action.

```