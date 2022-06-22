<script lang="ts">
  import QuestionCard from "./lib/QuestionCard.svelte";
  import type { Question } from "./types";

  const sampleQuestion: Question = {
    id: 1,
    type: "single",
    question:
      "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
    answers: [
      { value: 1, text: "Amazon EC2 costs are billed on a monthly basis." },
      {
        value: 2,
        text: "Users retain full administrative access to their Amazon EC2 instances.",
      },
      {
        value: 3,
        text: "Amazon EC2 instances can be launched on demand when needed.",
      },
      {
        value: 4,
        text: "Users can permanently run enough instances to handle peak workloads.",
      },
    ],
    correctAnswers: [3],
  };
</script>

<main>
  <h1>AWS Certified Cloud Practicioner Exam Practice Questions</h1>
  <QuestionCard question={sampleQuestion} />
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
    font-size: 4rem;
    font-weight: 400;
  }
</style>
