<script lang="ts">
  import type { Question } from "src/types";
  import AnswerSelect from "./AnswerSelect.svelte";
  import Button from "./Button.svelte";

  export let question: Question;
  let selectedAnswer: number | null = null;
</script>

<div>
  <h2>{question.question}</h2>
  <form on:submit|preventDefault={() => console.log(selectedAnswer)}>
    <div class="container">
      {#each question.answers as answer}
        <AnswerSelect {answer} questionId={question.id} bind:selectedAnswer />
      {/each}
      <div class="button">
        <Button />
      </div>
    </div>
  </form>
</div>

<style>
  form {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 800px;
  }

  .button {
    margin-top: 2rem;
  }
</style>
