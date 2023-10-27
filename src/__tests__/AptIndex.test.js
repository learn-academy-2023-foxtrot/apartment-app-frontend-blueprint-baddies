import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import AptIndex from "../pages/AptIndex";
import mockApartments from "../mockApartments"
describe('<AptIndex />', () => {
  it('has an alt text for each image', () => {
    render(
      <BrowserRouter>
        <AptIndex apartments={mockApartments} />
      </BrowserRouter>
    )

    const altTxt = screen.getAllByAltText(/profile picture for/i)

    expect(altTxt.length).toEqual(3)

    const aptImage = screen.getByRole('img', {
        name: /profile picture for 1026 york st/i
      })

    expect(aptImage).toHaveAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg40Psu9oCDZMyXyQYcdzxW0OarFjElUqjKQ&usqp=CAU");
  })
  it('only displays properties that belong to the current user', () => {
    render(
      <BrowserRouter>
        <AptIndex apartments={mockApartments} />
      </BrowserRouter>
    )
    const images = screen.getAllByRole('img')
    expect(images.length).toEqual(3)
  })
})