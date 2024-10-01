export default function menuPage(){
    const menu = document.createElement('div');
    menu.innerHTML =`
    <div class="menu-list">
        <table border="1">
            <tr>
                <th>No</th>
                <th>Items</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Rava Puttu</td>
                <td>₹50</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Rice Puttu</td>
                <td>₹50</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Dosha</td>
                <td>₹30</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Appam</td>
                <td>₹30</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Ada (Coconut Pancake)</td>
                <td>₹30</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Wheat (Godhambu) Vellayappam</td>
                <td>₹30</td>
            </tr>
        </table>
    </div>
    `;
    return menu;
}