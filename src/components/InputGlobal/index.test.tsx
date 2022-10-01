import { Global } from ".";
import {render as ComponentRender, screen} from  '@testing-library/react'
import { Provider } from 'react-redux'
import { Store } from "../../redux/store";


it('should have a input', () => {

    const render = ComponentRender (
    <Provider store={Store}>
        <Global />
    </Provider>
)
    let input = screen.getAllByText('')
    expect(render).toHaveDisplayValue('')
})

export {}