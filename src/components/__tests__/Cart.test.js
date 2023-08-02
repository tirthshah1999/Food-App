import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/RestaurantMenu.json";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load restaurant menu component", async () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Buddy Samosas and More - (8)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("FoodItems").length).toBe(8);

  const cartSpan = screen.getByTestId("CartLength").textContent;
  expect(cartSpan).toBe("0");

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByTestId("CartLength").textContent).toBe("1");

  fireEvent.click(addBtns[1]);
  expect(screen.getByTestId("CartLength").textContent).toBe("2");

  // checking if cart items are added in cart - Prev 8 was there in item list and now added 2 new in cart so total 10.
  expect(screen.getAllByTestId("FoodItems").length).toBe(10);

  const removeBtns = screen.getAllByRole("button", { name: "Remove -" });
  fireEvent.click(removeBtns[0]);
  expect(screen.getAllByTestId("FoodItems").length).toBe(9);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("FoodItems").length).toBe(8);
});
