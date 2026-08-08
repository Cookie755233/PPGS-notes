---
title: PERF
cssclasses:
- ultra-wide-view
---

## What Is Performance
- The ability of an aircraft to **accomplish certain things for certain purposes.**
- To understand airplane under different circumstances
- Find the airworthiness certificate in **approved flight manual or AFM**

### Performance Legislation
- Airworthiness requirements according to **CS/FAR 23** (small aircraft) and **CS/FAR 25** (large aircraft)
- Classes: **Normal, Utility, Aerobatic**

### Factors Affecting Performance
![](/images/perffac.png "")

## 1. Takeoff (6)
> Takeoff starts from **break release** until **reaching screen height (50ft)**

- Takeoff Roll (TOR) is measured from **break release to liftoff of aircraft.**
- Takeoff Distance (TOD) is measured from **break release to aircraft reaching 50ft AGL.**
![](/images/todtor.png "")

### Takeoff Variables

| Factor         | Effect on TOR / TOD                                                                                                                                                |
|:-------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Weight         | Weight \(\uparrow\) \(\implies\) TOR / TOD \(\uparrow\)                                                                                                            |
| Configuration  | T/O flaps \(\implies\)  TOR / TOD \(\downarrow\)                                                                                                                   |
| Runway Surface | Other than hard surface \(\implies\) TOD/TOR \(\uparrow\)                                                                                                          |
| Runway Slope   | Uphill \(\implies\) TOR / TOD \(\uparrow\)                                                                                                                         |
| Density        | - \(L = \frac{1}{2} \rho v^2 \implies \rho \downarrow; \red{TAS} \uparrow \)<br>- Altitude/ Temperature/ Humidity \(\uparrow\) \(\implies\) TOR / TOD \(\uparrow\) |
| Wind           | - Headwind \(\implies\) TOR / TOD \(\downarrow\)<br>- Tailwind \(\implies\) TOR / TOD \(\uparrow\)                                                                 |

- TOR / TOD and their limitations can be found per FAM or POH
- TOR / TOD are described in 2 forms: 
	- **Diagram form** provides *more information (scenarios)* within a single chart;
	- **table form** creates more *precise* numbers in a specific condition

#### 1.1 Weight
Heavy weight requires larger lift (larger liftoff speed) with longer TOR and TOD.
#### 1.2 Configuration
![](/images/flapstotodtor.png "")
#### 1.3 Runway Surface
A soft or rough field, high grass, or deep snow will increase the TOR and TOD.
#### 1.4 Runway Slope
Uphill slope can increase **TOR**, since a portion of weight vector will be acting as if it were drag; a downhill does the opposite to it.
#### 1.5 Density
 - \(L = \frac{1}{2} \rho v^2 \)
 - Due to the **reduction of oxygen** for combustion, the engine power is decreasea as well.
#### 1.6 Wind
As described.

## 2. Climb (4)
> Climb starts from the **end of takeoff (50ft, screen height)** until aircraft reaches **cruising altitude (TOC)**

- **Angle of climb (\(\gamma\))** is the angle relative to the **air distance (by TAS)**
- **Rate of climb (\(R/C\))**, in *feet per minute*, is the vertical speed of aircraft (VSI)
- During climb, the engine power is set to *Maximum*. Pilot adjust **Pitch for speed**

### Flight Dynamics
$$
\begin{aligned}
\text{Angle of climb }(\gamma): \\
\gamma &\propto \sin{\gamma}
= \frac{T-D}{W}
= \frac{T_a - T_r}{W}
= \frac{\text{Excess Thrust}}{W}
\end{aligned}
$$

$$
\begin{aligned}
\text{Rate of climb} (R/C): \\
R/C
&= V\sin{\gamma} =
\frac{
    \overbrace{
        T_{thrust} \cdot V_{speed}
    }^{
        \substack{
            \text{Power} = \frac{Work}{\Delta t}
            = \frac{F \cdot S}{\Delta t}
            = F\times V
        }
    }
    - D \cdot V
}{W} \\
&= \frac{P_a-P_r}{W} \\
&= \frac{\text{Excess Power}}{W}
\\[1em]
\text{where} \qquad
P_a &= \text{Power Available (from engine)}, \\
P_r &= \text{\color{red}{Power Required}}
= D \times V
= \text{\color{red}{Total Drag}} \times \text{TAS}
\end{aligned}
$$

{{< callout type="info" >}}
**DANNY VIP: A Climb is due to ==(Excess) Thrust > Drag==**\
\(\implies\) The reason a airplane does not climb: **Too little thrust or too much drag.**\
\(\implies\) This is why after climb, **flaps up to reduce drag.**

*⚠️ During a ==climb==, \(L = W \cos(\gamma)\) \(\implies\) ==Lift is actually **SMALLER** than weight==.*
{{</ callout >}}

![Excess Power - TAS Chart](/images/excesspwrtas.png "Excess Power - TAS Chart")

{{< callout >}}
**Vx vs Vy**\
![Vx, Vy relationship](/images/vxvyslope.png "Vx, Vy relationship")

**Vx: Maximum ==angle== of climb**\
The speed is normally used for **obstacle clearance** or to reach a specified altitude in a
minimum distance. *If the engine is too hot, detonation may happen and results in power loss.*

**Vy: Maximum ==rate== of climb**\
The speed provides **minimum time to cruise altitude**, and is used for better operation
efficiency and **engine cooling.** *Preferable when no obstacle is present.*
{{</ callout >}}


### Climb Variables
{{< table width="3,2,2,2,2,3,6" >}}

| Factors                | Best A/C {{tip:Angle of Climb}} | Best R/C {{tip:Rate of Climb}} | Vx             | Vy             | Perf.          | Remarks                                                                                                                                                                                                                                                                                                                                                                                                         |
|:---------------------- |:------------------------------- |:------------------------------ |:-------------- |:-------------- |:-------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Weight \(\uparrow\)    | \(\downarrow\)                  | \(\downarrow\)                 | \(\uparrow\)   | \(\uparrow\)   | \(\downarrow\) | **Induced** Drag \(\uparrow\)                                                                                                                                                                                                                                                                                                                                                                                   |
| Flaps \(\downarrow\)   | \(\downarrow\)                  | \(\downarrow\)                 | \(\downarrow\) | \(\downarrow\) | \(\downarrow\) | **Parasite** Drag \(\uparrow\)                                                                                                                                                                                                                                                                                                                                                                                  |
| Density \(\downarrow\) | \(\downarrow\)                  | \(\downarrow\)                 | \(\uparrow\)   | \(\uparrow\)   | \(\downarrow\) | - **Induced** Drag \(\uparrow\); **Parasite** Drag \(\downarrow\)<br>- Power Available \(\downarrow\)<br>- **Minimum Drag unchanged; speed for min drag increases<br>- Power Required shifts up along the slope (\(\uparrow\))**<br>- Area of Excess Power \(\downarrow\)<br>- Service Ceiling: **pressure altitude** where **max R/C = 100 ft/min**; *Absolute Ceiling: P.A. where R/C = 0 (Excess power = 0)* | 
| Wind                   | -                               | -                              | -              | -              | **Headwind \(\uparrow\)**;<br>**Tailwind \(\downarrow\)**              | Flight *Path* is affected → Climb time is not changed, but the TOC is shifted                                                                                                                                                                                                                                    |

{{< /table >}}

#### 2.1 Weight
![](/images/weighttoclimb.png "")
![](/images/weighttoclimb2.png "")

#### 2.2 Configuration (Flaps)
![](/images/configtoclimb.png "")
![](/images/configtoclimb2.

#### 2.3 Density
![](/images/densitytoclimb.png "")
![](/images/densitytoclimb2.png "")
![Service Ceiling](/images/serviceceiling.png "Service Ceiling")
#### 2.4 Wind
![](/images/windtoclimb.png "")


## 3. Cruise (3)
> Cruise starts from **TOC** to **TOD**

- **Endurance** : The length of **Time** that an aircraft can spend in cruising flight.
$$
\text{Specific Endurance} = \frac{\text{Time}}{Fuel} = \frac{1}{\text{Fuel Flow}} \propto \frac{1}{\text{Power}}
$$

- **Range**: The **Distance** an aircraft can fly in cruising flight.
$$
\text{(Air) Specific Range} = \frac{\text{Distance}}{Fuel} = \frac{TAS}{\text{Fuel Flow}} \propto \frac{TAS}{\text{Power (Available)}}
$$

*specific X: standardisation to X.*

### Flight Dynamics of Cruise
> To achieve steady cruise,\
> T = D \(\Rightarrow\) T⋅V = D⋅V\
>  \(\implies\) **Power Available = Power Required**

### Cruise Variables
![](/images/cruise.png "")
- Typically there's only **ONE stable {{< tip "When disturbed, tendency to return to original state of flight" >}} cruising speed** unless controlled by flight computer. *(Point A)*
- Disturbance on point A: **result in the aircraft eventually returning to the original state.**

$$
\left.
\begin{aligned}
\text{TAS} \uparrow &\Rightarrow P_r > P_a \Rightarrow \text{TAS} \downarrow \quad\\
\text{TAS} \downarrow &\Rightarrow P_a > P_r \Rightarrow \text{TAS} \uparrow \quad
\end{aligned}
\right\}
\implies \red{\text{Stable}}
$$

- Disturbance on point B: **result in a further climb/descent unless power is adjusted.**

$$
\left.
\begin{aligned}
\text{TAS} \uparrow &\Rightarrow P_a > P_r \Rightarrow \text{TAS} \uparrow \quad\\
\text{TAS} \downarrow &\Rightarrow P_r > P_a \Rightarrow \text{TAS} \downarrow \quad
\end{aligned}
\right\}
\implies \red{\text{Unstable}}
$$

- **Maximum Endurance Cruise**: The speed is used to **maximize the length of time** that an aircraft can spend in cruising flight.
- **Maximum Range Cruise(MRC)**: The speed provides the **maximum fuel mileage**.


#### 3.1 Weight
#### 3.2 Density
#### 3.3 Wind