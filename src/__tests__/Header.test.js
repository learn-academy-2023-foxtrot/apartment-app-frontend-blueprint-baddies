import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from "../components/Header"

describe("<Header />", () => {
    it("renders without crashing", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
    const copyRight = screen.getByRole('link', {
    name: /Toon Towers/i
    })
    expect (copyRight).toBeInTheDocument()
    })
})