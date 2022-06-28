<script lang="ts">
  import { fly } from "svelte/transition";
  import type { Question } from "src/types";
  import AnswerSingle from "./AnswerSingle.svelte";
  import ErrorMessage from "./ErrorMessage.svelte";
  import Button from "./Button.svelte";
  import SuccessMessage from "./SuccessMessage.svelte";
  import AnswerMultiple from "./AnswerMultiple.svelte";
  import areArraysEqualSets from "../utils/areArraysEqual";
  import shuffleAnswers from "../utils/shuffleAnswers";

  export let question: Question | null;
  export let fetchQuestion: () => void;
  let selectedAnswer: number | null = null;
  let selectedAnswers: number[] = [];
  let errorMessage: string | null = null;
  let successMessage: string | null = null;
  let incorrectAnswer: number[] = [];

  const handleSubmit = () => {
    if (
      question.type === "single" &&
      question.correctAnswers[0] !== selectedAnswer
    ) {
      incorrectAnswer = [selectedAnswer];
      return (errorMessage = "Incorrect 😭. Please try again!");
    }
    if (
      question.type === "multiple" &&
      !areArraysEqualSets(selectedAnswers, question.correctAnswers)
    ) {
      incorrectAnswer = selectedAnswers;
      return (errorMessage = "Incorrect 😭. Please try again!");
    }
    return (successMessage = "Correct 🎉. Congratulations!");
  };

  const handleNextQuestion = () => {
    incorrectAnswer = [];
    errorMessage = null;
    successMessage = null;
    fetchQuestion();
  };

  const shuffledAnswers = shuffleAnswers(question.answers);
</script>

<div>
  <h2>{question.question}</h2>
  {#if errorMessage && !successMessage}
    {#key errorMessage && incorrectAnswer}
      <div in:fly={{ x: 200, duration: 500 }}>
        <ErrorMessage message={errorMessage} />
      </div>
    {/key}
  {:else if successMessage}
    <div in:fly={{ x: 200, duration: 500 }}>
      <SuccessMessage message={successMessage} />
    </div>
  {/if}

  <form on:submit|preventDefault={handleSubmit}>
    <div class="container">
      {#each shuffledAnswers as answer}
        {#if question.type === "single"}
          <AnswerSingle
            {answer}
            questionId={question.id}
            bind:selectedAnswer
            isCorrect={!!successMessage}
          />
        {/if}
        {#if question.type === "multiple"}
          <AnswerMultiple
            {answer}
            questionId={question.id}
            bind:selectedAnswers
            isCorrect={!!successMessage}
          />
        {/if}
      {/each}
      {#if successMessage}
        <div class="button">
          <Button text="Next Question" onClick={handleNextQuestion} />
        </div>
      {:else}
        <div class="button">
          <Button type="submit" text="Submit" />
        </div>
      {/if}
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
    margin-top: 1rem;
  }

  @media only screen and (max-width: 480px) {
    h2 {
      font-size: 1rem;
    }
  }
</style>
