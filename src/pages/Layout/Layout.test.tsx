import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a layout page", () => {
  describe("When it renders", () => {
    test("Then it should show a title with a heading with the text 'To Do App'", () => {
      const text = "To Do App";

      render(<Layout />);

      const title = screen.getByRole("heading", { name: `${text}` });

      expect(title).toBeInTheDocument();
    });
  });
});
