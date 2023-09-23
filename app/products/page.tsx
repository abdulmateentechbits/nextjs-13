"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../page.module.css';

export default function Page() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => {
                const productsArray = data.products; // Extract the "products" array
                setProducts(productsArray); // Set the "products" state with the extracted array
            });
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div>
            <h1>Product List</h1>
            <div className={styles.productList}>
                {products.map((product) => (
                    <div className={styles.productItem} key={product?.id}>
                        <Link href={`/products/${product?.id}`} target='_blank'>
                            <div className={styles.productLink}>
                                <div className={styles.productThumbnail}>
                                    <img src={product?.thumbnail} alt={product?.title} />
                                </div>
                                <div className={styles.productDetails}>
                                    <h2 className={styles.productTitle}>{product?.title}</h2>
                                    <p className={styles.productPrice}>${product?.price}</p>
                                    {product?.rating && (
                                        <div className={styles.productRating}>
                                            Rating: {product?.rating}
                                        </div>
                                    )}
                                </div>

                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
