"use client"
import { useEffect, useState } from "react";
import styles from '../../product.module.css';

export default function Product({ params }:{params:{id:number}}) {

    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (params.id) {
            // Fetch product details based on the 'id' parameter
            fetch(`https://dummyjson.com/products/${params.id}`)
                .then((res) => res.json())
                .then((data) => {
                    setProduct(data);
                });
        }
    }, [params.id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    console.log("product===>", product)

    return (
        <div className={styles.productContainer}>
            <div className={styles.productImage}>
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className={styles.productInfo}>
                <h1 className={styles.productTitle}>{product.title}</h1>
                <p className={styles.productDescription}>{product.description}</p>
                <p className={styles.productPrice}>Price: ${product.price}</p>
                <p className={styles.productRating}>Rating: {product.rating}</p>
                <p className={styles.productBrand}>Brand: {product.brand}</p>
                <p className={styles.productCategory}>Category: {product.category}</p>
            </div>
        </div>
    )
}