<script lang="ts">
  import type { Answer } from "src/types";

  export let answer: Answer;
  export let questionId: number;
  export let selectedAnswer: number | null;
</script>

<label class="container">
  <input
    type="radio"
    bind:group={selectedAnswer}
    id={String(answer.value)}
    name={String(questionId)}
    value={answer.value}
  />
  {answer.text}
  <span class="checkmark" />
</label>

<style>
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 14px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    align-self: flex-start;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the radio button is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #146eb4;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .container .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }

  @media only screen and (max-width: 480px) {
    .container {
      font-size: 16px;
    }
  }
</style>
