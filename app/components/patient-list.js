import Store from "../store.js";

export default class PatientList {
  constructor() {
    this.$store = new Store()
  }

  draw() {
    let patientListTemplate = '';
    for (let i = 0; i < this.$store.state.patients.length; i++) {
      patientListTemplate += `<li>${this.$store.state.patients[i].name}</li>`
    }

    return `
    <div class="patient-list">
      <h1>My Patients</h1>
      <ul>
        ${patientListTemplate}
      </ul>
    </div>
    `
  }


}