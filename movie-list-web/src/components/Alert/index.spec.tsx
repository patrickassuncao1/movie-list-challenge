import "@testing-library/jest-dom";
import { render } from "@testing-library/react";;
import { describe, it } from "vitest";
import Alert from ".";

const message = "show alert";

describe("Alert", () => {
    it("Should have the message in the document", () => {
        const { getByText } = render(<Alert show={true} message={message} type="success" />);

        expect(getByText(message)).toBeInTheDocument();
    })
});