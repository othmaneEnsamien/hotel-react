import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <table style={{
      backgroundColor:'#000',
      display:'block',
      color:'#fff',
      paddingLeft:16
     }}>
      <tbody>
        <tr>
          <td><img width="50"  src="green_app_con.svg"/> </td>
          <td width="8"></td>
          <h1>Movies search</h1>
        </tr>
       
      </tbody>
     </table>
    </div>
  );
}

export default App;
