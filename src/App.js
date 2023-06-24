const App = () => {
  return (
    <div>
      <Student name={"Djarot Purnomo"} isStudent={true} />
    </div>
  );
};

function Student({ name, isStudent }) {
  const firstName = name.split(" ")[0]

  let status;
  if(isStudent){
    status = "Student"
  } else {
    status = "Not student"
  }
  //Reminder : selain operator ternary bisa menggunakan if else ,switch dan utilitas

return (
  <div>
  <p className="fullName">Name: {name}</p>
  <p className="firstName">First name: {firstName}</p> 
  <p className="status">Status: {status}</p>
  </div>
  )
}

export default App;
export { Student };
