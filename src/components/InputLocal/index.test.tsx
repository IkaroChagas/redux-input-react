import { Local } from ".";
import { render as ComponentRender, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { Store } from "../../redux/store";


it('should have a header', () => {

    ComponentRender(
        <Provider store={Store}>
            <Local />
        </Provider>
    )

    const title = screen.getByText('Estado local')
    expect(title).toBeInTheDocument()
})

export { }