<script lang="ts">
  export let disabled: boolean = false;
</script>

<button type="submit" {disabled}>Submit</button>

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
