import logo from './logo.svg';
import './App.css';

const toDO = props => (
  <tr>
    <td>
      <label>{props.is}</label>
    </td>
    <td>
      <input/>
    </td>
    <td>
      <label>{props.createAt}</label>
    </td>
  </tr>
)

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '18:00',
  },{
    id: 'todo2',
    createdAt: '20:30',
  }]);

  const reverseOrder = () => {
    setTodos([...todos].reverse());
  }

  return (
    <div className="App">
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo, index)=>(
            <ToDo key={index} id={todo.id} createAt={todo.createAt}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
