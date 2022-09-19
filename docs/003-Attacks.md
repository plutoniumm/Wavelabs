# Stage Based Attacks
- **Registration Procedude**
    - <cite>Ioif Androulidakis. 2011. Intercepting Mobile Phone Calls and Short Messages Using a GSM Tester. In 18th Conference on Computer Networks, Ustron, Poland, Andrzej Kwiecień, Piotr Gaj, and Piotr Stera (Eds.). 281–288.</cite>
    - <cite>Hongil Kim, Dongkwan Kim, Minhee Kwon, Hyungseok Han, Yeongjin Jang, Dongsu Han, Taesoo Kim, and Yongdae Kim. 2015. Breaking and Fixing VoLTE: Exploiting Hidden Data Channels and Mis-implementations. In Proceedings of the 22Nd ACM SIGSAC Conference on Computer and Communications Security (CCS ’15). ACM, New York, NY, USA, 328–339</cite>

# ToRPEDO

- When idle device enters paging mode. When there are pending services for the UE, the Network's MME asks vase station to broadcast a paging message with **Temporary Mobile Subscriber Identity (TMSI)**.

- An attacker can exploit the fact that TMSI is changed infrequently.

- The attacker places multiple calls/messages to UE in very short interval and sniffs the paging messages

- If the most frequent **TMSI** among the paging messages appears frequently enough the attacker concludes that TMSI belongs to UE i.e Victim.

## Defense
- **MINIMUM**: Ideal case would be that the TMSI is changed on every paging occasion effectively making device a OneTimePad with Unpredictable Random Values with an advantage factor of at least less than $\frac{1}{2^{80}}$
- **Optional**: E2EE between each occasion. This will add overhead but guarantee end user safety.
- **Optimisation**: PFI Indexing array length should be reduced to as less frames as possible to make the frequency of change of TMSI lower. This however is at cost of higher power consumption and may not be suitable for non-commercial usage.

- **Caveat**: It is often possible to identify UE simply by the base rate of a PFI, i.e if a user is "too busy". So the aforementioned optimization might in fact be a risk in lower density areas.

## Details
[Privacy Attacks to the 4G & 5G Cellular Paging Protocols Using Side Channel Information](https://www.documentcloud.org/documents/5749002-4G-5G-paper-at-NDSS-2019.html)

# Resonance
The Approach followed is largely the CounterExample-Guided Abstraction-Refinement Principle (CEGAR)

(Exact method is in paper as linked below)

The mathematical analysis method reveals several gaps in the NAS
and RRC layer control-plane-protocols.

## Vulnerabilities
- **NAS Layer**
    - NAS Counter Reset
    - Uplink NAS Counter Desynchronization
    - Exposing NAS Sequence Number
    - Neutralizing TMSI Refreshment: This can be used in combination with Torpedo to completely compromise a device
    - DoS
- **RRC Layer**
    - DoS
    - Installation of Null Cipher & Null Integrity & &rarr; ManIM attack
    - Lullaby Attack to rapidly switch from idle to connected and drain battery as a DoS
    - Incarceration: Keep device in connection loop and prevent connection to legitimate network and thus DoS, or combine attacks
- **Combinations**
    - TMSI & Paging Occation Exposure (also possible via ToRPEDO)
    - Inactive-RNTI (Radio Network Temporary Identifier) Leak

## Details
[5GReasoner: A Property-Directed Security and Privacy Analysis Framework for 5G Cellular Network Protocol](https://s3.documentcloud.org/documents/6544575/5GReasoner.pdf)

# Full 5G Security Summary
(In C-I-A Format)
[Overview of 5G Security and Vulnerabilities](https://cyberdefensereview.army.mil/Portals/6/CDR%20V5N1%20-%2008_%20Fonyi_WEB.pdf)