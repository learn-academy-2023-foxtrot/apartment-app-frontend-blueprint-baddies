import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import AptProtectedIndex from "../pages/AptProtectedIndex";
import mockApartments from "../mockApartments"
import mockUsers from "../mockUsers";
describe('<ProtectedIndex />', () => {
  it('has an image on each card', () => {
    render(
      <BrowserRouter>
        <AptProtectedIndex user={mockUsers[1]} apartments={mockApartments} />
      </BrowserRouter>
    )

    const altTxt = screen.getAllByAltText(/profile picture for/i)

    expect(altTxt[0]).toBeInTheDocument()

    const aptImage = screen.getByRole('img', {
        name: /profile picture for 666 arkham asylum way/i
      })

    expect(aptImage).toHaveAttribute("src","https://upload.wikimedia.org/wikipedia/commons/4/45/Asylum_Buildings_%288136405492%29.jpg");
  })
  it('only displays properties that belong to the current user', () => {
    render(
      <BrowserRouter>
        <AptProtectedIndex user={mockUsers[1]} apartments={mockApartments} />
      </BrowserRouter>
    )
    const images = screen.getAllByRole('img')
    expect(images.length).toEqual(1)
  })
})