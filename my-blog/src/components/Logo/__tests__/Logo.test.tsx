import { render } from '@utils/testUtils'
import Logo from '..'

describe('Logo Component', () => {
  const mockProps = {
    children: 'beautyoncode',
    link: '#',
  }

  it('Should show match Logo DOM Snapshot', () => {
    const { container } = render(<Logo {...mockProps} />)

    expect(container).toMatchSnapshot()
  })
})
