<script lang="ts">
  export let type = "button";
  export let text = "";
  export let onClick: () => void | null = null;
</script>

<button {type} on:click={onClick}>{text}</button>

<style>
  button {
    background-color: #232f3e;
    color: #febd69;
    border: none;
    padding: 10px 20px;
    font-size: 1.5rem;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
