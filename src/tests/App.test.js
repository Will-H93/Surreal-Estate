import { render } from "@testing-library/react";
import App from "../components/App";
import { MemoryRouter } from "react-router-dom";

test("renders app", () => {
  const { asFragment } = render(<App />, { wrapper: MemoryRouter });

  expect(asFragment()).toMatchSnapshot();
});
