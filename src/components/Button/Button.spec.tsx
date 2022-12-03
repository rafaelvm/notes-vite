import { screen, render } from "@testing-library/react";
import Button from ".";

const customRender = () => {
  return render(
    <Button labelDescription="Button text" variant="flat" size="large" />
  );
};

describe("<Button />", () => {
  // it("should render default component", () => {
  //   const wrapper = customRender();

  //   expect(wrapper).toMatchSnapshot();
  // });

  it("should render children", () => {
    customRender();

    expect(screen.getByText(/Button text/i)).toBeInTheDocument();
  });

  it("should render large size props", () => {
    customRender();

    expect(screen.getByText(/Button text/i)).toHaveStyle({
      width: "15rem",
      height: "4rem",
    });
  });
});
