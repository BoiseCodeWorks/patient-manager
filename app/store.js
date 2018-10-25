import Patient from './models/patient.js'
import PatientsView from './views/patients.js'


let $store;
//Gathering place for all data
export default class Store {

  constructor() {

    if ($store) { return $store; }
    $store = this;

    //is the actual data at this point in time
    this.state = {
      patients: [
        new Patient("Jim", 1234567890),
        new Patient("Jerry", 1234567891),
        new Patient("Tim", 1234567890),
        new Patient("Terry", 1234567891)
      ]
    };

    this.view = new PatientsView()

  }

}