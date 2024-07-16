## Installation

**Required npm packages**
```bash
npm i express axios dotenv
```

--------------

**1. Install motion for your pi**
```bash
sudo apt install motion
```

**2. Motion**
Edit your motion config file:
```bash
sudo nano /etc/motion/motion.conf
```
Change daemon from off to on:
```bash
daemon on
```
Enable the streaming by changing stream_localhost to off:
```bash
stream_localhost off
```

Set the streaming port (default is 8081, you can change it if needed):
```bash
stream_port 8081
```

**Other changes I preferred:**

framerate 30: Sets the frame rate to 30 frames per second.

emulate_motion on: Forces the system to generate frames even if no motion is detected.

output_all on: Ensures that all frames are output, maintaining a continuous stream.

width and height adjusted.
```bash
width 720
height 560
framerate 30
emulate_motion on
output_all on
```

Start motion:
```bash
sudo motion
```

**3. Configuring picam**

Get your Pi's hostname:
```bash
hostname -I
```

Rename the .env.template to .env and edit like the following:
```bash
HOST_PORT=3000
STREAM_URL=http://<your_pi_ip_address>:8081
```

**4. Run picam**
```bash
node server.js
```