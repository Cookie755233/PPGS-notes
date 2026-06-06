---
title: "@POF MIDTERM"
---

## 1. Fundamental Equations

### Continuity Equation

The continuity equation is based on the conservation of mass. For a fluid flowing through a tube with two cross-sections (1 and 2):

$$\dot{m} = \frac{\Delta M}{\Delta t} = \rho_1 \cdot V_1 \cdot A_1 = \rho_2 \cdot V_2 \cdot A_2$$

Where:

- \(\dot{m}\) = mass flow rate
- \(\rho\) = fluid density
- \(V\) = fluid velocity
- \(A\) = cross-sectional area

If we assume the fluid is incompressible (**density remains constant**, \(\rho_1 = \rho_2\)), the equation simplifies to the volumetric continuity equation:

$$A_1 \cdot V_1 = A_2 \cdot V_2$$

### Bernoulli's Equation

Bernoulli's equation states that the total pressure (\(P_t\)) along a streamline is constant and is the sum of static pressure (\(P_s\)) and dynamic pressure (\(q\)):

$$P_t = P_s + q$$

Where dynamic pressure (\(q\)) is defined as:

$$q = \frac{1}{2}\rho V^2$$

Therefore:

$$P_t = P_s + \frac{1}{2}\rho V^2$$

## 2. Application: The Pitot Tube

A Pitot-static system uses Bernoulli's principle to measure an aircraft's fluid velocity by capturing two different types of pressure:

- **Total Pressure (\(P_t\)):** Measured at the open entry of the Pitot tube, where the oncoming air is brought to a complete stop (stagnation point).
- **Static Pressure (\(P_s\)):** Measured at the static port, which is aligned parallel to the airflow to capture ambient atmospheric pressure.

By rearranging Bernoulli's equation, we can solve for the pressure differential (\(\Delta P\)), which isolates the dynamic pressure (\(q\)):

$$q = P_t - P_s = \Delta P$$

$$\frac{1}{2}\rho V^2 = \Delta P \implies V = \sqrt{\frac{2 \Delta P}{\rho}}$$

## 3. The Four Kinds of Airspeed

Airspeed indicators cannot directly measure true speed because air density changes with altitude and temperature. Therefore, pilots use four distinct airspeed definitions:

### I. Indicated Airspeed (IAS)

The raw speed reading shown directly on the cockpit's airspeed indicator. It is based solely on the raw pressure difference (\(P_t - P_s\)) calibrated for **standard sea-level air density** (\(\rho_0\)).

$$IAS = \sqrt{\frac{2(P_t - P_s)}{\rho_0}}$$


### II. Calibrated Airspeed (CAS)

IAS corrected for instrument errors and installation/position errors (errors caused by airflow distortions around the pitot tube and static ports).

$$CAS = IAS + \text{Correction Factor } (\Delta V_c)$$

### III. Equivalent Airspeed (EAS)

CAS corrected for the **compressibility of air** at high speeds (typically significant above 200 knots or Mach 0.3). Compressibility causes air to pack into the pitot tube, creating a falsely high pressure reading.

### IV. True Airspeed (TAS)

The actual speed of the aircraft relative to the surrounding air mass. TAS accounts for the **actual air density** (\(\rho\)) at the aircraft's current flying altitude.

$$TAS = EAS \cdot \sqrt{\frac{\rho_0}{\rho}}$$

As altitude increases and actual air density (\(\rho\)) drops, TAS becomes significantly higher than EAS/CAS for the same dynamic pressure.