import styled from "styled-components";

export  const Category =  styled.td `
    font-weight : blod;
`;

export const ProductName = styled.td `
    color: ${(props) => (props.stocked ? "black" : "red")};
`;