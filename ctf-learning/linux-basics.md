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
- grep -iE "password|passwd|secret|token|key" config.txt (case-insensitive and multiple patterns)
- grep r "password". (recursive)
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
- [ rm -f directory ]
- [ rm -f file ] (forcefully)
-
```

```md
### mkdir

- make a directory
- [ mkdir location ]
```

````md
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

---

```md
### ss

- network connection
- [ ss -tuln ], [ netstat -tuln ] (List all active listening ports (TCP & UDP))
- -t (TCP)
- -u (UDP)
- -l (listening)
- -n (don't resolve names,show numeric ports)
- -p (Show process name and PID using the socket (requires sudo or root privileges).)
- [ sudo ss -tulnp ], [ netstat -tulnp ]
- [ ss -ta ], [ netstat -ta ] (View all active established network connections)
- [ ss -an ], [ netstat -an ] (Display all open sockets and connections)
- [ sudo ss -tulnp | grep -E "LISTEN|ESTAB" ] ( pipe only LISTEN or/and ESTAB)
- [ curl http://127.0.0.1:number ]
```

```md
### ip

- network configuration
- [ ip a ], [ ip addr ] (show all ip addresses)
- [ ip route ], [ ip r ] (routing table )
- [ sudo ip link set eth0 up], [ sudo ip link set eth0 down ] (Enable or disable an interface)
--------------------------------------------------------------------------------------------
| Old Command (net-tools) | Modern Equivalent (iproute2) | Purpose                         |
| ----------------------- | ---------------------------- | ------------------------------- |
| ifconfig                | ip a                         | View IP addresses & interfaces  |
| ifconfig eth0 up        | ip link set eth0 up          | Bring interface UP              |
| ifconfig eth0 down      | ip link set eth0 down        | Bring interface DOWN            |
| route -n                | ip r                         | Show routing table              |
| arp -a                  | ip neigh                     | Show ARP cache (neighbor table) |
--------------------------------------------------------------------------------------------
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

```
> > <
> > &&
```
