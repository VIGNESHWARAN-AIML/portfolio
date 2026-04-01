* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: #0f172a;
    color: white;
    scroll-behavior: smooth;
}

/* NAVBAR */
nav {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    background: #020617;
    position: sticky;
    top: 0;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 20px;
}

nav a {
    color: white;
    text-decoration: none;
}

/* HERO */
.hero {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #0f172a, #1e293b);
}

.hero span {
    color: #38bdf8;
}

/* SECTIONS */
section {
    padding: 60px 20px;
    text-align: center;
}

/* GRID */
.grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.card {
    background: #1e293b;
    padding: 20px;
    margin: 10px;
    width: 200px;
    border-radius: 10px;
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-10px) scale(1.05);
    background: #334155;
}

/* FOOTER */
footer {
    text-align: center;
    padding: 20px;
    background: #020617;
}

/* RESPONSIVE */
@media(max-width:768px){
    nav {
        flex-direction: column;
        text-align: center;
    }
}
