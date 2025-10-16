import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero component", () => {
  it("renders heading, paragraph, image and signup button", () => {
    render(<Hero />);

    expect(screen.getByRole("heading", { name: /Invest in everything/i })).toBeInTheDocument();
    expect(screen.getByText(/Online platform to invest/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Home Hero/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Sign up for free/i })).toBeInTheDocument();
  });
});
