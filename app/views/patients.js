import PatientList from '../components/patient-list.js'
import NewPatientForm from '../components/new-patient-form.js'
export default class PatientsView {

  constructor() {
    this.pl = new PatientList();
    this.npf = new NewPatientForm();
  }

  render() {
    document.getElementById('app').innerHTML = `
      <div class="patients-view">
        ${this.pl.draw()}
        ${this.npf.draw()}
      </div>
    `
  }

}