import { writable } from "svelte/store";
import type { Question } from "./types";
import sanityClient from "@sanity/client";
import randomNumberGenerator from "./utils/randomNumberGenerator";

const sanity = sanityClient({
  apiVersion: "2021-10-21",
  projectId: import.meta.env.VITE_SANITY_STUDIO_API_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_STUDIO_API_DATASET,
  useCdn: false,
});

export default function() {
  const loading = writable(false);
  const error = writable(false);
  const question = writable<Question | null>(null);

  async function fetchQuestion() {
    loading.set(true);
    error.set(false);

  const questionId = randomNumberGenerator();

    try {
      const query = `*[_type == "question" && id == ${questionId}]{id, answers, correctAnswers, question, type}`;
      const data = await sanity.fetch(query);
      question.set(data[0]);
    } catch (err) {
      error.set(err.message);
    }
    loading.set(false);
  }

  fetchQuestion();

  return {loading, error, question, fetchQuestion};
}