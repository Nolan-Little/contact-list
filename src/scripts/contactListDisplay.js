import contactCard from "./contactDisplay"
import contactsAPI from "./contactCollection"

let listContacts = {
  listAllContacts() {
    contactsAPI.fetchContact().then((contacts) => {
      contacts.forEach((contact) => {
        contactCard.createCard(contact)
      })
    })
  },

  listSpecificContacts(query) {
    contactsAPI.fetchContact().then((contacts) => {
      $(".card--display").empty()
      $(".card--display").text("")
      contacts.forEach((contact) => {
        if (query != "") {
          if (contact.firstName.includes(query) || contact.lastName.includes(query)) {
            console.log(query)
            contactCard.createCard(contact)
          }
        }
      })
      if ($(".card--display")[0].childElementCount === 0) {
        $(".card--display").text("")
        $(".card--display").empty()
        $(".card--display").text("No contacts matched those search terms")
      }
    })
  }
}

export default listContacts