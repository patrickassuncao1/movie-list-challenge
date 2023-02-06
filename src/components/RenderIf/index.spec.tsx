import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import RenderIf from '.';

describe("Render if", () => {
    it("Should haver one message in the document", () => {
        const message = "Message in the document";
        
        const { getByText } = render(<RenderIf isTrue={true}><>{message}</></RenderIf>);


        expect(getByText(message)).toBeInTheDocument();
    });

    it("Should not haver message in the document", () => {
        const message = "Message in the document";
        
        const { queryByText } = render(<RenderIf isTrue={false}><>{message}</></RenderIf>);


        expect(queryByText(message)).not.toBeInTheDocument();
    });
});