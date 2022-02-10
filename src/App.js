import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import Question from './components/Question';
import Action from './components/Action';
import './App.css';

import trees from "./trees.json";


function App() {
  const [chemin, setChemin] = useState([]);
  const [currentNode, setCurrentNode] = useState({});
  const [currentTree, setCurrentTree] = useState(null);
  const [arbre, setArbre] = useState([]);

  const getOneNodeFromTheTree = (indice) => arbre.find(node => node.id === indice);
  const getOneTreeFromTheTreeList = (indice) => trees.find(tree => tree.id === indice);

  useEffect(() => {
    //updateCurrentNode("start");
  }, []);


  const updateCurrentNode = (indice) => {
    const node = getOneNodeFromTheTree(indice);
    setCurrentNode(node);
  }
  
  const updateCurrentTree = (indice) => {
    const tree = getOneTreeFromTheTreeList(indice);
    const treeName = tree && tree.tree ? `data/${tree.tree}` : null;    
    if (treeName) {
      fetch(treeName)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setCurrentTree(prev => {
              const tree = data.tree;
              setArbre(prev => {
                setCurrentNode(prev => {
                  const node = tree.find(node => node.id === "start");
                  return node;
                });
                return tree;
              });
              return data;
            });
          }
        }
      )
    }
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

  const TreeList = () => {
    return (
      <div className='Treelist'>

        <h2 className='Treelist-title'>Available trees : </h2>
        
        {trees.map((node, idx) => {
          const {id, name, tree} = node;
          return (
            <button
              key={uuid()}
              className="Treelist-item"
              onClick={() => {
                updateCurrentTree(id);
              }}>
              {name} : {tree}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="App">
      {
        (!currentTree)
          ? <TreeList />
          : <>
            <div className='Chemin'>
              <small>[{currentTree.name}]</small><br />
              Path : {chemin.join("/")}
            </div>

            <div className='Questions'>
              <QuestionOrAction node={currentNode} />
            </div>
            </>
      }
    </div>
  );
}

export default App;
