import styled from 'styled-components'

type Props = {
    type: "blue" | "white"
}

const LoaderStyled = styled.div<{$bgcolor: string}>`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: relative;
    animation: loaderRotate 1s linear infinite;

    &:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid ${(props) => props.$bgcolor === "blue" ? "var(--dark-blue)" : "white"};
    animation: loaderClipPath 2s linear infinite;
    }

  @keyframes loaderRotate {
    100%   {transform: rotate(360deg)}
  }

  @keyframes loaderClipPath {
      0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
      25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
      50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
      75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
      100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
  }
`

export default function Loader({ type }: Props) {

    const typeLoader = {
        blue: "blue",
        white: "white",
    }

    return (
        <LoaderStyled $bgcolor={ typeLoader[type] }/>
    )
}