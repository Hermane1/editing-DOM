<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Cart</title>
</head>
<body>
    <ul id="list">
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
        <li>Dates</li>
    </ul>
    <script>
        const shopCart = document.getElementById('list');
        if (shopCart.children.length {">"} 1) {
            shopCart.children[1].innerHTML = 'Granny Smith Apples';
        }
        if (shopCart.children.length {">"} 3) {
            shopCart.children[3].remove();
        }
        const newItem = document.createElement('li');
        newItem.innerHTML = 'Kombucha';
        shopCart.appendChild(newItem);
        while (shopCart.children.length {">"} 0) {
            shopCart.children[0].remove();
        }
        const supplements = ['protein bars', 'almonds', 'peanut butter'];
        function fillList() {
        }
            supplements.forEach(function (x) {
                const newListItem = document.createElement('li');
                newListItem.innerHTML = x;
                shopCart.appendChild(newListItem);
            });
            let almondsItemIndex = supplements.indexOf('almonds');
            if (almondsItemIndex !== -1) {
                shopCart.children[almondsItemIndex].setAttribute('class', 'important');
            }
        fillList();
        console.log(shopCart.children);
    </script>
</body>
</html>
