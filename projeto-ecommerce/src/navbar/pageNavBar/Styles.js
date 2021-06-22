import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    padding-top: 0.10rem;
    padding-bottom: 0.10rem;
    padding-right: 0.10rem;
    padding-left: 0.10rem;
    align-content: center;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    width: 100%;
    position: -webkit-sticky;
    box-shadow: 2px 2px 5px rgb(0, 0, 0);
`; 

export const LoginButton = styled.button `
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: white;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 0.7rem;
    border-radius: 0.25rem;
    &:hover{
        box-shadow: 0 3px 5px 0 rgba(255, 255, 255, 0.2),
        0 3px 5px 0 rgba(255, 255, 255, 0.19);
    }
`;

export const LogoT2 = styled.img`
    height: 1.24rem;
    width: 1.24rem;
`;