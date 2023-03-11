<p align="center"><img src="https://raw.githubusercontent.com/UnderCurve/TextDeck/main/logo.png" height="150" align="center"></p>

 # Client Setup (Raspberry Pi)

### Main install
 1. Get raspbian lite 32 or 64 bit and flash it onto a sd card.
 2. ssh into your raspberry pi with the creds you set or if you didn't change anything your username will be `pi` with the password `raspberry`.
 3. run `wget https://raw.githubusercontent.com/UnderCurve/TextDeck/main/client.py`
 4. then run `sudo nano client.py` to open the file
 5. next go to line 34 and replace `http://localhost:8000` with your main computers ip address
### Auto Startup (optional)
This isn't required but it is recommended.
 1. Auto Login
	 1. open the terminal and run `sudo raspi-config`.
	 2. go to system options.
	 3. then `Boot / Auto Login`.
	 4. then choose `Console Autologin`.
	 5. then press `finish` but don't restart.
2. Script Auto Start
    1. run `sudo nano ~/.bashrc`.
    2. then scroll all the way to the bottom of the script.
    3. and add:
	```
	if [ $(tty) == "/dev/tty1" ]; then
	    cd /home/deck/
	    python3 client.py
	fi
    ```
    4. but replace `/home/deck/` with `/home/<your username>`.
    5. then press `ctrl + x` then `y` then press `ENTER`.
    6. then your done with the setup.
