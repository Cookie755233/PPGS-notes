---
title: 1. Aerodynamic Principles and Airspeeds
---

### Atmospheric Physics & Classical Mechanics

{{< details title="Newton's Laws of Motion" closed="true" >}}
Laws proposed by Isaac Newton that explain how force and motion work.

* **Newton's first law e(The principle of inertia)**: Expressed in simple terms, it can be said that a physical body at rest remains at rest unless another force acts upon it, and that a body that is in motion will not change its velocity unless a resultant force acts upon it. This is known as uniform motion. The unit for inertia is mass.
* **Newton's second law (Acceleration)**: If a physical body is affected by a force exerted upon it, then that physical body will be accelerated in the direction of the acting force. Acceleration is directly proportional to the force \(\text{F}\) and inversely proportional to the mass \(\text{m}\) of the physical body.
  
  \(\text{F} = \text{ma}\)

* **Newton's third law (Action-Reaction law)**: Each applied force affects an equal opposing force. In order for this law to hold true, there must be a relative relationship between the physical body and the force exerted upon that body.
{{< /details >}}

{{< details title="Air Density" closed="true" >}}
Air density is defined as being the mass \(\text{m}\) of air per unit volume. The density decreases as the flight level increases (because of gravity). 

At about \(22,000 \text{ ft}\) / \(6,700 \text{ m}\), the air density at \(0.61 \text{ kg/m}^3\) is half that at sea level.
{{< /details >}}

{{< details title="Air Static Pressure" closed="true" >}}
Static pressure \(\text{P}_\text{s}\) is defined in aviation as the gravitational force of a column of air exerted on a specific area. 

Static pressure at MSL is \(1013.25 \text{ hPa}\) or \(29.92 \text{ inHg}\).

This static pressure decreases with increasing altitude, because less air is exerted on the surface at higher altitudes. At \(18,000 \text{ ft}\) / \(5,500 \text{ m}\), the pressure of \(506 \text{ hPa}\) is about half as much as it is at sea level.
{{< /details >}}

{{< details title="Ideal Gas Equation" closed="true" >}}
Consider air as an ideal gas; the ideal gas equation relates the pressure, density, and temperature for the air.

\(\text{P} = \rho\text{RT}\) \((\text{PV} = \text{nRT})\)
{{< /details >}}

---

### Fluid Dynamics Principles

{{< details title="Principle of Continuity (Continuity Equation)" closed="true" >}}
It states that the mass flow is conservative (conservation of mass) in a tube or between specified streamlines.

\(\rho_1 \times \text{V}_1 \times \text{A}_1 = \rho_2 \times \text{V}_2 \times \text{A}_2\)

When density \(\rho\) is constant:  
\(\rightarrow \text{V}_1 \times \text{A}_1 = \text{V}_2 \times \text{A}_2\)
{{< /details >}}

{{< details title="Bernoulli's Principle & Equation" closed="true" >}}
**Bernoulli's Principle**: States that as the velocity of a moving fluid (liquid or gas) increases, the pressure within the fluid decreases.

**Bernoulli's Equation**: The total energy of the flow is constant when there is neither energy loss due to friction, nor energy added.

\(\text{P}_{\text{total}} = \text{P}_{\text{static}} + \text{q}\)

When the velocity increases in the flow, there shows a decrease in static pressure, and vice versa.
{{< /details >}}

{{< details title="Venturi Effect" closed="true" >}}
The venturi tube has an air inlet that narrows to a throat (constricted point) and an outlet section that increases in diameter toward the rear. The diameter of the outlet is the same as that of the inlet. 

The mass of air entering the tube must exactly equal the mass exiting the tube. At the constriction, the speed must increase to allow the same amount of air to pass in the same amount of time as in all other parts of the tube. 

When the air speeds up, the pressure also decreases. Past the constriction, the airflow slows and pressure increases.
{{< /details >}}

{{< details title="Dynamic Pressure (q)" closed="true" >}}
Dynamic pressure \((\text{q})\) is the "proportion of total pressure" expressed as the dynamic resistance in a fluid in motion observed on a body. It is sometimes also designated as velocity pressure.

The dynamic pressure changes in relation to the velocity and the density \((\rho)\) of the airstream.

\(\text{q} = \frac{\rho}{2} \times \text{V}^2\)  
(\(\rho\) = density of the fluid)
{{< /details >}}

---

### Pitot-Static Instruments & Airspeed Metrics

{{< details title="Airspeed Indicator Function" closed="true" >}}
An airspeed indicator is a pressure gauge, which measures the dynamic pressure associated with the airspeed. It is based on Bernoulli's equation in design.

The total pressure is measured at the pitot head; the static pressure at the static port.

The dynamic pressure results from the pressure difference, and is converted to show the indicated airspeed (IAS) based on standard air density at mean sea level (ISA).
{{< /details >}}

{{< details title="Indicated Airspeed (IAS)" closed="true" >}}
It is the readout of the airspeed indicator based on the pressure difference, \((\text{P}_\text{t} - \text{P}_\text{s})\), corrected by "standard sea level" air density (\(\rho_0 = 1.225 \text{ kg/m}^3\)).

\(\text{IAS} = \sqrt{\frac{2}{\rho_0} (\text{P}_\text{t} - \text{P}_\text{s})}\)

Airspeed indicators are based upon **STANDARD PRESSURE** at **sea level** (\(1.225 \text{ kg/m}^3\)). At higher altitudes the resulting errors lead to deviations in relation to the true airspeed TAS. Standard air density parameters are taken at MSL on an ISA day (\(15^\circ\text{C}\), \(14.7 \text{ psi}\)).
{{< /details >}}

{{< details title="Calibrated Airspeed (CAS)" closed="true" >}}
It is the readout of the indicator after correcting IAS for the error of the instrument and the error due to the position of installation.
{{< /details >}}

{{< details title="True Airspeed (TAS)" closed="true" >}}
It is the actual flight speed of an airplane relative to the air. 

The higher the altitude is, the lower the density ratio \(\sigma\) is, and the true airspeed TAS increases as opposed to the equivalent airspeed EAS.

\(\text{q} = \frac{1}{2} \times \rho \times \text{V}^2 = \frac{1}{2} \times \rho_0 \times (\text{IAS})^2 = \frac{1}{2} \times \rho_\text{H} \times (\text{TAS})^2\)

\(\text{(altitude goes up} \rightarrow \text{TAS goes up} \rightarrow \rho \text{ goes down)}\)
{{< /details >}}
