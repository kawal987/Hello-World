import React from "react";
import _ from "lodash";
import styled from "styled-components";
import Loading from "../Loading";

const StyledContainer = styled.div`
  text-align: center;
  width: 100%;
  height:100vh;
  font-size: 2rem;
  color: lightgrey;
`;

const EmptyState = ({ input, children }) => {
  // matches falsy values as well as empty arrays & objects
  const isEmpty = _.isEmpty(input);
console.log('isEmpty', isEmpty)
  return isEmpty ? <StyledContainer>Oops!! no data fetched!</StyledContainer> : children;
};

export default EmptyState;