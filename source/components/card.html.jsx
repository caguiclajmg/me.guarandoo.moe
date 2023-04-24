import styled from '@emotion/styled'
import Icon from './icon.html.jsx'
import ReactMarkdown from 'react-markdown'

const IconImage = styled(Icon)`
  color: #f0f;

  svg {
    width: 100%;
    height: 100%;
  }
`

let statusComponent = (status) => {
  switch (status) {
    case "archived": return <IconImage name="archive" />
    case "active": return <IconImage name="activity" />
  }
}

const Status = styled.div`
    margin-right: 0.4em;
    margin-top: 0.6em;
    display: flex;
    font-size: 0.8em;

    i svg {
      width: 15px;
    }

    svg * {
      stroke: var(--gray-color);
    }
`

const Name = styled.h3`
    font-weight: 400;
    font-size: 1.4rem;
    display: inline;
`

const Employer = styled.h3`
    font-weight: 400;
    font-size: 1rem;
`

const Link = styled.a`
`

const Outer = styled.div`
    position: relative;

    &:before {
        display: block;
        content: "";
        padding-top: 75%;
    }
`
const Inner = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const Image = styled.div`
    aligh-items: center;
    background-color: var(--card-background-color);
    border-radius: 0.4em;
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        height: 90%;
        width: 90%;
        object-fit: contain;
        margin: auto;
    }
`

const Tag = styled.span`
    background-color: var(--card-background-color);
    border-radius: 24px;  
    padding: 2px 8px 2px 8px;
    font-size: 0.8em;
    margin-left: 2px;
`

const TagsContainer = styled.div`
    margin-top: 0.2em;
`

const Tags = ({ tags }) => (
  <TagsContainer>
    {tags.map((tag) => <Tag>{tag}</Tag>)}
  </TagsContainer>
)

const Tags2 = styled(Tags)`
  height: 20%;
  background-color: var(--card-background-color);
`

const Container = styled.div`
`

const Description = styled(ReactMarkdown)`
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.4em;
`

const Card = ({ datum }) => (
  <Container>
    <Outer>
      <Inner>
        <Image className="image">
          {datum.logo ? (<img src={datum.logo} alt={datum.name} />) : (<h2 style={{ color: "#aaa", margin: "auto", width: "100%", verticalAlign: "center", textAlign: "center" }}>No Image</h2>)}
        </Image>
      </Inner>
    </Outer>

    <div style={{display: "flex"}}>
      <Tags2 tags={datum.tags} />
    </div>

    {datum.status && <Status>{statusComponent(datum.status)}<span style={{marginLeft: "0.3em"}}>{datum.status}</span></Status>}

    <Name>{datum.name}</Name>

    <Employer>
      {datum.employer}
    </Employer>
    
    <Description>
      {datum.description}
    </Description>
  </Container>
)

export default ({ datum, tag }) => {
  let Tag = `${tag}`
  return <Tag>
    {datum.url ? (<Link href={datum.url} target="_blank"><Card datum={datum} /></Link>) : (<Card datum={datum} />)}
  </Tag>
}