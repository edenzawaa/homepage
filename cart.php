<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styling/nav.css">
    <link rel="stylesheet" href="/styling/cart.css">
    <link rel="stylesheet" href="/styling/index.css">
    <link rel=" ">
</head>
<body>
    <div id="Navigation">
            <nav>
                <div class="logo-container">
                    <img src="Pages/resources/Frame 1 (2).svg" alt="Logo" class="logo">
                    <h2>Eco Clothes</h2>
                </div>
                <div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <!-- <div class="icon-container">
                    <i class="fas fa-search search-icon" class="search-icon"></i>
                    <i class="fas fa-heart heart-icon" class="heart-icon"></i>
                    <i class="fas fa-shopping-cart cart-icon" class="cart-icon"></i>
                    <i class="fas fa-user user-icon" class="user-icon"></i>
                </div> -->
                <div class="login-signup-container">
                    <button id="signup">Sign up</button>
                    <button id="login">Log in</button>
                </div>
            </nav>
    </div>
    <div id='cart' >
        <div id='cart-info'>
            <div id='product-numbering'>
                <h3>Shopping Cart</h3>
                <p>Items in your cart: <span id="product-count">
                    <?php
                    $total = 0;
                    $products = [
                        ['name' => 'T-Shirt', 'price' => 19.99, 'amount' => 1],
                        ['name' => 'Sweatshirt', 'price' => 29.99, 'amount' => 1],
                        ['name' => 'Socks', 'price' => 9.99, 'amount' => 1],
                        ['name' => 'Hat', 'price' => 14.99, 'amount' => 1],
                    ];
                    // Count the number of products in the cart
                    $productCount = count($products);
                    echo $productCount;
                    ?>
                </span>
                </p>
            </div>
            <div id="cart-items">
                <!-- Cart items will be dynamically inserted here -->
                <?php


                echo "<table border='1' cellspacing='0' cellpadding='10'>";
                echo "<tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>";

                foreach ($products as $index => $product) {
                    echo "<tr>";
                    echo "<td data-label='Product'>" . $product['name'] . "</td>";
                    echo "<td data-label='Price'>$" . number_format($product['price'], 2) . "</td>";
                
                    
                    
                    echo "<td> 
                    <button class='quantity-button' onclick='increment(this)'>+</button>
                    <input type='number' value='1' min='1' class='quantity-input'>
                    <button class='quantity-button' onclick='decrement(this)'>-</button>
                    </td>";
                    echo "<td class='item-total'>$" . number_format($product['price'], 2) . "</td>";
                    echo "<td><button class='remove-item'>Remove</button></td>";
                    echo "</tr>";
                    $total += $product['price'];
                }
                echo "</table>";
                ?>
                        
            </div>
        </div>   
        <div id="checkout">
            <h2>Total: 
                <?php
                echo "$" . number_format($total, 2);
                ?>
            </h2>
            <button id="checkout-button">Checkout</button>
            <button id="continue-shopping">Continue Shopping</button>
        </div>   
    </div>


<script src='/scripts/cart.js'></script>
</body>
</html>