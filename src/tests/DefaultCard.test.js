import { render, screen } from '@testing-library/react'
import DefaultCard from '../components/DefaultCard'
import searchLocation from '../images/default_card_imgs/map.png'

test("TextLine 1 renders successfully", () => {
        render(<DefaultCard/>)

        const text = screen.getByText(/Type in a location/i)

        expect(text).toBeInTheDocument()
})

test("TextLine 2 renders successfully", () => {
    render(<DefaultCard/>)

    const text = screen.getByText(/to find out what the weather/i)

    expect(text).toBeInTheDocument()
})

test("TextLine 3 renders successfully", () => {
    render(<DefaultCard/>)

    const text = screen.getByText(/is like in that area/i)

    expect(text).toBeInTheDocument()
})

test("Image renders successfully", () => {
    render(<DefaultCard/>)

    const image = screen.getByAltText('search map icon')

    expect(image.src).toContain(searchLocation)
})