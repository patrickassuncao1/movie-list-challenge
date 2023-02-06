import "@testing-library/jest-dom";
import { fireEvent, render} from "@testing-library/react";;
import { describe, it } from "vitest";
import MovieFormTest from "../../../utils/test/components/MovieFormTest";

describe("Movie Form", () => {
    it("Should be four inputs and one Text area in document", () => {
        const { getByPlaceholderText } = render(<MovieFormTest />);

        const authorInput = getByPlaceholderText("Autor");
        const titleInput = getByPlaceholderText("Título");
        const durationInput = getByPlaceholderText("60");
        const releaseYearInput = getByPlaceholderText("2023");
        const descriptionInput = getByPlaceholderText("Descrição do Filme");

        expect(authorInput).toBeInTheDocument();
        expect(titleInput).toBeInTheDocument();
        expect(durationInput).toBeInTheDocument();
        expect(releaseYearInput).toBeInTheDocument();
        expect(descriptionInput).toBeInTheDocument();
    });

    it("Should message error, case the fields are blank and no image", async () => {

        const { getByText, findByText } = render(<MovieFormTest />);

        const buttonSubmit = getByText("Postar");

        fireEvent.click(buttonSubmit);

        const text = await findByText("Campo Obrigátorio");

        expect(text).toBeInTheDocument();


    });
})