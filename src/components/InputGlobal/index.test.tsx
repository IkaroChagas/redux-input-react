import { Global } from ".";
import {render, screen} from  '@testing-library/react'

it('should have a input', () => {
    render(<Global />)

    let input = screen.getAllByDisplayValue('Ikaro')
    expect(input).toHaveFormValues
})

export {}