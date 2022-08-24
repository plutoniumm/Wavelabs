# 4G Network Arch

<style>
    img{
        max-height: 300px;
        max-width: 768px;
    }
</style>

Data Rate: 4G will range from 20 to 100 Mbps.

<img src="https://i.imgur.com/vwwByXH.jpg" alt="Generic Mobile Comm Arch"/>

![Connection Sturcture](/assets/w1/001.png)

### Legend
**MME** - Mobility Management Entity
- It is used for Paging ,Authentication, Handover and Selection of Serving Gateway

**SGW** - Serving gateway
- It is used to Routing and Forwarding user data packet. \

**PDN-GW** - Packet Data Network Gateway
- It is used for user equipment (UE) IP allocation \

**HSS** - Home Subscriber Server
- It is a user Database used for service subscriber, user identification and addressing \

**PCRF** - Policy and Charging Rule Function
- It provide quality of service and charging \

**eNode B** - evolved Node B
- It is used as radio resources management and radio bearer control

### Process
> Connection: Arrows i.e ->, <-, <->||=.. Bolded are User Plane, rest are control plane/both
-  **UE -> eNB** • eNB Provides Radio Interface to UE
- eNB -> MME • MME Does Auth & Tracks Location
- - MME -> HSS • HSS Gives Sub info of /allUsers
- - **MME -> SGW** • SGW is instructed to form Tunnel w/ User
- SGW = UE • SGW facilitates data transfer and eNB transfer
- **SGW -> PGW = PDN** • PDN is external network

## Built On/Supports
- IPv6
- GSM (2G Standard)
- MIMO: CDMA, OFDM i.e **≡>-<≡**
- IMT2000 (3G Standard)
- WLAN
- Software Defined Radio
- Ad Hoc & Multi Hop Networks
- VoIP - Avoid 2 protocols on same circuit


> **SideNote**
> - IPv6 simplified the router’s task compared to IPv4
> - IPv6 is more compatible to mobile networks than IPv4
> - IPv6 allows for bigger payloads than what is allowed in IPv4


## Advantages:
It provides better spectral efficiency.
It has high speed, high capacity and low cost per bit

# 5G Network Arch

![Connection Sturcture](/assets/w1/002.png)

# Use Cases
Maintiainance Robots - @illwerke vkw in Austria by Energy Robotics GmBH - https://youtu.be/PkW9wx7Kbws - Can also be extended to AR as is being planned Sports industry for games
 Robots can go into toxic and radioactive environments (include Fukushima)
 Robots can use digital twin model to click and inspect and report back

Oil Rigs - IoT Sensors, realtime data
Sensors on say turbines which can detect vibrations which if outside normal range can be checked
Grid Monitoring

Fleet Management & Automatic Vehicles (CV2X) - Coal plant wagon Tipler can start getting in more coal from each wagon when more power demand is there

4G GPS least count is m, 5G is in cm

Drones

# Raw
- Max Throughput - 20GBps & 1ms Latency
- 1M Terminals/sq km.

##
- Control Services
- - Opti Energy Distri, to avoid fails
- Collection
- - Collection & Provision across system
- Mobile App
- - Reduces Manual Inspection
- - Hotline Operation

Cats
- Safety
- Customer Service
- Ops & Govnance
- Quality

**Network Slicing**


# Store
- https://docs.magmacore.org/docs/basics/quick_start_guide