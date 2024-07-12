function RegisterForm() {
  return (
    <form className="flex flex-col items-center justify-center p-4 space-y-4 max-w-sm mx-auto border rounded shadow-md  w-full ">
      <label className="flex flex-col w-full">
        <span className="mb-1 text-gray-700">Username</span>
        <input className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </label>
      <label className="flex flex-col w-full">
        <span className="mb-1 text-gray-700">Password</span>
        <input
          type="password"
          className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
