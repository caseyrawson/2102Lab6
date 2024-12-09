export const incrementScore = (state, setState) => {
    setState({
        ...state,
        score: state.score + 1, //right answer
        count: state.count + 1,
    });
    alert("You are correct!");
};

export const dontIncrementScore = (state, setState) => {
    setState({
        ...state,
        count: state.count + 1, //wrong answer
    });
    alert("Sorry - not correct");
};

export const handleSubmit = (state) => {
    const { score, count } = state;
    alert(`Total score: ${score}/${count}`);
};
