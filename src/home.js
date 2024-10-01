export default function homePage(){

    const home = document.createElement('div');
    home.innerHTML =`
    <div class="home-page">
        <h1>WELCOME TO THE RESTURENT</h1>
        <p>Experience the finest dining with a variety of cuisines from around the world.</p>
    </div>
    `;
    return home;
}