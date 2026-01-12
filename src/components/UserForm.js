import { useEffect, useState } from "react";
import { createUser, updateUser } from "../api/userApi";
function UserForm({ refresh, selectedUser, clearSelection }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 🔥 Load user data when Edit is clicked
  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setEmail(selectedUser.email);
    }
  }, [selectedUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedUser) {
      await updateUser(selectedUser.id, { name, email });
      clearSelection();
    } else {
      await createUser({ name, email });
    }

    setName("");
    setEmail("");
    refresh();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow max-w-md mx-auto mb-6"
    >
      <h3 className="text-lg font-semibold mb-4">
        {selectedUser ? "Update User" : "Add User"}
      </h3>

      <input
        className="w-full border p-2 mb-3 rounded"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        className="w-full border p-2 mb-4 rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <div className="flex gap-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          {selectedUser ? "Update" : "Add"}
        </button>

        {selectedUser && (
          <button
            type="button"
            onClick={clearSelection}
            className="bg-gray-400 text-white px-4 py-2 rounded w-full"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default UserForm;

