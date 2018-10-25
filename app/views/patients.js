import PatientList from '../components/patient-list.js'

export default class PatientsView {

  constructor() {
    this.pl = new PatientList();
  }

  render() {
    document.getElementById('app').innerHTML = `
      <div class="patients-view">
        ${this.pl.draw()}
      </div>
    `
  }

}