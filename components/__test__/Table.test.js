import { render, screen } from "@testing-library/react";
import Table from "../Table";

describe("Table", () => {
  it("renders without crashing", () => {
    render(<Table />);
    expect(
      screen.getByRole("table")
    ).toBeInTheDocument();
  });
});