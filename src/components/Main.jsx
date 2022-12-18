import React from 'react';
import './styles.css';
import Header from './ Header';
import Footer from './Footer';
import Browser from './Browser';
import CreateArea from './CreateArea';
import { useState } from 'react';

function Main() {
  const [creating, setCreating] = useState(false);

  const expandArea = () => {
    setCreating(!creating)
  }

  const addNote = () => {
    expandArea()
  }
  return (
    <div className="App">
        <Header />
        {creating ? <CreateArea addBtn={expandArea}  /> : <form onClick={addNote}> create note </form>}
        <Browser />
        <Footer />
    </div>
  )
}

export default Main;

//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.