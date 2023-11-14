import styled from 'styled-components';

const StyledName = styled.h1`
  font-size: 16px;
  color: darkslategrey;
`;

const ProfileName = ({ name }) => {
  return <StyledName>{name}</StyledName>;
};

export default ProfileName;
