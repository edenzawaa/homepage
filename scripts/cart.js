
function increment(button) {
    let input = button.nextElementSibling;
    input.value = parseInt(input.value) + 1;
}

function decrement(button) {
    let input = button.previousElementSibling;
    if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Handle Remove Button
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            row.remove();
            updateTotal();
        });
    });

    // Handle Decrement Button
    document.querySelectorAll('.quantity-button').forEach(button => {
        if (button.textContent === '-') {
            button.addEventListener('click', (e) => {
                const input = e.target.parentElement.querySelector('.quantity-input');
                let quantity = parseInt(input.value);
                if (quantity > 1) {
                    input.value = quantity - 1;
                    updateRowTotal(e.target.closest('tr'));
                    updateTotal();
                } else {
                    // Remove item if quantity goes to 0
                    e.target.closest('tr').remove();
                    updateTotal();
                }
            });
        }
    });

    // Handle + Button
    document.querySelectorAll('.quantity-button').forEach(button => {
        if (button.textContent === '+') {
            button.addEventListener('click', (e) => {
                const input = e.target.parentElement.querySelector('.quantity-input');
                input.value = parseInt(input.value) + 1;
                updateRowTotal(e.target.closest('tr'));
                updateTotal();
            });
        }
    });
});

function updateRowTotal(row) {
    const priceText = row.querySelector('[data-label="Price"]').textContent.replace('$', '');
    const quantity = parseInt(row.querySelector('.quantity-input').value);
    const totalCell = row.querySelector('.item-total');
    const price = parseFloat(priceText);
    totalCell.textContent = `$${(price * quantity).toFixed(2)}`;
}

function updateTotal() {
    const totalCell = document.querySelector('#checkout h2');
    let total = 0;
    document.querySelectorAll('.item-total').forEach(cell => {
        total += parseFloat(cell.textContent.replace('$', ''));
    });
    totalCell.textContent = `Total: $${total.toFixed(2)}`;
}
function updateTotal() {
    const totalCell = document.querySelector('#checkout h2');
    let total = 0;
    document.querySelectorAll('.item-total').forEach(cell => {
        total += parseFloat(cell.textContent.replace('$', ''));
    });
    totalCell.textContent = `Total: $${total.toFixed(2)}`;

    // Update product count
    const productRows = document.querySelectorAll('#cart-items tr');
    document.getElementById('product-count').textContent = productRows.length - 1;
}
