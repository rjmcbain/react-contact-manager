import React, { Component } from "react";
import Contact from "./Contact.js";

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "jdoe@gmail.com",
          phone: "555-555-5555"
        },
        {
          id: 2,
          name: "Karen Williams",
          email: "karen@gmail.com",
          phone: "333-333-3333"
        },
        {
          id: 3,
          name: "Henry Johnson",
          email: "Henry@gmail.com",
          phone: "111-222-3344"
        }
      ]
    };
  }
  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}
