import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import AptShow from "../pages/AptShow";
import mockApartments from "../mockApartments"
describe('<AptShow />', () => {
  it('has an alt text for each image', () => {
    render(
      <BrowserRouter>
        <AptShow apartments={mockApartments} />
      </BrowserRouter>
    )

    screen.debug()
    screen.logTestingPlaygroundURL()

    const altTxt = screen.getByRole('heading', {
        name: /reserve your home today!!!/i
      })

    expect(altTxt.length).toEqual(undefined)

  })
  it('only displays properties that belong to the current user', () => {
    render(
      <BrowserRouter>
        <AptShow apartments={mockApartments} />
      </BrowserRouter>
    )
    const images = screen.getAllByRole('heading')
    expect(images.length).toEqual(1)
  })
})