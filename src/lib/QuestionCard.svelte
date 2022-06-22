<script lang="ts">
  import type { Question } from "src/types";
  import AnswerSelect from "./AnswerSelect.svelte";
  import Button from "./Button.svelte";

  export let question: Question;
  let selectedAnswer: number;
</script>

<div>
  <h2>{question.question}</h2>
  <form on:submit|preventDefault={() => console.log(selectedAnswer)}>
    {#each question.answers as answer}
      <AnswerSelect {answer} questionId={question.id} bind:selectedAnswer />
    {/each}
    <Button />
  </form>
</div>
