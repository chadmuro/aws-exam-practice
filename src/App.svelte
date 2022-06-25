<script lang="ts">
  import QuestionCard from "./lib/QuestionCard.svelte";
  import store from "./store";

  const { loading, error, question, fetchQuestion } = store();
</script>

<main>
  <h1>AWS Certified Cloud Practicioner Exam Practice Questions</h1>
  {#if $loading}
    <p>Loading...</p>
  {:else if $error}
    <p>Sorry, an unexpected error has occurred.</p>
  {:else if $question}
    <QuestionCard question={$question} {fetchQuestion} />
  {/if}
</main>

<style>
  main {
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  h1 {
    color: #ff9900;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 400;
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
  }
</style>
