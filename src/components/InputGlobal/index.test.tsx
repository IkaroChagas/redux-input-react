import { Global } from ".";
import { render as ComponentRender, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { Store } from "../../redux/store";


it('should have a header', () => {

    ComponentRender(
        <Provider store={Store}>
            <Global />
        </Provider>
    )

    const title = screen.getByText('Estado global (Redux)')
    expect(title).toBeInTheDocument()
})

export { }