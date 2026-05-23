### seeing all packages installed and their size in h

- dpkg-query -Wf '${Installed-Size}\t${Package}\n' | awk '{printf "%.2f MB\t%s\n", $1/1024, $2}' | sort -n

## seeing disk space

- df -h

# packages

- `dpkg -l` list all packages
- `apt-mark showmanual` see packages downloaded manually
- `grep " install " /var/log/apt/history.log` see packages downloaded recently
- `sudo apt remove package_name` keeps data
- `sudo apt purge package_name` deletes data too