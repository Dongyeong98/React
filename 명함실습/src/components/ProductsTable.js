import React from "react";

export default function ProductsTable(props) {
    const { category, inStockOnly, items } = props
    const filteredItems = inStockOnly 
    ? items.filter(item => item.stocked) 
    : items;

    return (
        <>
            <tr>
                <td>{category}</td>
            </tr>

            {filteredItems.map((item, idx) => (
                <tr key={idx}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                </tr>
            ))}
        </>
    );
}
