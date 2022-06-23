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
  const sampleQuestion2: Question = {
    id: 2,
    type: "multiple",
    question:
      "Which of the following can be used to protect against DDoS attacks? Choose 2 answers from the options given below.",
    answers: [
      { value: 1, text: "AWS EC2" },
      {
        value: 2,
        text: "AWS RDS",
      },
      {
        value: 3,
        text: "AWS Shield",
      },
      {
        value: 4,
        text: "AWS Shield Advanced",
      },
    ],
    correctAnswers: [3, 4],
  };
</script>

<main>
  <h1>AWS Certified Cloud Practicioner Exam Practice Questions</h1>
  <QuestionCard question={sampleQuestion2} />
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
