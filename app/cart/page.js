import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './cart.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: { default: "Marty's Cyberware Shop | MC", template: '%s | MC' },
  description:
    'This shop sells cyberware to improve the Body you are sleeved to',
};

export default async function CartPage() {
  const products = await getProducts();
  const productQuantityCookie = getCookie('cart');
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);
  const productWithQuantities = products.map((product) => {
    const matchingValueFromCookie = productQuantities.find(
      (productObject) => product.id === productObject.id,
    );
    return { ...product, quantity: matchingValueFromCookie?.quantity };
  });
  const productsInCart = productWithQuantities.filter((item) => item.quantity);

  return (
    <main>
      {productsInCart.length === 0 ? (
        <h1 className={styles.emptyCart}>🦾 Your cart is empty 🦾</h1>
      ) : (
        <div className={styles.cartContainer}>
          <div className={styles.cartOverviewContainer}>
            <div className={styles.cartTableHead}>
              <div>Image</div>
              <div>Name</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
              <div>Action</div>
            </div>

            <div
              className={styles.itemsInCart}
              data-test-id="cart-product-<product id>"
            >
              {productsInCart.map((product) => {
                let subTotal = 0;
                subTotal = product.quantity * product.price;
                return (
                  <div
                    key={`product-div-${product.id}`}
                    className={styles.productCard}
                  >
                    <div>
                      <Image
                        src={`/images/${product.name}.jpg`}
                        width={80}
                        height={80}
                        className={styles.productImage}
                        alt={product.name}
                      />
                    </div>

                    <Link href={`/products/${product.id}`}>{product.name}</Link>
                    <Link href={`/products/${product.id}`}>
                      <p>€ {product.price}</p>
                    </Link>

                    <form data-test-id="cart-product-quantity-<product id>">
                      {/* <ChangeQuantity product={product} /> */}
                    </form>

                    <div>€{subTotal}</div>
                    <form
                      data-test-id="cart-product-remove-<product id>"
                      name="remove-button"
                    >
                      {/* <RemoveButton product={product} name="remove-button" /> */}
                    </form>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.cartTotalContainer}>
            <div className={styles.cartTotalCard}>
              <h3>Cart Total</h3>
              <div
                data-test-id="cart-total"
                className={styles.grandTotalAmount}
              >
                {/* €{getCartTotal(productsInCart)} */}
              </div>
              <div>
                <Link
                  className={`${styles.continueShoppingButton} ${styles.cartButton}`}
                  href="/products"
                >
                  Continue with Shopping
                </Link>
                <Link
                  className={`${styles.checkoutButton} ${styles.cartButton}`}
                  href="/cart/checkout/"
                  data-test-id="cart-checkout"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
