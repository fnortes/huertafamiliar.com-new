import { ParsedUrlQuery } from 'querystring'

import axios from 'axios'
import { render } from '@testing-library/react'
import { GetStaticPropsContext, PreviewData } from 'next'

import Home, { getStaticProps } from '@/pages'

jest.mock('axios')

describe('Home Page', () => {
  test('Home component', () => {
    const wrapper = render(<Home vegetables={[]} />)

    expect(wrapper.container).not.toBeEmptyDOMElement()
  })

  test('Home getStaticProps', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: '',
    })

    const context: GetStaticPropsContext<ParsedUrlQuery, PreviewData> = {}
    const result = await getStaticProps(context)

    expect(result).toEqual({
      props: {
        vegetables: [],
      },
    })
  })
})
