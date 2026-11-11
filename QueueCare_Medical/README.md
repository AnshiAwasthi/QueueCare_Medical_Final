# QueueCare – Patient Dashboard Prototype

A frontend demonstration project for a healthcare appointment and queue-management platform.

## Run in VS Code
1. Extract the ZIP.
2. Open the `QueueCare_Medical` folder in VS Code (not the ZIP itself).
3. Install the **Live Server** extension if needed.
4. Right-click `index.html` and choose **Open with Live Server**. You can also open `login.html` directly.
5. Use the demo patient account shown on the login page.

## Dashboard features
- Responsive top navigation: Home, Nearby Care, My Appointments, Health Records, AI Assistant, Emergency.
- Rotating hero carousel with doctor/patient care photography.
- Appointment booking with department, doctor, date and time selection.
- Demo checkout step with UPI, card or pay-at-clinic selection. It does **not** collect payment details or charge money.
- Appointment list, token and queue estimate.
- Nearby hospital/clinic searches through Google Maps.
- Leaflet/OpenStreetMap map with illustrative doctor markers and demo Free/Busy status.
- AI-style navigation helper with predefined answers (not a medical AI).
- Emergency call link to India's 112 emergency number and optional location sharing.
- Sample health records and profile settings.

## Important limitations
This is a browser-only college prototype. Data is stored in localStorage/sessionStorage. Doctor availability, doctor map positions, appointments, queue estimates and checkout status are demonstration data. Google Maps links show external search results. The app does not contact hospitals, verify doctors, dispatch ambulances, provide medical diagnosis, or process real payments.

## Before real deployment
Use a secure backend and database, verified provider/hospital data, authenticated role-based access, consent-based location handling, audit logs, encryption, payment gateway integration (for example Razorpay/Stripe in an eligible account), and emergency-service agreements. Never store raw card or UPI credentials in this frontend.


## Neon Medical Intelligence Dashboard
The patient dashboard now uses a dark, emerald-accented medical intelligence layout inspired by the supplied reference:
- Animated SVG holographic heart with a glowing light platform beneath it.
- Heartbeat ECG trace, floating/pulsing heart, rotating hologram rings and scanning light.
- Patient overview cards, care activity trend, appointment queue and care summary.
- Responsive layout for desktop, tablet and mobile.
- Existing QueueCare sections remain available: Nearby Care, Appointments, Queue, Health Records, AI Assistant and Emergency.

The heart animation is a visual design element only; it does not display or interpret real patient vital signs.
