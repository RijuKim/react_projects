import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = '리주'
  const list = ['우유', '딸기', '바나나', '요거트']
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
          style = {{width: '200px', height: '200px'}}
          src='https://images.unsplash.com/photo-1671362500619-4b9c06b5c5e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
          alt='nature'
      />
    </>
  );
}

export default AppJSX;
