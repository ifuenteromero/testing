import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("Initial Conditions", () => {
	render(<SummaryForm />);
	const checkbox = screen.getByRole("checkbox");

	expect(checkbox).not.toBeChecked();
	const confirmButton = screen.getByRole("button", {
		name: /confirm order/i,
	});

	expect(confirmButton).toBeDisabled();
});

test("Click checkbox enables button, on second click disables the button", () => {
	render(<SummaryForm />);
	const checkbox = screen.getByRole("checkbox", {
		name: /terms and conditions/i,
	});
	const confirmButton = screen.getByRole("button", {
		name: /confirm order/i,
	});
	fireEvent.click(checkbox);
	expect(confirmButton).toBeEnabled();

	fireEvent.click(checkbox);
	expect(confirmButton).toBeDisabled();
});
