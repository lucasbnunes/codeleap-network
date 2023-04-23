import 'whatwg-fetch'
import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Home from "@/pages/index"
import { renderWithProviders } from "@/utils/test-utils"

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe('Home page', () => {
  it("should disable the sign in button when username is empty", () => {
    renderWithProviders(
      <Home />
    )

    const enterButton = screen.getByText(/enter/)

    expect(enterButton).toBeInTheDocument()
  })

  it("should enable the sign in button when username exists", async () => {
    renderWithProviders(
      <Home />
    )

    const input = screen.getByText(/username/)
    await userEvent.type(input, 'John Doe')

    const enterButton = screen.getByRole('button')

    expect(enterButton).toBeEnabled()
  })
})