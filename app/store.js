import Patient from './models/patient.js'
import PatientsView from './views/patients.js'

let $store;
let _state = {
  patients: [
    new Patient("Jim", 1234567890),
    new Patient("Jerry", 1234567891),
    new Patient("Tim", 1234567890),
    new Patient("Terry", 1234567891)
  ]
};

//Gathering place for all data
export default class Store {

  get state() {
    return _state;
  }

  set state(val) {
    this.view.render()
  }

  commit() {
    this.state = _state;
  }

  constructor() {

    if ($store) { return $store; }
    $store = this;

    //is the actual data at this point in time
    this.view = new PatientsView();
  }

  addPatient(formData) {
    let patient = new Patient(formData.name, formData.phone);
    _state.patients.push(patient);
    this.commit()
  }

}