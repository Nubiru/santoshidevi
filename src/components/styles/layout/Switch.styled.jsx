import styled from 'styled-components'

//underlying checkbox
export const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`

//switch grey area
export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 75px;
  height: 37px;
  background: grey;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
`

//switch inner circle
export const LabelSpan = styled.span`
  position: absolute;
  left: ${({ $checked }) => ($checked ? 'calc(100%-2px)' : '5px')};
  width: 35px;
  height: 35px;
  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  transform: ${({ $checked }) => ($checked ? 'none' : 'translateX(100%)')};
  background: ${({ $checked }) =>
    $checked
      ? 'linear-gradient(90deg, rgba(190,10,47,1) 0%, rgba(255,255,255,1) 50%, rgba(0,39,104,1) 100%);'
      : 'linear-gradient(90deg, rgba(255,204,0,1) 0%, rgba(155,0,37,1) 50%, rgba(255,204,0,1) 100%);'};
  transition: transform 0.5s ease-out;
`
