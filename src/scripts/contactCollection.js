// A ContactCollection component that loads existing contacts from storage, and saves new ones.
// Each new contact should have an auto-generated identifier.

// GET method that returns an array of all contacts in the database
// POST method that can accept an object and post it to the database

const contactsAPI = {
  fetchContact() {
    return fetch("http://localhost:8088/contacts")
      .then((contacts) => contacts.json())
  },
  postContact(contactToSave) {
    fetch("http://localhost:8088/contacts", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactToSave)
    })
  }
}

export default contactsAPI