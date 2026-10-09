### overthewire.org
- start with bandit

```md
level-0
- ssh -p 2220 bandit.labs.overthewire.org (wait till loads)
- give password, and might encounter password not working

-----------------------------------------
--

- !!! You are trying to log into this SSH server on port 2220 with a username
!!! that does not match the bandit game.
- trying to access the link with local username 

-----------------------------------------
--

- ssh -p 2220 bandit0@bandit.labs.overthewire.org (use this username to login)
- then try password
```

```md
level-0-1
- [ pwd ] (see current directory)
- [ cd ~ ] ( go to home directory)
- [ cat readme ]
- [ cat readme | grep "password" ]
- [ 6y2kwnwK6grgvwvpvLaa2T1cpFEKOhNR ]
```

```md
level-1-2
- [ - ] ( has special meanings in linux )
- [ cat ./- ]
- [ PK8fYLZg2hnHSz83plBL1iEPKdD3QToB ]
```

```md
level-2-3
- [ -- ] (special meaning)
- [  ] (spaces)

-----------------------------------------
--

- for space, quatation or \
- for special-meaning, ./

-----------------------------------------
--

- [ cat "./--spaces in this filename--" ]
- [ cat ./--spaces\ in\ this\ filename-- ]
- [ 7ZZ2LFrykP2zEyvBl4m3clcL7tGYJPME ]
```

```md
level-3-4
- [ cd inhere ]
- [ ls -a ]
- [ cat ...Hiding-From-You]
- [ xzTXq1rDJQVVAzdv5cHq1TQytTWufAMq ]
```

```md
level-4-5
- [ cd inhere ]
- use [ cat ./-file00 ] on everyfile
- [ file ./* ] (see the types of file)
- [ 6C7h9GD8M6ai5nr7wo1RonrzFjj9yIrG ]
```

```md
level-5-6
- [ find . -type f -size 1033c ] (find here type file size 1033 bytes)
- [ file file ] (type of file)
- [ ls -l file ] (see permissions and if its executable or not)
- [ ls -a ] (filename structure matters, - this . are not same )
- [ pXa26xhMWaC2SvDotA4r9EgZkulOeSBW ]
```

```md
level-6-7
- [ cd / ] (in root system)
- [ find / -type f -user bandit7 -group bandit6 -size 33c ]
- [ find / -type f -user bandit7 -group bandit6 -size 33c 2>/dev/null ] (2>/dev/null removes the permissio denied files)
- [ Bmnnvf82KzQlfxgAI2d1zYbr1u9pr3E3 ] 
```

```md
level-7-8
- [ cat file.txt ]
- [ cat data.txt | grep "millionth" ]
- [ VR1ljMayciFxbnUokuQmJFw6QC9VKtub ]
```

```md
level-8-9
- [ sort data.txt ]
- [ sort data.txt | uniq -c ] (count and show)
- [ sort data.txt | uniq -u ] (show only unique)
- [ EjmOSvuAu7sGAHqHVcBDPirRe9T03kxl ]
```

```md
level-9-10
- [ cat data.txt | grep "=" ] (cat prints everything) (show raw content)
- [ strings data.txt | grep "=" ] (string prints human-readable texts ) (extract human-readable)
- [ B0s2khmbT9u0geKuOoVGW3JZKhndE3BG ]
```

```md
level-10-11
- [ cat data.txt ]
- [ base64 -decode data.txt ], [ base64 -d data.txt ]
- [ cat data.txt | base64 -d ]
- [ pYfOY6HwUsDj5rL9UvyhU7MCmv8vN5Ro ]
```

```md
level-11-12
- [ cat data.txt ]

-----------------------------------------
--

- [ tr "A-Za-z" "N-ZA-Mn-za-m" < data.txt ] (change a-z, start with n-z then a-m, 13+13 = 26)

-----------------------------------------
--

- [ Original:  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
ROT13:     N O P Q R S T U V W X Y Z A B C D E F G H I J K L M ]
- [ GROozWPO8QyN0mGrjUkID0WCYkZiQxrN ]
```

```md
level-12-13
- [ xxd -l 16 data.txt ] (the last part will indicate that this txt is a hex dump)
- [ cd /tmp ]
- [ mktemp -d ]
- [ cd to that location ]
- we are going to decompress the file so, its better to do it somewhere else 
- [ cp ~/data.txt . ]

-----------------------------------------
--

- [ xxd -r data.txt data ] (decompress once ) [ file data ] (check what kind of property it has)
- ( data: gzip compressed data, was "data2.bin", last modified: Sat Sep 26 21:54:21 2026, max compression, from Unix, original size modulo 2^32 584 )

-----------------------------------------
--

- the file is gzip compressed, it orginally was data2.bin
- [ gzip --help ] (find command that decompresses)
- [ gzip -d data ] (gzip: data: unknown suffix -- ignored) (gzip needs a file ending in gz)
- [ mv data data.gz ]
- again check the data using file

-----------------------------------------
--

- for me it's bz2 now,
- [ mv data data.bz2 ]
- decompress
- did it again and decompressed gzip and found (data: POSIX tar archive (GNU) )
- [ tar -tf data ] (tar -t(list) -f data(use file named data) ) (not extracting just seeing whats inside)

- [ tar -xf data ] (-x extract)
- use file again, i found out that its another tar
- can use bzip2 to .bin, but cannot use gzip to .bin
- [ qQYQiHOBPR8zR61qxYqX45quvihF2uzk ]
- a long haul.
```

```md
level-13-14
- sshkey.private is the key for next level
- but to enter that level we usually use a password, since theres no password but a private ssh key, we need to use ssh command and that key to get into the bandit 14

-----------------------------------------
--

- inside bandit13 use [ ssh -p 2220 -i sshkey.private bandit14@bandit.labs.overthewire.org ] read the error if you get it
- if you get error, it might say, can not login from localhost, but need to login from machine directly, so
- we need to copy the sshkey.private to localhost and then use that same command from local machine

-----------------------------------------
--

- to copy i used, went to machine first and then [ ssh -p 2220 bandit13@bandit.labs.overthewire.org 'cat sshkey.private' > file.txt ], go there and use the exact command, so cat that and show the key and then > means write/overwrite this content to there
- teaching SSH key-based authentication!!!!!!
```

```md
level-14-15
- [ ssh -p 30000 -i file.txt bandit15@bandit.labs.overthewire.org ]
- but the level did not tell us to ssh to port 30000, it just said port 30000 localhost
- here localhost means current level, so run this from current level, bandit14
- but even then its not saying to ssh, just a port, for just a port connection, netcat(nc)
- [ nc -v localhost 30000 ] (verbose, tell us what nc is doing)(hit enter and read)
- [ cat /etc/bandit_pass/bandit14 ] (level 13 told us that the password for level 14 was here)
- [ pbLYuZtTg4MgaqfJx8jbA9gKKGqM68A7 ]
```

```md
level-15-16
- [ TLS = Transport Layer Security ] ( a protocol that creates an encrypted and authenticated communication channel between two computers ) ( gets encrypted to meaningless bytes)
- [ SSL stands for Secure Sockets Layer ] ( SSL was the older technology. It was replaced by TLS )
- [ openssl s_client ] ( tool ) ( diagnostic tool for SSL/TLS network services )
- [ openssl s_client -connect localhost:30001 ]
- [ kS0Hf0u5HiXFwKMKFqXvPdOTNGGa0X8V ]
```

```md
level-16-17
- [ sudo ss -tulnp '( sport >= :31000 and sport <= :32000 )' ] (cant use becuse needs root)
- [ nmap -p 31000-32000 localhost ]
- [ nmap -sV -p 31000-32000 localhost ] ( service version detection)
- see which ports have ssl/tls, echo means they respond with what you type

-----------------------------------------
--

- [ openssl s_client -connect localhost:number ]
- we are looking for a ssl/tls connection that requires a password

-----------------------------------------
--

- [ openssl s_client -connect localhost:31790 -quiet ]
- [ openssl s_client -connect localhost:31790 -nocommands ]
- save the entire block to a separate file in your machine.

-----------------------------------------
--

- now, very important, ssh keys have this [ -----BEGIN OPENSSH PRIVATE KEY----- -----END OPENSSH PRIVATE KEY-----]
- make sure your password file dont have this, and try [ file bandit17key.txt ]
- then add the begin and end to the file, save it and try [ file bandit17key.txt ]

-----------------------------------------
--

- [ ssh -p 2220 -i bandit17key.txt bandit17@bandit.labs.overthewire.org ]
- [ KEYUPDATE ]
```

```md
level-17-18
- [ diff passwords.old passwords.new ]
- [ OQxXZjELndr90zuhOTDYBEomI0SZITXI ]
```

```md
level-18-19
- [ ssh -p 2220 bandit18@bandit.labs.overthewire.org ' cat ~/readme' > ban18.txt ]
- [ KpsOfPkcP7i1FlIExk2QEjyt6dw8dxZI ]
```

```md
level-19-20
- setuid (a special file permission in Linux that allows a user to execute an executable file with the privileges of the file's owner rather than their own. Only the owner can create or set a suid. others can only use it)
- [ -rwsr-xr-x ] ( the s means suid)
- [ ls -la ] ( find the file with suid )
- [ -rwsr-x---   1 bandit20 bandit19 14880 Sep 26 21:53 bandit20-do ] (owner is bandit20)
- [ file bandit20-do ]

-----------------------------------------
--

- [ ./bandit20-do ] [ ./bandit20-do whoami]
- cant execute it
- [ cd /etc/bandit_pass ] (cant open files, permission denied )
- what if the bandit20 execute command opens the bandit20 pass?
- [ ./bandit20-do cat /etc/bandit_pass/bandit20 ] 
- [ 4pIjcunZ0fK2vmp3IwfG8Vf7VhxD6pOA ]
```

```md
level20-21
- [ ./suconnect ]
- [ ./suconnect 2220 ]
- it makes a connection to localhost on the port you specify as a commandline argument [ nc -l 12345 ] then reads a line of text from the connection and compares it to the password in the previous level [ ./suconnect 12345 ] connection done, send password
- [ bW9kBv5WC3P4yoDyf12LSdGuNz5ka6hY ]
```

```md
level-21-22
- [ cd /etc/cron.d ]
- [ ls -l ] find file related to bandit22
- [ we are the group, so we cant read the x file]
- [ * * * * * ] ( minute, hour, day of month, month, day of week ) ( runnning always)
- [ RYVux2rHEm9tiXHmLFzuR7Vhx6AZQMEz ]
```

```md
level-22-23
- cd there, find the sh and see what it says, if permission failed, try using cat
- [ gKXDTAXnIz3OBxiPjRZ2uqutUlPZrBsw ]
```

```md
level-23-24
- [ cronjob_bandit24.sh ]
- [ #!/bin/bash
    cat /etc/bandit_pass/bandit24 > /tmp/rabbit/pass24.txt ]
- [ cp file.sh /var/spool/bandit24/foo ]
- [ hVQMk3lJNsmQ7VF3ubyrNNBom7BOgVXv ]
```

```md
level-24-25
- [ nc localhost 30002 ]
- [ for pin in {0000..9999}; do
    echo "$pin"
    done ]
- [  for pin in {0000..0004}; do echo "hVQMk3lJNsmQ7VF3ubyrNNBom7BOgVXv $pin"; done; ]
- [ for pin in {0000..9999}; do echo "$password $pin"; done | nc localhost 30002 ]
- does the left first till buffer is loaded , then puts those output as inputs from right
- [ SoHfqMOEqIX2IYKVciZxvgpR9a2Djx4P ]
```

```md
level-25-26
- 
```










