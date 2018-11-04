import contactCard from "./contactDisplay"
import contactsAPI from "./contactCollection"

let listContacts = {
  // function to fetch all contacts from DB and display all
  listAllContacts() {
    contactsAPI.fetchContact().then((contacts) => {
      contacts.forEach((contact) => {
        contactCard.createCard(contact)
      })
    })
  },
  // function to use search input to filter all cards by search value
  filterContacts() {
    let input = $("#search--input")[0].value
    input = input.toString().toUpperCase()
    let cardsToFilter = $(".card--container").toArray()
    cardsToFilter.forEach((card) => {
      let title = $(card).children()[0]
      title = title.textContent.toUpperCase()
      if (title.indexOf(input) > -1) {
        $(card).removeClass("hidden")
      } else {
        $(card).addClass("hidden")
      }
    })
  }
}

export default listContacts