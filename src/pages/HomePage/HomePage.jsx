import './HomePage.css'

export default function MainPage(){
  return (
    <div className="Home-class">
      <section className="Home">
        <h1 className='navbar-item'>Animal In Need</h1>
        <h2>Let us unite for them</h2>
        <img src="https://i.imgur.com/pbEPSeD.png" alt="" />
        <h1 class="text-warning">Admin username: admin@admin.com password: admin</h1>
        <h1 class="text-warning">Rescuer username: rescuer@rescuer.com password: rescuer</h1>
        <h1 class="text-warning">User username: user@user.com password: user</h1>
        <br/>
        <br/>
        <br/>
        <h1>Delete And update disabled to protect the database</h1>
      </section>
    </div>
  )
}

