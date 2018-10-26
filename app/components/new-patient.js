import Store from '../store.js'

export default class NewPatient {

  data() {
    return {
      open: false
    }
  }

  static submit(e) {
    e.preventDefault()
    let form = e.target
    let $store = new Store()
    $store.addPatient({ name: form.name.value, phone: form.name.value })
  }

  draw() {
    return `
    <form onsubmit="app.components.NewPatient.submit(event)">
      <input type="text" name="name"/>
      <input type="number" name="phone"/>
      <button type="submit">submit</button>
    </form>
    `
  }

}