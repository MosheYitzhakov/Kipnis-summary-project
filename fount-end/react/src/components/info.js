import React from 'react';

export const Info = () =>{
    const localStor = JSON.parse(localStorage.uesr) 
    return <>
    <fieldset style={{textAlign:"center", margin:"10%" }}>
    <h1>info data</h1>
    <p> <span style={{fontSize:23}}> name:</span> {localStor.name}</p>
    <p> <span style={{fontSize:23}}> username:</span> {localStor.username}</p>
    <p> <span style={{fontSize:23}}> email:</span> {localStor.email}</p>
    <p> <span style={{fontSize:23}}> phone:</span> {localStor.phone}</p>
    <p> <span style={{fontSize:23}}> city:</span> {localStor.address}</p>
    </fieldset>
    </>
}