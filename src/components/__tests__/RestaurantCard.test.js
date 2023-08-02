import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import Mock_DATA from "../mocks/RestaurantCard.json";

it("should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={Mock_DATA} />);
  const name = screen.getByText("Third Wave Coffee");
  expect(name).toBeInTheDocument();
});
