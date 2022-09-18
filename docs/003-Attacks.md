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
