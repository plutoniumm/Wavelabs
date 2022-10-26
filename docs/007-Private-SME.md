---
layout: default
---

# Private 5G

For years, if an organization wanted to deploy a private wireless network at a factory, office building, transit hub, other facility, or over a utility service or other geographic area, its options were limited to Wi-Fi or proprietary network technologies like LoRa or Sigfox.

With coming of 4G LTE & more important 5G, businesses can now finally deploy private versions of 5G for themselves. This is made possible crucially due to 2 reasons
- Software defined technologies allowing usage of COTS hardware
- Usage of OSS allowing very low barrier to entry

## Bands
**Low Band**
- <1GHz
- 100s of sq km
- <300 Mbps

**Mid Band**
- <6GHz
- Few kms radius
- Low Gbps speeds

**High Band/mmWave**
- <2km radius today
- Mid &rarr; high Gbps speeds

# Need of Private 5G
## Security
Threats such as malware may only need to steal or spoof credentials to gain access to networks. Private 5G communications are encrypted, and an appropriate SIM card must be present in the endpoint device to enable access.

Private 5G Also acts as effectively an airgap between 2 organizations. If say BARC wants an internal network they don't have to worry about anyone getting into their network other than by trojans since network is isolated

## Coverage
Wi-Fi deployments can be complex and cost-prohibitive in large usage areas such as airports or event venues, given the high number of endpoints needed. In remote areas where comprehensive Wi-Fi infrastructure does not exist, 5G and 4G can offer greater coverage without wiring.

The alternate 5G solution which needs no wiring but supports a massive rage of a few kms does not have high bandwidth eventually raising the same problem

## Performance
Both Wi-Fi and 5G operate on shared spectrums. Wi-Fi can experience performance challenges in terms of how it shares bandwidth across connected devices; in addition, Wi-Fi is more prone to interference and usage-based fluctuations. The number of access point handoffs can cause lags and dropouts.

In theory, Wi-Fi is capable of 5G's performance. In reality, Wi-Fi isn't able to offer the same reliability and performance guarantees that 5G can provide, such as low latency, faster speed, and greater bandwidth.

The best way to compare private 5G and Wi-Fi is to see how they will both have a role to play in supporting enterprises and organizations in the future. Most of today's computing devices work very well on Wi-Fi connections, although the same devices—if equipped for 5G—can often operate many times faster via 5G connection.

# Use Cases (General)
> This is general use cases only, specific use cases will be in a separate document


## Manufacturing
Private 5G can power robotics, autonomous guided vehicles (AGV), scanners, mixed reality (VR), and drive closed-loop manufacturing, including sensors and automated pickup of 3D-printed components.

## Logistics and warehousing
Private 5G can support AGV, remote expert solutions such as augmented reality (AR), VR, real-time asset and inventory tracking, facility modeling, predictive analytics, automated logistics control and management, and facility and environmental control.

Private 5G can offer high reliability, low latency support for massive machine-type communications (mMTC) and zero-trust security.

## Hospitality and venues
Private 5G can support both staff and guest applications and services, a mix of wireless connectivity options, and interior and exterior security cameras and sensors.

## Education and universities
Education entities need to support advanced research and protect intellectual property—challenges that 5G can address. This includes providing security as well as supporting research and development in inter-vehicle communication, drones, and related data.

## Industrial
Private 5G networks can revolutionize processes within industries such as manufacturing, logistics, energy, and mining. For example, 5G's transaction and processing speeds, as well as its reliability, will help enable technologies such as collaborative mobile robots, autonomous machines, swarm intelligence, AR, and predictive maintenance. For mines and other remote locales, private 5G is expected to bring new levels of performance and reliability to these more challenging settings.

# Key Advantages
- 5G Makes it possible for large organisations to be able to handle large amounts of data without mega scale infrastructure investment so things like Point Cloud Transfers, RealTime ML, Digital Clones and High Speed Simulators are now all possible

The Following 2 documents discuss specific SMEs
- [👨🏻‍🏫 Education & Research](./008-SME-Edu.md)
- [🌾 Agriculture](./009-SME-Agri.md)

## References
- **Cisco**: https://www.cisco.com/c/en/us/solutions/private-5g-networks.html
- **Business Standard**: https://www.business-standard.com/article/technology/what-is-private-5g-network-and-its-application-in-india-122041300237_1.html
- **RedHat**: https://www.redhat.com/en/topics/5g-networks/what-is-private-5g
- **Sierra Wireless**: https://www.sierrawireless.com/iot-blog/what-are-private-lte-networks/