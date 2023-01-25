import { render, screen } from "@testing-library/react";

import Options from "../Options";

test("displays image for each scoop option from server", async () => {
	render(<Options optionType="scoops" />);
	// acaba con la palabra scoop
	const scoopImages = await screen.findAllByRole("img", /scoop&/i);
	expect(scoopImages).toHaveLength(2);

	const altText = scoopImages.map((element) => element.alt);
	expect(altText).toEqual(["Chocolate scoop", "Vainilla scoop"]);
});
