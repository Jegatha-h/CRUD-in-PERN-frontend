import { deleteUser } from "../api/userApi";

function UserList({ users, refresh, onEdit }) {
  const handleDelete = async (id) => {
    await deleteUser(id);
    refresh();
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded shadow">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex justify-between items-center p-4 border-b"
        >
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>

          <div className="space-x-3">
            <button
              onClick={() => onEdit(user)}
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(user.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
