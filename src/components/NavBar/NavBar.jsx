
export function NavrBar (props){
    console.log(props)
    function handleSignout(){
        localStorage.removeItem('token')
        
    }
    return (
        <div>
            {props.user ? 
            <a href='/' onClick={handleSignout}>SignOut</a>
            :
            <div>
            <p>Login</p>
            <p>signup</p>
            </div> 
            }
            <div id="mapid"></div>
        </div>

    )
}