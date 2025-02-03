import styled from "styled-components";

type Props = {
    text: string,
    type: 'red' | 'gray' | 'transparent',
    onClick?: () => void,
    disabled?: boolean,
}


const ButtonStyled = styled.button<{$bgcolor: string}>`
    font-family: Intro Regular;
    background-color: ${(props) => `var(--${props.$bgcolor})`};
    padding: 20px 45px;
    border: ${(props) => props.$bgcolor === "transparent" ? '1px solid var(--gray)': 'none'};
    border-radius: 4px;
    transition: background-color .1s ease-out;
    font-size: 16px;
    color: ${(props) => props.$bgcolor === "transparent" ? 'var(--gray)': 'white'};
    &:hover {
        background-color: ${(props) =>
        props.$bgcolor === "transparent" ? "var(--beige)" : `var(--dark-${props.$bgcolor})`};
    }

    @media(max-width: 768px) {
        padding: 20px 35px;
        font-size: 14px
    }
    @media (max-width: 500px) {
        font-size: 12px;
        padding: 15px 20px;
    }
    @media(hover: none) {
        &:hover {
            background-color: ${(props) => `var(--${props.$bgcolor})`};
        }
    }
`


export default function Button({ text, type, onClick, disabled }: Props)  {

    const typeButton = {
        red: "red",
        gray: "gray",
        transparent: "transparent"
    }

    return(
        <ButtonStyled $bgcolor={ typeButton[type] } onClick={ onClick } disabled={disabled}>
            {text}
        </ButtonStyled>
    )
}