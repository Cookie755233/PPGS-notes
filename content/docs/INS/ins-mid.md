---
title: "@INS MID"
cssclasses:
- ultra-wide-view
hide_toc: true
---
## ELT
{{< callout >}}
**Emergency Locator Transmitter ELT**
- located in the rear fuselage, below the aft baggage compartment.
- Frequency: **121.5 MHz(50hr) and 406 MHz(24hr)** 
- Activation: **Manual switch**, **Sea water**, **Acceleration switch more than 5 G**
- Purpose: locate survivors for SAR (Search and Rescue)
- Information sent: **Country of registration, Aircraft Registration,  Position coordinates, Serial number**
{{</ callout >}}

| Avionics Unit / Operation        | System Functions & Key Data                                                                                                                                                                                                                                                                                                                         |
|:-------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ELT Test<br>(FAR/AIM 6-2-4b)** | - **BEFORE FLIGHT** <br> - preferably in shielded room. <br> - Tested in **first 5 minutes** of any hour <br> - Less then **3 sweeps** <br> - Call **FSS/FAA** tower for an exception <br> - **Airborne not allowed**                                                                                                                               |
| **ELT Check**                    | - **DURING PARK** to ensure no falsely activation <br> - Tune in 121.5 MHz, if sweeping is heard, ELT is activated. *(press COM frequency transfer key for 2 second for quick setting)* <br> - Set remote switch **ON**, **if no change in volume,** ELT is transmitting. <br> - Switch **ARM** will stop the signal. <br> - **Inform SAR/FSS/FAA** |
| **ELT Inspection**               | - Must be inspected **within 12 calendar months** after the last inspection <br> - proper installation, <br> - battery corrosion, <br> - operation of the controls and crash sensor <br> - sufficient signal from antenna                                                                                                          |
| **ELT Battery Replacement**      | - After emergency use <br> - Accidentally activated for *undetermined* period of time. <br> - Before battery expiration date (l*ess than 50 % due time*) <br> - Cumulative operation of **one hour**                                                                                                                                                |

## G1000 System
The G1000 currently has 3 ways of ensuring that its data is correct: **(IFR)**
1. **Internal system monitoring**: Internal monitoring uses built-in algorithm to ensure that displayed data is consistent and fault-free.
2. **Fault Detection & Exclusion (FDE)** - Assesses any anomalies in the satellite system and removes the “bad" satellite from the data equation, providing a seamless, correct data stream.
3. **Receiver Autonomous Integrity Monitoring (RAIM)** - FDE RAIM requires a minimum (**five** satellites to be in ‘sight' of the GPS unit in order for it to obtain enough verified information for a GPS approach

![](/images/g1000.png "")

| Avionics Unit                             | System Functions & Key Data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|:----------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **GDU 1040 (Display)**                    | The dispiays communicate with eacn other through a High-speed Data Bus (HSDB) Ethernet connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **GEA 71<br>(Engine/Airframe Interface)** | - **engine/air frame** data to the G1000 system. The unit interfaces to **transducers**. <br> - *Analog data is received from the transducers and is converted to digital signal by the GEA 71* **(A2D)**. <br> - **Digital information is then sent to the #1 GIA 63**, then on to the MED for display. A backup data path from the GEA to the #2 GIA 63, then on to the MFD, exists in the event the primary path fails.<br> - Extensive input & monitoring capabilities <br> - EGT/CHT on all cylinders <br> - Engine instruments & vital engine data (oil, fuel & electrical) . <br> - Physical conditions (open doors) <br> - Electrical System data <br> - Also features *lean assist function* when flying at a higher altitude |
| **GIA 63<br>(Integrated Avionics)**       | - Communications hub for the systems <br> - System Integration Processors <br> - *I/O Processors* <br> - VHF COM <br> - VHF NAV/LOC <br> - GPS/WAAS <br> - Glideslope                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **GMA 1347 (Audio)**                      | - Provides manual control of display **Reversionary Mode.** In Reversionary Mode, all important flight information from the PFD is presented on the remaining display in the same format. <br> - It would *auto-switch to reversionary mode if error.* <br> - **Reversionary Mode may be manually activated by pressing the Audio Panel's red `DISPLAY BACKUP` Button.**                                                                                                                                                                                                                                                                                                                                                                                                             |
| **GRS 77 (AHRS)**                         | - **Attitude and Heading Reference System (AHRS)** <br> - Provides aircraft attitude and heading information. <br> - The AHRS contains advanced sensors including *accelerometers and rate sensors* <br> - The AHRS can be **initialized and running within 45 seconds** of startup. <br> - The expected life of the Garmin AHRS is approximately *10,000 hours*.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **GMU 44 (Magnetometer)**                 | - **The only component that is NOT connected to GIA 63. It interfaces directly with GRS 77 AHRS to provide it with mag hearing input.** <br> - If the magnetometer fail, the G1000 will lose its ability to provide a Stabilized heading, but you will have access to a **rough heading** for the duration of the flight via GPS and the moving map. <br> - Internal earth magnetic field database needs to be **updated about once every 5 years**. <br> - The Magnetometer is located in the right wing and is easily identified by the *black, non-magnetic screws* used to hold it in place.                                                                                                                                                                                     |
| **GDC 74A<br>(Air Data Computer)**        | - Sense pressure altitude data, through GIA 63, to transponder(GTX345R) for **Mode C capability**. <br> - Accuracy supports **Reduced Vertical Separation Minimum (RVSM)** to increase airspace capacity/efficiency.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **GTX345R<br>(Transponder)**              | - Standard transponder modes: **STBY, ON, ALT, GRD** <br> - Auto ALT mode when groundspeed is greater than **30** knots & auto GND mode when under 30 knots. <br> - **The GTX 345R interfaces with a Traffic Awareness System (TAS),** which displays On the MFD and PFD. <br> - **ADS-B TX(Automatic Dependent Surveillance-Broadcast) shall always be enabled** (`XPDR - ADS-B TX`) <br> - In `TIME/REF` window, add a new `FLIGHT ID` entry.                                                                                                                                                                                                                                                                                                                                      |

### GMA 1347
![](/images/gma1347.png "")

## System Failures
- **Essential Bus**
	- Switch location: Lower left corner, **provides 30 minutes battery if alternator fails to shed load from system.**
	- Only allows essential components to show *( NAV/COM 1, transponder, standby/attitude gyro, engine instruments(PFD), annunciator panel, GPS, landing light, pitot heat, and flaps.)*
	- Shuts off Non-essential avionics, autopilot (in some configurations), NAV/COM 2, and other secondary cabin electronics.
 - **Complete system Failure**: 
	 - Essential bus (main battery) may run for **30 minute**. 
	 - Essential power (lithium power battery) runs **standby attitude indicator** and one **flood light** for 90 minutes. However, no indication of yaw. *(last straw)*
 - **Stuck Microphone**: If the push-to-talk (PTT) Key becomes stuck, the COM transmitter stops transmitting after **35 seconds** of continuous operation. An alert appears on the PFD to advise the crew of a stuck microphone. The COMI MIC or COM2 MIC Key Annunciator on the Audio Panel continues to flash as long as the PTT Key remains stuck.
 - **COM Tuning Failure**: In case of a COM system tuning failure, the emergency frequency (121.500 **MHz**) is automatically tuned in the radio in which the tuning failure occurred. *press and hold for 2 second on the freq transfer key to quickly set 121.5*



### Line Replacement Unit (LRU)  Failures
| Failed Component        | System Functions & Key Data                                                                                        |
|:----------------------- |:------------------------------------------------------------------------------------------------------------------ |
| **Single GIA**   | COM/NAV/GPS receiver data is not available and automatically replaced by COM/NAV receiver data from another GIA63. |
| **Both GIAs**      | No COM/NAV/GPS, but AHRS and ADC continue to provide data to GDU.                                                  |
| **Single GDU**   | Changes to "reversionary mode" and no moving map.                                                                  |
| **GMA 1347**     | Automatically connect to COM1, but audio panel/intercom does not work.                                             |
| **GDC74A**       | Loss OAT, TAS, ASI, ALT and VSI on PDF, transponder loses mode C capabilities.                                                  |
| **GRS77**        | Attitude presentations are removed from PFD and replaced with "X" and attitude, heading data is lost.       |
| **GMU44**         | Stabilized heading data is lost.                                                                                   |
| **OAT sensor** | Red "X" appears on TAS and OAT                                                                                     |
| **GTX345**     | Red "X" appears over transponder box on PFD and advisory message appears.                                          |
| **GEA 71**       | ALL engine/airframe data is lost.                                                                                  |

![](/images/error.png "")


## PFD/MFD Controls
![PFD/MFD Controls](/images/pfdmfd.png "PFD/MFD Controls")

| **Control / Function Key**                            | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1. NAV VOL/ID Knob**                                | **Turn:** Controls NAV audio volume (shown in the NAV Frequency Box as a percentage).<br>**Press:** Toggles Morse code identifier audio on/off.                                                                                                                                                                                                                                                                                                                                                                                                              |
| **2. NAV Frequency Transfer Key**                     | Transfers the standby and active NAV frequencies.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **3. NAV Knob**                                       | **Turn:** Tunes NAV receiver standby frequencies (large knob for MHz; small for kHz).<br>**Press:** Toggles light blue tuning box between NAV1 and NAV2.                                                                                                                                                                                                                                                                                                                                                                                                     |
| **4. Heading Knob**                                   | **Turn:** Manually selects a heading.<br>**Press:** Displays a digital heading momentarily to the left of the Horizontal Situation Indicator (HSI) and synchronizes the Selected Heading to the current heading.                                                                                                                                                                                                                                                                                                                                             |
| **5. Joystick**                                       | **Turn:** Changes map range.<br>**Press:** Activates Map Pointer and moves in desired direction to pan map.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **6. CRS/BARO Knob**                                  | **Turn large knob:** Adjusts altimeter barometric pressure setting.<br>**Turn small knob:** Adjusts course (only when HSI is in VOR or OBS Mode).<br>**Press:** Re-centers the CDI and returns course pointer directly to the bearing of the active waypoint/station.                                                                                                                                                                                                                                                                                        |
| **7. COM Knob**                                       | **Turn:** Tunes COM transceiver standby frequencies (large knob for MHz; small for kHz).<br>**Press:** Toggles light blue tuning box between COM1 and COM2.<br>_Note:_ The selected COM (green) is controlled with the **COM MIC Key** (Audio Panel).                                                                                                                                                                                                                                                                                                        |
| **8. COM Frequency Transfer Key (`EMERG`)**           | **Press:** Transfers the standby and active COM frequencies.<br>**Press and hold (two seconds):** Tunes the emergency frequency (121.5 MHz) automatically into the active frequency field.                                                                                                                                                                                                                                                                                                                                                                   |
| **9. COM VOL/SQ Knob**                                | **Turn:** Controls COM audio volume level (shown as a percentage in the COM Frequency Box).<br>**Press:** Turns the COM automatic squelch on/off.                                                                                                                                                                                                                                                                                                                                                                                                            |
| **10. Direct-to Key**                                 | Activates the direct-to function and allows the user to enter a destination waypoint and establish a direct course to the selected destination (specified by identifier, chosen from the active route).                                                                                                                                                                                                                                                                                                                                                      |
| **11. FPL Key**                                       | Displays flight plan information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **12. CLR Key (`DFLT MAP`)**                          | **Press:** Erases information, cancels entries, or removes menus.<br>**Press and hold:** Displays the MFD Navigation Map Page (MFD only).                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **13. MENU Key**                                      | Displays a context-sensitive list of options for accessing additional features or making setting changes.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **14. PROC Key**                                      | Gives access to IFR departure procedures (DPs), arrival procedures (STARs), and approach procedures (IAPs) for a flight plan or selected airport.                                                                                                                                                                                                                                                                                                                                                                                                            |
| **15. ENT Key**                                       | Validates/confirms selection or data entry.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **16. FMS Knob**<br>_(Flight Management System Knob)_ | **Press:** Turns the selection cursor on/off.<br>- **Data Entry:** With cursor on, turn to enter data in the highlighted field (large knob moves cursor location; small knob selects character for highlighted cursor location).<br>- **Scrolling:** When a list of information is too long for the window/box, a scroll bar appears. With cursor on, turn large knob to scroll through the list.<br>- **Page Selection:** Turn knob on MFD to select the page to view (large knob selects a page group; small knob selects a specific page from the group). |
| **17. Softkey Selection Keys**                        | Press to select softkey shown above the bezel key on the PFD/MFD display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **18. ALT Knob**                                      | Sets the Selected Altitude, shown above the Altimeter (the large knob selects the thousands, the small knob selects the hundreds).                                                                                                                                                                                                                                                                                                                                                                                                                           |

## Page Groups
| **Map Page Group (MAP)**                                                                | **Waypoint Page Group (WPT)**                                    | **Auxiliary Page Group (AUX)**                                                    | **Nearest Page Group (NRST)**                                                                       | **Flight Plan Page Group (FPL)**                                       |
|:--------------------------------------------------------------------------------------- |:---------------------------------------------------------------- |:--------------------------------------------------------------------------------- |:--------------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------- |
| - Navigation Map<br>- Traffic Map<br>- *Weather Data Link*<br>- Terrain Proximity/ TAWS | - Airport<br>- Intersection<br>- NDB<br>- VOR<br>- User Waypoint | - Trip Planning<br>- Utility<br>- GPS Status<br>- System Setup<br>- System Status | - Airports<br>- Intersections<br>- NDB<br>- VOR<br>- User Waypoints<br>- Frequencies<br>- Airspaces | - Active flight plan<br>- Flight plan catalog<br>- Vertical navigation |


## Engine Page
![](/images/enginepage.png "")
| Item              |  Red   |   Amber   |      Green      |   Amber   | Red  |
|:----------------- |:------:|:---------:|:---------------:|:---------:|:----:|
| **MAP**           |   —    |     —     |     13 ~ 30     |     —     |  —   |
| **RPM**           |   —    |     —     | 500 ~ **2,700** |     —     |  —   |
| **Voltage**       | 0 ~ 24 | 24.1 ~ 25 |    25.1 ~ 30    | 30.1 ~ 32 | > 32 |
| **Fuel pressure** | 0 ~ 14 |     —     |     **14 ~ 35**     |     —     | > 35 |
| **Fuel quantity** |   0    |   0 ~ 3   |   3 ~ **17**    |     —     |  —   |
| Amps              |        |           |     2 ~ 75      |           |      |
| Oil Temperature   |        |           |    149 ~ 240    | 231 ~ 245 | >245 |
| Oil Pressure      | 0 ~ 25 |  **25 ~ 55**  |     56 ~ 95     | 96 ~ 97          |   >97   |

## Alert Window Message
| **Annunciation Window Text** | **Alerts Window Message**                             | **Remarks**                                                                                                                 |
| ---------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **OIL PRES LO**              | Oil pressure is below **25** psi.                     |                                                                                                                             |
| **FUEL PRES LO***            | Fuel pressure is below 14 psi.                        |                                                                                                                             |
| **FUEL PRES HI***            | Fuel pressure is greater than 35 psi.                 |                                                                                                                             |
| **ALTERNATOR**               | Alternator failed. Battery is only electrical source. |                                                                                                                             |
| **STARTER ENGD**             | Starter is engaged.                                   |                                                                                                                             |
| **DOOR OPEN**                | **Canopy** and/or rear door is not closed and locked. |                                                                                                                             |
| **TRIM FAIL**                | Autopilot automatic trim is inoperative.              | No audio alert                                                                                                              |
| **L FUEL LOW**               | Left fuel quantity is less than **3 gallons**.        |                                                                                                                             |
| **R FUEL LOW**               | Right fuel quantity is less than **3 gallons**        |                                                                                                                             |
| **LOW VOLTS**                | On-board voltage is below **24 V**.                   |                                                                                                                             |
| **PITOT FAIL**               | Pitot heat is inoperative.                            | Pitot heat switch off                                                                                                       |
| **PITOT OFF**                | Pitot heat is off.                                    | - Pitot heat switch is **ON** but thermal fuse **activated**<br> - Pitot heat CB is **OPEN** regardless of switch position. |

## Radio Comm
![](/images/radiofreq.png "")
| Avionics Unit / Band  | System Functions & Key Data                                                                                                                                   |
|:--------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **MF (300~3000 KHz)** | - NDB                                                                                                                                                         |
| **VHF (30~300 MHz)**  | - Marker Beacon (75) <br> - ILS (108 ~ 111.**9**5) *ODD* <br> - VOR (108.0 ~ 111.**8**75 *EVEN*  // 112.0 ~ 117.975 *ALL* )<br> - Navigation Satellites (150) |
| **UHF(300~3000 MHz)** | - ILS <br> - DME                                                                                                                                              |

### Wave Transportation
![](/images/skip.png "")
1. **Ground Wave**
	- Radio wave traveling along the earth’s surface.
	- Depends on : *Power, frequency, electrical conductivity on the surface (water > dry sfc)*
	- Higher frequency = shorter ground range
2. **Sky Wave**
	- Radio wave reflected from the **ionosphere**
	- Higher frequency wave may penetrate the ionosphere.
	- *Smaller angle, likely to be a total reflection.*
	- LF/MF would be absorbed by the D-layer during daytime
	- **HF allows worldwide coverage regardless of time.**
	- *UHF travels at line of sight (NOT sky wave)*
3. **Skip Distance** is the distance from the transmitting station to the point on the surface of the earth at which the first sky wave ca be received.
4. **Skip zone** is an area on the surface of the earth where no reception of any radio waves is possible. (*End of ground wave ~ start of sky wave*)


## Exterior Lights
![](/images/planelight.png "")

|              | Landing Lights                                                                                                                                                                                 | Taxi Lights *(ground lights)*                             | Position Lights                                                                           | Strobe Lights                                                                                                                                            |
|:------------ |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:--------------------------------------------------------- |:----------------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Function** | Provide illumination for landing and enhance visibility during critical phases of flight                                                                                                       | Provide illumination for aircraft movement on the ground. | Indicate aircraft orientation and presence during low visibility or nighttime.            | Enhance aircraft visibility to prevent collisions.                                                                                                       |
| **Timing**   | Turned ON when cleared for takeoff (or when entering the runway at uncontrolled airports before starting rolling). Remain ON during the entire flight and turned OFF after exiting the runway. | ON during aircraft movement on the ground.                | ON from sunset to sunrise and in daylight when weather conditions are below VFR minimums. | ON from prior to engine start until after engine shutdown. (May be turned OFF by PIC if determined to be a hazard to pilots on board or other aircraft). |

## Altitude Alerting
![](/images/altannuciation.png "")
- *DEFAULT: Current and Selected ALT difference ≥ 1000 𝑓𝑡, black background Cyan text*
- Difference within **1000** 𝑓𝑡, change to **cyan background black text and flashes 5 sec**
- Difference within **200** 𝑓𝑡, change to **black background Cyan text and flashes 5 sec**
- Reach selected ALT, no change *(default)*
- Deviate **± 200** 𝑓𝑡 ，an aural alert **black background Amber text and flashes 5 sec**

## Remarks
- **Cabin check**: Terrain, Obstacles, Navigation, Airport Directory (TONA)
- Switch tanks at intervals no greater than 30 minutes. When switching, the **electrical fuel pump shall switch ON** 
- 7 Checklists: **Check before/after engine start; before takeoff check; climb to cruise check; descent/ approach check; after landing check; parking check.**
- Red extreme pitch warning chevrons would show when **pitch +50 or -30**
- CO detector located in the top right corner next to ELT
	- Self test begins when power is applied, flashing *twice*, and remain off until another CO alert.
	- Stay on until the CO level goes below **50 ppm.**
	- *Failure indication: Flash every 4 second*
	- Procedure: 
		- 1. Press TEST/RESET button to confirm, if continues -
		- 2. Cabin heat - OFF; Ventilation - OPEN; Emergency Window - OPEN; Canopy - OPEN.
- Sterile cockpit rules (FAR 121.542): During critical phases of flight, including **all ground operations such as taxiing, takeoff, and landing, and all flight operations below 10,000 ft**, non-essential activities are not allowed.


## Abbreviations
- ATIS: Automatic Terminal Information **Service**
- ASOS: Automatic Surface Observation System
- AWOS: Automatic Weather Observing System
- AHRS: Attitude and Heading Reference System
- AFM: Aircraft Flight Manual
- FSS: Flight Service Station
- CTAF: Common Traffic Advisory Frequency
- HIWAS: Hazardous In-flight Weather Advisory Service
- SIGMET: Significant Meteorological Information
- **ADS-B: Automatic Dependent Surveillance Broadcast**
- NDB: Non-Directional radio Beacon
- VOR: Very High Frequency Omnidirectional Range
- **WAAS: Wide Area Augmentation System**
- **RAIM: Receiver Autonomous Integrity Monitoring**
- MEL: Minimum Equipment List


