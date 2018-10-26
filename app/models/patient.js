export default class Patient {
  constructor(name, phone) {
    if (!name) {
      throw new Error("[Invalid Patient] creation name not specified");
    }
    this.name = name;
    this.phone = phone;
    this.medications = [];
  }
}