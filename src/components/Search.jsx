import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch />
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search..."
        value={input}
      />
    </FormStyle>
  );
};

const FormStyle = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto; /* Centering the form horizontally and adding vertical space */
  position: relative;
  width: 50%; /* You can adjust this to make the search bar wider or narrower */

  input {
    border: none;
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    background: linear-gradient(to right, #494949, #313131);
    padding-left: 3rem; /* Space for the icon */
  }

  svg {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    color: white;
    font-size: 1.2rem;
  }

  @media (max-width: 1200px) {
    width: 70%; /* Adjust width for smaller screens */
    margin: 1.5rem auto;

    input {
      font-size: 1.2rem;
      padding: 0.8rem 2.5rem;
      padding-left: 2.5rem;
    }

    svg {
      font-size: 1rem;
      left: 0.8rem;
    }
  }

  @media (max-width: 768px) {
    width: 90%; /* Full width for small screens */
    margin: 1.5rem auto;

    input {
      font-size: 1rem;
      padding: 0.7rem 2rem;
      padding-left: 2rem;
    }

    svg {
      font-size: 0.9rem;
      left: 0.6rem;
    }
  }

  @media (max-width: 480px) {
    width: 95%; /* Even more width for the smallest screens */
    margin: 1.5rem auto;

    input {
      font-size: 0.9rem;
      padding: 0.6rem 1.5rem;
      padding-left: 1.5rem;
    }

    svg {
      font-size: 0.8rem;
      left: 0.5rem;
    }
  }
`;

export default Search;
