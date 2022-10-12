getAnimals = async() => {
    await fetch('/api')
      .then (res => res.json())
      .then(animals => this.setState({animals}))   
  }

