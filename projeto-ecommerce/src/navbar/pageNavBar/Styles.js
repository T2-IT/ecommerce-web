import styled from 'styled-components';

export const Nav = styled.div`
    padding-left: 0.25rem;
    padding-right: 0;
    list-style: none;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    margin-right: 0.15rem;
    padding-top: 0.10rem;
    padding-bottom: 0.10rem;
    padding-right: 0.10rem;
    align-content: center;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    background-color: black;
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
    position: relative;
`;

export const HomeButton = styled.button`
    width: 94%;
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
`;

export const MenuButton = styled.button `
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

export const MenuIcon = styled.img`
    height: 1.34rem;
    width: 1.34rem;
    position: relative;
`;