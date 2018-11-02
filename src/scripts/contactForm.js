// A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage.
// It should import the ContactCollection component.

import contactsAPI from "./contactCollection"
class contactForm {

  createForm() {
    let output = $(".output")
    let formContainer = $("<div></div>").addClass("container").attr("id", "formContainer")
    let basicInfoContainer = $("<div></div>").addClass("container basic__info--container").attr("id", "basicInfoContainer")
    let formEl = $("<form></form>").addClass("form form--container container").attr("id", "contactForm")
      .attr("onsubmit", "return false").attr("action", " ")
    let addressContainer = $("<div></div>").addClass("address--container container")
      .attr("id", "addressContainer")
    let submitBtn = $("<button></button>").addClass("button form--button").attr("type", "submit").text("Add Contact")
    $(submitBtn).on("click", () => {
      let objToPost = this.getValues()
      contactsAPI.postContact(objToPost)
      console.log("posted!")
    })

    let firstName = $("<input></input>").addClass("form--input").attr("type", "text").attr("name", "firstName").attr("required", "")
    let firstNameLabel = $("<label></label>").addClass("label").attr("for", "firstName").text("First Name:")

    let lastName = $("<input></input>").addClass("form--input").attr("type", "text").attr("name", "lastName").attr("required", "")
    let lastNameLabel = $("<label></label>").addClass("label").attr("for", "firstName").text("Last Name:")

    let telephone = $("<input></input>").addClass("form--input").attr("type", "tel")
      .attr("name", "telephone").attr("pattern", "[0-9]{3}-[0-9]{3}-[0-9]{4}").attr("placeholder", "123-546-7890").attr("required", "")
    let telephoneLabel = $("<label></label>").addClass("label").attr("for", "firstName").text("Primary Phone:")

    let email = $("<input></input>").addClass("form--input").attr("type", "email").attr("name", "email").attr("required", "")
    let emailLabel = $("<label></label>").addClass("label").attr("for", "email").text("Email:")

    let street = $("<input></input>").addClass("form--input").attr("type", "text").attr("name", "street").attr("required", "")
    let streetLabel = $("<label></label>").addClass("label").attr("for", "street").text("Street:")

    let city = $("<input></input>").addClass("form--input").attr("type", "text").attr("name", "city").attr("required", "")
    let cityLabel = $("<label></label>").addClass("label").attr("for", "city").text("City:")

    let zip = $("<input></input>").addClass("form--input").attr("type", "number").attr("name", "zip").attr("required", "")
    let zipLabel = $("<label></label>").addClass("label").attr("for", "zip").text("ZIP code:")

    let state = $("<input></input>").addClass("form--input").attr("type", "text").attr("name", "state").attr("required", "")
    let stateLabel = $("<label></label>").addClass("label").attr("for", "state").text("State:")

    $(addressContainer).append(streetLabel, street, cityLabel, city, zipLabel, zip, stateLabel, state)
    $(basicInfoContainer).append(firstNameLabel, firstName, lastNameLabel, lastName, emailLabel, email,
      telephoneLabel, telephone)
    $(formEl).append(basicInfoContainer, addressContainer, submitBtn)
    $(formContainer).append(formEl)
    $(output).append(formContainer)
  }


  onsubmit(e) {
    e.preventDefault()
  }


  set form(contactForm) {
    this._form = $(contactForm)
    this._form.onsubmit = this.onsubmit
  }
  get form() {
    return this._form
  }

  getValues() {
    let contactDetails = {}
    $.makeArray($(".form--input")).forEach((input) => {
      contactDetails[input.name] = input.value
    })
    console.table(contactDetails)
    return contactDetails
  }

}



let newContactForm = new contactForm
export default newContactForm