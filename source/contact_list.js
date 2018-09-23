// Contact list class
// Add a contact
// Remove a contact

/**
 * Class for create contact list
 */
export class ContactList {

    constructor() {
        this.list_of_contacts = [];
    }

    /**
     * Add a contact to the contact list
     * @param {*} contact is an object that reppresnt a contact
     * @description
     * first create a new contact with the class Contact like so:
     * @example
     * const contact = new Contact("marco", 42838188);
     * my_contact_list.addContact(contact);
     */
    addContact(contact) {
        // I need to check if contact exist
        let exist = false;
        this.list_of_contacts.forEach((contact_in_the_list) => {
            exist = (contact.name === contact_in_the_list.name || contact.phone === contact_in_the_list.phone)
        });
        if (exist) {
            // do nothing
        } else {
            this.list_of_contacts.push(contact);
        }
    }

    /**
     * Remove a contact at specific index
     * @param {number} i is the index of the array of the contact list
     */
    removeContact(i) {
        if (this.list_of_contacts[i]) {
            this.list_of_contacts.splice(i, 1);
        }
    }

    /**
     * remove all contacts
     */
    removeAllContacts() {
        this.list_of_contacts = [];
    }

    /**
     * 
     * @param {string} name of the contact
     */
    searchByName(name) {
        let phone;
        this.list_of_contacts.forEach((contact) => {
            if (contact.name === name) {
                phone = contact.phone;
            }
        });
        return phone;
    }
}

export class Contact {
    /**
     * 
     * @param {string} name is the name of the contact
     * @param {number} phone is the phone number of the contact
     */
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}

export class VipContact extends Contact {
    /**
     * 
     * @param {string} name is the name of the contact
     * @param {number} phone is the phone number of the contact
     * @param {number} secret_phone is the secret phone number of the contact
     */
    constructor(name, phone, secret_phone) {
        super(name, phone);
        this.secret_phone = secret_phone;
    }
}