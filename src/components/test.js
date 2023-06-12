
return (
    <div>
      {state.loading ? ('Loading...' ) : state.error ? (<p>{state.error}</p>) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {state.todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );