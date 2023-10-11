import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import SearchBar from '../components/SearchBar'
import userEvent from '@testing-library/user-event'

test("Text input should render successfully", () => {
    render(<SearchBar />)
    expect(screen.getByTestId('search')).toBeInTheDocument()
})

test("Box renders to the screen successfully", () => {
    render(<SearchBar />)
    expect(screen.getByTestId("box")).toBeInTheDocument()
})

test("Default card should render successfully when mounted", () => {
    render(<SearchBar />)
    expect(screen.getByTestId("default")).toBeInTheDocument()
})

test("Location error modal appears successfully", async() => {
    render(<SearchBar />)

    await waitFor(() => {
        userEvent.click(screen.getByLabelText(/search/i))
        expect(screen.getByTestId(/error-modal/i)).toBeInTheDocument()
    })
    
})
