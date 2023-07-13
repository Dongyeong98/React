import React from "react";

export default function SearchBar(props) {
    const { text, inStockOnly } = props.filter;

    function handleText(e) {
        props.updateFilter("text", e.target.value);
    }

    function handleInStockOnly(e) {
        props.updateFilter("inStockOnly", e.target.checked);
    }

    return (
        <>
            <div>
                <input
                    placeholder="Search..."
                    name="text"
                    value={text}
                    onChange={handleText}
                />
            </div>
            <input
                type="checkbox"
                id="stock"
                checked={inStockOnly}
                onChange={handleInStockOnly}
            />
            <label htmlFor="stock">Only show products in stock</label>
        </>
    );
}
