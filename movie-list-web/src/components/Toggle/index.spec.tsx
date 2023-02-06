import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import ToggleTest from "../../utils/test/components/ToggleTest";

describe("Toggle", () => {
    it("should change the icon when firing the event", async () => {
        const { getByTestId, findByTestId } = render(<ToggleTest />);
        const button = getByTestId("buttonClick");
        fireEvent.click(button);

        const iconDark = await findByTestId("darkMode");

        expect(iconDark).toBeInTheDocument();
    });
});