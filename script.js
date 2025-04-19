document.addEventListener('DOMContentLoaded', function() {
    const tg = window.Telegram.WebApp;
    tg.expand();

    // Инициализация корзины
    let cart = [];

    // Обработчики для кнопок "Добавить в корзину"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;

            // Добавляем товар в корзину
            cart.push({
                name: productName,
                price: productPrice
            });

            // Обновляем MainButton в Telegram
            updateTelegramButton();

            // Анимация добавления в корзину
            this.textContent = 'Добавлено!';
            this.style.backgroundColor = '#2ecc71';

            setTimeout(() => {
                this.textContent = 'Добавить в корзину';
                this.style.backgroundColor = '';
            }, 2000);
        });
    });

    function updateTelegramButton() {
        if (cart.length > 0) {
            tg.MainButton.setText(`Оформить заказ (${cart.length})`);
            tg.MainButton.show();
        } else {
            tg.MainButton.hide();
        }
    }

    // Обработчик для кнопки корзины
    document.querySelector('.cart-icon').addEventListener('click', function() {
        alert(`В вашей корзине ${cart.length} товаров`);
    });
});
/*let tg = window.Telegram.WebApp;

tg.expand();

let btn = document.querySelector('#click');
btn.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали сквиш");
        tg.MainButton.show();
    }
};*/


