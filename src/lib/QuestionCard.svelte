<script lang="ts">
  import type { Question } from "src/types";
  import AnswerSingle from "./AnswerSingle.svelte";
  import ErrorMessage from "./ErrorMessage.svelte";
  import Button from "./Button.svelte";
  import SuccessMessage from "./SuccessMessage.svelte";
  import AnswerMultiple from "./AnswerMultiple.svelte";
  import areArraysEqualSets from "../utils/areArraysEqual";

  export let question: Question | null;
  export let fetchQuestion: () => void;
  let selectedAnswer: number | null = null;
  let selectedAnswers: number[] = [];
  let errorMessage: string | null = null;
  let successMessage: string | null = null;

  const handleSubmit = () => {
    console.log("submit");
    if (question.type === "single" && !selectedAnswer) {
      return (errorMessage = "Please select an answer.");
    }
    if (
      question.type === "single" &&
      !question.correctAnswers.includes(selectedAnswer)
    ) {
      return (errorMessage = "Incorrect. Please try again!");
    }
    if (
      question.type === "multiple" &&
      selectedAnswers.length !== question.correctAnswers.length
    ) {
      return (errorMessage = "Please select the correct number of answers.");
    }
    if (
      question.type === "multiple" &&
      !areArraysEqualSets(selectedAnswers, question.correctAnswers)
    ) {
      return (errorMessage = "Incorrect. Please try again!");
    }
    return (successMessage = "Correct. Congratulations!");
  };

  const handleNextQuestion = () => {
    console.log("next question");
    errorMessage = null;
    successMessage = null;
    fetchQuestion();
  };
</script>

<div>
  <h2>{question.question}</h2>
  {#if errorMessage && !successMessage}
    <ErrorMessage message={errorMessage} />
  {:else if successMessage}
    <SuccessMessage message={successMessage} />
  {/if}

  <form on:submit|preventDefault={handleSubmit}>
    <div class="container">
      {#each question.answers as answer}
        {#if question.type === "single"}
          <AnswerSingle {answer} questionId={question.id} bind:selectedAnswer />
        {/if}
        {#if question.type === "multiple"}
          <AnswerMultiple
            {answer}
            questionId={question.id}
            bind:selectedAnswers
          />
        {/if}
      {/each}
      <div class="button">
        {#if successMessage}
          <Button text="Next Question" onClick={handleNextQuestion} />
        {:else}
          <Button type="submit" text="Submit" />
        {/if}
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
