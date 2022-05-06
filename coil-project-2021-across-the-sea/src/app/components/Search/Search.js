import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Wrapper } from "../../theme/style";

const StyledSection = styled.section``;

const StyledForm = styled.form`
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  background: none;
  font-size: 1.2rem;
  outline: 0;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.darkGreen};
`;

const Search = () => {
  let history = useHistory();
  const [query, setQuery] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setQuery("");

    history.push("/products?search=" + query);
  };

  const handleChange = (ev) => setQuery(ev.target.value);
  return (
    <StyledSection>
      <Wrapper>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="search"
            name="search"
            value={query}
            onChange={handleChange}
            placeholder="Search for a product..."
            required
          />
        </StyledForm>
      </Wrapper>
    </StyledSection>
  );
};

export default Search;
