import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("Initial Conditions", () => {
	render(<SummaryForm />);
	const checkbox = screen.getByRole("checkbox");

	expect(checkbox).not.toBeChecked();
	const confirmButton = screen.getByRole("button", {
		name: /confirm order/i,
	});

	expect(confirmButton).toBeDisabled();
});

test("Click checkbox enables button, on second click disables the button", async () => {
	const user = userEvent.setup();
	render(<SummaryForm />);
	const checkbox = screen.getByRole("checkbox", {
		name: /terms and conditions/i,
	});
	const confirmButton = screen.getByRole("button", {
		name: /confirm order/i,
	});
	await user.click(checkbox);
	expect(confirmButton).toBeEnabled();

	await user.click(checkbox);
	expect(confirmButton).toBeDisabled();
});
