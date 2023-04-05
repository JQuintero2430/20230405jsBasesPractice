
export default function Card({ name, year, genre, stock }) {
    return `
    <div class="card my-2">
    <div class="card-body">
      <h5 class="card-title">${name.toUpperCase()}</h5>
      <p class="card-text">${year} - ${genre} </p>
      <a href="#" class="btn ${
        stock > 0 ? "btn-primary" : "btn-danger disabled"
      }">Go somewhere</a>
    </div>
  </div>
    `;
  }

