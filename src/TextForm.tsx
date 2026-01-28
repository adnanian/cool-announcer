import type { SubmitEvent } from "react";

const TextForm: React.FC = () => {
    const [textLines, setTextLines] = React.useState<string[]>([]);

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        // Add your submit logic here
    }

    function handleAdd() {
        // Add your add logic here
    }

    function handleRemove() {

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>ENTER TEXT HERE</h2>
                <div>

                </div>
                <button>ADD</button>
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    );
}

export default TextForm;