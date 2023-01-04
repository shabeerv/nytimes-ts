import CustomButton from "../components/common/CustomButton";
import { render, screen, fireEvent } from "@testing-library/react";

describe("CustomButton component", () => {
  it("renders without crashing", () => {
    render(<CustomButton text="Button" />);
  });

  it("calls the onClick function when clicked", () => {
    const onClickMock = jest.fn();
    render(<CustomButton text="Button" onClick={onClickMock} />);
    const getByText = screen.getByText("Button");
    fireEvent.click(getByText);
    expect(onClickMock).toHaveBeenCalled();
  });
});
