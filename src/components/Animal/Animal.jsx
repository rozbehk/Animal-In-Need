
export default function Post (props){

    async function handleDelete(){
        let body = { 
            id : this.state.id,
        }
        console.log(body)
        let options = {
            method: "DELETE",
            headers: {
                "Content-Type":  "application/json"
            },
            body: JSON.stringify(body)
        }
        await fetch(`/api/delete/{this.state.id}`, options)
            .then(res=> res.json())
            .then(data => {
                this.props.getAnimals()
            })
    }


    return(
        <div className="animals">
            <p className="animals-title">Title : {props.animal.title}</p>
            <p className="animals-Country">Country: {props.animal.country}</p>
            <p className="animals-state">State: {props.animal.state}</p>
            <p className="animals-city">City: {props.animal.city}</p>
            <p className="animals-description">Description: {props.animal.description}</p>
            <p className="animals-image">Image: {props.animal.image}</p>
            <span onClick={handleDelete} >Delete!</span>
            <hr />
        </div>
    )
       
}

