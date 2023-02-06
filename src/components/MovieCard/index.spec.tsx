import "@testing-library/jest-dom";
import { MemoryRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import MovieCard from ".";

const elements = {
    subTitle: "subTitle",
    title: "title",
    to: "to",
    urlImage: "https://test.com/photo/2022/12/22/02/56/heron-7671357_960_720.jpg"
}

describe("Movie Card", () => {
    it("Should have an image in the document", () => {
        const { getByAltText } = render(<MovieCard {...elements} />, { wrapper: MemoryRouter })

        const img = getByAltText("image-cards");

        expect(img).toBeInTheDocument();
    })

    it("Should have texts int the document", () => {
        const { getByText , getByAltText} = render(<MovieCard {...elements} />, { wrapper: MemoryRouter })

        const subTitle = getByText(elements.subTitle);
        const title = getByText(elements.title);
        const img = getByAltText("image-cards") as HTMLImageElement;

        expect(subTitle).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(img.src).toBe(elements.urlImage);
    })
})