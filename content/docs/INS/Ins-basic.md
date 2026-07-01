---
title: "@INS BASIC"
---

## What is ATIS? What information does it provide?
**ATIS: Automatic Terminal Information Service**
1. Identifier letter
2. Time
3. Wind
4. Visibility
5. Clouds
6. Temperature & Dewpoint
7. Altimeter setting
8. Active runway (s) 
9. NOTAMS

## ⭐️ How do you measure OAT?
1. **Bimetallic strips**\
   Another type of OAT is bimetallic strips, which using different thermal expansion rate to indicate the temperature. However, *its error up to 10%* and it is easy to be affected by icing or sunlight.

2. **PNC/NTC Resistance type**\
   *(PTC= positive temperature coefficient; NTC= Negative temperature coefficient)* Changing temperature will cause the resistance change then current change with a constant voltage. Usually installed on the right side of the fuselage after of the co-pilot's step.
   
   Garmin GTP 59 is an outside mounted temperature probe that provides raw air temperature data. GTP 59 is a RTD (Resistive Temperature Device). GTP 59 OAT probe has no icing protection. 

## Altimeter
The altimeter is an instrument that measures the height of an aircraft above a given pressure level. The changes in air pressure directly affect the readout. Pilots can adjust the base pressure level via a barometric scale adjustment knob. 

The altimeter's outer chamber is sealed, which allows the static pressure to surround the aneroid wafers. If the static pressure is higher than the pressure in the aneroid wafers (29.92"Hg) , the wafers are compressed. A lower static pressure allows the wafers to expand. The contraction and expansion of the wafers moves the mechanical linkage driving the needles on the face of the altimeter. 

However, If off more than 75 feet, the instrument should be referred to a certificated instrument repair station for recalibration.

## How does VSI function
In a simple VSl,  a diaphragm with connecting linkage and gearing to the indicator pointer inside an airtight case, which is connected directly to the static line. The case is
also connected to that system but through a capillary tube.

The capillary cates a time delay of pressure change between the capsule and the case

Thus, if the aircraft climbs the pressure within the capsule will decrease while pressure in the case will decrease slower due to capillary. The wafer will contract while climbing and expand while descending.

The shrinkage or expansion of the capsule caused by the pressure difference is
displayed on the instrument via a gear mechanism pointer.

## ⭐️ Airspeed markings
| **Color Arc**  | **Speed Range Name**   | **Description**                                                                                                                                                                                                                                                                                                                                                                   |
| -------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **White Arc**  | Flap Operating Range   | <ul><li>**\(V_{SO}\)**: Stalling speed or the minimum steady flight speed at which the airplane is controllable in the landing configuration. (Max Landing weight, gear down and flaps down)</li><li>**\(V_{FE}\)**: Maximum flap extended speed.</li></ul>                                                                                                     |
| **Green Arc**  | Normal Operating Range | <ul><li>**\(V_{S1}\)**: Stalling speed or the minimum steady flight speed at which the airplane is controllable obtained in a specified (TO) configuration. (Clean configuration, gear up and flaps up, Max TO weight)</li><li>**\(V_{NO}\)**: Maximum structural cruising speed. This is the maximum speed at which the aircraft can operate safely.</li></ul> |
| **Yellow Arc** | Caution Range          | <ul><li>**\(V_{NO}\)** ~ **\(V_{NE}\)**.</li><li>Operate within this range only in smooth air and with caution.</li></ul>                                                                                                                                                                                                                                         |
| **Red Line**   | Never Exceed Speed     | <ul><li>**\(V_{NE}\)**: Exceeding this speed may cause structural failure.</li></ul>                                                                                                                                                                                                                                                                                              |


## ⭐️ Flux valve
Magnetic direction of the Flux Valve is used as a reference for the Directional Gyro (Heading indicator). Three induction coils spaced at 120 intervals with an exciter coil in the center.

Flux Valve is used to sense the Earth's magnetic field, and installed in the wing tip or the vertical stabilizer to reduce prevent magnetic interference.

![](/images/fluxvalve.png "")

## ⭐️ GMU44
GMU44 is a **magnetometer** that measures the Earth's magnetic field and provides this data to the GRS 77 Attitude and Heading Reference System (AHRS). 

It is located in the **right wing close to the wingtip,** which is easily identified by the black, non-magnetic screws used to hold it in place


## AHRS
AHRS is Attitude and Heading Reference System (AHRS)

Attitude Heading Reference System measures **acceleration**, rate of turn and mag components relative to three axes of the aircraft and converts them to an attitude and direction relative to the earth. 

*It consists of "Micro Electro-Mechanical Sensors" (MEMs)*

The AHRS system in DA40 is GRS77.

## Stall warning method
Using pneumatic principles, if the airspeed drop below 10~5 knots above the stalling speed, the stall warning horn, which located in the instrument panel, will sound.

The horn becomes louder when closer to stalling speed. Suction at the orifice located at the left wing leading edge, close to the wing root, activates the horn via a hose. 

When not flying, use a cover on the orifice, it is marked by a red wing.

![](/images/pnuematicstallwarning.png "")

## ⭐️ Turning Error
In northern hemisphere, due to magnetic dip, if turn from north compass will first go
opposite direction and then back to correct direction. The needle lags the turn, so pilots must undershoot.

If turn from south, pilots must overshoot. 

**Tum from East/ West would have no turning error.**

## ⭐️ Acceleration error
In northern hemisphere, if you accelerate from West/East, the compass will deviate north, while decelerate it will deviate south. 

**Accelerate/decelerate from North/South would have no acceleration error.**

## Skid/Slip Turn
Skidding turn: turn with insufficient bank. (Centrifugal force greater) 
Slipping turn: turn with excessive bank. (Centripetal force greater) 

To correct:
skid: push the outer rudder/ decrease speed/ increase bank angle
slip: push the inner rudder/ increase speed / decrease bank angle

## Gyro Wander
1. **Real wander**: An undesired precession caused by a force acting on the gyro axis. - imbalance of **gyro mass or friction in the bearing.** 
2. **Apparent wander**: The **earth** rotates about its axis 15°/Hour. Gyro moves for an observer on the earth. Aircraft transportation rate around the earth, **depends on GS and Latitude.**

## ⭐️ Pitot static system blockage
1. Pitot tube clogged/ Drain hole clear/ Static port clear
	- ALT: Normal
	- ASI: Slowly drop to near “0”
	- VSI: Normal
2. Pitot tube clogged/ Drain hole clogged/ Static port clear
	- ALT: Normal
	- ASl: Act like an altimeter (airspeed increase when climb) 
	- VSI:Normal
3. Pitot tube clear/ Drain hole clear/Static port clogged
	- ALT: Freeze
	- ASI: Airspeed decrease when altitude increase
	- VSI： "0"
4. Pitot tube clogged/ Drain hole clogged/ Static port clogged
	- ALT: Freeze
	- ASI: Freeze
	- VSI: "0"

## Instrument Check
**Altimeter**
1. Prior to each flight, set the barometric scale to the **current reported altimeter setting** transmitted by the local *airport traffic control tower, flight service station (FSS) , or any other reliable source, such as ATIS, AWOS, or ASOS.* 
2. Indicate the surveyed field elevation of the airport.
3. If off more than **75 feet**, the instrument should be referred to a certificated instrument repair station for recalibration.

**VSI**
1. Prior to each flight, Make sure the **VSl indicates a near zero** reading prior to leaving the ramp area and again just before takeoff.
2. After takeoff, the VSI should trend upward to indicate a positive rate of climb and then, once a stabilized climb is established, a rate of climb can be referenced.
3. If the VSl indicates anything other than zero, that indication can be referenced as the zero mark; however, tolerance on account of instrument error is **+/-200 ft/min or 20 %.**

**ASI**
1. Prior to takeoff, the ASI should **read zero.** However,  if there is a strong wind blowing directly into the pitot tube, the ASl may read higher than zero.
2. When beginning the takeoff, **make sure the airspeed is increasing at an appropriate rate.**

**Turn and Slip Indicator**
1. During preflight, ensure that the **inclinometer is full of fluid and has no air bubbles**. The ball should also be resting at its lowest point.
2. When **taxiing**, the Turn and slip indicator should indicate a turn in the correct direction while the ball moves **opposite** the direction of the turn.

**Attitude Indicator**
1. During preflight, adjust the knob to align the position of miniature aircraft with the horizon.
2. Pull to cage for a fast erection of artificial horizon after engine start-up.

**Heading Indicator**
Because of precession caused by friction, pilots should adjust its heading from compass readout in a straight, undisturbed flight every 15 minutes.

## ⭐️ Types of Altitudes
1. Indicated altitude - the altitude read directly from the altimeter (uncorrected) after it is set to the current altimeter setting.
2. Pressure altitude - the altitude when the altimeter setting window is adjusted to 29.92. Pressure altitude is used flying fight levels.
3. True altitude - It's the exact height above mean sea level.
4. Absolute altitude - It's the actual height above the **earth's surface. (Not Ground Surface)** 
5. Density altitude - pressure altitude **corrected for non-standard temperature**, used in engine performance calculations.

## ⭐️ Types of Airspeed
1. Indicated airspeed (IAS) - the speed of the airplane as observed on the airspeed indicator. It is the airspeed without correction for instrument, position (installation), or compressibility errors.
2. Calibrated airspeed (CAS) - the airspeed indicator reading corrected for position (or installation), and instrument errors.
3. Equivalent Airspeed - EAS is CAS corrected for **compressibility** error. (> 200 kts, Pressure altitude > 20,000") 
4. True airspeed (TAS) - is the actual aircraft speed **relative to the surrounding air** in any condition. It is CAS **corrected for altitude and nonstandard temperature.**
5. Ground speed (GS) - TAS corrected for wind; speed across ground.

