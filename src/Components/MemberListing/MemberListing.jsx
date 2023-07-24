import React from 'react'
import './MemberListing.scss';
function MemberListing() {
  return (
    <div className="tables-container">
            <h3 className='title'><b>Member List</b></h3>
            <div className="list-container">
                <ul className="custom-list">

                    <li>
                    <span className="list-item">Arjun krishna</span>
                    <span className="list-description">Lulu International</span>
                    </li>
                    <li>
                    <span className="list-item">Hrithik</span>
                    <span className="list-description">Netflix</span>
                    </li>
                    <li>
                    <span className="list-item">Angel Mariya</span>
                    <span className="list-description">IKEA</span>
                    </li>
                    <li>
                    <span className="list-item">Febin</span>
                    <span className="list-description">WAC pro</span>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default MemberListing