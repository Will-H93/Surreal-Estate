import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    _id: "1",
    title: "2-bed semi-detached",
    type: "Semi-Detatched",
    bedrooms: "2",
    bathrooms: "1",
    price: "200000",
    city: "Liverpool",
    email: "email@email.com",
    onSaveProperty: jest.fn(),
    userID: "1",
  };

  test("renders title prop", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText("2-bed semi-detached")).toHaveClass("property-card-title");
  });

  test("renders type prop", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText("Semi-Detatched")).toHaveClass("property-card-type");
  });

  test("renders bedrooms prop", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText("2")).toHaveClass("property-card-bedrooms");
  });

  test("renders bathrooms prop", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText("1")).toHaveClass("property-card-bathrooms");
  });

  test("renders price prop", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText("200000")).toHaveClass("property-card-price");
  });

  test("renders city prop", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText("Liverpool")).toHaveClass("property-card-city");
  });

  test("renders email prop", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText("Email").closest("a")).toHaveAttribute(
      "href",
      "mailto:email@email.com"
    );
  });
});
