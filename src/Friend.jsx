export default function Friend({friend}){
    const{ id,name, email} = friend;
  

    return(
        <div className="box" style={{border: '2px solid black'}}>
            <h4>ID: {id} </h4>
            <h4>Name: {name}</h4>
            <p>Emial: {email}</p>
        </div>
    )
}
