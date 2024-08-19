import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./components/Footer/Footer";
import "@testing-library/jest-dom";

test("renders learn react link", () => {
  render(<Footer />);
  const footer = screen.getByText(`ONLINE-SHOP ©${new Date().getFullYear()}`);
  expect(footer).toBeInTheDocument();
});
