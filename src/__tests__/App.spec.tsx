import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import TestApp from "../tests/TestApp"

test('demo', () => {
    expect(true).toBe(true)
  })

  test("Renders the main page", () => {
    render(<TestApp />)
    expect(true).toBeTruthy()
})