import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  flex-wrap: wrap;
`;

const SLink = styled(NavLink)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
  margin: 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  transition: transform 0.2s ease, background 0.2s ease;

  h4 {
    color: #fff;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    text-align: center;
  }
  svg {
    font-size: 1.8rem;
    color: #fff;
  }

  &:hover {
    transform: scale(0.9); /* Subtle hover effect */
    background: linear-gradient(to right, #494949, #313131);
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    transform: scale(0.9); /* Ensure active items have a similar hover effect */
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
    svg {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 480px) {
    width: 4rem;
    height: 4rem;
    svg {
      font-size: 1.2rem;
    }
    h4 {
      font-size: 0.6rem;
    }
  }
`;

export default Category;
