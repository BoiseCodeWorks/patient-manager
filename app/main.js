//Entry Point
import Store from './store.js';
import NewPatient from './components/new-patient.js';

let $store = new Store();

window['app'] = {
  $store,
  components: {
    NewPatient
  }
}
$store.view.render()