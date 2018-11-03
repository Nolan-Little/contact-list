
let contactCard = {
  createCard(contactObj) {
    let cardContainer = $("<div></div>").addClass("container card--container")
    let cardName = $("<h3></h3>").addClass("card--title")
    let cardDetails = $("<div></div>").addClass("container details--container")
    let cardPhone = $("<p></p>").addClass("card--detail")
    let cardEmail = $("<p></p>").addClass("card--detail")
    let cardAddress = $("<p></p>").addClass("card--detail")

    $(cardName).text(`${contactObj.firstName} ${contactObj.lastName}`)
    $(cardPhone).text(`Primary Phone: ${contactObj.telephone}`)
    $(cardEmail).text(`Email: ${contactObj.email}`)
    $(cardAddress).text(`Address: ${contactObj.street} ${contactObj.city}, ${contactObj.state}. ${contactObj.zip}`)

    $(cardDetails).append(cardPhone, cardEmail, cardAddress)
    $(cardContainer).append(cardName, cardDetails)
    $(".card--display").append(cardContainer)
  }
}

export default contactCard