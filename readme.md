Patient Manager
===============

Welcome to Patient Manager... This is an application where the user takes on the role of nurse or caregiver for several patients. This application is designed as a teaching tool for developers and does not comply with HIPPA standards or regulations and should not be used outside the its intended use of developer education. This application is designed to teach Software Developers the software patterns and standards used around JavaScript Web Applications.

Key Requirements
- As a User
  - Add Patients to a My CareList
  - View Patient Details
  - Add Medication to a Patient
  - View Medication details

In this application we will work with https://rxnav.nlm.nih.gov/ as a `JSON REST API` for Medication Information

```javascript
  //https://rxnav.nlm.nih.gov/REST/drugs.json?name=advil
  //Example Request Data
  let medicationDetails = {
    drugGroup: {
      name: "excedrin",
      conceptGroup: [
        {
          tty: "BPCK",
          conceptProperties: [
            {
              rxcui: "2047428",
              name: "{100 (Acetaminophen 250 MG / Aspirin 250 MG / Caffeine 65 MG Oral Tablet [Excedrin]) / 24 (Acetaminophen 250 MG / Aspirin 250 MG / Diphenhydramine Citrate 38 MG Oral Tablet [Excedrin PM Triple Action]) } Pack [Excedrin PM Triple Action Caplets and Excedrin Extra Strength Pain Reliever]",
              synonym: "Excedrin PM Triple Action Caplets and Excedrin Extra Strength Pain Reliever Kit",
              tty: "BPCK",
              language: "ENG",
              suppress: "N",
              umlscui: ""
            }
          ]
        },
        {
          tty: "SBD",
          conceptProperties: [
            {
              rxcui: "209468",
              name: "Acetaminophen 250 MG / Aspirin 250 MG / Caffeine 65 MG Oral Tablet [Excedrin]",
              synonym: "APAP 250 MG / ASA 250 MG / Caffeine 65 MG Oral Tablet [Excedrin]",
              tty: "SBD",
              language: "ENG",
              suppress: "N",
              umlscui: "C0711238"
            }
          ]
        }
      ]
    }
  }
```




01. Welcome to Patient Manager
02. Project Setup
03. Patient Model
04. Medication Model
05. Singleton Store
06. Singleton Explained
07. Picture the App
08. PatientListComponent
09. Patients from StoreData
10. HTML Templates
11. Preparing for Views
12. Our First View
13. New Patient Component
14. Basic Events
15. Events and Statics
16. FormData
17. Passing FormData to the Store
18. The Disconnect
19. Using get
20. Using set
21. Breaking references
