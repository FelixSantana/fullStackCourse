const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content part = {part1} exercises = {exercises1}/>
      <Content part = {part2} exercises = {exercises2}/>
      <Content part = {part3} exercises = {exercises3}/>
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
    </div>
  )
}
//En esta parte le pasamos el course al header
const Header = (props) =>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
//Aqui pasamos las partes y ejercicios al componente Content
const Content = (props) =>{
  return(
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Part = () => {
  return(
    <div>
      
    </div>
  )
}

//Calculamos el total de ejercicios del curso
const Total = (props) =>{
  return(
    <div>
      <p>
        Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  )
}
export default App