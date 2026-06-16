---
title: "@POF"
---

# 1. Fundamental Equations
## Continuity Equation

The continuity equation is based on the **conservation of mass**. For a fluid flowing through a tube with two cross-sections (1 and 2):

$$\dot{m} = \frac{\Delta M}{\Delta t} = \rho_1 \cdot V_1 \cdot A_1 = \rho_2 \cdot V_2 \cdot A_2$$

Where:
- \(\dot{m}\) = mass flow rate
- \(\rho\) = fluid density
- \(V\) = fluid velocity
- \(A\) = cross-sectional area

If we assume the fluid is incompressible (**density remains constant**, \(\rho_1 = \rho_2\)), the equation simplifies to the volumetric continuity equation:

$$A_1 \cdot V_1 = A_2 \cdot V_2$$

## Bernoulli's Equation

Bernoulli's equation states that the total pressure (\(P_t\)) along a streamline is constant and is the sum of static pressure (\(P_s\)) and dynamic pressure (\(q\)):

$$P_t = P_s + q$$

Where dynamic pressure (\(q\)) is defined as:

$$q = \frac{1}{2}\rho V^2$$

Therefore:

$$P_t = P_s + \frac{1}{2}\rho V^2$$

## Types of Airspeed

Airspeed indicators cannot directly measure true speed because air density changes with altitude and temperature. Therefore, pilots use four distinct airspeed definitions:

### 1. Indicated Airspeed (IAS)

The raw speed reading shown directly on the cockpit's airspeed indicator. It is based solely on the raw pressure difference (\(P_t - P_s\)) calibrated for **standard sea-level air density** (\(\rho_0\)).

$$
\begin{aligned}
\text{IAS} &= \sqrt{\frac{2(P_t - P_s)}{\rho_0}} \\[1em]
&\rho_0 = \text{Standard Sea Level Air Density} = 1.225 \text{ kg/m}^3
\end{aligned}
$$


### 2. Calibrated Airspeed (CAS)

IAS corrected for instrument errors and installation/position errors.

$$CAS = IAS + \text{Correction Factor } (\Delta V_c)$$

### 3. Equivalent Airspeed (EAS)

CAS corrected for the **compressibility of air** at high speeds (typically significant *above 200 knots or Mach 0.3*). Compressibility causes air to pack into the pitot tube, creating a falsely high pressure reading.

### 4. True Airspeed (TAS)

The actual speed of the aircraft relative to the surrounding air mass. TAS accounts for the **actual air density** (\(\rho\)) at the aircraft's current flying altitude.

$$TAS = CAS \cdot \sqrt{\frac{\rho_0}{\rho}}$$

**As altitude increases and actual air density (\(\rho\)) drops, TAS becomes significantly higher than EAS/CAS for the same dynamic pressure.**


## Four Forces of Flight
- Lift is the upward force created by the effect of wings moving in the air. 
- Drag is the backward force due to aerodynamic effect which limits the speed of the airplane. 
- Thrust is the forward force created by the effect of a propeller rotating in the air. 
- Weight is the downward force due to the pull of gravity.

## Relative Wind & Key Flight Angles
![](/images/aoi.png "")
* **Relative Wind:** The relative wind appears when relative motion exists between an object and the air. *A relative wind blows in an opposite direction to the flight path \( (V) \) of a moving airplane*. 
    
* **Angle of Attack (AoA, \( \alpha \)):** It is an angle measured between the *chord-line and the relative wind.* The angle of attack and shape of the airfoil will determine the flow field and aerodynamic load.
    
* **Angle of Incidence:** It is an angle measured between the *chord-line and the longitudinal axis of the airplane.* In level flight, this fixed angle provides the desired angle of attack for an airplane with zero pitch angle.
    
* **Pitch Attitude Angle:** It is an angle measured between the aircraft *longitudinal axis and the horizon*. It indicates an *inclination of the aircraft relative to the earth.*

## 🗣️ Airfoil Geometry
![Airfoil 6 Elements](/images/airfoilelements.png "Airfoil 6 Elements")

1. **The Chord Line:** It is a straight-line connecting the leading and trailing edge of the airfoil, indicating an inclination of the airfoil.
    
2. **The Chord (\( C \)):** It is the characteristic *length of the airfoil.*
    
3. **The Mean-Camber Line:** It is a line halfway between the upper and lower surfaces. *A camber indicates the displacement of the mean camber line away from the chordline.* An airfoil is symmetric when the camber is zero.
    
4. **The Maximum Camber and its Location:** They are the characteristics of the mean-camber line and are expressed *in percent of the chord.* 

5. **The Maximum Thickness and its Location:** Thickness distribution determines the upper and lower surfaces of airfoils. Maximum thickness and its location are expressed in *percent of the chord.* 
    
6. **The Leading Edge Radius:** It determines the leading edge shape.

## Wing Planforms & Parameters

* **The Wing Planform:** Planform is the shape of a wing when viewed from above or below. Low speed aircraft may have rectangular, tapered, or elliptical wings, while high speed aircraft may have sweptback or delta wings.
    
* **The Wing Area (\( S \)):** It is the plan surface area of a wing. When a portion of the plan area is covered with the fuselage or nacelle, the pressure can be carried over on these surfaces. 
    
* **⭐️ The Aspect Ratio (\( AR \)):** It is the ratio of the wing span (the length) to the chord (the width). The wing span (\( b \)) is the length measured from tip to tip. The aspect ratio may range from 35 for gliders to 3.5 for jet fighters.
![](/images/aspectratio.png "")
    * For a rectangular wing planform:
      $$AR = \frac{b}{c}$$
    * For a planform of varying chords:
      $$AR = \frac{b^2}{S}$$

{{< callout type="warning" >}}
 While a **high aspect ratio wing achieves a higher \(C_{L_{max}}\)**, it actually does so at a **lower (smaller) Angle of Attack (AoA)** than a low aspect ratio wing.
 ![Effect of the aspect ratio to lift](/images/aspectratiotolift.png "Effect of the aspect ratio to lift")
 $$V_s = \sqrt{\frac{2W}{\rho S C_{L_{max}}}}$$
 |**Feature**|**High Aspect Ratio (Long/Skinny)**|**Low Aspect Ratio (Short/Stubby)**|
 |---|---|---|
 |**Peak Lift (\(C_{L_{max}}\))**|Higher|Lower|
 |**Stall Speed (\(V_s\))**|Lower|Higher|
 |**Stall Angle of Attack**|Lower|Higher|
{{< /callout >}}
  
* **The Taper Ratio (\( \lambda \)):** It is the ratio of tip chord to root chord:
  $$\lambda = \frac{c_t}{c_r}$$
  The root chord (\( c_r \)) is the chord at the wing centerline, and the tip chord (\( c_t \)) is the chord at the tip. The taper ratio is 1.0 for a rectangular wing and 0.0 for a delta wing.
![](/images/taperratio.png "")
    
* **The Sweep Angle (\( \Lambda \)):** It is the angle between the line of 25% chords and a perpendicular to the root chord. The sweep of wings can affect the compressibility effect, maximum lift, and stall characteristics.
    
* **The Mean Aerodynamic Chord (MAC):** The MAC is drawn on the airplane and is a parameter to indicate the location of the center of gravity (\%MAC) for weight and balance, and longitudinal stability. The MAC is not the average chord.

---
# 2. Lift and Drag
The aerodynamic force (lift and drag) is resulted from the **air pressure distribution** and friction forces.

Aerodynamic forces are quantified using the following equations:

$$\text{Lift Equation: } L = q \cdot S \cdot C_L(\alpha)$$

$$\text{Drag Equation: } D = q \cdot S \cdot C_D(\alpha)$$

Where:

* \( q \) is the **dynamic pressure**, calculated using half the air density multiplied by the velocity squared: 
  $$q = 1/2 \cdot \rho \cdot V^2$$
  It is directly related to air density (flight level) and the square of airspeed.
    
* \( S \) is the planform wing area expressed in square feet or square meters.
    
* \( C_L \) and \( C_D \) are dimensionless coefficients of lift and drag related to the angle of attack. By custom, \( C_l \) with the lowercase letter is assigned for an airfoil section, and \( C_L \) with the uppercase letter is for a wing or entire airplane.
    

## Stall Mechanics & Pilot Flight Control
![AoA-CL Chart](/images/aoaclchart.png "AoA-CL Chart")
### Aerodynamic Stalling

With an increasing angle of attack, the lift increases and the center of pressure moves forward.

* **Initial Buffet:** Initial buffet occurs when the airflow starts to separate at the trailing edge. *A cockpit stall warning device is activated before the initial buffet occurs.*
    
* **The Stall:** When the maximum lift or \( C_{l(\text{MAX})} \) is reached, the stall is defined. Beyond this point, complete stall occurs as the airflow separation moves forward.
    
* **Stall Angle:** The stall angle is completely fixed regardless of flight speed, attitude, or weight.

## Drag
$$
D_{Total}=D_{Parasite}+D_{Induced}
$$
![](/images/totaldrag.png "")
### Parasite Drag
$$
D_{Parasite}\propto V^2
$$
- Increases rapidly with airspeed.
- Dominates at high speeds.
#### 1. Form(Pressure) Drag 
![Form Drag (Pressure Drag)](/images/formdrag.png "Form Drag (Pressure Drag)")
- The form drag is mainly caused by the flow separation which lead to a **STATIC pressure difference** at the front and rear part of object. 

#### 2. Skin Friction Drag
Friction drag is created in the **BOUNDARY LAYER** of an aerodynamic body. Due to frictional forces, airflow will have a velocity of zero directly on the bounding surface. **Friction drag is referred to as the part of the friction force acts as the resultant in the direction of the airflow.**

![](/images/frictiondrag.png "")

{{< callout >}}
Aerodynamic shapes on skin friction drag\
**Blunt body: Pressure drag↑ ; Streamlined body: Skin Friction drag↑**
![](/images/laminarboundary.png "")
![](/images/dragvsbodytype.png "")
{{</ callout >}}
#### 3. Interference Drag
Interference drag describes any *additional parasite drag* resulting from the aerodynamic interaction of *intersecting bodies* of a streamlined body as the air flows around the body. **Fairing** is used to decrease interference drag.

### Induced Drag
Induced drag results from **WING TIP VORTEXES** as a *byproduct of lift.*

High-pressure air beneath the wing moves toward the low-pressure region above the wing.\
→ Creates rotating vortices at the wingtips.\
→ Produces downwash behind the wing.\
→ Inclined relative wind downward and rearward.
![](/images/induceddrag.png "")

{{< callout >}}
$$\begin{aligned}
\text{Induced Drag} &= \underbrace{C_{D0}}_{\text{Const}} + \underbrace{K \cdot C_L^2}_{D_{i}} \\
&\propto C_L \\
&\propto \alpha \text{ (AoA)}\\
&\propto \frac{1}{V^2}
\end{aligned}$$
{{< /callout >}}

General trends:
- Higher lift → Higher induced drag.
- Lower airspeed → Higher induced drag.
- Higher airspeed → Lower induced drag.

#### Design to Reduce Induced Drag
- Winglets.
- Narrow shape in the wingtip

---

## Ground Effect
Ground effect occurs when flying close to the surface, typically within approximately one wingspan of the ground.
- Wingtip vortices become weaker.
- Downwash decreases.
- Induced drag decreases.
- Effective lift increases.

![](/images/groundeffect.png "")
![](/images/aoaclgroundeffect.png "")

---
# 3. High Lift Devices
## Flaps
The flap system is designed for use in low speed operation of takeoff and landing.
When extending trailing edge flaps:
- *Increase* wing's camber, lift and drag
- *Decrease* stall speed
- **Decrease Critical AoA**
- *C.P* aft

{{< callout >}}
$$\begin{aligned}
\overline{L} &= 1/2 \cdot \rho \cdot \underbrace{V^2}_{\downarrow} \cdot \underbrace{C_L}_{\uparrow \text{ (Flaps Down)}} \\
&\implies \text{Greater lift with the same AoA} \\
&\implies \text{Fly at a lower speed with equal lift}
\end{aligned}
$$
{{< /callout >}}

![](/images/flapsdown.png "")
![](/images/claoaflapsdown.png "")

### 🗣️ Types of Trailing Edge Flaps
| Flap Type        | Primary Mechanism                        | Aerodynamic Effect                                                                                                                                                                    | Trade-off                                      |
|:---------------- |:---------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------------------------------------------- |
| **Plain Flap**   | Deflects rear part downward              | \( \text{Camber} \uparrow \implies \text{Lift} \uparrow \)                                                                                                                            | -                                              |
| **Split Flap**   | Deflects only the lower surface          | \( \text{Camber} \uparrow \implies \text{Lift} \uparrow \)                                                                                                                            | Generates more **form drag** than a plain flap |
| **Slotted Flap** | Opens a gap to channel high-pressure air | \(\begin{aligned} &\bullet\ \text{Camber} \uparrow \implies \text{Lift} \uparrow \\ &\bullet\ \text{Boundary Layer Energy} \uparrow \implies \text{Delays Separation} \end{aligned}\) |                                                |
| **Fowler Flap**  | Translates backward and rotates downward | \( \text{Camber} \uparrow \text{ and } S \uparrow \implies \text{Lift} \uparrow \)                                                                                                    | **Heavy**                                      |


{{< callout >}}
Types of Leading edge flaps: 
- Movable Slat
- Fixed Slot \(\implies\) Mostly on **WINGTIP** for aileron effectiveness

{{< /callout >}}


### Flaps Extension Order
For safety purposes, **LEADING before TRAILING flaps**

![CL-AoA of Slats/Flaps](/images/claoaflaps.png "CL-AoA of Slats/Flaps")


### Takeoff Flaps & Landing Flaps

1. Takeoff Flap
	- Shorten the takeoff roll due to slower lift-off speed.
	- Climb performance is worsened due to higher drag.
2. Landing Flaps
	- Provide lower approach speed due to higher \(C_L\), and a **steeper descent angle** due to large drag. 
	- Landing flaps can **reduce the landing roll** due to lower landing speed.

```
Flap Extension Scale
[ 0% ] ---------------------> [ 50% ] ---------------------> [ 100% ]
             |                                  |
    First Half Extension               Second Half Extension
             |                                  |
      Lift  +++ (Major)                  Lift   +  (Minor)
      Drag   +                           Drag  +++ (Major)
             |                                  |
  Optimized for: TAKEOFF             Optimized for: LANDING
```

![](/images/toldflaps.png "")


### Takeoff/Landing Flaps Procedure
1. **Takeoff (Flaps Up)**
{{< callout >}}
**FLAPS UP, NOSE UP**
{{< /callout >}}

* **Lift:** \(\text{C}\text{L} \downarrow \rightarrow \text{Lift} \downarrow\)\
  *(Must pitch nose up to increase the angle of attack and maintain level flight.)*
* **Drag:** \(\text{C}_\text{D} \downarrow \rightarrow \text{Drag} \downarrow\)\
   *(Improves the acceleration performance of the aircraft.)*
* **Moment:** \(\text{C.P. Forward} \rightarrow \text{Pitch-Down Moment} \downarrow\)\
   *(This change in the pitching moment is not as noticeable because it is heavily compensated for by the sudden decrease in \(C_L\)).\
   **\(\implies\)Requires the pilot to re-trim (nose-down)***

2. **Landing (Flaps Down)**
{{< callout >}}
**FLAPS DOWN, NOSE DOWN**
{{< /callout >}}

* **Lift:** \(\text{C}_\text{L} \uparrow \rightarrow \text{Lift} \uparrow\)\
  *(Must pitch nose down to maintain the desired descent path angle, otherwise it will cause "ballooning" of the aircraft.)*
* **Drag:** \(\text{C}_\text{D} \uparrow \rightarrow \text{Drag} \uparrow\)\
   *(Requires a higher power.)*
* **Moment:** \(\text{C.P. Rearward} \rightarrow \text{Pitch-Down Moment} \uparrow\)\
   *(This change in the pitching moment is not as noticeable because it is heavily compensated for by the massive increase in \(C_L\)).\
   **\(\implies\)Requires the pilot to re-trim (nose-up)***

---

# 4. Airplane Control
### Pitch (Elevator)
- Pulling back the control column (or stick) moves up the elevators.
- Pulling up elevators alone does not "elevate" the airplane but only decreases the airspeed. With the plane's nose up **increased drag causes the plane to climb less and start sinking.**
- **Only the excess power makes an airplane climb.**
### Yaw (Rudder)
- Pressing the left / right rudder pedal can make the plane's nose yaw to the left / right.
- The rudder is an *auxiliary* to ailerons.

> [!CAUTION]
> Roll Due to Yaw\
> A difference in dynamic pressure or lift between both wings leads to a roll due to yaw.
> ![Roll due to yaw](/images/rowduetoyaw.png "Roll due to yaw")

### Roll (Aileron)
- The movement of aileron controls the rolling motion of aircraft.
- The plane banks in order to turn. **Ailerons are the primary control of a plane's turning.**

#### Adverse Yaw
The aileron deflected downward produces more lift & induced drag, which yawing aircraft against direction of turn. *(Uncoordinated Turn)*

**> Solutions to Adverse Yaw**
* **Aileron-Rudder Interconnect**: Mechanical springs automatically deflect the rudder in the turning direction.
*  Frise-type vs Differential type Aileron
  
| Aileron Type          | Design Mechanism                                                                                                                                                                            | Primary Drag                                                     |
|:--------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------------------------------------------------------------- |
| **Frise**             | Leading edge of the aileron protrudes outward/downward below the wing's lower profile into the airflow.                                                          | **Form drag**                                                    |
| **Differential**      |When aileron deflected, there is a differential angular movement on both ailerons.| **Form drag**                                                    |


![](/images/frisediffailerons.png "")

### Secondary Flight Controls: Trim Systems

* **Standard Trim Tabs**: Small adjustable surfaces hinged to the trailing edge of primary control surfaces. The trim tab moves in the **opposite direction** of the primary surface to aerodynamically hold the main control surface in its deflected position.
  * *Nose-Down Trim*: Tab moves **up** \(\rightarrow\) Elevator **down**
  * *Nose-Up Trim*: Tab moves **down** \(\rightarrow\) Elevator **up**
* **Antiservo Tabs**: Mounted on the trailing edge of a **stabilator**. It moves in the **same direction** as the stabilator to oppose the pilot's input, making the highly sensitive fully-movable slab tail *less sensitive* and more stable.

---

# 5. Airplane Stability

## Stability Definition
Stability is the characteristic of an object in response to being displaced by a disturbance from its state of equilibrium. 

### Static Stability
Static stability is indicated by the **INITIAL** tendency a displaced object will respond.
* **Positive Static Stability**: The object tends to *return* to its original position after a disturbance because a restoring force exists.
* **Neutral Static Stability**: The object *stays in the new displaced position* after a disturbance because there is no restoring force.
* **Negative Static Stability**: The object tends to move further *away* from its initial state after a disturbance due to an opposing force.

### Dynamic Stability
Dynamic stability is indicated by the behavior of the resulting motion **in a time history** after a disturbance. 

---

## Longitudinal Stability (Pitch)
**Longitudinal stability is the stability about an airplane's lateral axis**, indicating its pitching response to a disturbance. 

### CG Position
{{< callout >}}
 A stable aircraft requires the CG to be located **AHEAD** of the center of lift.
 {{< /callout >}}

$$
\begin{aligned}
\text{Pitch Up} &\implies \alpha \uparrow \\
&\implies \begin{cases} 
\text{Lift at CP} \uparrow &\implies \text{Pitch DOWN Moment} \uparrow \\ 
\text{Tail-Down Force} \uparrow &\implies \text{Pitch UP Moment} \downarrow 
\end{cases} \\
&\implies \text{Net Restoring Moment Drives Nose Down} \\
&\implies \text{Positive stability returns aircraft to original pitch}
\end{aligned}
$$


* **CG Too Far Forward**:\
\(\implies\) Elevator effectiveness will be insufficient \
**\(\implies\) Nose wheel to strike the runway before the main gear.**
* **CG Too Far Aft**: \
\(\implies\)Elevator insufficient to raise the tail and lower the nose\
**\(\implies\)Unable to recover from a stall or spin.**

![](/images/cgonls.png "")

### Horizontal Stabilizer
$$
\begin{aligned}
\text{Disturbance Pitch up} &\implies \text{Downwash Deflects Relative Wind Downward at Tail} \\
&\implies \text{Effective AoA at Tail} \downarrow \\
&\implies \text{Tail-Down Force} \downarrow  \\
&\implies \text{Pitch-Up Moment} \downarrow  \\
\end{aligned}
$$

![](/images/hsonls.png "")

### Effect Power Change
* The thrust is produced from power through the propeller. 

$$
\begin{aligned}
\text{Power Increases} &\implies \text{Pitch-Down Moment} \uparrow \\
&\implies \text{Nose Down Due to Increased Power}
\end{aligned}
$$

![](/images/tlonls.png "")

---

## Lateral Stability (Roll)
*Lateral stability is the stability about an airplane's longitudinal axis*,  indicating its attitude response to a disturbance. 

### ⭐️ Dihedral
- This is the upward angle of the wings with respect to the horizontal.
- Creating increased lift on the lower wing and decreased lift on the higher wing to level the airplane.
![](/images/dihedral.png "")

### ⭐️ Wing Position
- During a sideslip, airflow around the fuselage creates local upwash and downwash
- A *high wing* design produces positive lateral stability due to this local upwash.
- A *low wing* shows negative stability, while a *mid-wing* design has neutral stability.
![](/images/wingpos.png "")

{{< callout >}}
High wing + Anhedral / Low wing + Dihedral
{{< /callout >}}

### Weight Distribution
Uneven weight distribution, such as fuel imbalance in the wing tanks, causes the airplane to roll. \
\(\implies\) DA40 recommendation: Change fuel tank in use every 30 minutes.

###  Keel Effect
- The side force tends to roll the airplane back to an upright position, when the majority of the surface area of the fuselage lies above the CG.
- **Laterally stable aircraft has greater portion of the area above the CG.**
![](/images/keel.png "")

### Sweepback
- **Low wind part of the wing will generate a greater lift than the high wind part of the wing, since the effective relative wind is smaller on the high wind part.**
- May aid slightly in directional stability due to more drag on the low wind side.

## Directional Stability (Yaw)
- Directional stability is the stability about an airplane's vertical axis, indicating its *yawing* response to a disturbance. 
- A directionally stable airplane tends to **return to its original flight path (relative wind) after displacement.**
- **The primary contributor to directional stability is the vertical tail which makes the airplane act like a weather vane.**
![](/images/verticalstability.png "")

### Center of Side Area  
- A positive static stability is obtained when **more surface area is behind the CG.**
- A fin added more aft can increase additional side surface and force for more restoring moment and stability.
| Fin Type        | Directional Stability | Lateral Stability |
|:--------------- |:--------------------- |:----------------- |
| **Dorsal Fin**  | Increases             | Increases         |
| **Ventral Fin** | Increases             | Decreases         |

![](/images/fin.png "")

### Sweepback
Sweepback wing can improvement directional stability oy an increase in lift accompanies an **increase in drag on the forward going wing.** 

![](/images/sweepback.png "")


## Spiral Instability 
- **Spiral instability occurs when Directional Stability > Lateral Stability.**
- When the airplane is brought into a bank or air disturbance, it may have no sufficient tendency to level the wings, but enters a sideslip.

{{< callout >}}
Recovery from Spiral Dive
1. Level the wing
2. Fly Level
{{< /callout >}}

---

# 6. Stall and Slow Flight

A stall occurs when an aircraft reaches its critical AoA (\(\alpha_c\)), leading to complete **flow separation** on the upper wing surface.

**An airplane can be stalled at any airspeed, attitude, or power setting.**

## Power off/on Stall
- Power off Stall: 
	- Mostly happen on *approach*.
- Power on stall: 
	- Stall when it just *departed an airport or has just performed a go-around.* 
	- Which may occur at **LOWER** than normal stall speed.

$$
\begin{aligned}
\text{Climb} &\implies \text{High Power Setting} \\
&\implies \text{Thrust's verrtical component compensates Weight} \\
&\implies \text{Effective Weight} \downarrow \\
&\implies \text{Stall Speed } (V_s) \downarrow
\end{aligned}
$$
![](/images/poweronstall.png "")

## ⭐️ Stall Recovery Procedure
**Regaining positive control is the primary consideration**. The sequential recovery steps are:
1. Release back pressure on the elevator (decreases AoA below critical limit).
2. Apply full power smoothly to minimize altitude loss and increase airspeed.
3. Level the wings
	- Level wing *(Neutralize ailerons)*
	- Level flight path *(Pitch level)*

## Spin
A spin begins with **asymmetric stall**, which resulting in auto-rotation of aircraft.

$$
\begin{aligned}
\text{Asymmetric Stall} &\implies \text{One wing stalls first} \\
&\implies \text{Relative Wind Shifts Downward} \\
&\implies \text{AoA}_{downwing} \uparrow\uparrow; \ \text{AoA}_{upwing} \uparrow \\
&\qquad \rightarrow \text{Lift}_{downwing}\downarrow\downarrow; \ \text{Lift}_{upwing} \downarrow \\
&\qquad \rightarrow \text{Drag}_{downwing}\uparrow\uparrow; \ \text{Drag}_{upwing} \uparrow \\
&\implies \text{Spin}
\end{aligned}
$$

![AoA-CL(D) Diagram on Spin](/images/aoaclspin.png "AoA-CL(D) Diagram on Spin")

## ⭐️ Spin Recovery 
1. Apply full **opposite rudder** 
	- To Regain lift on the lower wing on the *"Swing"* of the wing 
![Effect on Opposite Rudder](/images/opprudder.png "Effect on Opposite Rudder")

2. **Release elevator** back pressure to *decrease AoA. (Air reattached)* 
3. Ease the airplane smoothly out of the resulting dive as airspeed increases

## Desirable Stalling behavior
1. **To have airflow separation at the wing root first for aileron effectiveness,** 
2. To avoid asymmetric stall, which leads to a spin.
3. To keep the wings level in a stall.

## Anti-Stall Design
### Washout
- *Geometric Twist*: Designing the wing so the wing root features a greater angle of incidence than the wingtip.
$$
\begin{aligned}
\text{Aerodynamic Twist} &\implies \text{Different Airfoils} \\
&\implies Camber_{ROOT} > Camber_{TIP} \\
&\implies \text{Wing tip stalls first}
\end{aligned}
$$

- *Aerodynamic Twist*: Grading the structural profile along the span by transitioning from high-camber airfoils at the root to low-camber airfoils at the tip.

![Washout](/images/washout.png "Washout")

### Stall Strip
A stall strip is a **knife-edge like device**, placed to induce wing root stall.
![Stall strip](/images/stallstrip.png "Stall strip")

### Aileron Slots
The slots are formed at wing tips or aileron area to prolong the stall.


## ⭐️ Stall Speed Factors
Stall speed fluctuates based on operational variables dictated by the fundamental balance equation:
$$
W = L = \frac{1}{2} \cdot \rho \cdot V^2 \cdot S \cdot C_L (\alpha)
$$

>[!TLDR]
> **Aircraft Weight \(\uparrow\)** \(\implies V_s \uparrow\)\
> **Flap Extended** \(\implies V_s \downarrow\)\
> **Icing** \(\implies V_s \uparrow\)\
> **CG Forward** \(\implies V_s \uparrow\)\
> **Power \(\uparrow\)** \(\implies V_s \downarrow\)\
> **Load Factor (\(n\)) \(\uparrow\)** \(\implies V_s \uparrow\)


### Weight (\(\propto V_s\))
Higher weight will raise the stalling speed due to higher lift required.
$$
\begin{aligned}
\text{Weight Increase} &\implies \underbrace{W}_{\uparrow} = \underbrace{L}_{\uparrow} = \frac{1}{2} \cdot \underbrace{\rho \cdot S}_{\text{Fixed}} \cdot \underbrace{V_s^2}_{\uparrow} \cdot \underbrace{C_{L(MAX)}}_{\text{Fixed}}
\end{aligned}
$$

### Flaps  (\(\propto \frac{1}{V_s}\))
Flap-down will decrease stall speed. Due to higher \(C_{L(MAX)}\)
$$
\begin{aligned}
\text{Flaps Up} &\implies W = \underbrace{L}_{\text{Fixed}} = \frac{1}{2} \cdot \underbrace{\rho \cdot S}_{\text{Fixed}} \cdot \underbrace{V_s^2}_{\uparrow} \cdot \underbrace{C_{L(MAX)}}_{\downarrow} 
\end{aligned}
$$

### Icing (\(\propto V_s\))
Icing will increase stalling speed due to worsen aerodynamic efficiency.

$$
\begin{aligned}
\text{Icing} &\implies W = \underbrace{L}_{\text{Fixed}} = \frac{1}{2} \cdot \underbrace{\rho \cdot S}_{\text{Fixed}} \cdot \underbrace{V_s^2}_{\uparrow} \cdot \underbrace{C_{L(MAX)}}_{\downarrow \text{ (Altered Airfoil Shape)}} 
\end{aligned}
$$

### CG (\(Forward \propto V_S\))
The forward center of gravity requires **higher tail down force**, which resulting in higher lift required and higher stalling speed. 

![CG on Stall Speed](/images/cgstall.png "CG on Stall Speed")

$$
\begin{aligned}
\text{CG Forward} &\implies \text{Tail-Down Force (TDF)} \uparrow \\
&\implies \text{Pitch-UP Moment} \uparrow \\
&\implies \text{Lift to maintain level} (W + \text{TDF}) \uparrow \\
&\implies \underbrace{W}_{\uparrow}= \underbrace{L}_{\uparrow} = \frac{1}{2} \cdot \underbrace{\rho \cdot S}_{\text{Fixed}} \cdot \underbrace{V_s^2}_{\uparrow} \cdot \underbrace{C_{L(MAX)}}_{\text{Fixed}} \\
&\implies V_s \uparrow
\end{aligned}
$$

### Power (\(\propto \frac{1}{V_s}\)) 
Higher power setting will reduce stalling speed.
![](/images/poweronstall.png "")

$$
\begin{aligned}
\text{Climb} &\implies \text{High Power Setting} \\
&\implies \text{Thrust's vertical component compensates Weight} \\
&\implies \text{Effective Weight} \downarrow \\
&\implies V_s \downarrow
\end{aligned}
$$

### Load Factor (Turn) (\(\propto V_s\))
The stalling speed is increased with bank angle (load factor +)
$$
\begin{aligned}
\text{Bank} &\implies \text{Load Factor(n)} \uparrow \\
&\implies \text{Total Required Lift } (L = n \cdot W) \uparrow \\
&\implies \underbrace{n \cdot W}_{\uparrow} = L_{bank} = \frac{1}{2} \cdot \underbrace{\rho \cdot S}_{\text{Fixed}} \cdot \underbrace{V^2}_{\uparrow} \cdot \underbrace{C_{L(MAX)}}_{\text{Fixed}} \\
&\implies V_s \uparrow
\end{aligned}
$$

---

# 7. Aircraft Maneuver
## Load Factor (n)
The load factor is the **ratio of the actual lift to the weight of aircraft.**

$$
\begin{aligned}
&n = \frac{\text{Lift}}{\text{Weight}} = \frac{L}{L \cos\theta} = \frac{1}{\cos\theta} \\[1.5em]
&\implies \text{Bank } 60^\circ \rightarrow 2\text{G} \\
&\phantom{\implies \text{Bank } 60^\circ} \rightarrow V_{s} = \sqrt{2} \cdot V_{s0}
\end{aligned}
$$

### ⭐️ Limit Load Factor
![](/images/limitn.png "")

- The maneuvering speed (\(V_A\)) is related to the load factor and the stall speed.
- **\(V_A\) represents the maximum speed at which full, abrupt control movement can be used without over-stressing the airframe.**
	- *Why is it recommended to operate under \(V_A\)? \
	  \(\implies\) The plane would enters the "stall" region first instead of "structural damage" region.*
## Rate/Radius of Turn
- The rate of turn is the amount of **time** an airplane takes to turn a specific degrees.
	- **All planes should have a same radius of turn given the same speed and bank angle regardless of weight.**
- The radius of turn is the amount of **horizontal distance** an airplane travels to complete a turn.

![](/images/rateofturn.png "")

{{< callout >}}
$$
\begin{aligned}
&\text{Constant Airspeed} \rightarrow \text{Bank Angle} \uparrow \\
&\implies \text{Radius of Turn} \downarrow \\
&\implies \text{Rate of Turn} \uparrow
\end{aligned}
$$

$$
\begin{aligned}
&\text{Constant Bank Angle} \rightarrow \text{Speed} \uparrow \\
&\implies \text{Radius of Turn} \uparrow \\
&\implies \text{Rate of Turn} \downarrow
\end{aligned}
$$
{{< /callout >}}

## ⭐️ Slip and Skid
> [!IMPORTANT]
> Slip: Centrifugal < Centripetal; Ball inward \
> \(\implies\)Rudder inward/ Speed \(\uparrow\)/ Bank \(\downarrow\)\
> Skid: Centrifugal > Centripetal; Ball outward \
> \(\implies\)Rudder outward/ Speed \(\downarrow\)/ Bank \(\uparrow\)\

![](/images/slipskid.png "")

## Left Turning Tendency
A left turning tendency can occur in propeller driven airplanes in **HIGH POWER, LOW AIRSPEED** flight conditions due to four effects.
### Torque reaction
The revolving propeller can rotate an airplane in the opposite direction due to torque reaction (based on Newton's third law of motion).

1. Torque on ground\
For a right turning propeller, the torque reaction forces the left main gear down during takeoff roll. It results in more **ground friction** and a turning to the left.\
\(\implies\) Right Rudder padel

2. Torque airborne\
→ The left wing has to create more lift to level the wings.\
→ The left wing creates more lift down-going wing by using different twist and/or different size or the wings.\
→ Aileron trim tabs could be used, but adds more *induced* drag and causes a yawing to the left.\
\(\implies\) Pilot should still correct the yaw by rudder.

### Gyroscopic Precession
When a force is applies to the rim of a rotating disc. The reacting force acts in the direction of application and 90° ahead in direction of rotation.

![](/images/lefttendencyprecession.png "")

### Asymmetric thrust
Asymmetric thrust (or P-factor) appears when an airplane is **flown at a High AoA**, due to
- Different resultant velocities
- Different angles of attack on the propeller blades
The descending blade creates more thrust than the ascending blade, because of the higher resultant velocity and the higher angle of attack.

![P-factor](/images/pfactor.png "P-factor")

**The P-factor is most pronounced at a high power, low speed, high AoA setting**

#### 🗣️ Critical Engine
Critical engine is on the side where the propeller with a greater asymmetric thrust closer to the longitudinal axis, which creates a greater yawing moment. For a clockwise turning propellers, the left engine is called critical engine.

![](/images/criticalengine.png "")


#### \(V_{MC}\)
The lowest speed for **directional control (rudder)** is the minimum control speed (\(V_{MC}\)) .
- \(V_{MCG}\): on ground. Would **ALWAYS** smaller than V1
- \(V_{MCA}\): Airborne
### Corkscrewing effect
A rotating propeller produces a corkscrewing effect to the air behind the propeller.
![](/images/spiralsplitstream.png "")

**The splitstream is most effective when SPEED LOW; RPM HIGH**\
\(\implies\) **Takeoff, climbing or power on stall.**


# 8. Wake Turbulence
![](/images/wake.png "")

- The creation of wake turbulence starts at rotation of aircraft during takeoff roll, continuously existing through cruise and ends at touchdown.
- Around 2 wing spans width; 1 wing span depth; 
- **Flaps down would decrease induced drag, reduce wingtip vortexes, and reduce wake.**
- Wake turbulence travels at about 5 nm/hr

## ⭐️ Factors of Wake
$$
\begin{aligned}
& \qquad \qquad \text{WAKE} \propto \frac{\text{Weight}}{\text{Span} \cdot \text{TAS}} & \\
& * \text{Increase in weight is to increase } (\Delta P) \\
& * \text{Decrease in speed is to increase } \text{Circulation intensity} \\
& * \text{Decrease of wingspan is to increase } \text{induced drag}
\end{aligned}
$$

## Safe Areas
![](/images/safewake1.png "")
![](/images/safewake2.png "")
![](/images/safewake3.png "")
![](/images/safewake4.png "")
![](/images/safewake5.png "")
![](/images/safewake6.png "")
