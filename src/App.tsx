import React from 'react';
import UserInfo from './components/UserInfo';
import Card from './components/Card';

const App: React.FC = () => {
  return (
    <div>
      <UserInfo name="John Doe" age={30} email="john@example.com" />
      <Card>
        <h3>Card Title</h3>
        <p>this is a child component </p>
      </Card>
      <Card>
        <button>Click Me</button>
      </Card>
    </div>
  );
};

export default App;