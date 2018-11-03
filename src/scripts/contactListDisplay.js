import contactCard from "./contactDisplay"
import contactsAPI from "./contactCollection"

let listContacts = {
  listAllContacts() {
    contactsAPI.fetchContact().then((contacts) => {
      contacts.forEach((contact) => {
        contactCard.createCard(contact)
      })
    })
  }
}

export default listContacts