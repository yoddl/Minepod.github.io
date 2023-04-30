import { useRef, useState } from 'react';
import { useEffect } from 'react'
import './Commands.css'
import Details from './details.json'
import JSONcommands from './cmd.json'
import { Helmet } from 'react-helmet';

const Commands = () => {

  // ------------------ Accordion States ---------------------k


  const cmdSelectRef = useRef();
  const cmdSelectRefCaret = useRef();
  const cmdSelectRefMenu = useRef();
  const showSelectRef = () => {
    cmdSelectRef.current.classList.toggle("cmd-select-clicked");
    cmdSelectRefCaret.current.classList.toggle("cmd-caret-rotate");
    cmdSelectRefMenu.current.classList.toggle("cmd-menu-open");
  }

  useEffect(() => {
    const dropdown = document.querySelectorAll('.cmd-dropdown');
    dropdown.forEach(dropdown => {
      const select = document.querySelector('.cmd-select');
      const caret = document.querySelector('.cmd-caret');
      const menu = document.querySelector('.cmd-menu');
      const selected = document.querySelector('.cmd-selected');
      const options = document.querySelectorAll('.cmd-menu li');
      options.forEach(option => {
        option.addEventListener("click", () => {
          selected.innerText = option.innerText;
          select.classList.remove('cmd-select-clicked')
          caret.classList.remove('cmd-caret-rotate')
          menu.classList.remove('cmd-menu-open')
        })

      })
    })
  }, []);


  // --------------------- Commands Filter -----------------

  const [stateCommand, setStateCommand] = useState(JSONcommands);
  const filterCommands = (selectedCategory)=>{
    const updatedCommands = JSONcommands.filter((e)=>{
      return e.category === selectedCategory
    })

    setStateCommand(updatedCommands)
  }


  return (
    <>
    <Helmet>
            <title>Minepod Discord Bot - Commands</title>
        </Helmet>
      <div className="commands-container">


        <div className="commands-header">
          <h2>Commands</h2>
          <p>View the commands for Minepod.</p>
        </div>

        <div className="commands-grid container">
          {/* --------------- Commands Drop Down ----------- */}

          <div className="cmd-dropdown">
            <div className='cmd-select' ref={cmdSelectRef} onClick={showSelectRef}>
              <span className="cmd-selected">Select a category</span>
              <div className="cmd-caret" ref={cmdSelectRefCaret} ></div>
            </div>
            <ul className="cmd-menu" ref={cmdSelectRefMenu}>
              <li className='cmd-active' onClick={() =>{setStateCommand(JSONcommands)}} >All</li>
              {
                Details.map((e)=>{
                  return <li onClick={()=>{filterCommands(e)}} >{e.replace('_', ' ')}</li>
                })
              }
            </ul>
          </div>
        </div>

        {/* ---------------------- Commands Accordion -------------------- */}
        
        <div className="commands-accordions container">
          {
            stateCommand.map((command) => {
              return  <div className="command-acccordion">
                <div className="command-accordion-title">
                  <h2>{',' + command.name}</h2>
                </div>
                <div className="command-accordion-content">
                  <div className="command-description">
                    <p>{command.description + '.'}</p>
                  </div>
                  <div className="command-aliases">
                    <p className='aliases'>{'Aliases: ' + command.aliases.toString()}</p>
                    <p>{`Example: ${command.usage.toLowerCase()}`}</p>
                  </div>
                </div>
              </div>
            })
          }
        </div>

      </div>
    </>
  )
}

export default Commands