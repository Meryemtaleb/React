import React,{ useReducer } from 'react';
import './App.css';
// import ComposantA from './components/ComposantA';
// import ComposantB from './components/ComposantB';
// import ComposantC from './components/ComposantC';
// import DataFetchingOne from './components/DataFetchingOne';
// import Film from './components/Film';
// import DataFetchAll from './components/DataFetchAll';
// import Todos from './components/Todos';
// import DataFetchReducer from './components/DataFetchReducer';
// import DataFetchAllProducts from './components/DataFetchAllProducts';


// import Newsletter from './components/Newsletter';
// import Form from './components/Form';
// import './app.module.css';
// import Admin from './components/Admin';
// import NameList from './components/NameList';
// import styles from './app.module.css';
// import Person from './components/Person';
// import Inline from './components/Inline';
// import ClassClick from './components/ClassClick';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import Greet from './components/Greet';
// import UserGreeting from './components/UserGreeting';
// import Welcome from './components/Welcome';
// import Hero from './components/Hero';
// import Message from './components/Message';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Developpement from './components/Services/Developpement/Developpement';
import Marketing from './components/Services/Marketing/Marketing';
import Admin from './components/Admin/Admin';
import GestionPost from './components/Admin/GestionPost/GestionPost';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import FetchOneFilm from './components/FetchOneFilm/FetchOneFilm';
import FetchAllFilm from './components/FetchAllFilm/FetchAllFilm';
import NewFilm from './components/NewFilm/NewFilm';
import UpdateFilm from './components/UpDateFilm/UpdateFilm';
import Login from './components/Login/Login';
import Inscription from './components/Inscription/Inscription';
import ImageUpload from './components/ImageUpload/ImageUpload';
import FilesUploadForm from './components/FilesUploadForm/FilesUploadForm';
import MyBlog from './components/MyBlog/MyBlog';
import BlogIndex from './components/BlogIndex/BlogIndex';
import ChatApp from './components/ChatApp/ChatApp';
import EditBlog from './components/MyBlog/EditBlog';
export const CountContext = React.createContext() ;
function App() {
  const initialState =0;
  const reducer = (state,action) =>{//Le reducer est une fonction qui prend l'état actuel et une action en entrée, puis renvoie un nouvel état en fonction de cette action.
    switch(action){

      case 'increment': return state + 1;
      case 'decrement': return state - 1;
      case 'reset': return initialState;
      default :return state;
    }
  }
  const [count,dispatch] = useReducer(reducer,initialState);//Ici, nous utilisons le hook useReducer de React pour créer un état count et une fonction dispatch basés sur notre reducer et notre état initial

  return (
    <div className="App">
      {/* <Greet name="Thomas"  age="23 ans" 
        >Thomas est un super gars !</Greet>
        <Greet  name="John" age=" 50 ans"/>
        <Greet name="Will"   age=" 33 ans"/> */}


      {/* <Hero name="Bruce"  hero="Batman"
        >This is children props  !</Hero>
        <Hero  name="Clark" hero="Superman"/>
        <Hero name="Diana" hero="Wonder Woman" /> */}

      {/* < Welcome name="Chris" age="25 ans" >
        Ceci est un children !</Welcome>

      < Welcome name="Max" age=" 33 ans" />
      < Welcome name="Fred" age=" 29 ans" /> */}
      {/* <Message /> */}
      {/* <Counter value={100}/>
      <FunctionClick />
      <ClassClick/> */}
      {/* <UserGreeting /> */}
      {/* <Admin/> */}
      {/* <NameList/> */}
      {/* <Person couleur={"red"}/> */}
      {/* <Form/> */}
      {/* <Inline/> */}
      {/* <Newsletter/> */}
      {/* <h1 className={styles.success}> Success !</h1> */}
      {/* <CountContext.Provider value ={{countState : count, countDispatch : dispatch}}>
      <ComposantA/>
      <ComposantB/> 
      <ComposantC/>
      </CountContext.Provider> */}
      {/* <DataFetchingOne/> */}
      {/* <Film/> */}
      {/* <DataFetchAll/> */}
      {/* <Todos/> */}
      {/* <DataFetchReducer/> */}
      {/* <DataFetchAllProducts/>  */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/services/' element={<Services/>}/> */}
        <Route path='/services/' element={<Services/>}>
          <Route path='/services/developpement' element={<Developpement/>}/>
          <Route path='/services/marketing' element={<Marketing/>}/>
        </Route>
        <Route path='/admin/' element={<Admin/>}>
          <Route path='/admin/gestionpost' element={<GestionPost/>}/>
          <Route path='/admin/dashboard' element={<Dashboard/>}/>
        </Route>
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/film' element={<FetchOneFilm/>}/>
        <Route path='/allfilms' element={<FetchAllFilm/>}/>
        <Route path='/newfilm' element={<NewFilm/>}/>
        <Route path='/editfilm/:id' element={<UpdateFilm/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/inscription' element={<Inscription/>}/>
        <Route path='/image' element={<ImageUpload/>}/>
        <Route path='/uploadimages' element={<FilesUploadForm/>}/>
        <Route path='/myblog' element={<MyBlog/>}/>
        <Route path='/blog' element={<BlogIndex/>}/>
        <Route path='/chat' element={<ChatApp/>}/>  
        <Route path='/editblog/:id' element={<EditBlog/>}/>      
      </Routes>
    </div>
  );
}

export default App;
