function PromptForm({ type }:{ type:string }) {
  return (
    <section>
      <h1>{type} Post</h1>
      <form>
        <label>
          Title:
          <input type="text" placeholder="Create a javascript query..." />
        </label>
        <label>
          Prompt:
          <textarea placeholder="Write your prompt here..."></textarea>
        </label>
        <label>
          Tags:
          <input type="text" placeholder="#tag" />
        </label>
      </form>
    </section>
  );
}

export default PromptForm;
