import './App.css';
import MessageThread from './MessageThread';
import UserProvider from './UserProvider';

function App() {
  return (
    <div className="messageApp player">
      <UserProvider from="Simran">
        <MessageThread />
      </UserProvider>
      <div className="divider audience">
        <UserProvider from="Abhi">
          <MessageThread className="margin_bottom_200"/>
        </UserProvider>
        <UserProvider from="Meetu">
          <MessageThread />
        </UserProvider>
      </div>
    </div>
  );
}

export default App;
