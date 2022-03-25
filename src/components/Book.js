function Book(props) {
return (
  <div className="Book">
    <p>{props.name}</p>
    <p>{props.author}</p>
    <button>Delete</button>
  </div>
)
} 

export default Book;