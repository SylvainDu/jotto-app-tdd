export default function CongratsComponent(props: { success: boolean }) {
    if (props.success) {
        return (
            <div data-test="congratsComponent">
                <span data-test="congratsMessageComponent">
                    Congratulations! you guessed the word!
                </span>
            </div>
        );
    } else {
        return (
            <div data-test="congratsComponent"/>
        )
    }
}
