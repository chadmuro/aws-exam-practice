<script lang="ts">
  import Footer from "./lib/Footer.svelte";
  import QuestionCard from "./lib/QuestionCard.svelte";
  import store from "./store";

  const { loading, error, question, fetchQuestion } = store();
</script>

<div class="container">
  <main>
    <h1>AWS CCP Exam Practice Questions</h1>
    {#if $loading}
      <div><img src="/icons/loading.svg" alt="Loading" /></div>
    {:else if $error}
      <p>Sorry, an unexpected error has occurred.</p>
    {:else if $question}
      <QuestionCard question={$question} {fetchQuestion} />
    {/if}
  </main>
  <Footer />
</div>

<style>
  :global(body) {
    margin: 0;
    overflow-x: hidden;
  }
  .container {
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
  }

  main {
    flex: 1;
    margin-bottom: 2rem;
  }

  h1 {
    color: #ff9900;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 400;
  }

  img {
    height: 10rem;
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
  }
</style>
