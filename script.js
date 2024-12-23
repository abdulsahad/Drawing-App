@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

body {
  background-color: #f5f5f5;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  margin: 0;
}

canvas {
  border: 10px solid rgb(21, 22, 23);
  margin-top: 50px;
  width: 100%;
  max-width: 1500px; /* Default width */
}

.toolbox {
  background-color: rgb(14, 99, 99);
  border: 1px solid rgb(12, 81, 85);
  display: flex;
  width: 100%;
  max-width: 1520px; /* Default width */
  padding: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.toolbox > * {
  background-color: #fff;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  height: 50px;
  width: 50px;
  margin: 0.25rem;
  padding: 0.25rem;
  cursor: pointer;
}

.toolbox > *:last-child {
  margin-left: auto;
}

#clear {
  width: 150px;
}

#increase, #decrease {
  border-radius: 50px;
}

#size {
  width: 100px;
}

#color {
  margin-left: 20px;
}

/* Mobile adjustments */
@media screen and (max-width: 768px) {
  canvas {
    width: 90%; /* Reduce canvas width */
    max-width: 1000px; /* Set max width for mobile */
  }

  .toolbox {
    width: 100%;
    max-width: 100%; /* Adjust toolbox width */
  }

  .toolbox > * {
    font-size: 1.5rem; /* Reduce font size for smaller screens */
    width: 40px; /* Smaller button sizes */
    height: 40px; /* Smaller button sizes */
  }

  #clear {
    width: 120px; /* Adjust clear button width */
  }

  #size {
    width: 80px;
  }
}
