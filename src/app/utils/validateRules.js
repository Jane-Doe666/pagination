export const isRequired = (value) =>
    Boolean(value);
// value.trim()

export const validate = (values) => {
    const errors = {};
    for (const i in values) {
        const hasError = !isRequired(values[i]);
        console.log("i", values);

        if (hasError) {
            errors[i] = `field ${i} has to be filled out`;
        }
    }
    return errors;
};
