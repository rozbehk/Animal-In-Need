
export default function Animal (props){

    async function handleDelete(){
        let body = { 
            id : props.animal._id,
        }
        let options = {
            method: "DELETE",
            headers: {
                "Content-Type":  "application/json"
            },
            body: JSON.stringify(body)
        }
        await fetch(`/api`, options)
            .then(res=> res.json())
            .then(data => {
                this.props.getAnimals()
            })
    }
    


    return(
        <div className="animals">
            <p className="animals-title">Title : {props.animal.title}</p>
            <p className="animals-description">Description: {props.animal.description}</p>
            <p className="animals-image">lat: {props.animal.location.lat}</p>
            <p className="animals-lng">lng: {props.animal.location.lng}</p>
            <p className="animals-lat">Image: {props.animal.location.image}</p>
            <span onClick={handleDelete} >Delete!</span>
            <hr />
        </div>
    )
       
}

