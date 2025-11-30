import styled from "styled-components";


const TitleLabel = ({title} : {title : string}) => {
    return(
        <StyledTitle>
            {title}
        </StyledTitle>
    );
}


const StyledTitle = styled.div`
    margin-top: 20px;
    font-family: var(--font-tea-hub);
    font-size: 40px; 
`;

export default TitleLabel