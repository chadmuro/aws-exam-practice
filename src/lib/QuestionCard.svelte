<script>
  export let question;
  export let answers;
</script>

<div>
  <h2>{question}</h2>
  {#each answers as answer}
    <div>{answer.text}</div>
  {/each}
</div>
