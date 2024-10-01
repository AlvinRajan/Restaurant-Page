export default function contactPage(){
    const contact = document.createElement('div');
    contact.innerHTML =`
    <div class="contact-list">
        <div class="contact-lists">
            <p>Place : Near TownHall Mumbai</p>
            <P>Email : inform@rest.com</P>
            <p>Phone : +91 90909 12345</p>
        </div>
    </div>
    `;
    return contact;
}