import './App.css';
import MessageBox from './MessageBox';

function App() {
  return (
    <div className="messageApp">
      <MessageBox from="Simran" to="Abhi"/>
      <MessageBox from="Abhi" to="Simran" className="margin_top_200 abhi"/>
    </div>
  );
}

export default App;
