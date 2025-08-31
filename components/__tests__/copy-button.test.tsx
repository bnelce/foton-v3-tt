import { act, fireEvent, render, screen } from "@testing-library/react"

import CopyButton from "../copy-button"

describe("CopyButton", () => {
  const writeText = vi.fn().mockResolvedValue(undefined)

  beforeEach(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText },
      writable: true,
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("copies provided text and updates state", async () => {
    const text = "hello world"
    render(<CopyButton componentSource={text} />)

    const button = screen.getByRole("button", {
      name: /copy component source/i,
    })
    expect(button.hasAttribute("disabled")).toBe(false)

    await act(async () => {
      await fireEvent.click(button)
    })

    expect(writeText).toHaveBeenCalledWith(text)

    await screen.findByRole("button", { name: /copied/i })
    expect(button.hasAttribute("disabled")).toBe(true)
  })
})
