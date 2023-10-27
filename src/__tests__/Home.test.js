import { screen, render } from "@testing-library/react" 
import Home from '../pages/Home'

describe ("<Home />", () => {
    it ("renders without crashing", () => {
        render(<Home/>)
        
    const headingTitle = screen.getByText(/welcome to toon towers/i)
        expect(headingTitle).toBeInTheDocument()
    })
})