//Entry Point
import Store from './store.js';
import NewPatientForm from './components/new-patient-form.js';

let $store = new Store();

$store.view.render()

window['app'] = {
  $store,
  statics: {
    NewPatientForm
  }
}