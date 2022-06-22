<script lang="ts">
  import type { Answer, QuestionType } from "src/types";

  export let answer: Answer;
  export let questionId;
  export let selectedAnswer: number;
</script>

<div>
  <label>
    <input
      type="radio"
      bind:group={selectedAnswer}
      id={String(answer.value)}
      name={String(questionId)}
      value={answer.value}
    />
    {answer.text}
  </label>
</div>
