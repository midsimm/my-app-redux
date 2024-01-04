import './App.css';
import MessageThread from './MessageThread';

function App() {
  return (
    <div className="messageApp player">
      <MessageThread from="Simran"/>
      <div className="divider audience">
        <MessageThread from="Abhi"className="margin_bottom_200"/>
        <MessageThread from="Meetu"/>
      </div>
    </div>
  );
}

export default App;
