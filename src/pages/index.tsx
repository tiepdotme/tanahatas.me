import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import TopLeftText from '../components/TopLeftText'
import Button from '../components/Button'
import { colors, widths } from '../styles/variables'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <TopLeftText text="nice to meet you" />
      <Container>
        <div style={{ maxWidth: `${widths.md}px` }}>
          <h1 style={{ fontWeight: '400', padding: '48px 0 24px' }}>
            Hey, I'm <span style={{ fontWeight: '700' }}>Ahmad Ainul Rizki</span>, freelance designer and web developer.
          </h1>
          <p style={{ color: colors.white, margin: '0 0 64px' }}>
            Currently I'm a freelance designer and web developer, who works with a variety of clients and on many diverse projects.
          </p>
          <p style={{ color: colors.white, margin: '0 0 64px' }}>
            I work to create innovative solutions that inspire, and foster memorable relationships between brands and their clients. With a focus on branding and UI / Web, I strive to create usable and polished products through passionate and deliberate design.
          </p>
          <Button text="Delve into my side projects" link="/projects" isInternal />
        </div>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
