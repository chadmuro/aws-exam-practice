<script lang="ts">
  export let message: string;
</script>

<div class="container">
  <img src="icons/exclamation.svg" alt="success" />
  <p>{message}</p>
</div>

<style>
  .container {
    max-width: 800px;
    width: fit-content;
    margin: 0 auto;
    background-color: #d4eed9;
    padding: 5px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }

  p {
    margin-left: 10px;
    font-size: 14px;
  }

  img {
    fill: #e57373;
    height: 25px;
    width: 25px;
  }
</style>
