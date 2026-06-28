---
title: 2. Piston Engine
---

## Otto Four Stroke Cycle
![](/images/engine.png "")
![](/images/otto4.png "")

### 1. Intake Stroke (0° to 180°)
- **Valves:** The intake valve opens; the exhaust valve remains closed.
    
- **Mechanism:** This downward displacement creates a pressure differential, drawing a  **fuel-air mixture** into the cylinder volume.
    
- **Piston Motion:** The piston moves downward from **Top Dead Center (TDC)** to **Bottom Dead Center (BDC)**.

### 2. Compression Stroke (180° to 360°)
- **Valves:** Both the intake and exhaust valves are fully closed, sealing the combustion chamber.

- **Mechanism:** The trapped fuel-air mixture is mechanically compressed, significantly increasing its temperature and pressure.

- **Piston Motion:** The piston ascends from **BDC to TDC**.

### 3. Power Stroke (360° to 540°)
- **Valves:** Both valves remain closed to maintain sealed.

- **Mechanism:** A spark plug ignites the compressed mixture. The rapid thermal expansion of the burning gases exerts high linear force on the piston, which the connecting rod converts into rotational torque via the crankshaft.
    
- **Piston Motion:** Driven by combustion pressure, the piston is forced downward from **TDC to BDC**.


### 4. Exhaust Stroke (540° to 720°)
- **Valves:** The exhaust valve opens; the intake valve remains closed.
    
- **Mechanism:** The upward stroke mechanically scavenges the cylinder, expelling the spent combustion byproducts through the exhaust manifold.

- **Piston Motion:** The piston ascends from **BDC to TDC**.


## Induction System
The induction system is designed to bring outside air into the engine and mix the air  with fuel at a proper mass ratio.

### Carburetor
![](/images/carburator.png "")

- Filtering **icing** can be detected with decreasing power, indicated by **RPM (fixed-pitch) or MAP(const-speed) drop.**
- **An automatic mixture control (AMC)** device may be provided, where an evacuated bellows controls the mixture control valve to keep the fuel air ratio unchanged with variation in air pressure.
- To shut off engine:
	- Idle lever cutoff position, mixture control valve closed.
	- magneto cutoff

### Fuel injection
Fuel injection provides more precise in metering fuel and prevents carburetor icing.
![](/images/fuelinjection.png "")

#### Basic Components
- Fuel pump
- Fuel control unit
- Fuel manifold valve
- Fuel discharge nozzles

## Fuel air **(MASS)** mixture
- *Burnable within 1:5 ~ 1:25*
- *Engine power within 1:8 ~ 1:20*

Which would affect:
1. Combustion temperature
2. Flame front velocity
3. Power

*During take off, when full power, is used, pilot should set full rich (1:10) for the excess oil to cool down cylinder.*


### Mixture to Power Relationship
![](/images/mixturepower.png "")

{{< callout >}}
$$
\begin{aligned}
Power &= \frac{Work}{\Delta T} \\
&\implies 1:12.5 \text{(BPP) burns the fastest} \\
&\implies \text{Fastest flame velocity} \\
&\implies \text{Best "Power"}
\end{aligned}
$$
{{</ callout >}}


- **Chemical Correct Mixture (CCM) - 1:15**  would burn completely, and produces the **highest combustion temperature.**

- **Best Power Point (BPP) - 1: 12.5** would deliver the **optimal power** for a constant power level position.


## Magneto Ignition System
A magneto is an electrical generator that uses **permanent magnets** to produce periodic pulses of alternating current, providing **power to the spark plugs.**

![](/images/magnitoingition.png "")

The permanent magnets rotate and create a change in the magnetic field.\
\(\implies\) Induced voltage is produced and current flows through the **primary coil**.\
\(\implies\) As the crankshaft rotates, breaker points open and cut off the current.\
\(\qquad \rightarrow\) ***Capacitor(condenser)** is added to reduce the time to completely break the current.*\
\(\qquad \rightarrow\) *\(\text{Rate of Change of Magnetic Flux} \propto \frac{\text{Current}}{\Delta t}\)*\
\(\qquad \rightarrow\) *\(\Delta t \downarrow \; ; \; \text{Rate of Change of Magnetic Flux} \uparrow\)*\
\(\implies\) High rate of magnetic field collapse \(\rightarrow\) High induced voltage\
\(\implies\) Direct the high voltage vis **secondary coil** to the spark plugs.


### Duel Ignition System
- There uses two completely independent but identical magneto type ignition systems for *redundancy* and *more engine power (complete burn of fuel in a shorter time)* 
- Should one fails, the engine will continue to operate normally but with a slight decrease in engine power.
- Switch position: **Off, Left, right, Both**
- **When switch is off, the breaker points are short-circuited to ground**

## Magneto Check
### Fixed-pitch propeller
The amount of fuel/air mixture is controlled by the **throttle lever (tachometer) and the mixture lever(not indicated)**

1. Set proper power setting
2. **Switch from BOTH to Left**\
   \(\implies\) tachometer may be a max drop of **175** RPM.\
   \(\implies\) left magneto is functioning and right is off.
3. Switch from Left to Right, the difference in RPM drop **may not exceed more than 50 RPM** 

### Constant-speed Propeller
The amount of fuel/air mixture is controlled by the **throttle lever (MAP), RPM lever (RPM), and mixture lever (not indicated)**

1. Set propeller full forward \(\rightarrow\) **pitch minimum**
2. Set proper throttle *(DA40: 2000)*
3. Switch from BOTH to Left\
    \(\rightarrow\) *Power drops*\
    \(\rightarrow\) *Blade angle wants to drop to keep up with RPM*\
    \(\rightarrow\) *Blade angle already set minimum*\
    \(\rightarrow\) *RPM drops*
4. **Maximum drop of 175 RPM**
5. Switch from Left to Right, the difference in RPM drop **may not exceed more than 50 RPM.**

> [!note]
> Scenario: When switching from BOTH to Left, RPM does not drop:
> 
> *Possible causes 1: Right Ignition Switch broken*\
> \( \qquad \rightarrow\) **When switching Left, the right magneto never stops**\
> \(\implies\) Switch Right, left magneto is cutoff\
> \(\implies\) RPM drops
> 
> *Possible causes 2: Right magneto broken.*\
> \( \qquad \rightarrow\) **Only left magneto is working at the start, right magneto was never on.**\
> \(\implies\) Switch to Right, left magneto cutoff.\
> \(\implies\) engine dies.


### Dead cut check
To make sure the magnetos are *properly grounded*, **switch set to OFF position while engine running in idle, the engine should be dying.**

As soon as it is sure the engine will die and the magnetos are well grounded, the switch can be turned back to BOTH without having the engine stopped.


## Oil System
The lubrication (oil) system serves for the duties of： 
- Lubrication 
- Cooling 
- Sealing
- Cleaning *(contaminants through filter*)
- Conservation *(anti-corrosion*) 
- Power transmission *(as hydraulic fuel for propeller control or torque meter system)*


### Wet Sump
![](/images/wetsump.png "")
- *The wet sump does not work in inverted and radial type engine, or acrobatic airplanes (because it's using gravity to move the oil)*

### Oil Check
- Quantity: Using a dipstick.
- Pressure: 
	- To ensure lubrication the **oil pressure should be indicated 30 second after engine start.** (60 seconds in cold weather.)
- Temperature:
	- Oil temperature is measured *before* the oil enters the engine.

#### High Oil Temperature
- Low oil quantity *leakage*
- High friction in the engine bearings 
- Insufficient heat transfer due to inoperative oil cooler system
- **Slow speed with high engine power.** *insufficient air cooling*

{{< callout >}}
React to High Oil Temperature
- **D**ecrease climb rate and increase airspeed
- **O**pen cowl flap *(increases airflow)*
- **P**ower reduction
- **E**nrich mixture *(helps cool the engine)*
{{</ callout >}}

---

#### Low Oil Pressure
- Low oil quantity *leakage*
- Obstructed oil cooler
- Pressure pump failure
- Pressure relief valve failure

{{< callout >}}
React to Low Oil Pressure
$$
\begin{array}{l}
\textbf{CASE 1}
\begin{cases}
\text{High temp, low pressure} \rightarrow \text{low flow} \\
\text{Low temp, low pressure} \rightarrow \color{red}{\text{no}} \text{ flow}
\end{cases} \\
\implies  \color{red}{\text{landing ASAP}} \\
\\
\textbf{CASE 2} - \text{Normal temp, low pressure} \\
\implies \text{False indication, continue flight and observe}
\end{array}
$$
{{</ callout >}}


## Detonation
![](/images/detonation.png "")

- Knock resistance is determined by self-ignition temperature of the fuel.
- Detonation is an uncontrolled self-ignition with **explosive** rapidity due to high pressure and high temperature.
- The area inside a P-V diagram equals **usable power**.
	- **Normal Combustion:** Fuel burns smoothly, pushing the piston down with a steady, wide force. Result: A wide loop with a **large area** (more power).
	- **Detonation:** Fuel violently explodes all at once. The pressure spikes too early while the piston is still moving up. The engine fights itself, and energy is wasted slamming the cylinder block as heat. Result: A tall, skinny spike with a **small area**

### Common Causes of Detonation
- **High MAP with low RPM** → *The mixture cannot expand fast enough after ignition to lower the temperature due to the slow piston speed.*
- High power with lean mixture
- High power with low speed →  *poor cooling*

{{< callout >}}
**Large power setting change must be done in a correct sequence.**
![](/images/pwrchange.png "")
{{</ callout >}}

## Vapor Lock
- The fuel inside the supply line is **heated**  (e.g. start with a hot engine) 
- Pressure decreases inside the EDP fuel supply line **due to altitude increase.**

\(\implies\) Boost pumps should be switched “ON" to raise the boiling temperature. *(increase pressure)*


## ⭐️ Power Equation
**Power is the work done per unit time,  and work is the force times distance.**

$$
\begin{aligned}
\text{Work} &= \text{force} \times \text{distance} \\
&\implies F \times 2\pi r = 2\pi T \text{ (Torque)} \\
\\
\text{Power} &= \frac{\text{Work}}{\text{Time}} \\
&= 2\pi T \times \text{RPM(rev/min)} \\
&= T \times \text{RPM} \times C \\
\implies \text{Power} &\propto \underbrace{T}_{\propto \text{ MAP}} \times \text{RPM}
\end{aligned}
$$


### Increase Power, Fix RPM (const-prop)
$$
\begin{aligned}
\text{Increase power} \Rightarrow\ & \text{MAP } \uparrow \\
\Rightarrow\ & \text{Engine Torque } \uparrow \\
\Rightarrow\ & \uparrow T = I \cdot \alpha \uparrow \implies \text{RPM \underline{wants} to increase} \\
& (F = m \cdot a) \\
& \begin{cases}
\because \text{RPM fixed} \\
\rightarrow \text{Pitch angle (blade) } \uparrow  \\ 
\implies \text{Tangential Force } \uparrow
\end{cases} \\
\Rightarrow\ & \text{Power } \uparrow \\
\implies & \text{speed } \uparrow, \text{ GPH } \uparrow
\end{aligned}
$$

### Torque Curve
- Ideally, The air mass inside the cylinder is constant at a fixed throttle position(MAP)
- **In reality, the amount of air per cycle depends on RPM**

![](/images/torquecurve.png "")

## Manifold Air Pressure (MAP)
![](/images/map.png "")
- The change of MAP indicates the power change by the throttle.
- *MAP slightly decreases at a higher RMP* due to friction.
- **MAP is the highest when set full throttle (slightly lower than QFE)** and **lowest on idle (~10 in)**
- Boosted(*supercharged/turbocharged*) engines would have a greater power at a higher **altitude** with the supply of denser air.
	- supercharged: engine driven pump
	- turbocharged: more efficient, driven by exhaust gas.


## Propeller
- The propeller is driven by the rotating *crankshaft* of the engine.
- The thrust is acting *normal to the plane of rotation of the propeller.*
- **The propeller pitch is the angle between the blade chord line and plane of rotation.**
- The relative wind to each propeller blade is **an addition of the flight speed und rotational speed.**
- The angle of attack is the angle between the relative wind and sectional chord line.

### Propeller Twist
**The optimum AoA for a propeller section will provide the highest ratio of thrust to tangential force. A propeller twist is designed for the prop to obtain an optimum AoA at all point.**

![](/images/proptwist.png "")


### Adjustment on Constant Pitch Propeller
$$
\begin{align*} 
\text{Prop Lever} \uparrow \implies \quad
&\text{RPM} \uparrow \\
&\text{Prop Pitch} \downarrow \\
&\text{Power} \uparrow (Power\uparrow = T \times RPM\uparrow)\\
&\text{MAP} \rightarrow \text{Constant} (\text{drops slightly})\\
&\text{TAS} \uparrow \\
&\text{GPH} \uparrow 
\end{align*}
$$
$$
\begin{align*} 
\text{Throttle} \uparrow \implies \quad 
&\text{MAP} \uparrow \\
&\text{Torque} \uparrow \\
&\text{Power} \uparrow (Power\uparrow = T\uparrow \times RPM)\\
&\text{Prop Pitch} \uparrow \\
&\text{RPM} \rightarrow \text{Constant} \\
&\text{TAS} \uparrow \\
&\text{GPH} \uparrow 
\end{align*}
$$