import styled from "styled-components";

export const HeadingStyle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizeTitleH1};
    color: ${({ theme }) => theme.fontColor};
    margin-bottom: 40px;
    &:hover {
        color: ${({ theme }) => theme.primaryColor};
    }
`;