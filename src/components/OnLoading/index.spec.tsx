import "@testing-library/jest-dom";
import { render } from "@testing-library/react";;
import { describe, it } from "vitest";
import OnLoading from ".";

describe("OnLoading", () => {
    it("Should haver one message in the document", () => {
       const {getByText} =  render(<OnLoading />)

        expect(getByText("Carregando...")).toBeInTheDocument();
    })
})