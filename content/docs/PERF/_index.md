## What Is Performance
- The ability of an aircraft to accomplish certain things for certain purposes.
- To understand airplane under different circumstances
- Find the airworthiness certificate in approved flight manual or AFM

### Performance Legislation
- Airworthiness requirements according to CS/FAR 23 (small aircraft) and CS/FAR 25 (large aircraft)
- Normal, Utility, Aerobatic

### Factors Affecting Performance
![](/images/perffac.png "")

## Takeoff
{{< callout >}}
Takeoff starts from **break release** until **reaching screen height (50ft)**
{{</ callout >}}

- Takeoff Roll (TOR) is measured from break release to liftoff of aircraft.
- Takeoff Distance (TOD) is measured from break release to aircraft reaching 50ft AGL.
![](/images/todtor.png "")


| **Factor**              | **Effect on TOD / TOR**                                                                                                                                           |
|:----------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Weight                  | Weight \(\uparrow\) TOD / TOR \(\uparrow\)                                                                                                                        |
| Configuration           | T/O flaps \(\Rightarrow\)  TOD / TOR \(\downarrow\)                                                                                                               |
| Runway Surface          | Other than hard surface \(\Rightarrow\) TOD/TOR \(\uparrow\)                                                                                                      |
| Runway Slope            | Uphill \(\Rightarrow\) TOR \(\uparrow\)                                                                                                                           | 
| Environmental Condition | - \(L = \frac{1}{2} \rho v^2 \implies \rho \downarrow; \red{TAS} \uparrow \)<br>- Altitude/ Temperature/ Humidity \(\uparrow\) \(\Rightarrow TOD / TOR \uparrow\) |
| Wind                    | - Headwind \(\Rightarrow TOD / TOR \downarrow\)<br>- Tailwind \(\Rightarrow TOD / TOR \uparrow\)                                                                  |

- TOR and TOD and their limitations can be found per FAM or POH
- TOD/TOR has 2 forms: **Diagram form** provides more information (scenarios) within a single chart, while **table form** creates more precise numbers in a specific condition

## Climb
{{< callout >}}
Climb starts from the **end of takeoff (50ft, screen height)** until aircraft reaches **cruising altitude (TOC)**
{{</ callout >}}

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
\frac{\overbrace{
T_{thrust} \cdot V_{speed}}^{\substack{
\text{Power} = \frac{Work}{\Delta t} = \frac{F \cdot S}{\Delta t}
= F\times V
}
}
-D \cdot V}{W} \\
&= \frac{P_a-P_r}{W} \\
&= \frac{\text{Excess Power}}{W}
\\[1em]
\text{where} \qquad
P_a &= \text{Power Available (from engine)}, \\
P_r &= \red{Power Required}
= D \times V
= \red{{Total Drag} \times {TAS}}
\end{aligned}
$$

{{< callout type="info" icon="sparkles" >}}
**VIPPP - An ==climb== is due to (Excess) ==Thrust > Drag==**\
\(\implies\) The reason a airplane does not climb: *Too little thrust or too much drag.*\
\(\implies\) This is why after climb, **flaps up to reduce drag.**

*⚠️ During a climb, \(L = W \cos(\gamma)\) \(\implies\) Lift is actually smaller than weight.*
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




