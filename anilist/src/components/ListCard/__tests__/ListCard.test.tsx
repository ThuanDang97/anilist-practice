// mocks
import { mockAnime } from '@mocks/mockAnime'

// utils
import { render, screen } from '@utils/testUtils'

// components
import ListCardComponent from '..'

describe('List Card component', () => {
  test('should render small card type correctly', () => {
    render(
      <ListCardComponent title="Title" listAnime={mockAnime} href="/link" />,
    )

    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('View All')).toBeInTheDocument()

    expect(screen.getAllByTestId('small-card')[0]).toBeInTheDocument()

    expect(screen.queryByTestId('tiles-card')).not.toBeInTheDocument()
  })

  test('should render tiles card type correctly', () => {
    render(
      <ListCardComponent
        title="Title"
        listAnime={mockAnime}
        href="/link"
        typeCard="tiles"
      />,
    )

    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('View All')).toBeInTheDocument()

    expect(screen.getAllByTestId('tiles-card')[0]).toBeInTheDocument()

    expect(screen.queryByTestId('small-card')).not.toBeInTheDocument()
  })
})
