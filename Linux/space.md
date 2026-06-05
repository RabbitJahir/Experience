# Debian/Linux Package and Disk Space Commands

## Disk Space

### View disk usage of mounted filesystems
```bash
df -h
```
- `df` = disk free
- `-h` = human-readable

### View total size of a folder
```bash
du -sh folder_name
```
- `du` = disk usage
- `-s` = summary
- `-h` = human-readable

### View sizes of folders in current directory
```bash
du -sh *
```

### View sizes of immediate subfolders
```bash
du -h -d 1
```

### Sort folders by size
```bash
du -sh * | sort -h
```

### Interactive disk usage viewer
```bash
ncdu
```

Install:
```bash
sudo apt install ncdu
```

---

## Package Information

### List all installed packages
```bash
dpkg -l
```

### List manually installed packages
```bash
apt-mark showmanual
```

### Show package installation history
```bash
grep " install " /var/log/apt/history.log
```

### Show package removal history
```bash
grep " remove " /var/log/apt/history.log
```

### Show package upgrade history
```bash
grep " upgrade " /var/log/apt/history.log
```

### Check if a package is installed
```bash
dpkg -s package_name
```

### Search installed packages
```bash
dpkg -l
dpkg -l | grep package_name
```

### Show detailed package information
```bash
apt show package_name
```

### Show package dependencies
```bash
apt-cache depends package_name
```

### Show packages depending on a package
```bash
apt-cache rdepends package_name
```

---

## Package Sizes

### Show all installed packages and their sizes
```bash
dpkg-query -Wf '${Installed-Size}\t${Package}\n' | awk '{printf "%.2f MB\t%s\n", $1/1024, $2}' | sort -n
```

### Show size of a specific installed package
```bash
dpkg-query -Wf '${Installed-Size}\t${Package}\n' package_name | awk '{printf "%.2f MB\n", $1/1024}'
```

### Show the 20 largest installed packages
```bash
dpkg-query -Wf '${Installed-Size}\t${Package}\n' | awk '{printf "%.2f MB\t%s\n", $1/1024, $2}'| sort -n | tail -20
```

---

## Installing Packages

### Update package lists
```bash
sudo apt update
```

### Upgrade installed packages
```bash
sudo apt upgrade
```

### Full system upgrade
```bash
sudo apt full-upgrade
```

### Install a package
```bash
sudo apt install package_name
```

### Install multiple packages
```bash
sudo apt install package1 package2 package3
```

---

## Removing Packages

### Remove package but keep configuration files
```bash
sudo apt remove package_name
```

### Remove package and configuration files
```bash
sudo apt purge package_name
```

### Remove unused dependencies
```bash
sudo apt autoremove
```

### Remove downloaded package cache
```bash
sudo apt clean
```

### Remove old cached packages only
```bash
sudo apt autoclean
```

### full line
```bash
sudo apt update && sudo apt upgrade && sudo apt autoremove
```
---

## Finding Large Files and Directories

### Largest files in current directory
```bash
find . -type f -exec du -h {} + | sort -h | tail -20
```

### Largest directories in home folder
```bash
du -sh ~/* | sort -h
```

### Largest files on the system
```bash
sudo find / -type f -exec du -h {} + 2>/dev/null | sort -h | tail -20
```

---

## Useful Package Cleanup Workflow

### 1. See manually installed packages
```bash
apt-mark showmanual
```

### 2. Find large packages
```bash
dpkg-query -Wf '${Installed-Size}\t${Package}\n' | sort -n | tail -20
```

### 3. Remove unwanted packages
```bash
sudo apt purge package_name
```

### 4. Remove unused dependencies
```bash
sudo apt autoremove
```

### 5. Clean package cache
```bash
sudo apt clean
```

### 6. Check remaining disk space
```bash
df -h
```