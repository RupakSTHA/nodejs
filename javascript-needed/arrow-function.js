const event = {
    name: "Rupak",
    guestList: ["Sanyog", "Nitesh", "Binod"],
    printGuestList() {
        //this use it object
        this.guestList.forEach((guest)=>{
          //inside this arrow it uses its paren object this so we can use this.name
            console.log(guest + " is attending " + this.name)
        })
    }
}
event.printGuestList();
