 <script>
  import '../global.css';
 </script> 

<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/Naruto">Naruto</a>
    <a href="/OneP">One Piece</a>
    <a href="/MyHero">My Hero</a>
</nav>

<main>

<slot />

</main>

<footer>
  &copy COPE
</footer>



<style>
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: aquamarine;
    padding: .10em;
  }
  </style>
  