class FilmItem {
    constructor(title, genre, availableCopies) {
        this.title = title;
        this.genre = genre;
        this.availableCopies = availableCopies;
        this.rentedCopies = 0;
    }

    rent() {
        if (this.availableCopies > 0) {
            this.availableCopies--;
            this.rentedCopies++;
            console.log(`Successfully rented ${this.title}. Enjoy the film!`);
        } else {
            console.log(`Sorry, ${this.title} is not available for rent.`);
        }
    }

    returnFilm() {
        if (this.rentedCopies > 0) {
            this.rentedCopies--;
            this.availableCopies++;
            console.log(`Thank you for returning ${this.title}.`);
        } else {
            console.log(`No rented copies of ${this.title} to return.`);
        }
    }

    displayInfo() {
        console.log(`${this.title} (${this.genre}) - Available: ${this.availableCopies} | Rented: ${this.rentedCopies}`);
    }
}
