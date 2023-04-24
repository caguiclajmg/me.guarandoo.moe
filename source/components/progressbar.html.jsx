import styled from '@emotion/styled'

const Container = styled.div`
`

const Outer = styled.div`
    height: 100%;
    background-color: ${props => props.fillColor};
    border-radius: 32px;
    padding: 4px;
`

const Inner2 = styled.div`
    height: 100%;
    width: ${props => props.value * 100}%;
    position: relative;
`

const Inner = styled.div`
    @keyframes slide {
        0% { width: 0%; }
        50% { width: 0%; }
    }

    border-radius: 32px;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: ${props => props.fillColor};
    animation: slide 1s ease-out 0s;
`

export default ({ value, max, outerColor, innerColor, ...props }) => (
    <Outer fillColor={outerColor} {...props}>
        <Inner2 value={value / max}>
            <Inner fillColor={innerColor}>
                <span style={{display: "block", width: "100%", textAlign: "center"}}>{value}</span>
            </Inner>
        </Inner2>
    </Outer>
)