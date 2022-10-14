---
layout: default
---

## Auth Methods
- **4G**: EPS-AKA
- **5G**: 5G-AKA, EAP-AKA’, and EAP-TLS

![4G Auth Diagram](../assets/w3/100.png)

There are two weaknesses in 4G EPS-AKA.

1. UE identity is sent over radio networks **without encryption**. A temporary identifier (e.g., Globally Unique Temporary Identity, GUTI) may be used to hide a subscriber’s long-term identity, the GUTI allocation is flawed:
    - GUTIs are not changed as frequently as necessary
    - GUTI allocation is predictable (e.g with fixed bytes). More importantly, the UE’s permanent identity may be sent in clear text in an Identity Response message when responding to an Identity Request message from a network.
2. A home network provides AVs when consulted by a serving network during UE authentication, but it is not a part of the authentication decision. Such a decision is made solely by the serving network.

![5G Auth Diagram](../assets/w3/101.png)
![5G Auth Diagram 2](../assets/w3/102.png)