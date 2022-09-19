# Security

> Continued reliance on GPRS (*General Packet Radio Service*) Tunneling Protocol (GTP), which is designed to allow data packets to move between different operators’ wireless networks, ex. when user is roaming. Telecom security company Positive Technologies said in a recent report that as long as GTP is in use, 5G will inherit all it's flaws

- Interop with 3G/4G implies the Network remains vulnerable to:
- - Spoofing
- - Fraud
- - User Impersonation
- - DoS

GTP remains in use even after 3G for availability of fallback to legacy protocol when 4G is not available. When any 5G device switches to 5G, due to rolling release it will in its lifetime be vulnerable to attacks against 3G or 4G.

## GTP Flaws
- No validation of User Location, allowing locations spoofing by end user, as was seen often during peak usage of Game: Niantic' Pokemon Go in 2016
- Subscriber impersonation is also possible by stealing credentials or spoofing user session data with a real Phone Number. This incurs unwarranted charges for
    1. **Owner** in case of real credentials
    2. **Company** with no one to bill in case of fake credentials
- Attacker can send multiple connection requests for 1 access point, for a DoS to others in region

## 5G Concerns
- **Decentralized security**: Due to many more contact points, much more security check needs to be performed
- **Higher Bandwidth**: More bandwidth of data will strain security infra, possibly forcing it to abandon its "non existence" status level speed
- **IoT**: Most IoT devices are cheap and therefore have poor security. Smart TVs, door locks, refrigerators, speakers, and even minor devices like a thermometer for a fish tank can be a network weakness. A lack of security standards for IoT devices means it has potential to become standard attack route.
- Lack of Encc early in the connection process reveals device info/metadata that can be used for device specific targeted attacks.

### Known Vectors
- Botnet attacks control a network of connected devices to puppeteer a massive cyberattack.
- DDoS/ADDoS overload a network or website to take it offline.
- Man-in-the-Middle (MiTM) attacks quietly intercept and change communications between two parties.
- Location tracking and call interception can be done if someone knows even a small amount about broadcast paging protocols.

### Specific Attacks
1. A weakness in the paging protocol that carriers use to notify a phone before a call/text. When *several phone calls placed and cancelled in a short period*, can trigger a paging message without alerting the target device to an incoming call, which an attacker can use to track a victim’s location.

    Knowing the victim’s paging occasion also lets an attacker hijack the paging channel and inject or deny paging messages, by spoofing messages like Amber alerts or blocking messages altogether, the researchers say. This would be the 5G equivalent of a **pwning** style attack.

    **Building on the initial Pwn**: Used to determine an IMSI on the 4G network; and the aptly named IMSI-Cracking attack, which can brute force an IMSI number in both 4G and 5G networks, where IMSI numbers are encrypted.

    That puts even the newest 5G-capable devices at risk from stingrays, which law enforcement use to identify someone’s real-time location and log all the phones within its range. Some of the more advanced devices are believed to be able to intercept calls and text messages, he said.

![Torpedo](https://techcrunch.com/wp-content/uploads/2019/02/NZACFXK-.jpg?resize=600,386)

> Both the **Rapid Paging Attack** & the **IMSI-Cracking** attack are design level attacks whereas any successive attacks built on these are carrier level attacks.

2. By setting up a malicious radio base station, an attacker can monitor, destroy, or even attack multiple targets. In an attack experiment, the researchers successfully obtained the old and new temporary network identifiers of the victim’s mobile phone and then tracked their location. Even the paging channel is hijacked and a false emergency alert is broadcast to the victim.

    In some cases, this defect can be used to downgrade cellular connections to older standards that are less secure. Law enforcement officers and capable hackers can launch surveillance attacks on target devices with the help of professional equipment.


# Regulation
## United Kingdom [NCSC Telecom Security Act] 2022
- Identifying and assessing the risk to any 'edge' equipment that is directly exposed to potential attackers
- Keeping tight control of who can make network-wide changes
- Protecting against specific malicious signaling coming into the network, which could cause outages
- Having a good understanding of risks facing their networks
- Making sure business processes are supporting security (e.g. proper board accountability)

- Auditor to check the above

## EU GDPR
- All data must be held within state and strict control on what data leaves and enters
- Pseudo-anonymisation of all telemetry and unencrypted analytics data
- Right to data erasure and access to all personal data

## Generic/USA (recommended)
- Full E2EE to safeguard against authoritarian regimes from violating user privacy, and protecting it against unlawful searches and siezures. So if even we cannot see the data, there is no way we can hand it over
- All user data must be treated with HIPAA standard effectively protecting everything as NPI