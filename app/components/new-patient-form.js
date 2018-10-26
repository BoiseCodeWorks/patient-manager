import Store from "../store.js";

export default class NewPatientForm {

  static submit(event) {
    event.preventDefault()
    let form = event.target
    let formData = {
      name: form.name.value,
      phone: form.phone.value
    }
    let $store = new Store()
    $store.addPatient(formData)
  }

  draw() {
    return `
      <div class="new-patient-form">
        <form onsubmit="app.statics.NewPatientForm.submit(event)">
          <input type="text" name="name" />
          <input type="number" name="phone" />
          <button type="submit">Add Patient</button>
        </form>
      </div>
    `
  }
}
