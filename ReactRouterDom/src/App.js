import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch, Link, NavLink, useParams} from 'react-router-dom';

function Home(){
  return (
    <div>
      <h2>Home</h2>
      Home..
    </div>
  )
}
var contents = [
  {id:1 , title:'HTML', description: 'HTML is..'},
  {id:2 , title:'JS', description: 'JS is..'},
  {id:3 , title:'React', description: 'React is..'},
]

function Atopic(){
  var params = useParams();
    var topic_id = params.topic_id;
    var selected_topic = {
        title:'Sorry',
        description:'Not found'
    } // 기본값(존재하는 페이지 번호가 아닌 경우)
    for(var i=0; i<contents.length; i++){
        if(contents[i].id === Number(topic_id)){
            selected_topic = contents[i];
            break;
        }
    }
    return (
        <div>
            <h3>{selected_topic.title}</h3>
            {selected_topic.description}
        </div>
    );
}

function Topics(){
  var list =[];
  for(var i=0; i<contents.length;i++){
    list.push(<li><NavLink to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>)
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {list}
      </ul>
      <Route path="/topics/:topic_id">
        <Atopic/>
      </Route>


    </div>
  )
}

function Contact(){
  return (
    <div>
      <h2>Contact</h2>
      Contact..
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1> Hello React Router DOM </h1>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Route path="/"><Home/></Route>
      <Route path="/topics"><Topics/></Route>
      <Route path="/contact"><Contact/></Route>
    </div>
  );
}

export default App;
