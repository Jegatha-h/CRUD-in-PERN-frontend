import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { getUsers } from "./api/userApi";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-center mb-6">CRUD Operations</h2>

      <UserForm
        refresh={fetchUsers}
        selectedUser={selectedUser}
        clearSelection={() => setSelectedUser(null)}
      />

      <UserList
        users={users}
        refresh={fetchUsers}
        onEdit={(user) => setSelectedUser(user)}
      />
    </div>
  );
}

export default App;
