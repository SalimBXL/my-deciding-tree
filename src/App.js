import React, { useEffect, useState } from 'react';
import Question from './components/Question';
import Action from './components/Action';
import './App.css';

import arbre from "./arbre.json";


function App() {
  const [chemin, setChemin] = useState([]);
  const [currentNode, setCurrentNode] = useState({});

  const getOneNodeFromTheTree = (indice) => arbre.find(node => node.id === indice);

  useEffect(() => {
    updateCurrentNode("start");
  }, []);

  const updateCurrentNode = (indice) => {
    const node = getOneNodeFromTheTree(indice);
    setCurrentNode(node);
  }

  const handleQuestionClick = (indice) => {
    updateCurrentNode(indice);
    setChemin((prev) => [...prev, indice]);
  }

  const QuestionOrAction = ({node}) => {
    const key = `question-${node.id}`;
    if (node.answers) return (<Question key={key} question={node} onClick={handleQuestionClick} />);
    if (node.actions) return (<Action key={key} action={node} />);
    return <div>Oops...</div>;
  }

  return (
    <div className="App">

      <div className='Chemin'>
        Chemin : {chemin.join("/")}
      </div>

      <div>
        <QuestionOrAction node={currentNode} />
      </div>
    </div>
  );
}

export default App;
