import styled from '@emotion/styled'
import Section from './components/section.html.jsx'
import ProgressBar from './components/progressbar.html.jsx'

const Main = styled.main`
  display: flex;
  flex-direction: row;
  width: 100%;

  :scope > div > div:not(:first-child) {
    margin-top: 2em;
  }
`

const Pane = styled.div`
  padding-left: 2em;
`

const SkillProgressBar = styled(ProgressBar)`
  width: 100%;
  height: 25px;
`

const Skill = styled.div`
  display: flex;
  margin-top: 1em;
  background-color: #111;
`

export default ({ data, environment }) => (
  <html>
    <head>
      <meta charSet="utf-8" />

      <title>Me</title>

      <link href="stylesheets/index.css" rel="stylesheet" media="all" />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </head>

    <body>
      <Main>
        <div style={{ flexGrow: 0.2 }}>
          <div>
            <h2 style={{textAlign: "center"}}>Profile</h2>
            <Pane>
              <div style={{ fontWeight: "bold" }}>Name</div>
              <div style={{ fontSize: "0.9em" }}>John Mark Gabriel Caguicla</div>
            </Pane>
            <Pane>
              <div style={{ fontWeight: "bold" }}>Current Employment</div>
              <div style={{ fontSize: "0.9em" }}>IT Engineer</div>
              <div style={{ fontSize: "0.9em" }}>nepes hayyim Corporation</div>
            </Pane>
          </div>
          <div>
            <h2 style={{ textAlign: "center" }}>Work</h2>
            {data.work.employment.map((employment) => <Pane>
              <div style={{ fontWeight: "bold" }}>{employment.employer}</div>
              <div style={{ fontSize: "0.9em" }}>{employment.title}</div>
              <div style={{ fontSize: "0.9em" }}>{employment.start} - {employment.end}</div>
            </Pane>)}
          </div>
          <div>
            <h2 style={{ textAlign: "center" }}>Technologies</h2>
            <Pane style={{ flexBasis: "25%" }}>
              { data.work.technologies.map((technology) => <Skill><span>{technology}</span></Skill>)}
            </Pane>
          </div>
        </div>
        <div style={{ flexGrow: 1 }}>
          <h2 style={{ textAlign: "center" }}>Projects</h2>
          <Pane>
            <Section data={data.work.projects} />
          </Pane>
        </div>
      </Main>
    </body>
  </html>
)