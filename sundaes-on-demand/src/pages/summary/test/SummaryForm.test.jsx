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

test("popover responds to hover", async () => {
	const user = userEvent.setup();
	render(<SummaryForm />);
	// popover starts out hidden
	const nullPopover = screen.queryByText(
		/no ice cream will actually be delivered/i
	);

	expect(nullPopover).not.toBeInTheDocument();

	// popover appears on mouseover of checkbox label
	const termsAndConditions = screen.getByText(/terms and conditions/i);
	await user.hover(termsAndConditions);
	const popover = screen.queryByText(
		/no ice cream will actually be delivered/i
	);
	expect(popover).toBeInTheDocument();
	await user.unhover(termsAndConditions);
	expect(popover).not.toBeInTheDocument();

	// popover disappears when we mouse out
});
