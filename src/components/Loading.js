import React from 'react';
//styling 
import styled from 'styled-components';

const Loading = () => {
    return (
        <LoadPage>
            <img src="../imges/Double Ring-1.9s-200px.gif" alt="dubleLoading" />
        </LoadPage>
    )
}

const LoadPage = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: #ffffff;
    img {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`



export default Loading
