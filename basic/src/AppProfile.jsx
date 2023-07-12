import './App.css';
import Profile from './components/Profile';

function AppProfile() {
  return (
    <>
      <Profile 
        image='https://images.unsplash.com/photo-1688932112116-1811e7717379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
        name='Rijoo Kim' 
        title='프론트엔드 개발자'
      />
      <Profile
        image='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
        name='Anna Young' 
        title='백엔드 개발자'
      />
      <Profile
        image='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
        name='Bob Yu' 
        title='프론트엔드 개발자'      
      />
    </>
  );
}

export default AppProfile;
