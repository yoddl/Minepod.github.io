import React from 'react'
import './Link.css'
import {links} from '../../data.js'


export const Invite = () => {
  return (
    <>
        <div className="container link-header">
            <h2>Invite Minepod Bot</h2>
            <button onClick={()=>{window.location.href = links.invite}} className="btn link-route-btn">
                Invite Me
            </button>
        </div>
    </>
  )
}

export const Support = () => {
    return (
      <>
          <div className="container link-header">
              <h2>Join Minepod's Server</h2>
              <button onClick={()=>{window.location.href = links.supportServer}} className="btn link-route-btn">
                  Join Server
              </button>
          </div>
      </>
    )
  }
  
  export const Vote = () => {
    return (
      <>
          <div className="container link-header">
              <h2>Vote For Minepod</h2>
              <button onClick={()=>{window.location.href = links.vote}} className="btn link-route-btn">
                  Vote
              </button>
          </div>
      </>
    )
  }
  