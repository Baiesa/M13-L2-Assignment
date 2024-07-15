interface UserInfoProps {
  name: string;
  age: number;
  email: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, age, email }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserInfo;