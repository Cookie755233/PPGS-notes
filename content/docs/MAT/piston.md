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
- Cleaning *contaminants through filter*
- Conservation *anti-corrosion* 
- Power transmission *as hydraulic fuel for propeller control or torque meter system*


### Wet Sump
![](/images/wetsump.png "")