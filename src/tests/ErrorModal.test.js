import { render, screen, waitFor } from '@testing-library/react'
import ErrorModal from '../components/ErrorModal'
import thinking from '../images/error_modal_imgs/thinking.png'
import forbidden from '../images/error_modal_imgs/forbidden.png'
import { userEvent } from '@testing-library/user-event'

test("Location error modal renders successfully", () => {
    render(<ErrorModal open={true} errorType="location" />)

    expect(screen.getByText('OOPS!!!')).toBeInTheDocument()
    expect(screen.getByAltText('thinking').src).toContain(thinking)
    expect(screen.getByText("I don't know that location, try again")).toBeInTheDocument()
    expect(screen.getByText('TRY AGAIN')).toBeInTheDocument()
})

test("api error modal renders successfully", () => {
    render(<ErrorModal open={true} errorType="api" />)

    expect(screen.getByText('OH NO!!!')).toBeInTheDocument()
    expect(screen.getByAltText('thinking').src).toContain(forbidden)
    expect(screen.getByText("API call limit reached for the day, try again tomorrow")).toBeInTheDocument()
    expect(screen.getByText('Close')).toBeInTheDocument()
})

test("API error modal button click handle called successfully", async() => {
    const mockHandleClick = jest.fn();

    render(<ErrorModal open={true} handleClose={mockHandleClick} errorType="api" />)

    await waitFor(() => {
        userEvent.click(screen.getByText('Close'))
        expect(mockHandleClick).toHaveBeenCalled();
    }) 
})

test("Location error modal button click handle called successfully", async() => {
    const mockHandleClick = jest.fn();

    render(<ErrorModal open={true} handleClose={mockHandleClick} errorType="location" />)

    await waitFor(() => {
        userEvent.click(screen.getByText('TRY AGAIN'))
        expect(mockHandleClick).toHaveBeenCalled();
    }) 
})