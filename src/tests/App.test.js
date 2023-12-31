import { render, screen } from '@testing-library/react'
import App from '../App'

test("App renders successfully", () => {
    render(<App />)
    expect(screen.getByTestId('app')).toBeInTheDocument()
})