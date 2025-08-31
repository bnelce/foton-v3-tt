import { fireEvent, render, screen } from "@testing-library/react"

import { subscribe } from "../subscribe-action"
import { SubscribeBottom } from "../subscribe-form"

vi.mock("../subscribe-action", () => ({
  subscribe: vi.fn(),
}))

const subscribeMock = vi.mocked(subscribe)

describe("Subscribe form", () => {
  it("submits email successfully", async () => {
    subscribeMock.mockResolvedValueOnce({ success: true })

    render(<SubscribeBottom />)

    const input = screen.getByRole("textbox", {
      name: /subscribe to the newsletter/i,
    })
    fireEvent.change(input, { target: { value: "test@example.com" } })

    const button = screen.getByRole("button", { name: /subscribe/i })
    fireEvent.click(button)

    await screen.findByText("Thanks for subscribing!")
    expect(subscribeMock).toHaveBeenCalledWith("test@example.com")
  })

  it("handles subscription error", async () => {
    subscribeMock.mockResolvedValueOnce({ success: false, error: "Error" })

    render(<SubscribeBottom />)

    const input = screen.getByRole("textbox", {
      name: /subscribe to the newsletter/i,
    })
    fireEvent.change(input, { target: { value: "foo@bar.com" } })

    const button = screen.getByRole("button", { name: /subscribe/i })
    fireEvent.click(button)

    await screen.findByRole("alert")
    expect(screen.getByRole("alert").textContent).toBe("Error")
  })
})
