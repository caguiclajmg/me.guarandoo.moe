import styled from '@emotion/styled'
import Card from './card.html.jsx'

const Heading = styled.h2`
    font-size: 1.7em;
    font-weight: 600;
`

const Cards = styled.ol`
    display: grid;
    grid-gap: 4rem 2rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    list-style-type: none;
    padding: 0;
`

export default ({data, heading,id}) => (
    <React.Fragment>
        {
            heading && (
                <React.Fragment>
                    <Heading id={id}>
                        {heading}
                    </Heading>
                </React.Fragment>
            )
        }

        <Cards>
            {
                data.map((datum) => <Card tag="li" datum={datum} key={datum.id} />)
            }
        </Cards>
    </React.Fragment>
)