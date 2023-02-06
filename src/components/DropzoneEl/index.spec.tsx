import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";

import { describe, it } from "vitest";
import DropzoneEl from ".";

describe("Dropzone", () => {
    it("Should to do  upload image", async() => {

        const { getByTestId } = render(<DropzoneEl onDrop={(e) => console.log(e)} />)

        const file = new File(["avatar"], "avatar.png", {
            type: "image/png"
        });

        const input = getByTestId("dropzone") as HTMLInputElement;

        await waitFor(() => {
            fireEvent.change(input, {
                target: { files: [file] },
            })
        });

        //@ts-ignore
        expect(input.files[0].name).toBe("avatar.png");
        expect(input.files).toHaveLength(1);
    })
})