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
    let successMessage = $("<h3></h3>").addClass("success-message hidden").text("Contact Information Saved!")

    $(submitBtn).on("click", () => {
      let objToPost = this.getValues()
      if (this.validateValues(objToPost) === 1) {
        contactsAPI.postContact(objToPost)
        this.displaySuccess()
        formEl[0].reset()
      }
    })

    let firstName = $("<input></input>").addClass("form--input").attr("type", "text").attr("name", "firstName")
      .attr("id", "firstName")
    let firstNameLabel = $("<label></label>").addClass("label").attr("for", "firstName").text("First Name:")

    let lastName = $("<input></input>").addClass("form--input").attr("type", "text").attr("name", "lastName")
      .attr("id", "lastName")
    let lastNameLabel = $("<label></label>").addClass("label").attr("for", "firstName").text("Last Name:")

    let telephone = $("<input></input>").addClass("form--input").attr("type", "tel")
      .attr("name", "telephone").attr("placeholder", "123-546-7890").attr("id", "telephone")
    let telephoneLabel = $("<label></label>").addClass("label").attr("for", "firstName").text("Primary Phone:")

    let email = $("<input></input>").addClass("form--input").attr("type", "email").attr("name", "email")
      .attr("id", "email")
    let emailLabel = $("<label></label>").addClass("label").attr("for", "email").text("Email:")

    let street = $("<input></input>").addClass("form--input").attr("type", "text").attr("name", "street")
      .attr("id", "street")
    let streetLabel = $("<label></label>").addClass("label").attr("for", "street").text("Street:")

    let city = $("<input></input>").addClass("form--input").attr("type", "text").attr("name", "city").attr("id", "city")
    let cityLabel = $("<label></label>").addClass("label").attr("for", "city").text("City:")

    let zip = $("<input></input>").addClass("form--input").attr("type", "number").attr("name", "zip").attr("id", "zip")
    let zipLabel = $("<label></label>").addClass("label").attr("for", "zip").text("ZIP code:")

    let state = $("<input></input>").addClass("form--input").attr("type", "text").attr("name", "state").attr("id", "state")
    let stateLabel = $("<label></label>").addClass("label").attr("for", "state").text("State:")

    $(addressContainer).append(streetLabel, street, cityLabel, city, stateLabel, state, zipLabel, zip)
    $(basicInfoContainer).append(firstNameLabel, firstName, lastNameLabel, lastName, emailLabel, email,
      telephoneLabel, telephone)
    $(formEl).append(basicInfoContainer, addressContainer, submitBtn, successMessage)
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
    return contactDetails
  }

  validateValues(obj) {
    let firstRGEX = /^[A-Z]{1,25}$/i
    let firstResult = firstRGEX.test(obj.firstName)
    if (firstResult === false) {
      alert("Please enter a valid first name")
      this.addInvalid("firstName")
      return null
    }
    let lastRGEX = /^[A-Z]{1,25}$/i
    let lastResult = lastRGEX.test(obj.lastName)
    if (lastResult === false) {
      alert("Please enter a valid last name")
      this.addInvalid("lastName")
      return null
    }

    let emailRGEX = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    let emailResult = emailRGEX.test(obj.email)
    if (emailResult === false) {
      alert("Please enter a valid email address")
      this.addInvalid("email")
      return null
    }

    let phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
    let phoneResult = phoneRGEX.test(obj.telephone)
    if (phoneResult === false) {
      alert("Please enter a valid phone number in the correct format")
      this.addInvalid("telephone")
      return null
    }

    let cityRGEX = /^[A-Z]{1,25}$/i
    let cityResult = cityRGEX.test(obj.city)
    if (cityResult === false) {
      alert("Please enter a valid city")
      this.addInvalid("city")
      return null
    }

    let zipRGEX = /^[0-9]{5}$/
    let zipResult = zipRGEX.test(obj.zip)
    if (zipResult === false) {
      alert("Please enter a valid 5-digit ZIP code")
      this.addInvalid("zip")
      return null
    }

    let stateRGEX = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/i
    let stateResult = stateRGEX.test(obj.state)
    if (stateResult === false) {
      alert("Please enter a valid state")
      this.addInvalid("state")
      return null
    }
    return 1
  }

  displaySuccess() {
    let successMessage = $(".success-message")
    $(successMessage).toggleClass("hidden")
    setTimeout(() => $(successMessage).toggleClass("hidden"), 3000)
  }

  addInvalid(field) {
    console.log(field)
    $(`#${field}`).addClass("invalid")
    setTimeout(() => $(`#${field}`).removeClass("invalid"), 100)
    setTimeout(() => $(`#${field}`).addClass("invalid"), 200)
    setTimeout(() => $(`#${field}`).removeClass("invalid"), 300)
    setTimeout(() => $(`#${field}`).addClass("invalid"), 400)
    setTimeout(() => $(`#${field}`).removeClass("invalid"), 4000)
  }
}



let newContactForm = new contactForm
export default newContactForm