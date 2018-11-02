// A ContactCollection component that loads existing contacts from storage, and saves new ones.
// Each new contact should have an auto-generated identifier.
// A Contact component that displays a person's name, phone number, and address.
// A ContactList component that displays all contacts.
// It should import the Contact component and the ContactCollection component.
// A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage.
// It should import the ContactCollection component.


import contactForm from "./contactForm"

let fakeContact = {
  name: "Who Cares",
  Phone: "888-go-away"
}
// contactsAPI.postContact(fakeContact)
// contactsAPI.fetchContact()
contactForm.createForm()
contactForm.form = $("#contactForm")
