<script lang="ts">
  import type { Question } from "src/types";
  import AnswerSelect from "./AnswerSelect.svelte";
  import ErrorMessage from "./ErrorMessage.svelte";
  import Button from "./Button.svelte";
  import SuccessMessage from "./SuccessMessage.svelte";

  export let question: Question;
  let selectedAnswer: number | null = null;
  let errorMessage: string | null = null;
  let successMessage: string | null = null;

  const onSubmit = () => {
    console.log("submit");
    if (!selectedAnswer) {
      return (errorMessage = "Please select an answer.");
    }
    if (!question.correctAnswers.includes(selectedAnswer)) {
      return (errorMessage = "That is incorrect. Try again!");
    }
    return (successMessage = "That is correct. Congratulations!");
  };
</script>

<div>
  <h2>{question.question}</h2>
  {#if errorMessage && !successMessage}
    <ErrorMessage message={errorMessage} />
  {:else if successMessage}
    <SuccessMessage message={successMessage} />
  {/if}

  <form on:submit|preventDefault={onSubmit}>
    <div class="container">
      {#each question.answers as answer}
        <AnswerSelect {answer} questionId={question.id} bind:selectedAnswer />
      {/each}
      <div class="button">
        <Button disabled={!!successMessage} />
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

  @media only screen and (max-width: 480px) {
    h2 {
      font-size: 1rem;
    }
  }
</style>
