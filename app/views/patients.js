import PatientList from '../components/patient-list.js'
import NewPatient from '../components/new-patient.js'
export default class PatientsView {

  constructor() {
    this.pl = new PatientList();
    this.np = new NewPatient();
  }

  render() {
    document.getElementById('app').innerHTML = `
      <div class="patients-view">
        ${this.pl.draw()}
        ${this.np.draw()}
      </div>
    `
  }

}