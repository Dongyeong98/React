import React from "react";
import ProductsTable from "./ProductsTable";

export default function StoreTable(props) {
    const { products, filter } = props;

    const targetProduct =  products.filter(p => p.name === filter.text);
    const filteredProducts =  targetProduct.length > 0 ? targetProduct : products ;

    const result =  filteredProducts.reduce((acc, cur) => {
        if(acc.hasOwnProperty(cur.category)) {
            // key를 가지고 있는 케이스, 배열에 추가
            return {
                ...acc,
                [cur.category] : [...acc[cur.category], cur]
            }
        }else {
            // 새로운 카테고리의 key를 생성하고 배열도 추가해줘야함
            return {
                ...acc,
                [cur.category] : [cur]
            }
        }
    }, {})
    
    const keys = Object.keys(result);

    return (
        <table>
            <thead>
                <tr>
                    <td style={{ fontWeight : "bold" }}>Name</td>
                    <td style={{ fontWeight : "bold" }}>Price</td>
                </tr>
            </thead>
            <tbody>
            {keys.map((key, idx) => (
            <ProductsTable inStockOnly={filter.inStockOnly} category={key} items={result[key]} key={idx} />
            ))}
            </tbody>
        </table>
    );
}