import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr); //3 colunas de tamanho igual
    gap: 2rem; 
    margin-top: -5rem; //para as divs ficar mais pra baixo

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);    
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 1rem;
        font-weight: 500;
        line-height: 3rem;
    }

    div.highlight-background {
        background: var(--green);
        color: #FFF;
    }
`;
  