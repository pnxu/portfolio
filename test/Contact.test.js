import React from "react";
import {
  render,
  fireEvent,
  act,
  screen,
  waitFor,
} from "@testing-library/react";
import Contact from "../src/components/Contact/Contact.jsx";

it("submits the contact form successfully", async () => {
  const { getByPlaceholderText, getByText } = render(<Contact />);
  await act(async () => {
    fireEvent.change(getByPlaceholderText("Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByPlaceholderText("Email"), {
      target: { value: "johndoe@example.com" },
    });
    fireEvent.change(getByPlaceholderText("Message"), {
      target: { value: "This is a test message" },
    });
    fireEvent.click(getByText("Submit"));
  });

  await waitFor(() => {
    expect(
      screen.getByText("Contact message submitted successfully!")
    ).toBeTruthy();
  });
});

it("displays error messages for invalid form data", async () => {
  const { getByText } = render(<Contact />);
  await act(async () => {
    fireEvent.click(getByText("Submit"));
  });

  await waitFor(() => {
    expect(screen.getByText("Name is required")).toBeTruthy();
    expect(screen.getByText("Valid email is required")).toBeTruthy();
    expect(screen.getByText("Message is required")).toBeTruthy();
  });
});
