import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import PaginationTest from "../../utils/test/components/PaginationTest";
import { vi } from "vitest";


describe("Pagination", () => {
    it("Should show the initial and final pagination number in the document", () => {
        const { getByText } = render(<PaginationTest />);

        const initialNumberPaginate = getByText(11);
        const finalNumber = getByText(20);

        expect(initialNumberPaginate).toBeInTheDocument();
        expect(finalNumber).toBeInTheDocument();

    });

    it("Should show four links in the document", () => {
        const { getByText } = render(<PaginationTest />);

        const link1 = getByText(1);
        const link2 = getByText(2);
        const link3 = getByText(3);
        const link4 = getByText(4);

        expect(link1).toBeInTheDocument();
        expect(link2).toBeInTheDocument();
        expect(link3).toBeInTheDocument();
        expect(link4).toBeInTheDocument();

    });

    it("Should link button should be able to fire event", () => {

        const handleClickLink = vi.fn();

        const { getByText } = render(<PaginationTest handleClickLink={handleClickLink} />);

        const link = getByText(1);

        fireEvent.click(link);

        expect(handleClickLink).toHaveBeenCalledTimes(1);
    })
})
